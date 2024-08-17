import React, { useState } from 'react';
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import { BodyComponent } from '../components/BodyComponent';

import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';


interface Props {
    users: User[];  
}


interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    
    const navigation = useNavigation();

    
    const handleSetValues = (name: string, value: string) => {
        
        setFormLogin({ ...formLogin, [name]: value });
    }

    
    const handleSignIn = () => {
       
        if (!formLogin.email || !formLogin.password) {
            
            Alert.alert(
                "Error",
                "Por favor, completar todos los campos!"
            );
            return;
        }
        
        if (!verifyUser()) {   
            Alert.alert(
                "Error",
                "Correo y/o contraseña incorrecta!"
            );
            return;
        }

       
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))
        
    }

    
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser;
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Pyagames' />
            <BodyComponent>
                <View>
                    <Text
                        style={styles.titleBody}>
                        Bienvenido a Pyagames su tienda de videojuegos
                    </Text>
                    <Image  style={styles.etiqueta} source={{uri:'https://cdn-icons-png.flaticon.com/512/10141/10141012.png'}}/>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        actionIcon={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar' actionButton={handleSignIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirection}>
                        No tienes cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
