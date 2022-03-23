import React, { useEffect, VFC } from 'react'
import './index.scss'
import MenuIcon from '../../../assets/icons/menu.svg'
import {useLocation} from 'react-router-dom'

type Props = {
  setDrawer: () => void;
}

const Header: VFC<Props> = ({setDrawer} : Props) => {
  const location = useLocation()

  useEffect(() => {
    setDrawer()
  }, [location.pathname])

  return (
    <header>
      <section>
        <button onClick={setDrawer}>
          <img src={MenuIcon} alt="" />
        </button>
        <h1>React with Typescript</h1>
      </section>
    </header>
  )
};

export default Header;