import React from 'react'
import style from './SectionAboutContent.module.scss'

const SectionAboutContent = (props) => {
  const data=props.data.spotlight.data
  return (
    <div className={style.main__content}>
      <h2 className={style.title}>El Tipo de cambio</h2>
      <p className={style.subtitle}>{data.teaser[0]}</p>
    </div>
  )
}

export {SectionAboutContent}