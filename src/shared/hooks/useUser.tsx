import {useState} from 'react';
import {IUserForm} from '../../types/user';
import {userService} from '../../services/user/user.service';
import {userInfoWraper} from '../wrapers/user.wraper';
import {IGetUseresponse} from '../../services/user/user.dto';

export const useUser = () => {
  const [isLoading, setisLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<IGetUseresponse | null>(null);
  const getInfo = async (data: IUserForm, successFunction?: () => void) => {
    try {
      setisLoading(true);
      const response = await userService.userInfo(userInfoWraper(data));
      setUserInfo(response);
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
