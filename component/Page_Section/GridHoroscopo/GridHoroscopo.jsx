import React from 'react'
import style from "./GridHoroscopo.module.scss";

const GridHoroscopo = (props) => {
    const {data,small} = props

    const dataHoroscopo = data?.slice(0,12)


  if(small){
    return  <ul className={style.grid__horoscopo__small}>{dataHoroscopo?.map(item=> 
      <li key={item?.url}>
        <a  href={item?.url}>
          <img src={item?.image?.url} alt={item?.image?.alt}/>
        </a>
      </li>)}
    </ul>
  }

  return (
    <section className={style.grid__horoscopo}>
        {dataHoroscopo?.map(item=>
        <a href={item?.url} className={style.main__horoscopo} key={item?.url}>
            <img className={style.horoscopo__img} src={item.image.url} alt={item?.image?.alt}/>
            <h2>{item?.title}</h2>
            <span>{item?.header}</span>
        </a>
)}
    </section>
  )
}

export {GridHoroscopo}