import {createContext} from 'react';
import {IUserContext} from '../types/context';
import {useUser} from '../shared/hooks/useUser';

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({children}: any) => {
  const {isLoading, getInfo, userInfo} = useUser();
  return (
    <UserContext.Provider value={{userInfo, getInfo, isLoading}}>
      {children}
    </UserContext.Provider>
  );
};
