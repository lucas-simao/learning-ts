import React, { VFC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormRegister from './components/organisms/FormRegister';
import TableUser from './components/organisms/TableUsers';
import Drawer from './components/molecules/Drawer';
import './Router.scss';
import Header from './components/molecules/Header';

const Router: VFC = () => {
  return (
    <BrowserRouter>
      <div className="router">
        <div className="router__header">
          <Header />
        </div>
        <div className="router__drawer">
          <Drawer />
        </div>
        <div className="router__router">
          <Routes>
            <Route path="/cadastrar-usuario" element={<FormRegister />} />
            <Route path="/listar-usuario" element={<TableUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
