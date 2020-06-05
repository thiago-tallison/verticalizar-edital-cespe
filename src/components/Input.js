import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import "./Input.css";

export const Input = (props) => {
  const handleChange = (event) => {
    props.onInputChange(event.target.value);
  };

  const textAreaRef = useRef(null);

  const copiar = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-by-one ten columns">
          <div className="input-area">
            <label className="input-label" htmlFor="">
              {props.label}
            </label>
            <textarea
              className="input u-full-width"
              name=""
              id=""
              rows="10"
              placeholder="Cole as disciplinas do edital aqui. Cuidado para não inserir as páginas do documento ao copiar o texto."
              value={props.value}
              onChange={handleChange}
              ref={textAreaRef}
            ></textarea>
            {props.copy ? (
              <FontAwesomeIcon
                onClick={copiar}
                className="icone-copiar"
                icon={faCopy}
              />
            ) : null}

            {props.deleteAll ? (
              <FontAwesomeIcon
                className="icone-apagar-tudo"
                icon={faTrashAlt}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
