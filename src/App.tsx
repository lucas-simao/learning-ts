import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import FormRegister from './components/organisms/FormRegister';
import TableUser from './components/organisms/TableUsers';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FormRegister />
        <TableUser />
      </Provider>
    </div>
  );
}

export default App;
