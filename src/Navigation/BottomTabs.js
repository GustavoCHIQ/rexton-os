import React from 'react'
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    HomeNavigation,
    CadastroNavigation,
    CadastrarFuncionarioNavigation,
    CadastrarServicoNavigation,
} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='tools'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Serviços
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="CadastroTab"
                component={CadastroNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='users'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Cliente
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="CadastroFuncionarioTab"
                component={CadastrarFuncionarioNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='user-plus'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 60,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Funcionário
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="CadastroServicoTab"
                component={CadastrarServicoNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='plus'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Serviços
                            </Text>
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    );
}