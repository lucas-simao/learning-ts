import React, { VFC } from 'react';
import { User } from '../../../utils/types';
import Button from '../../atoms/Button';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { removeUser } from '../../../features/user/slice';
import './index.scss';

const TableUser: VFC = () => {
  const users = useSelector((state: RootState) => state.users.users);

  const dispatch = useDispatch();

  const formatDate = (date: string) => {
    if (!date) return;
    return dayjs(date).format('DD/MM/YYYY');
  };

  return (
    <div className="tableUser">
      <h1>Lista de usuários</h1>
      <div className='tableUser__content'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data nascimento</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: User, index: number) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{formatDate(user.birthDate)}</td>
                  <td>{user.cellphone}</td>
                  <td>{user.cpf}</td>
                  <td>{user.rg}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button
                      onClick={() => dispatch(removeUser(index))}
                      label="Excluir"
                      typeProp="negative"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
