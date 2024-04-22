import {
  IGetUseresponse,
  IUserInfoRequestParams,
} from '../../services/user/user.dto';
import {IUserForm, IUserInfoState} from '../../types/user';
import {getAgeSinceDate} from '../../utils/date';

export const userInfoParamsWraper = (
  info: IUserForm,
): IUserInfoRequestParams => {
  const {id, type, number} = info;
  return {
    id,
    phoneNumber: number,
    typeDocument: type,
  };
};

export const userInfoWraper = (info: IGetUseresponse): IUserInfoState => {
  return {...info, age: getAgeSinceDate(info.birthDay)};
};
