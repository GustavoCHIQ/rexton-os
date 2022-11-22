import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import Login from '../Screens/Login'
import Home from '../Screens/Home'
import CadastrarCliente from '../Screens/CadastroCliente'
import CriarOrdemDeServico from '../Screens/CriarOrdemDeServico'
import CadastrarFuncionario from './../Screens/CadastrarFuncionario';
import CadastrarServico from './../Screens/CadastrarServico';
import CadastrarUsuario from '../Screens/CadastrarUsuario'
import Details from '../Screens/Details'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Login' // Controle de rota inicial
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeNavigationTabs} />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario}
            options={{
                headerShown: true,
                headerTitle: 'Cadastrar Usuário',
            }} />

        <Stack.Screen name="CriarOrdemDeServico" component={CriarOrdemDeServico}
            options={{
                headerShown: true,
                headerTitle: 'Criar Ordem de Serviço',
            }} />

        <Stack.Screen name="Details" component={Details}
            options={{
                headerShown: true,
                headerTitle: 'Detalhes da OS',
            }} />
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
            <Stack.Screen name="Cadastrar Clientes" component={CadastrarCliente} />
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

export function CadastrarFuncionarioNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Cadastrar Funcionário" component={CadastrarFuncionario} />
        </Stack.Navigator>
    )
}

export function CadastrarServicoNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Cadastrar Serviços" component={CadastrarServico} />
        </Stack.Navigator>
    )
}

export function CadastrarUsuarioNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Cadastrar Usuário" component={CadastrarUsuario} />
        </Stack.Navigator>
    )
}

export function DetalhesDaOSNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Detalhes da OS" component={Details} />
        </Stack.Navigator>
    )
}