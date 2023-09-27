import React from 'react'
import { Button } from './ui/button'

type DownloadEditalButtonsProps = {
  handleOnClick: () => void
  label: string
}

export function DownloadEditalButtons({
  handleOnClick,
  label,
}: DownloadEditalButtonsProps) {
  return (
    <Button variant="outline" onClick={handleOnClick}>
      Download {label}
    </Button>
  )
}
