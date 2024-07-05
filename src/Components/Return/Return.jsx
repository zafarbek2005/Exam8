import React from 'react'
import './Return.scss'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Return = () => {
  return (
  <>
    <div className="Return_link conteiner">
        <Link to={`/`}>Главная <AiOutlineRight /></Link>
        <Link to={`/return`} >О компании</Link>
    </div>
  
    <div className="garanti">
        <h3>Гарантии</h3>
        <div className="return_txt">
            <h3>Обмен и возврат по желанию покупателя</h3>
        </div>
    </div>
  
  
  
  
  </>
  )
}

export default Return