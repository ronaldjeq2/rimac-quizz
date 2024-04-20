import {View, Text} from 'react-native';

import {QuotesScreenProps} from '../types/RootStackParamList.types';
import {SafeAreaView} from 'react-native-safe-area-context';

export function QuotesScreen({navigation}: QuotesScreenProps) {
  return (
    <SafeAreaView>
      <Text>Hola</Text>
    </SafeAreaView>
  );
}
