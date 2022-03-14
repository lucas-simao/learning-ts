import React, { useState, VFC } from 'react';
import { postUser } from '../../../api';
import { User } from '../../../utils/types';
import {
  cellphoneIsValid,
  cpfIsValid,
  emailIsValid,
  nameIsValid,
} from '../../../utils/validator';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import InputWithMask from '../../atoms/InputWithMask';
import './index.scss';

const emptyRegister: User = {
  name: '',
  email: '',
  cpf: '',
  rg: '',
  birthDate: '',
  cellphone: '',
};

const FormRegister: VFC = () => {
  const [registerObj, setRegisterObj] = useState<User>(emptyRegister);
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    cpf: false,
    birthDate: false,
    cellphone: false,
  });

  const setValue = (key: string, value: string) => {
    setRegisterObj({
      ...registerObj,
      [key]: value,
    });
  };

  const setValueIsValid = (key: string, value: boolean) => {
    setIsValid({
      ...isValid,
      [key]: value,
    });
  };

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postUser(registerObj)
  };

  return (
    <form className="form-register-user" onSubmit={save}>
      <h1 className="title">Formulário de cadastro</h1>
      <div className="name">
        <Input
          id="name"
          required={true}
          value={registerObj.name}
          label="Nome"
          type="text"
          onChange={(value) => {
            setValue('name', value);

            if (value.length > 0) {
              setValueIsValid('name', !nameIsValid(value));
            }
          }}
          error={registerObj.name.length > 0 && isValid.name}
          errorMessage="Informe nome e sobrenome"
        />
      </div>
      <div className="birthDate">
        <Input
          id="birthDate"
          required={true}
          value={registerObj.birthDate}
          label="Data de nascimento"
          type="date"
          onChange={(value) => setValue('birthDate', value)}
          error={registerObj.birthDate.length > 0 && isValid.birthDate}
          errorMessage="Data nascimento inválida"
        />
      </div>
      <div className="cpf">
        <InputWithMask
          id="cpf"
          required={true}
          label="CPF"
          mask="999.999.999-99"
          value={registerObj.cpf}
          type="tel"
          error={registerObj.cpf.length > 0 && isValid.cpf}
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
          value={registerObj.rg}
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
          value={registerObj.cellphone}
          type="tel"
          error={registerObj.cellphone.length > 0 && isValid.cellphone}
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
          value={registerObj.email}
          label="Email"
          type="email"
          error={registerObj.email.length > 0 && isValid.email}
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
          label="Limpar"
          typeProp="neutral"
          onClick={() => {
            setRegisterObj(emptyRegister);
          }}
        />
        <Button label="Salvar" type="submit" typeProp="positive" />
      </div>
    </form>
  );
};

export default FormRegister;
