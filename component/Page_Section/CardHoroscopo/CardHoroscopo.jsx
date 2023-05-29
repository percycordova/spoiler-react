import React from 'react'
import style from "./CardHoroscopo.module.scss";

const CardHoroscopo = (props) => {

  const detailHoroscopo = props.data

  return (
    <div className={style.main__horoscopo}>
      <img src={detailHoroscopo?.image?.url} alt={detailHoroscopo?.title} className={style.horoscopo__img}/>
      <div className={style.card__horoscopo}>
        <h2>HORÓSCOPO DE HOY PARA {detailHoroscopo?.title}</h2>
        <span>{detailHoroscopo?.header}</span>
        <p>{detailHoroscopo?.description}</p>
      </div>
    </div>
  )
}

export {CardHoroscopo}