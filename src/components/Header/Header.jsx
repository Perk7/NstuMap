import React from 'react'
import './styles.sass'

export default function Header() {
  return (
    <>
    <header className='header__block'>
        <img className='header__logo' src="logo.png" alt="" />
        <h1 className='header__title'>Интерактивная карта</h1>
    </header>
    <div className="header__landscape_active">
          Переверните телефон для доступа
          <img src="rotate.svg" alt="" />
    </div>
    </>
  )
}