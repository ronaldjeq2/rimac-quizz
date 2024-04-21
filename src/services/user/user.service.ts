import {userData} from './user.data';
import {IUserInfoRequestParams} from './user.dto';

export const userService = {
  userInfo: (params: IUserInfoRequestParams) => userData.userInfo(params),
};
