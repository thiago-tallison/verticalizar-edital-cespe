import React, { Component } from "react";

import "./Home.css";

import { Examples } from "./Examples";
import { Input } from "./Input";
import { DownloadEditalButtons } from "./DownloadEditalButtons";
import Config from "./Config/index";

import format from "../utils/format";
import { textToCSV } from "../utils/converter";

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
    const { tabing: espacamento, noNumeration: semNumeracao } = configState;
    const formatedText = format({
      texto: this.state.input,
      numeracao: semNumeracao,
      espacamento,
    });
    this.setState({ output: formatedText });
  }

  downloadAsCsv() {
    const csvData = textToCSV(this.state.output);
    if (csvData === "") return;
    var element = document.createElement("a");
    element.href =
      "data:text/plain;charset=utf-8," + encodeURIComponent(csvData);
    element.setAttribute("download", "Edital.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  render() {
    return (
      <div>
        <Examples onClose={this.onClose} show={this.props.shouldShowExamples} />
        <Input
          copyText={() => {}}
          value={this.state.input}
          placeholder="Cole as disciplinas do edital aqui. Cuidado para não inserir as páginas do documento."
          onInputChange={this.onInputChange}
          label={"disciplinas do edital"}
          deleteAll={true}
        />
        <Config handleOnClick={this.handleOnClickProcessar} />
        <Input
          copyText={this.copyText}
          value={this.state.output}
          placeholder={""}
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
