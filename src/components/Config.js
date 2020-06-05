import React from "react";

import "./Config.css";

export default class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = { espacamento: "3", semNumeracao: false };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(event) {
    const target = event.target;
    const name = target.name;
    const value = name === "semNumeracao" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleOnClick() {
    this.props.handleOnClick(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-by-one ten columns relative">
            <label className="sem-numeracao" htmlFor="sem-numeracao">
              <input
                onChange={this.handleOnChange}
                type="checkbox"
                name="semNumeracao"
                id="sem-numeracao"
              />
              <span className="label-body">Sem numeração</span>
            </label>
            <select
              name="espacamento"
              id="numero-espacos"
              value={this.state.espacamento}
              onChange={this.handleOnChange}
            >
              <option value="2">2 Espaços</option>
              <option value="3">3 Espaços</option>
              <option value="4">4 Espaços</option>
            </select>
            <button
              onClick={this.handleOnClick}
              className="processar button-dark"
            >
              Processar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
