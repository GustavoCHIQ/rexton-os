import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import Api from "../Services/Api";

const Details = ({ route }) => {

    const valorOS = route.params.ordemdeservico.servico.valor.toFixed(2).replace('.', ',');
    const statusOS = route.params.ordemdeservico.finalizado;

    const status = statusOS ? 'Finalizado' : 'Em andamento';

    const { ordemdeservico } = route.params;
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    const finalizarOS = () => {
        Api.put(`/ordemdeservico/${ordemdeservico.id_os}`, {
            finalizado: true
        })
            .then(response => {
                Alert.alert(
                    'Sucesso',
                    'Ordem de serviço finalizada com sucesso',
                    [{ text: 'OK' }],
                )
                setTimeout(() => {
                    navigation.navigate('Home');
                }, 2000);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.cardTitleText}>ID OS: {ordemdeservico.id_os}</Text>
                <Text style={styles.cardTitleText}>Data: {ordemdeservico.data_inicio.split('T')[0].split('-').reverse().join('/')}</Text>
                <Text style={styles.cardTitleText}>Cliente: {ordemdeservico.cliente.nome}</Text>
                <Text style={styles.cardTitleText}>Funcionário: {ordemdeservico.funcionario.nome}</Text>
                <Text style={styles.cardTitleText}>Descrição: {ordemdeservico.servico.descricao}</Text>
                <Text style={styles.cardTitleText}>Status: {status}</Text>
                <Text style={styles.cardTitleText}>Valor R$: {valorOS}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button title="Finalizar OS" onPress={finalizarOS} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // criar degrade
        backgroundColor: '#4627a0',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

});


export default Details;