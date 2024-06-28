import React from 'react'
import style from "./Loading.module.css"
import logo from "../../assets/logoEric.png"
import carga from "../../assets/gitCarga.gif"

const Loading = () => {
  return (
    <div className={style.loading}>
        <img className={style.logo} src={logo} alt="" />
        <img className={style.carga} src={carga} alt="" />
    </div>
  )
}

export default Loading