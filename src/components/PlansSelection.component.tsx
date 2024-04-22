import {Icon} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {FlatList, View, Text, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {PlansSelectionComponentStyles} from './PlansSelection.component.styles';
import baseStyles from '../shared/styles/baseStyles.styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

// Datos para el swiper
const data = [
  {id: '1', title: 'Slide 1'},
  {id: '2', title: 'Slide 2'},
  {id: '3', title: 'Slide 3'},
];

// Renderizar cada elemento del swiper
const renderItem = ({item}) => (
  <View style={styles.slide}>
    <Text style={styles.text}>{item.title}</Text>
  </View>
);

export const PlansSelectionComponent = () => {
  const {pagination, containerIcon, text} = PlansSelectionComponentStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const scrollToIndexItem = (index: number) => {
    if (flatListRef.current && index >= 0 && index < data.length) {
      flatListRef.current?.scrollToIndex({index, animated: true}); // Desplazar al índice correcto
      setCurrentIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SCREEN_WIDTH}
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
          {currentIndex + 1} / 3
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: SCREEN_WIDTH,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
