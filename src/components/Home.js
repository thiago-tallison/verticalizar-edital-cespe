import React, { Component } from "react";

import "./Home.css";

import { Nav } from "./Nav";
import { Input } from "./Input";
import { DownloadEditalButtons } from "./DownloadEditalButtons";
import Config from "./Config";

import format from "../utils/format";
import examples from "../utils/examples";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: examples.prf,
      output: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onOutputChange = this.onOutputChange.bind(this);
    this.handleOnClickProcessar = this.handleOnClickProcessar.bind(this);
    this.downloadAsCsv = this.downloadAsCsv.bind(this);
  }

  onInputChange(value) {
    this.setState({ input: value });
  }

  onOutputChange(value) {
    this.setState({ output: value });
  }

  handleOnClickProcessar(configState) {
    const { espacamento, semNumeracao } = configState;
    const formatedText = format({
      texto: this.state.input,
      numeracao: semNumeracao,
      espacamento,
    });
    this.setState({ output: formatedText });
  }

  downloadAsCsv() {
    console.log("[App.js] downloadAsCsv():");
  }

  render() {
    return (
      <div className="Home">
        <Input
          copyText={() => {}}
          value={this.state.input}
          onInputChange={this.onInputChange}
          label={"disciplinas do edital"}
          deleteAll={true}
        />
        <Config handleOnClick={this.handleOnClickProcessar} />
        <Input
          copyText={this.copyText}
          value={this.state.output}
          onInputChange={this.onOutputChange}
          formatedText={this.state.formatedText}
          label={"resultado"}
          copy={true}
        />
        <div className="container">
          <div className="row">
            <div className="offset-by-one ten columns download-buttons">
              <DownloadEditalButtons
                handleOnClick={this.downloadAsCsv}
                label={".csv"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
