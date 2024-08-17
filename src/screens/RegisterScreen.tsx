import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';


interface Props {
  users: User[];
  handleAddUser: (user: User) => void;
}


interface FormRegister {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  Pais: string;
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {


  const [formRegister, setFormRegister] = useState<FormRegister>({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    Pais: ''
  });


  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);


  const navigation = useNavigation();


  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }


  const handleSignUp = () => {

    if (!formRegister.email ||
      !formRegister.password ||
      !formRegister.nombre ||
      !formRegister.apellido ||
      !formRegister.Pais) {
      //Mensaje de aviso
      Alert.alert(
        "Error",
        "Por favor, completar todos los campos!"
      );
      return;
    }


    if (verifyUser() != null) {
      Alert.alert(
        "Error",
        "El correo ya se encuentra registrado!"
      );
      return;
    }


    const getIdUsers = users.map(user => user.id);

    const getNewId = Math.max(...getIdUsers) + 1;

    const newUser: User = {
      id: getNewId,
      email: formRegister.email,
      password: formRegister.password,
    }

    handleAddUser(newUser);
    Alert.alert(
      "Felicitaciones",
      "Se a registrado correctamente!"
    );
    navigation.goBack();

  }


  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email === formRegister.email)[0];
    return existUser;
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Regístrate' />
      <BodyComponent>
        <View>
          <Text
            style={styles.titleBody}>
            Estás muy cerca!
          </Text>
          <Text
            style={styles.descriptionBody}>
            Realiza tus compras de manera rápida y segura
          </Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponent
            placeholder='Nombre'
            handleSetValues={handleSetValues}
            name='nombre' />
          <InputComponent
            placeholder='Apellido'
            handleSetValues={handleSetValues}
            name='apellido' />
          <InputComponent
            placeholder='Pais'
            handleSetValues={handleSetValues}
            name='Pais' />
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
        <ButtonComponent textButton='Registrar' actionButton={handleSignUp} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirection}>
            Ya tienes una cuenta? Iniciar sesión ahora
          </Text>
        </TouchableOpacity>
        <Text style={styles.avisoRegistro}>
          Compra de una manera totalmente diferente, obteniendo beneficos exclusivos para usuarios registrados.
        </Text>
      </BodyComponent>
    </View>
  )
}
