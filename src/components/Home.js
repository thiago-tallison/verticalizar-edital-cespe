import React, { Component } from "react";

import "./Home.css";

import { Examples } from "./Examples";
import { Input } from "./Input";
import { DownloadEditalButtons } from "./DownloadEditalButtons";
import Config from "./Config";

import format from "../utils/format";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      output: "",
      shouldShowExamples: this.props.shouldShowExamples,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onOutputChange = this.onOutputChange.bind(this);
    this.handleOnClickProcessar = this.handleOnClickProcessar.bind(this);
    this.downloadAsCsv = this.downloadAsCsv.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose(option) {
    this.setState({ input: option !== "Selecione" ? option : "" });
    this.props.handleOnClose();
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
        <Examples onClose={this.onClose} show={this.props.shouldShowExamples} />
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
          deleteAll={true}
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
