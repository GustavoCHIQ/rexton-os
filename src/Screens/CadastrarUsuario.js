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

import { useNavigation } from '@react-navigation/native';

import Api from "../Services/Api";

const CadastrarUsuario = () => {
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigation = useNavigation();

    const cadastrar = () => {
        if (senha !== confirmarSenha) {
            setErro('As senhas não conferem');
            return;
        }

        const usuario = {
            nome: nome,
            rg: rg,
            cpf: cpf,
            endereco: endereco,
            email: email,
            telefone: telefone,
            senha: senha,
        };

        Api.post('/usuario', usuario)
            .then(response => {
                Alert.alert(
                    'Sucesso',
                    'Usuário cadastrado com sucesso',
                    [{ text: 'OK' }],
                )
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 2000);
            })
            .catch(error => {
                Alert.alert(
                    'Erro',
                    'Erro ao cadastrar usuário',
                    [{ text: 'OK' }],
                )
            });
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            value={nome}
                            onChangeText={setNome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='RG'
                            value={rg}
                            keyboardType='numeric'
                            onChangeText={setRg}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='CPF'
                            value={cpf}
                            keyboardType='numeric'
                            onChangeText={setCpf}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Endereço'
                            value={endereco}
                            onChangeText={setEndereco}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Telefone'
                            value={telefone}
                            keyboardType='numeric'
                            onChangeText={setTelefone}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Confirmar senha'
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry={true}
                        />
                        <Button
                            title='Cadastrar'
                            onPress={cadastrar}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
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
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CadastrarUsuario;