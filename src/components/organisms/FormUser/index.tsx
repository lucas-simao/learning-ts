import React, { useEffect, useState, VFC } from 'react';
import { User } from '../../../utils/types';
import {
  cellphoneIsValid,
  cpfIsValid,
  emailIsValid,
  nameIsValid,
} from '../../../utils/validator';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import InputWithMask from '../../atoms/InputWithMask';
import { addUser, updateUser } from '../../../features/user/slice';
import { openAlert } from '../../../features/snackBar/slice';
import { useAppDispatch } from '../../../store/hooks';
import { useUserByIndex } from '../../../features/user/selectors';
import './index.scss';

const emptyUser: User = {
  id: '',
  name: '',
  email: '',
  cpf: '',
  rg: '',
  birthDate: '',
  cellphone: '',
};

const FormUser: VFC = () => {
  const [user, setUser] = useState<User>(emptyUser);
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    cpf: false,
    birthDate: false,
    cellphone: false,
  });
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const userToEdit = useUserByIndex(String(params.id));
  const pageTitle = String(params.id) ? 'Editar usuário' : 'Cadastrar usuário';

  const setValue = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const setValueIsValid = (key: string, value: boolean) => {
    setIsValid({
      ...isValid,
      [key]: value,
    });
  };

  useEffect(() => {
    if (params.id) {
      setUser(userToEdit);
    }
  }, [params.index]);

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (params.id) {
      dispatch(updateUser(user));
      dispatch(
        openAlert({
          open: true,
          goToRoute: '/listar-usuario',
          goToRouteLabel: 'Lista de usuários',
          text: 'Usuário alterado com sucesso',
          style: 'positive',
          autoHideDuration: 3000,
        }),
      );
    } else {
      user.id = uuidv4();
      dispatch(addUser(user));
      dispatch(
        openAlert({
          open: true,
          goToRoute: '/listar-usuario',
          goToRouteLabel: 'Lista de usuários',
          text: 'Usuário cadastrado com sucesso',
          style: 'positive',
          autoHideDuration: 3000,
        }),
      );
    }
    setUser(emptyUser);
  };

  return (
    <>
      <form className="form-register-user" onSubmit={save}>
        <h1 className="title">{pageTitle}</h1>
        <div className="name">
          <Input
            id="name"
            required={true}
            value={user.name}
            label="Nome"
            type="text"
            onChange={(value) => {
              setValue('name', value);

              if (value.length > 0) {
                setValueIsValid('name', !nameIsValid(value));
              }
            }}
            error={user.name.length > 0 && isValid.name}
            errorMessage="Informe nome e sobrenome"
          />
        </div>
        <div className="birthDate">
          <Input
            id="birthDate"
            required={true}
            value={user.birthDate}
            label="Data de nascimento"
            type="date"
            onChange={(value) => setValue('birthDate', value)}
            error={user.birthDate.length > 0 && isValid.birthDate}
            errorMessage="Data nascimento inválida"
          />
        </div>
        <div className="cpf">
          <InputWithMask
            id="cpf"
            required={true}
            label="CPF"
            mask="999.999.999-99"
            value={user.cpf}
            type="tel"
            error={user.cpf.length > 0 && isValid.cpf}
            errorMessage="CPF inválido"
            onChange={(value) => {
              setValue('cpf', value);

              if (value.length > 0) {
                setValueIsValid('cpf', !cpfIsValid(value));
              }
            }}
          />
        </div>
        <div className="rg">
          <Input
            id="rg"
            value={user.rg}
            label="RG"
            type="text"
            onChange={(value) => setValue('rg', value)}
          />
        </div>
        <div className="cellphone">
          <InputWithMask
            id="cellphone"
            required={true}
            label="Celular"
            mask="(99) 99999-9999"
            value={user.cellphone}
            type="tel"
            error={user.cellphone.length > 0 && isValid.cellphone}
            errorMessage="Telefone inválido"
            onChange={(value) => {
              setValue('cellphone', value);

              if (value.length > 0) {
                setValueIsValid('cellphone', !cellphoneIsValid(value));
              }
            }}
          />
        </div>
        <div className="email">
          <Input
            id="email"
            required={true}
            value={user.email}
            label="Email"
            type="email"
            error={user.email.length > 0 && isValid.email}
            errorMessage="E-mail inválido"
            onChange={(value) => {
              setValue('email', value);

              if (value.length > 0) {
                setValueIsValid('email', !emailIsValid(value));
              }
            }}
          />
        </div>
        <div className="actions">
          <Button
            label={params.id ? 'Voltar' : 'Limpar'}
            typeProp="neutral"
            onClick={() => {
              if (params.id) {
                navigate('/listar-usuario');
              } else {
                setUser(emptyUser);
              }
            }}
          />
          <Button
            label={params.id ? 'Alterar' : 'Salvar'}
            type="submit"
            typeProp="positive"
          />
        </div>
      </form>
    </>
  );
};

export default FormUser;
