import React, { useState, VFC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormRegister from './components/organisms/FormRegister';
import TableUser from './components/organisms/TableUsers';
import Drawer from './components/molecules/Drawer';
import Header from './components/molecules/Header';
import SnackBar from './components/molecules/SnackBar';

import './Router.scss';

export const routeList = [
  {
    name: 'Cadastrar usuário',
    path: '/cadastrar-usuario',
    element: <FormRegister />,
  },
  {
    name: 'Listar usuários',
    path: '/listar-usuario',
    element: <TableUser />,
  },
];

const Router: VFC = () => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="router">
        <div className="router__header">
          <Header setDrawer={() => setDrawer(!drawer)} />
        </div>
        <div className="router__drawer">
          <Drawer drawer={drawer} />
        </div>
        <div className="router__router">
          <Routes>
            {routeList.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </div>
      </div>
      <SnackBar />
    </BrowserRouter>
  );
};

export default Router;
