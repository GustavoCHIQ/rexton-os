import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import Login from '../Screens/Login'
import Home from '../Screens/Home'
import Cadastro from '../Screens/Cadastro'
import CriarOrdemDeServico from '../Screens/CriarOrdemDeServico'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Login' // Controle de rota inicial
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeNavigationTabs} />

        <Stack.Screen name="CriarOrdemDeServico" component={CriarOrdemDeServico} />
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
            <Stack.Screen name="Cadastro de Clientes" component={Cadastro} />
        </Stack.Navigator>
    )
}

export function CriarOrdemDeServicoNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Criar Ordem de Serviço" component={CriarOrdemDeServico} />
        </Stack.Navigator>
    )
}
