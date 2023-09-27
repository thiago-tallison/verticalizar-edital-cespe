import React, { useState } from 'react'
import { Select } from '../select'
import { Checkbox } from '../checkbox'
import { Button } from '../ui/button'

type ConfigProps = {
  handleOnClick: () => void
}

function Config({ handleOnClick }: ConfigProps) {
  const [tabing, setTabing] = useState(3)
  const [noNumeration, setNoNumeration] = useState(false)

  function handleOnChangeNoNumeration(event) {
    setNoNumeration(!noNumeration)
  }

  function handleOnChangeTabing({ target }) {
    const { value } = target
    setTabing(value)
  }

  function handleOnClickProccess() {
    handleOnClick({ tabing, noNumeration })
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      <Checkbox id="sem-numeracao" label="Sem numeração" />

      <Select
        id="numero-espacos"
        label="Espaçamento"
        items={[
          { value: '2', label: '2 Espaços' },
          { value: '3', label: '3 Espaços' },
          { value: '4', label: '4 Espaços' },
        ]}
        placeholder="Selecione"
      />

      <Button onClick={handleOnClickProccess}>Processar</Button>
    </div>
  )
}

export default Config
