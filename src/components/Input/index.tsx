import React from 'react'
import { Sfield } from './Input.styles'

type InputProps = {
  type: string,
  name: string,
  placeholder: string,
  label: string,
  value?: string,
  $isSelect?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input( {label, $isSelect, ...props} : InputProps) {
  return (
    <>
    <Sfield isSelect={$isSelect}>
        <span>{label}</span>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
    </Sfield>
    </>
  )
}
