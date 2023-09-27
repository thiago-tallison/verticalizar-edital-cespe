import React from 'react'

import { Separator } from '@/components/ui/separator'

export function Instructions() {
  return (
    <div className="w-full pt-6">
      <div className="">
        <h1 className="text-4xl">Instruções</h1>
        <p className="my-4">
          1. Copie todas as disciplinas para o cargo desejado do edital e
          cole-as no campo disciplinas do edital
        </p>
        <p className="my-4 pl-6">
          <strong>Obs:</strong> caso a seleção inclua o número da página do
          documento, considere excluí-la antes de processar o texto. Este
          comportamento é comum em documentos do tipo PDF.
        </p>

        <p className="my-4">2. Configurações</p>

        <p className="my-4 pl-6">
          <strong>Sem numeração:</strong> marque esta caixa se não deseja
          numeração em cada tópico.
        </p>
        <p className="my-4 pl-6">
          <strong>Espaçamento:</strong> a quantidade de espaços para identar os
          subtópicos.
        </p>

        <p className="my-4">3. Clique em processar</p>

        <p className="my-4">
          4. Clique no botão copiar - canto superior direito - do campo
          RESULTADO;
        </p>
      </div>

      <Separator className="my-10" />

      <h1 className="text-4xl">Observações importantes</h1>
      <p className="my-4">
        O algoritmo do site funciona baseado em um padão de formatação de
        edital. Além disso, as bancas comumente cometem erros de digitação que
        fogem desses padrões. Por exemplo: não separar dois tópicos usando um
        ponto final. Esse erro de digitação compromete o perfeito funcionamento
        do algoritmo, o qual pode não formatar o texto conforme o esperado.
        Assim, recomendamos que confira o resultado obtido. Bons estudos,
        concurseiro{' '}
        <span role="img" aria-label="emojis">
          📚☕💪
        </span>
      </p>
    </div>
  )
}
