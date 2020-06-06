import React from 'react'

import './styles.css'

interface Props{
  setValue: Function;
  label: string;
  type: string;
  placeholder?: string;
}

function Input({ setValue, label, type, placeholder } : Props) {
  return (
    <div className="input-field">
      <label htmlFor="input-field">{label}</label>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input