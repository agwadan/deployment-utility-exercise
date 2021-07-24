import React from 'react';
import style from './input.module.css';

export const Input = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        className={style.input}
        type='url'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}