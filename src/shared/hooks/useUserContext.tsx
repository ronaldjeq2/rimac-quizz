import {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {IUserContext} from '../../types/context';

export const useUserContext = (): IUserContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
