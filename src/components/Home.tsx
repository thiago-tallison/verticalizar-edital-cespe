import React, { useState } from 'react'
import './Home.css'
import { Examples } from './Examples'
import { Textarea } from './Input'
import { DownloadEditalButtons } from './DownloadEditalButtons'
import Config from './Config/index'
import format from '../utils/format'
import { textToCSV } from '../utils/converter'

interface HomeProps {
  shouldShowExamples: boolean
  handleOnClose: () => void
}

function Home({ handleOnClose, shouldShowExamples }: HomeProps) {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [formatedText] = useState<string>('')

  const onClose = (option: string) => {
    setInput(option !== 'Selecione' ? option : '')
    handleOnClose()
  }

  const handleOnClickProcessar = (configState: any) => {
    const { tabing: espacamento, noNumeration: semNumeracao } = configState
    const formattedText = format({
      texto: input,
      numeracao: semNumeracao,
      espacamento,
    })
    setOutput(formattedText)
  }

  const downloadAsCsv = () => {
    const csvData = textToCSV(output)
    if (csvData === '') return
    const element = document.createElement('a')
    element.href =
      'data:text/plain;charset=utf-8,' + encodeURIComponent(csvData)
    element.setAttribute('download', 'Edital.csv')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="w-full">
      <Examples onClose={onClose} show={shouldShowExamples} />
      <div className="flex flex-col mb-10">
        <Textarea
          placeholder="Cole as disciplinas do edital aqui. Cuidado para não inserir as páginas do documento."
          label="Disciplinas do edital"
          deleteAll={true}
          id="input"
        />

        <Config handleOnClick={handleOnClickProcessar} />
      </div>

      <Textarea
        id="output"
        placeholder={formatedText}
        readOnly
        label="Resultado"
        copy={true}
        deleteAll={true}
      />

      <div className="container">
        <div className="row">
          <div className="offset-by-one ten columns download-buttons">
            <DownloadEditalButtons handleOnClick={downloadAsCsv} label=".csv" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
