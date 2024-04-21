import {IUserForm} from './user';

export interface IUserInfo {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface IUserContext {
  userInfo: IUserInfo | null;
  getInfo: (data: IUserForm, successFunction?: () => void) => Promise<T>;
  isLoading?: boolean;
}
