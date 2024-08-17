import { createStackNavigator } from '@react-navigation/stack';

import { PRIMARY_COLOR } from '../commons/constantsColor';

import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoginScreen } from '../screens/LoginScreen';
import Nombres from '../screens/Nombres';

//interface - arreglo lista usuarios - objetos
export interface User {
    id: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
    
    const users: User[] = [
        { id: 1, email: 'juands@gmail.com', password: '246810' },
        { id: 2, email: 'tony_guss25@hotmail.com', password: '1234567' },
        { id: 3, email: 'rolans@gmail.com', password: '246810' },
        { id: 4, email: 'sabandoCristian@gmail.com', password: '1234567' },
        { id: 5, email: 'cris@gmail.com', password: '12345' },
    ];

    
    const [listUsers, setListUsers] = useState(users);

    
    const handleAddUser = (user: User) => {
        
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                name="Register"
                options={{ headerShown: false }}
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} />
            <Stack.Screen
                name='Home'
                options={{ headerShown: false }}
                component={HomeScreen}
            />
                <Stack.Screen
                name='Nomb'
                //options={{ headerShown: false }}
                component={Nombres}
            />
        </Stack.Navigator>
    );
}