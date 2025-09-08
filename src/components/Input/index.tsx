import React from 'react'
import { Sfield } from './Input.styles'

type InputProps = {
    type: string,
    name: string,
    placeholder: string,
    label: string
    value: string
}

export default function Input( {label, ...props} : InputProps) {
  return (
    <Sfield>
        {label}
        <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        />
    </Sfield>
  )
}
