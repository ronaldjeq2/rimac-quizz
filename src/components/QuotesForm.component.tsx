import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {HeaderComponentStyles} from './Header.component.styles';
import {InputControllerComponent} from '../shared/components/InputController.component';
import {useForm} from 'react-hook-form';
import DropdownComponent from '../shared/components/Dropdown.component';
import {QuotesFormComponentStyles} from './QuotesForm.component.styles';

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
    </View>
  );
}
