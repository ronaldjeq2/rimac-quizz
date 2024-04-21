import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {HeaderComponentStyles} from './Header.component.styles';
import {InputControllerComponent} from '../shared/components/InputController.component';
import {useForm} from 'react-hook-form';
import DropdownComponent from '../shared/components/Dropdown.component';
import {QuotesFormComponentStyles} from './QuotesForm.component.styles';
import CheckBoxComponent from '../shared/components/CheckBox.component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import baseStyles from '../shared/styles/baseStyles.styles';
import {Button} from '@rneui/themed';
import {COLORS} from '../constants/colors.constants';

const dataDrop = [
  {label: 'Dni', value: 'dni'},
  {label: 'Pasaporte', value: 'pasaporte'},
];

export function QuotesFormComponent() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: '',
      number: '',
    },
  });
  const {width} = useWindowDimensions();
  const {
    containerFieldStyle,
    dropddownFieldStyle,
    idContainerStyle,
    inputFieldStyle,
    inputStyles,
    cellPhoneFieldStyle,
    termsAndConditionsStyleText,
    buttonStyle,
    titleStyle,
  } = QuotesFormComponentStyles({width});
  HeaderComponentStyles({width});
  return (
    <View>
      <View style={idContainerStyle}>
        <DropdownComponent
          containerStyles={[containerFieldStyle, dropddownFieldStyle]}
          data={dataDrop}
        />
        <InputControllerComponent
          rules={{
            required: true,
          }}
          nameInput={'id'}
          controlInput={control}
          placeholderInput="documento"
          containerStyles={[containerFieldStyle, inputFieldStyle]}
          inputStyles={inputStyles}
          infoText="Nro. de documento"
        />
      </View>
      <InputControllerComponent
        rules={{
          required: true,
        }}
        nameInput={'id'}
        controlInput={control}
        placeholderInput="Escribe el número de celular"
        containerStyles={[containerFieldStyle, cellPhoneFieldStyle]}
        inputStyles={inputStyles}
        infoText="Celular"
      />

      <CheckBoxComponent title="Acepto la Política de Privacidad" />
      <CheckBoxComponent title="Acepto la Política de Comunicaciones Comerciales" />
      <Text style={[baseStyles.defaultText, termsAndConditionsStyleText]}>
        Aplican Términos y Condiciones
      </Text>
      <Button
        buttonStyle={buttonStyle}
        titleStyle={[baseStyles.defaultText, titleStyle]}>
        Cotiza aqui
      </Button>
    </View>
  );
}
