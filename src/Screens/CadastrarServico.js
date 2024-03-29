import React, { useState } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';

import Api from "../Services/Api";
import { useNavigation } from '@react-navigation/native';

const CadastrarServico = () => {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const navigation = useNavigation();

    const criarServico = () => {
        const servico = {
            descricao: descricao,
            valor: valor,
        }

        if (!descricao || !valor) {
            Alert.alert(
                'Erro',
                'Preencha todos os campos',
                [{ text: 'OK' }],
            )
            return;
        } else {
            Api.post('/servico', servico)
                .then(response => {
                    Alert.alert(
                        'Sucesso',
                        'Serviço cadastrado com sucesso',
                        [{ text: 'OK' }],
                    )
                    setTimeout(() => {
                        navigation.goBack();
                    }, 2000);
                })
                .catch(error => {
                    Alert.alert(
                        'Erro',
                        'Erro ao cadastrar serviço',
                        [{ text: 'OK' }],
                    )
                })
        }
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView styles={styles.container} behavior='padding'>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder='Descrição do serviço'
                            onChangeText={text => setDescricao(text)}
                            value={descricao}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Valor do serviço'
                            keyboardType="numeric"
                            onChangeText={text => setValor(text)}
                            value={valor}
                        />
                        <View style={styles.button}>
                            <Button
                                title='Cadastrar'
                                onPress={criarServico}
                                style={styles.button}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 8,
        padding: 10,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
    button: {
        width: 300,
        marginTop: 10,
        backgroundColor: '#fff',
    }
})

export default CadastrarServico;
