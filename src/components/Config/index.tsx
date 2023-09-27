import React, { useState } from "react";

import {
  Container,
  Row,
  TenColumns,
  NoNumeration,
  Tabing,
  Proccess,
} from "./styles";

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
    <Container>
      <Row>
        <TenColumns>
          <NoNumeration>
            <label htmlFor="sem-numeracao">
              <input
                onChange={handleOnChangeNoNumeration}
                type="checkbox"
                id="sem-numeracao"
              />
              <span className="label-body">Sem numeração</span>
            </label>
          </NoNumeration>

          <Tabing>
            <select
              id="numero-espacos"
              value={tabing}
              onChange={handleOnChangeTabing}
            >
              <option value="2">2 Espaços</option>
              <option value="3">3 Espaços</option>
              <option value="4">4 Espaços</option>
            </select>
          </Tabing>
          <Proccess onClick={handleOnClickProccess}>Processar</Proccess>
        </TenColumns>
      </Row>
    </Container>
  );
}

export default Config;
