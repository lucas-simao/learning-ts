import emailValidator from 'email-validator';
import { cpf } from 'cpf-cnpj-validator';

export const emailIsValid = (email: string): boolean => {
    return emailValidator.validate(email)
}

export const cpfIsValid = (cpfValue: string): boolean => {
    return cpf.isValid(cpfValue)
}

export const nameIsValid = (name: string): boolean => {
    if (name.trim().length === 1 || name.trim().split(' ').length === 1) {
        return false
    }
    return true
}

export const cellphoneIsValid = (cellphone: string): boolean => {
    return cellphone.length === 15
}

