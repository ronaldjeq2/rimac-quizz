import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {HeaderComponentStyles} from './Header.component.styles';
import {InputControllerComponent} from '../shared/components/InputController.component';
import {Controller, useForm} from 'react-hook-form';
import DropdownComponent from '../shared/components/Dropdown.component';
import {QuotesFormComponentStyles} from './QuotesForm.component.styles';
import CheckBoxComponent from '../shared/components/CheckBox.component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import baseStyles from '../shared/styles/baseStyles.styles';
import {Button} from '@rneui/themed';
import {COLORS} from '../constants/colors.constants';
import {RadialGradient} from 'react-native-gradients';

const dataDrop = [
  {label: 'Dni', value: 'dni'},
  {label: 'Pasaporte', value: 'pasaporte'},
];

export function QuotesFormComponent() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: '',
      type: '',
      number: '',
      privacity: false,
      politicies: false,
    },
  });
  const {width} = useWindowDimensions();
  const {id, type, number, politicies, privacity} = getValues();
  console.log({id, type, number, politicies, privacity});
  console.log({errors});
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
    errorText,
  } = QuotesFormComponentStyles({width});
  HeaderComponentStyles({width});
  const onSubmit = data => console.log(data);
  return (
    <View>
      <View style={idContainerStyle}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange}}) => (
            <DropdownComponent
              containerStyles={[containerFieldStyle, dropddownFieldStyle]}
              data={dataDrop}
              onChange={onChange}
            />
          )}
          name="type"
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
        nameInput="number"
        controlInput={control}
        placeholderInput="Escribe el número de celular"
        containerStyles={[containerFieldStyle, cellPhoneFieldStyle]}
        inputStyles={inputStyles}
        infoText="Celular"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange}}) => (
          <CheckBoxComponent
            onChange={onChange}
            title="Acepto la Política de Privacidad"
          />
        )}
        name="privacity"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange}}) => (
          <CheckBoxComponent
            onChange={onChange}
            title="Acepto la Política de Comunicaciones Comerciales"
          />
        )}
        name="politicies"
      />
      <Text style={[baseStyles.defaultText, termsAndConditionsStyleText]}>
        Aplican Términos y Condiciones
      </Text>
      {Object.keys(errors).length > 0 && (
        <Text style={[baseStyles.defaultText, errorText]}>
          Tienes que completar todos los campos y aceptar los términos y
          condiciones
        </Text>
      )}

      <Button
        buttonStyle={buttonStyle}
        titleStyle={[baseStyles.defaultText, titleStyle]}
        onPress={handleSubmit(onSubmit)}>
        Cotiza aqui
      </Button>
    </View>
  );
}
