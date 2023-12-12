import React from 'react'
import './styles.sass'
import { useAppContext } from '../../ContextProvider'
import { data } from '../../sourceData';

export default function Modal() {

  const appContext = useAppContext()

  return (
    <div className="modal__wrapper" style={{display: appContext.closed ? 'none' : 'block'}}>
      <div className="modal__flex-block">
        <aside className='modal__container'>
            <div className="modal__header">
                <h3 className="modal__title">{data[appContext.obj].name}</h3>
                <button onClick={() => appContext.toggleClose()} className="modal__close-btn"></button>
            </div>
            <img src={`data/${data[appContext.obj].img}`} alt="" className="modal__img" />
            <pre className="modal__desc">{data[appContext.obj].desc}</pre>
        </aside>
      </div>
    </div>
  )
}
