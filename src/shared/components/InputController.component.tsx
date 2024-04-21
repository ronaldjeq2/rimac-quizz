import {Text, TextInput, StyleProp, ViewStyle, Pressable} from 'react-native';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {InputControllerComponentStyles} from './InputController.component.styles';
import {useRef} from 'react';

interface IImputControllerComponentProps {
  placeholderInput?: string;
  onChangeInput?: (t: any) => void;
  onBlurInput?: (t: any) => void;
  nameInput: string;
  errorText?: string;
  controlInput: Control<any>;
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  isPassword?: boolean;
  infoText?: string;
  containerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<ViewStyle>;
}

export const InputControllerComponent = ({
  placeholderInput,
  onChangeInput,
  onBlurInput,
  nameInput,
  controlInput,
  errorText,
  rules,
  isPassword,
  infoText,
  containerStyles,
  inputStyles,
}: IImputControllerComponentProps) => {
  const {InputTextComponent} = InputControllerComponentStyles;
  const textInputRef = useRef<null | TextInput>(null);

  const handlePress = () => {
    textInputRef.current?.focus();
  };

  const onChangeHandle = (onChange: void) => {
    if (onChangeInput) {
      onBlurInput?.(onChange);
    } else {
      onChange;
    }
  };

  const onBlurHandle = (onBlur: void) => {
    if (onChangeInput) {
      onChangeInput?.(onBlur);
    } else {
      onBlur;
    }
  };

  return (
    <Pressable onPress={handlePress} style={containerStyles}>
      {infoText && <Text>{infoText}</Text>}
      <Controller
        control={controlInput}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            ref={textInputRef}
            placeholder={placeholderInput}
            onBlur={() => onBlurHandle(onBlur())}
            onChangeText={t => onChangeHandle(onChange(t))}
            value={value}
            style={[InputTextComponent, inputStyles]}
            secureTextEntry={isPassword}
          />
        )}
        name={nameInput}
      />
      {errorText && <Text>{errorText}</Text>}
    </Pressable>
  );
};
