import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Quotes: undefined;
};

export type QuotesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Quotes'
>;
