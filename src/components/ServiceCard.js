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

    const handleDetails = (pokemonInfo) => {
        navigation.navigate('Details', { pokemonInfo })
    }

    return (
        <TouchableOpacity activeOpacity={0.7}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.img} source={require('../Assets/red-flag.png')} />
                    <View>
                        <Text style={styles.cardDescriptionText}>Cliente: {servico.cliente.nome}</Text>

                        <Text style={styles.cardTitleText}>ID OS: {servico.id_os}</Text>

                        <Text style={styles.cardTitleText}>Data: 25/03/1999 15:30:00</Text>
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
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    cardBody: {
        width: '100%',
        height: 50,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        width: '100%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitleText: {
        fontSize: 18,
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