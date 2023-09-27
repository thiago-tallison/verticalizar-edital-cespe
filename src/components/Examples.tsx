import React, { useState } from "react";

import "./Examples.css";
import examples from "../utils/examples";

export const Examples = (props) => {
  const [selectedOption, setSelectedOption] = useState("Selecione");

  const getOption = ([value, label]) => {
    return (
      <option key={"op-" + value} value={label}>
        {value}
      </option>
    );
  };

  const options = [];
  for (let el of Object.entries(examples)) {
    const option = getOption(el);
    options.push(option);
  }

  const handleOnClose = () => {
    props.onClose(selectedOption);
  };

  return (
    <div className={`custom-model-main ${props.show ? "model-open" : ""}`}>
      <div className="custom-model-inner">
        <div onClick={handleOnClose} className="close-btn">
          ×
        </div>
        <div className="custom-model-wrap">
          <div className="pop-up-content-wrap">
            <h5>Selectione um edital</h5>
            <select
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
              name="edital"
              id="edital"
            >
              <option value="Selecione">Selecione</option>
              {options}
            </select>
            <button onClick={handleOnClose} className="button-ok">
              Ok
            </button>
          </div>
        </div>
      </div>
      <div onClick={handleOnClose} className="bg-overlay"></div>
    </div>
  );
};
