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
                        <Text style={styles.cardDescriptionText}>Cliente: {cliente}</Text>
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
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        height: 100,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardHeader: {
        width: '100%',
        height: 5,
        backgroundColor: '#f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 10,
    },
    cardBody: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    cardTitle: {
        width: '100%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitleText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    img: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});