import { useAppSelector } from '../../store/hooks';
import { User } from '../../utils/types';

export const useUserByIndex = (id: string) => {
  return useAppSelector(({ users }): User => {
    return users.users.find((v) => v.id === id) as User;
  });
};

export const useUsers = () => useAppSelector(({ users }) => users.users);
