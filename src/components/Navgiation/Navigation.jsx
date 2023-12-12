import React, { useState } from 'react'
import './styles.sass'
import {data, dormitories, studies, other} from '../../sourceData'
import { useAppContext } from '../../ContextProvider'

export default function Navigation() {
  const [dormitoriesList, setDormitoriesList] = useState(false)
  const [studyList, setStudyList] = useState(false)
  const [otherList, setOtherList] = useState(false)

  const appContext = useAppContext()

  function handleClick(id) {
    appContext.toggleObj(id)
    appContext.toggleClose()
  }

  return (
    <nav className='navigation__container'>
        <div onClick={() => setDormitoriesList(state => !state)} className="navigation__section">Общежития</div>
          <ul className={`navigation__list ${!dormitoriesList && 'navigation__list__not-active'}`}>
          {dormitories.map(key => (
              <li onClick={() => handleClick(key)} className={`navigation__list__item ${key === appContext.obj && !appContext.closed ? 'navigation__list__item_active' : ''}`}>{data[key].name}</li>
          ))} 
          </ul>
        <div onClick={() => setStudyList(state => !state)} className="navigation__section">Учебные корпуса</div>
          <ul className={`navigation__list ${!studyList && 'navigation__list__not-active'}`}>
          {studies.map(key => (
              <li onClick={() => handleClick(key)} className={`navigation__list__item ${key === appContext.obj && !appContext.closed ? 'navigation__list__item_active' : ''}`}>{data[key].name}</li>
          ))}
          </ul>
        <div onClick={() => setOtherList(state => !state)} className="navigation__section">Прочее</div>
          <ul className={`navigation__list ${!otherList && 'navigation__list__not-active'}`}>
          {other.map(key => (
              <li onClick={() => handleClick(key)} className={`navigation__list__item ${key === appContext.obj && !appContext.closed ? 'navigation__list__item_active' : ''}`}>{data[key].name}</li>
          ))}
          </ul>
    </nav>
  )
}
