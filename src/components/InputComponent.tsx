import React from 'react';
import { TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import { styles } from '../theme/appTheme';

//interface - props
interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;   
    name: string;
    isPassword?: boolean;  
    hasIcon?: boolean;
    actionIcon?: () => void;  
}

export const InputComponent = ({ placeholder, handleSetValues, name, isPassword = false, hasIcon = false, actionIcon }: Props) => {
    return (
        <View>
            {
                (hasIcon)
                    ? <Icon
                        name='visibility'
                        size={25}
                        onPress={actionIcon}
                        color={PRIMARY_COLOR}
                        style={styles.iconPassword} />
                    : null
            }

            <TextInput
                placeholder={placeholder}
                keyboardType='default'
                onChangeText={(value) => handleSetValues(name, value)}
                secureTextEntry={isPassword}
                style={styles.inputText}
            />
        </View>
    )
}
