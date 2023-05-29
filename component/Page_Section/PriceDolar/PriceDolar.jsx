import React, { useEffect, useState } from 'react'
import { isNumber } from 'util/isNumber'
import { convertirFecha } from 'util/convertirFecha'
import style from './PriceDolar.module.scss'

const PriceDolar = (props) => {
    const data=props.data.spotlight.data
    const [dolar,setDolar] = useState('')
    const [soles,setSoles] = useState('')
    const [cambio,setCambio] = useState('0.00')

  return (
    <div className={style.main__price}>
        <div className={style.main__price__change}>
            <h3 className={style.title__price}>Tipo de cambio de dólar</h3>
            <div className={style.price__change}>
                <div>
                    <span className={style.subtitle__price}>VENTA</span>
                    <p className={style.subtitle__price__change}>{data.price_sale[0]}</p>
                </div>
                <div>
                    <span className={style.subtitle__price}>COMPRA</span>
                    <p className={style.subtitle__price__change}>{data.price_purchase[0]}</p>
                </div>
                
            </div>
            <span className={style.subtitle2__price}>Fecha: {convertirFecha(new Date(),'semi-long')}</span>
        </div>
        <div className={style.main__price__change}>
            <h3 className={style.title__price}>Calculadora de cambio</h3>
            <div className={style.price__change__cal}>
                <div>
                    <span className={style.subtitle__price}>DÓLARES</span>
                    <div className={style.box__change__cal}>
                    <p className={style.input__price}>$</p>
                        <input type='text' value={dolar} className={style.input__price} onChange={(e)=>{
                            const value = e.target.value
                            if(isNumber(value)){
                                setDolar(value)
                                if(value>0){
                                    setSoles((value*data.price_purchase[0]).toFixed(2))
                                    setCambio(data.price_purchase[0])
                                }
                                
                            }
                            if(value===''){
                                setDolar(value)
                                setCambio(data.price_purchase[0])
                            }
                        }}
                            placeholder='0.00' autoComplete="off" data-conversion="3.81"/>
                    </div>
                </div>
            
    
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.01 9H0V11H7.01V14L11 10L7.01 6V9ZM12.99 8V5H20V3H12.99V0L9 4L12.99 8Z" fill="#FE0404"/>
                </svg>

                <div>
                    <span className={style.subtitle__price}>SOLES</span>
                    <div div className={style.box__change__cal}>
                    <p className={style.input__price}>S/</p>
                        <input type='text' value={soles} className={style.input__price}  onChange={(e)=>{
                            const value = e.target.value
                            if(isNumber(value)){
                                setSoles(value)
                                if(value>0){
                                    setDolar((value/data.price_sale[0]).toFixed(2))
                                    setCambio(data.price_sale[0])
                                }
                            }
                            if(value===''){
                                setSoles(value)
                                setCambio(data.price_sale[0])
                            }
                        }}
                            placeholder='0.00' autoComplete="off" data-conversion="3.85"  pattern={[0-9]}/>
                    </div>
               
             </div>
            </div>
            <p className={style.subtitle2__price}>Tipo de cambio: <span className={style.subtitle2__price__red}>{cambio}</span></p>
        </div>
    </div>
  )
}

export  {PriceDolar}