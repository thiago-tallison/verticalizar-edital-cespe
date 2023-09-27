import React from 'react'

import {
  Select as ChadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SelectItemType = {
  value: string
  label: string
}

type Props = {
  id: string
  label: string
  placeholder: string
  items: SelectItemType[]
}

export function Select({ items, placeholder }: Props) {
  return (
    <ChadSelect>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ChadSelect>
  )
}
