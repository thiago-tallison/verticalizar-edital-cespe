import "./App.css";

import { Nav } from "./Nav";
import { Input } from "./Input";
import { DownloadEditalButtons } from "./DownloadEditalButtons";
import Config from "./Config";
import format from "../utils/format";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    const examples = {
      a: `21.2.2 CONHECIMENTOS BÁSICOS (PARA TODOS OS CARGOS) LÍNGUA PORTUGUESA: 1 Compreensão e interpretação de textos. 2 Tipologia textual. 3 Ortografia oficial. 4 Acentuação gráfica. 5 Emprego das classes de palavras. 6 Emprego/correlação de tempos e modos verbais 7 Emprego  do  sinal  indicativo  de  crase.  8  Sintaxe  da oração  e  do  período.  9  Pontuação.  10  Concordância nominal   e   verbal.   11   Regência   nominal   e   verbal.   12 Significação   das   palavras.   13   Redação   de Correspondências oficiais (Manual de Redação da Presidência da República). 13.1 Adequação da linguagemao tipo de documento. 13.2 Adequação do formato do texto ao gênero. ATUALIDADES: 1 Sistema de justiça criminal. 2 Sistema prisional brasileiro. 3 Políticas públicas de segurança pública e cidadania. NOÇÕES DE ÉTICA NO SERVIÇO PÚBLICO: 1 Ética e moral. 2 Ética, princípios e valores. 3 Ética e democracia: exercício da cidadania. 4 Ética e função pública. 5 Ética no Setor Público. 5.1 Código de Ética Profissional do Serviço Público – Decreto nº 1.171/1994. 5.2 Regime disciplinar na Lei nº 8.112/1990: deveres e proibições, acumulação,  responsabilidades,  penalidades.  5.3  Lei  nº  8.429/1992:  Improbidade  Administrativa.  5.4 Processo   administrativo   disciplinar.   Espécies   de   Procedimento   Disciplinar:   sindicâncias   investigativa,patrimonial e acusatória; processo administrativo disciplinar (ritos ordinário e sumário). Fases: instauração,
           27 inquérito  e  julgamento.  Comissão  Disciplinar:  requisitos,  suspeição,  impedimento  e  prazo  para  conclusão dos trabalhos (prorrogação e recondução). NOÇÕES DE DIREITOS HUMANOS E PARTICIPAÇÃO SOCIAL:  1  Declaração  Universal  dos  Direitos  Humanos (Resolução  217-A  (III)  –  da  Assembleia  Geral  das  Nações  Unidas,  1948).  2  Direitos  Humanos  e  Direitos Fundamentais  na  Constituição  Federal  de  1988  (arts.  5º  ao  15).  3  Regras  mínimas  da  ONU  para  o tratamento  de  pessoas  presas.  4  Programa  Nacional  de  Direitos  Humanos  (Decreto  nº  7.037/2009).  5 Política Nacional de Participação Social (Decreto nº 8.243/2014). 6 Conselho Nacional de Política Criminal e Penitenciária  (arts.  62  a  64  da  Lei  de  Execução  Penal).  7  Conselhos  Penitenciários  (arts.  69  e  70  da  Lei  de Execução Penal). 8 Conselhos da Comunidade (arts. 80 e 81 da Lei de Execução Penal).`,
      b: `LÍNGUA PORTUGUESA: 1 Compreensão e interpretação de textos de gêneros variados. 1.1.3 teste de subtopico. 1.1.1.1.1.1 teste. 2 Reconhecimento de tipos e gêneros textuais. 3 Domínio da ortografia oficial. 4 Domínio dos mecanismos de coesão textual. 4.1 Emprego de elementos de referenciação, substituição e repetição, de conectores e de outros elementos de sequenciação textual. 4.2 Emprego de tempos e modos verbais. 5 Domínio da estrutura morfossintática do período. 5.1 Emprego das classes de palavras. 5.2 Relações de coordenação entre orações e entre termos da oração. 5.3 Relações de subordinação entre orações e entre termos da oração. 5.4 Emprego dos sinais de pontuação. 5.5 Concordância verbal e nominal. 5.6 Regência verbal e nominal. 5.7 Emprego do sinal indicativo de crase. 5.8 Colocação dos pronomes átonos. 6 Reescrita de frases e parágrafos do texto. 6.1 Significação das palavras. 6.2 Substituição de palavras ou de trechos de texto. 6.3 Reorganização da estrutura de orações e de períodos do texto. 6.4 Reescrita de textos de diferentes gêneros e níveis de formalidade. 7 Correspondência oficial (conforme Manual de Redação da Presidência da República). 7.1 Adequação da linguagem ao tipo de documento. 7.2 Adequação do formato do texto ao gênero. NOÇÕES DE INFORMÁTICA: 1 Noções de sistema operacional (ambientes Linux e Windows). 2 Edição de textos, planilhas e apresentações (ambientes Microsoft Office e BrOffice). 3 Redes de computadores. 3.1 Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet. 3.2 Programas de navegação (Microsoft Internet Explorer, Mozilla Firefox e Google Chromes). 3.3 Programas de correio eletrônico (Outlook Express e Mozilla Thunderbird). 3.4 Sítios de busca e pesquisa na Internet. 3.5 Grupos de discussão. 3.6 Redes sociais. 3.7 Computação na nuvem (cloud computing). 4 Conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas. 5 Segurança da informação. 5.1 46 Procedimentos de segurança. 5.2 Noções de vírus, worms e pragas virtuais. 5.3 Aplicativos para segurança (antivírus, firewall, anti-spyware etc.). 5.4 Procedimentos de backup. 5.5 Armazenamento de dados na nuvem (cloud storage). NOÇÕES DE ADMINISTRAÇÃO: 1 Noções de administração. 1.1 Abordagens clássica, burocrática e sistêmica da administração. 1.2 Evolução da administração pública no Brasil após 1930; reformas administrativas; a nova gestão pública. 2 Processo administrativo. 2.1 Funções da administração: planejamento, organização, direção e controle. 2.2 Estrutura organizacional. 2.3 Cultura organizacional. 3 Gestão de pessoas. 3.1 Equilíbrio organizacional. 3.2 Objetivos, desafios e características da gestão de pessoas. 3.3 Comportamento organizacional: relações indivíduo/organização, motivação, liderança, desempenho. 4 Gestão da qualidade e modelo de excelência gerencial. 4.1 Principais teóricos e suas contribuições para a gestão da qualidade. 4.2 Ciclo PDCA. 4.3 Ferramentas de gestão da qualidade. 4.4 Modelo do gespublica. 5 Noções de gestão de processos: técnicas de mapeamento, análise e melhoria de processos. 6 Noções de administração de recursos materiais. 7 Noções de arquivologia. 7.1 Arquivística: princípios e conceitos. 7.2 Legislação arquivística. 7.3 Gestão de documentos. 7.3.1 Protocolos: recebimento, registro, distribuição, tramitação e expedição de documentos. 7.3.2 Classificação de documentos de arquivo. 7.3.3 Arquivamento e ordenação de documentos de arquivo. 7.3.4 Tabela de temporalidade de documentos de arquivo. 7.4 Acondicionamento e armazenamento de documentos de arquivo. 7.5 Preservação e conservação de documentos de arquivo. 8 Ética no serviço público: comportamento profissional, atitudes no serviço, organização do trabalho, prioridade em serviço. RACIOCÍNIO LÓGICO: 1 Estruturas lógicas. 2 Lógica de argumentação: analogias, inferências, deduções e conclusões. 3 Lógica sentencial (ou proposicional). 3.1 Proposições simples e compostas. 3.2 Tabelasverdade. 3.3 Equivalências. 3.4 Leis de De Morgan. 3.5 Diagramas lógicos. 4 Lógica de primeira ordem. 5 Princípios de contagem e probabilidade. 6 Operações com conjuntos. 7 Raciocínio lógico envolvendo problemas aritméticos, geométricos e matriciais. ATUALIDADES: 1 Tópicos relevantes e atuais de diversas áreas, tais como segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia.`,
    };

    this.state = {
      input: examples.a,
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
      <div className="App">
        <Nav />
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
