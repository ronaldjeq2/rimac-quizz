import {useState} from 'react';
import {IUserForm, IUserInfoState} from '../../types/user';
import {userService} from '../../services/user/user.service';
import {userInfoParamsWraper, userInfoWraper} from '../wrapers/user.wraper';

export const useUser = () => {
  const [isLoading, setisLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserInfoState | null>(null);
  const getInfo = async (data: IUserForm, successFunction?: () => void) => {
    try {
      setisLoading(true);
      const response = await userService.userInfo(userInfoParamsWraper(data));
      if (response) {
        setUserInfo(userInfoWraper(response));
      }
      if (successFunction) {
        successFunction();
      }
    } finally {
      setisLoading(false);
    }
  };

  return {
    isLoading,
    getInfo,
    userInfo,
  };
};
