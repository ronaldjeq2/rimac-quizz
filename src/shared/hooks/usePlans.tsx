import {useCallback, useEffect, useState} from 'react';
import {plansService} from '../../services/plans/plans.service';
import {TPlansState} from '../../types/plans';
import {plansInfoWraper} from '../wrapers/plans.wraper';

interface IUsePlansProps {
  age?: number;
}

export const usePlans = ({age}: IUsePlansProps) => {
  const [isLoading, setisLoading] = useState(false);
  const [plans, setPlans] = useState<TPlansState | null>(null);
  const filterPlansForAge = useCallback(
    (plansItems: TPlansState) => {
      if (age) {
        setPlans(plansItems.filter(plan => plan.age < age));
        return;
      }
      setPlans(plansItems);
    },
    [age],
  );

  const getPlans = async () => {
    try {
      setisLoading(true);
      const response = await plansService.plansInfo();
      if (response) {
        filterPlansForAge(plansInfoWraper(response));
      }
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    plans,
  };
};
