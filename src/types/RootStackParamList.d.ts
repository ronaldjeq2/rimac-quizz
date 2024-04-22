import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IPlanState} from './plans';

export type RootStackParamList = {
  Quotes: undefined;
  Plans: undefined;
  PlanUsedDetails: {planInfo: IPlanState; priceToSend: number};
};

export type QuotesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Quotes'
>;

export type PlansScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Plans'
>;

export type PlanUsedDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PlanUsedDetails'
>;
