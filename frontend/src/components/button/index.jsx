import React from 'react';
import style from './button.module.css';

export const Button = ({ onClick, label }) => {
  return (
    <div>
      <button
        className={style.button}
        onClick={onClick}
      >{label}</button>
    </div>
  )
}