import React, { useEffect, VFC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

type Props = {
  drawer: boolean;
};

const Drawer: VFC<Props> = (props: Props) => {
  return (
    <div className={props.drawer ? 'drawer is-open' : 'drawer'}>
      <div className="drawer__content">
        <h1>Menu</h1>
        <div className="drawer__content__grid">
          <div className='drawer__content__grid__links'>
            <Link className="link" to="/cadastrar-usuario">
              Cadastrar usuário
            </Link>
            <Link className="link" to="/listar-usuario">
              Listar usuários
            </Link>
          </div>
          <div className='grid__info'>
            <span>Lucas Simão</span>
            <div>
              <a href="https://github.com/lucas-simao" target='__blank'>Github</a>
              <a href="https://wa.me/5569992026191?text=Oi" target='__blank'>Whatsapp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
