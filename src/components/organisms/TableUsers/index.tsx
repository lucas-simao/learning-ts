import React, { VFC } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { User } from '../../../utils/types';
import Button from '../../atoms/Button';
import { removeUser } from '../../../features/user/slice';
import { useUsers } from '../../../features/user/selectors';

import './index.scss';
import Empty from '../../atoms/Empty';

const TableUser: VFC = () => {
  const users = useUsers();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formatDate = (date: string) => {
    if (!date) return;
    return dayjs(date).format('DD/MM/YYYY');
  };

  return (
    <div className="tableUser">
      <h1>Lista de usuários</h1>
      {users.length ? (
        <div className="tableUser__content">
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
              {users?.map((user: User) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{formatDate(user.birthDate)}</td>
                    <td>{user.cellphone}</td>
                    <td>{user.cpf}</td>
                    <td>{user.rg}</td>
                    <td>{user.email}</td>
                    <td className="actions">
                      <Button
                        onClick={() => dispatch(removeUser(user.id))}
                        label="Excluir"
                        typeProp="negative"
                      />
                      <Button
                        onClick={() => navigate(`/editar-usuario/${user.id}`)}
                        label="Editar"
                        typeProp="positive"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty
          title="Sem usuários"
          body="Ainda não foi cadastrado nenhum usuário"
        />
      )}
    </div>
  );
};

export default TableUser;
