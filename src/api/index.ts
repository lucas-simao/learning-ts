import Axios from 'axios'
import { User } from '../utils/types'

const { REACT_APP_API_URL } = process.env;

export const postUser = (user: User) => {
  const url = REACT_APP_API_URL+'/users'

  return Axios.post(url, user)
}