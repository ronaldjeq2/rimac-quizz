import React, {useState} from 'react';
import {Text, View} from 'react-native';
import baseStyles from '../shared/styles/baseStyles.styles';
import {useUserContext} from '../shared/hooks/useUserContext';
import {PlansQuestionSelectorComponentStyles} from './PlansQuestionSelector.component.styles';
import {CardPersonSelectorComponent} from './CardPersonSelector.component';
import MeProtectionIcon from '../assets/icons/meProtection.svg';
import OtherProtectionIcon from '../assets/icons/otherProtection.svg';

interface IPlansQuestionSelectorComponentProps {
  onSelectedOption?: (option: string) => void;
}

export function PlansQuestionSelectorComponent({
  onSelectedOption,
}: IPlansQuestionSelectorComponentProps) {
  const {question, info, container} = PlansQuestionSelectorComponentStyles();
  const {userInfo} = useUserContext();
  const [itemSelected, setItemSelected] = useState<string | undefined>(
    undefined,
  );

  const handleOption = (id: string) => {
    setItemSelected(id);
    onSelectedOption?.(id);
  };

  return (
    <View style={container}>
      <Text style={[baseStyles.defaultText, question]}>
        {userInfo?.name} ¿Para quién deseas cotizar?
      </Text>
      <Text style={[baseStyles.defaultText, info]}>
        Selecciona la opción que se ajuste más a tus necesidades
      </Text>
      <CardPersonSelectorComponent
        id="me"
        itemSelected={itemSelected}
        title="Para mi"
        Icon={<MeProtectionIcon width={35} height={35} />}
        onPress={handleOption}
        info="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      />
      <CardPersonSelectorComponent
        id="other"
        itemSelected={itemSelected}
        title="Para alguien más"
        onPress={handleOption}
        Icon={<OtherProtectionIcon width={35} height={35} />}
        info="Realiza una cotización para uno de tus familiares o cualquier persona."
      />
    </View>
  );
}
