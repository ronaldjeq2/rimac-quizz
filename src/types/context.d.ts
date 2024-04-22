import {IUserForm, IUserInfoState} from './user';

export interface IUserContext {
  userInfo: IUserInfoState | null;
  getInfo: (data: IUserForm, successFunction?: () => void) => Promise<T>;
  isLoading?: boolean;
}
