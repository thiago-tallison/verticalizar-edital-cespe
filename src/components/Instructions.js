import React from "react";

import "./Instructions.css";

export const Instructions = () => {
  return (
    <div className="Instructions">
      <div className="container">
        <div className="row">
          <div className="offset-by-one ten columns margin-top">
            <h1>Instruções</h1>
            <ol className="instrucoes">
              <li>
                Copie todas as disciplinas para o cargo desejado do edital e
                cole-as no campo <strong>DISCIPLINAS DO EDITAL</strong>;
                <ul className="subitem">
                  <li>
                    <strong>Obs:</strong> caso a seleção inclua o número da
                    página do documento, considere excluí-la antes de processar
                    o texto. Este comportamento é comum em documentos do tipo
                    PDF. Além disso, alguns documentos podem remover a seleção,
                    por isso tenha cuidado ao fazer isto.
                  </li>
                </ul>
              </li>
              <li>
                Configurações;
                <ul className="subitem">
                  <li>
                    <strong>Sem numeração:</strong> marque esta caixa se não
                    deseja numeração em cada tópico.
                  </li>
                  <li>
                    <strong>Espaçamento:</strong> a quantidade de espaços para
                    identar os subtópicos.
                  </li>
                </ul>
              </li>
              <li>Clique em processar;</li>
              <li>
                Clique no botão copiar - canto superior direito - do campo{" "}
                <strong> RESULTADO</strong>;
              </li>
            </ol>
          </div>
          <div className="divisor offset-by-one ten columns margin-top"></div>
          <div className="offset-by-one ten columns margin-top">
            <h1>Obeservação importante</h1>
            <p className="observacao-importante">
              O algoritmo do site funciona baseado em um padão de formatação de
              edital. Além disso, as bancas comumente cometem erros que fogem
              desses padrões. Um erro muito comum, por exemplo: não separar dois
              tópicos usando um ponto final (.). Esse erro de digitação
              compromeete o perfeito funcionamento do algoritmo, o qual pode não
              formatar o texto como o esperado. Assim, recomendamos que confira
              o resultado obtido antes de usá-lo. Bons estudos, concurseiro
              <span role="img" aria-label="emojis">
                📚☕💪
              </span>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
