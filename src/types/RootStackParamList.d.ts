import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Quotes: undefined;
  Plans: undefined;
};

export type QuotesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Quotes'
>;

export type PlansScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Plans'
>;
