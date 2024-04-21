import {apiClient} from '../https';
import {IUserInfoRequestParams, IGetUseresponse} from './user.dto';

export const userData = {
  userInfo: async (
    params: IUserInfoRequestParams,
  ): Promise<IGetUseresponse | null> => {
    console.log({params});
    const {data} = await apiClient.get<IGetUseresponse>('/user.json');
    return data;
  },
};
