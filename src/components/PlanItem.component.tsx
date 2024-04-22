import {View, Text, useWindowDimensions} from 'react-native';
import {IPlanState} from '../types/plans';
import IHomeIcon from '../assets/icons/iconHomeLight.svg';
import PersonIcon from '../assets/icons/person.svg';
import baseStyles from '../shared/styles/baseStyles.styles';
import {Button} from '@rneui/themed';
import {PlanItemComponentStyles} from './PlanItem.component.styles';

interface IPlanItemComponentProps {
  planInfo: IPlanState;
  existDisscount?: boolean;
}
export const PlanItemComponent = ({
  planInfo,
  existDisscount,
}: IPlanItemComponentProps) => {
  const {width} = useWindowDimensions();
  const {
    principalContainer,
    secondContainer,
    headerContainer,
    titleText,
    priceText,
    disccountText,
    descriptionContainer,
    descriptionInfoContainer,
    containerTextDescription,
    descriptionText,
    buttonContainer,
    titleButtonText,
  } = PlanItemComponentStyles({
    width,
  });
  const {name, description, price, disccountPrice} = planInfo;
  return (
    <View style={principalContainer}>
      <View style={secondContainer}>
        <View style={headerContainer}>
          <Text style={[baseStyles.defaultText, titleText]}>{name}</Text>
          <IHomeIcon />
        </View>
        <Text style={priceText}>COSTO DEL PLAN</Text>
        <Text style={[baseStyles.defaultText, disccountText]}>
          ${existDisscount ? disccountPrice : price} al mes
        </Text>
        <View style={descriptionContainer} />
        {description?.map(item => {
          return (
            <View style={descriptionInfoContainer} key={item}>
              <PersonIcon />
              <View style={containerTextDescription}>
                <Text style={[baseStyles.defaultText, descriptionText]}>
                  {item}
                </Text>
              </View>
            </View>
          );
        })}
        <Button
          buttonStyle={buttonContainer}
          titleStyle={[baseStyles.defaultText, titleButtonText]}>
          Seleccionar Plan
        </Button>
      </View>
    </View>
  );
};
