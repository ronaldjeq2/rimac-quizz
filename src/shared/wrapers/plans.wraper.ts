import {TGetPlansResponse} from '../../services/plans/plans.dto';
import {IPlanState, TPlansState} from '../../types/plans';

export const plansInfoWraper = (plans: TGetPlansResponse): TPlansState => {
  return plans?.map?.((item: IPlanState) => {
    item.disccountPrice = item.price * 0.95;
    return item;
  });
};
