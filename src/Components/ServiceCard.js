import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const ServiceCard = ({ servico }) => {
    const navigation = useNavigation();

    const handleDetails = (ordemdeservico) => {
        navigation.navigate('Details', { ordemdeservico });
    }


    const cliente = servico?.cliente?.nome;
    const idOS = servico.id_os;
    const dataFormatada = servico.data_inicio.split('T')[0].split('-').reverse().join('/');

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => handleDetails(servico)}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.img} source={require('../Assets/red-flag.png')} />
                    <View>
                        <Text style={styles.nomeCliente}>Cliente: {cliente}</Text>
                        <Text style={styles.cardTitleText}>ID OS: {idOS}</Text>

                        <Text style={styles.cardTitleText}>Data: {dataFormatada}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    card: {
        width: 350,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        elevation: 5,
        marginBottom: 10,
    },
    img: {
        width: 60,
        height: 60,
        marginRight: 20,
        marginLeft: -10,
    },
    nomeCliente: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -10,
        borderRadius: 5,
    },
    cardTitleText: {
        color: '#000',
        fontSize: 14,
        marginLeft: -10,
        borderRadius: 5,
    },
});