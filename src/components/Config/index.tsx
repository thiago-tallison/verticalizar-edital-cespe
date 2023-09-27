import React, { useState } from "react";

import {
  Container,
  Row,
  TenColumns,
  NoNumeration,
  Tabing,
  Proccess,
} from "./styles";
import { Select } from "../select";

type ConfigProps = {
  handleOnClick: Function;
};

function Config({ handleOnClick }: ConfigProps) {
  const [tabing, setTabing] = useState(3);
  const [noNumeration, setNoNumeration] = useState(false);

  function handleOnChangeNoNumeration(event) {
    setNoNumeration(!noNumeration);
  }

  function handleOnChangeTabing({ target }) {
    const { value } = target;
    setTabing(value);
  }

  function handleOnClickProccess() {
    handleOnClick({ tabing, noNumeration });
  }

  return (
    <div>
      <Select
        id="numero-espacos"
        label="Espaçamento"
        items={[
          { value: "2", label: "2 Espaços" },
          { value: "3", label: "3 Espaços" },
          { value: "4", label: "4 Espaços" },
        ]}
        placeholder="Selecione"
      />

      <label htmlFor="sem-numeracao">
        <input
          onChange={handleOnChangeNoNumeration}
          type="checkbox"
          id="sem-numeracao"
        />
        <span className="label-body">Sem numeração</span>
      </label>
    </div>
  );
}

export default Config;
