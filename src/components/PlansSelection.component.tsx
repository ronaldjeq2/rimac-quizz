import {Icon} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {FlatList, View, Text, useWindowDimensions} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {PlansSelectionComponentStyles} from './PlansSelection.component.styles';
import baseStyles from '../shared/styles/baseStyles.styles';
import {PlanItemComponent} from './PlanItem.component';
import {usePlans} from '../shared/hooks/usePlans';
import {useUserContext} from '../shared/hooks/useUserContext';
import {IPlanState} from '../types/plans';

interface IPlansSelectionComponent {
  existDisscount?: boolean;
  onPressPlan: (item: IPlanState) => void;
}

export const PlansSelectionComponent = ({
  existDisscount,
  onPressPlan,
}: IPlansSelectionComponent) => {
  const {width} = useWindowDimensions();
  const {container, pagination, containerIcon, text} =
    PlansSelectionComponentStyles({width});
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const {userInfo} = useUserContext();
  const {age} = userInfo;
  const {plans} = usePlans({age});
  const handleScroll = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / width);
    setCurrentIndex(index);
  };

  const scrollToIndexItem = (index: number) => {
    if (plans) {
      if (flatListRef.current && index >= 0 && index < plans.length) {
        flatListRef.current?.scrollToIndex({index, animated: true}); // Desplazar al índice correcto
        setCurrentIndex(index);
      }
    }
  };

  return (
    <View style={container}>
      <FlatList
        horizontal
        data={plans}
        renderItem={({item}) => {
          return (
            <PlanItemComponent
              planInfo={item}
              existDisscount={existDisscount}
              onPress={() => onPressPlan(item)}
            />
          );
        }}
        keyExtractor={item => item.name}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
      />
      <View style={pagination}>
        <Icon
          name="keyboard-arrow-left"
          color={COLORS.STATUS_GRAY}
          containerStyle={containerIcon}
          onPress={() => scrollToIndexItem(currentIndex - 1)}
        />
        <Text style={[baseStyles.defaultText, text]}>
          {currentIndex + 1} / {plans?.length}
        </Text>
        <Icon
          name="keyboard-arrow-right"
          color={COLORS.STATUS_GRAY}
          containerStyle={containerIcon}
          onPress={() => scrollToIndexItem(currentIndex + 1)}
        />
      </View>
    </View>
  );
};

export default PlansSelectionComponent;
