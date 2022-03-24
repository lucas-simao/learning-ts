import { User } from '../../utils/types';

const key = 'USERS';

export const getUsersStorage = (): User[] => {
  const list = localStorage.getItem(key);
  return list ? JSON.parse(list) : [];
};

export const addUserStorage = (user: User) => {
  const list = getUsersStorage();

  list.push(user);

  localStorage.setItem(key, JSON.stringify(list));
};

export const updateUserStorage = (user: User) => {
  const list = getUsersStorage();

  const userToUpdate = list.find((v) => v.id === user.id) as User;

  list[list.indexOf(userToUpdate)] = user;

  localStorage.setItem(key, JSON.stringify(list));
};

export const removeUserStorage = (id: string) => {
  const list = getUsersStorage();

  const userToRemove = list.find((v) => v.id === id) as User;

  list.splice(list.indexOf(userToRemove), 1);

  localStorage.setItem(key, JSON.stringify(list));
};
