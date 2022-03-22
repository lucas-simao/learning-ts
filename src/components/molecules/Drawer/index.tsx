import React, {VFC} from 'react'
import { Link } from "react-router-dom";
import './index.scss'

const Drawer: VFC = () => {
  return (
    <div className='drawer'>
      <div className='drawer__content'>
        <h1>Menu</h1>
        <div className='drawer__content__grid'>
            <Link className='grid__link' to="/cadastrar-usuario">Cadastrar usuário</Link>
            <Link className='grid__link' to="/listar-usuario">Listar usuários</Link>
        </div>
      </div>
    </div>
  )
}

export default Drawer;