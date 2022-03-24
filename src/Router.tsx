import React, { useEffect, useState, VFC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsers } from './features/user/slice';
import { getUsersStorage } from './api/localStorage/user';
import TableUser from './components/organisms/TableUsers';
import Drawer from './components/molecules/Drawer';
import Header from './components/molecules/Header';
import SnackBar from './components/molecules/SnackBar';
import FormUser from './components/organisms/FormUser';

import './Router.scss';

export const routeList = [
  {
    name: 'Cadastrar usuário',
    path: '/cadastrar-usuario',
    element: <FormUser />,
  },
  {
    name: 'Editar usuário',
    path: '/editar-usuario/:id',
    element: <FormUser />,
  },
  {
    name: 'Listar usuários',
    path: '/listar-usuario',
    element: <TableUser />,
  },
];

const Router: VFC = () => {
  const [drawer, setDrawer] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(getUsersStorage()));
  });

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
