import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import Login from '../Screens/Login'
import Home from '../Screens/Home'
import Cadastro from '../Screens/Cadastro'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Login' // Controle de rota inicial
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeNavigationTabs} />
    </Stack.Navigator>
)

export function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Servicos" component={Home} />
        </Stack.Navigator>
    )
}

export function CadastroNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}