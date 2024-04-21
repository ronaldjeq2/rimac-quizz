import {IUserInfoRequestParams} from '../../services/user/user.dto';
import {IUserForm} from '../../types/user';

export const userInfoWraper = (info: IUserForm): IUserInfoRequestParams => {
  const {id, type, number} = info;
  return {
    id,
    phoneNumber: number,
    typeDocument: type,
  };
};
