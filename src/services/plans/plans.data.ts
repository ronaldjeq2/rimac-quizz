import {apiClient} from '../https';
import {IGetPlansResponse, TGetPlansResponse} from './plans.dto';

export const plansData = {
  plansInfo: async (): Promise<TGetPlansResponse | null> => {
    const {data} = await apiClient.get<IGetPlansResponse>('/plans.json');
    return data?.list;
  },
};
