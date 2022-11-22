import React, { useState } from "react";

import {
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Button
} from "react-native";

import Api from "../Services/Api";

const CadastrarFuncionario = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataAdmissao, setDataAdmissao] = useState('');
    const [dataDemissao, setDataDemissao] = useState('');

    const formatarData = (data) => {
        const dataFormatada = data.split('/').reverse().join('-');
        console.log(dataFormatada);
        return dataFormatada;
    }

    const criarFuncionario = () => {
        const funcionario = {
            nome: nome,
            cpf: cpf,
            endereco: endereco,
            dataNascimento: formatarData(dataNascimento),
            dataAdmissao: formatarData(dataAdmissao),
            dataDemissao: formatarData(dataDemissao)
        }

        if (!nome || !cpf || !endereco || !dataNascimento || !dataAdmissao || !dataDemissao) {
            alert('Preencha todos os campos!');
            return;
        } else {
            Api.post('/funcionario', funcionario)
                .then(response => {
                    alert('Funcionário cadastrado com sucesso!');
                    navigation.navigate('Home');
                })
                .catch(error => {
                    alert('Erro ao cadastrar funcionário!');
                })
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <KeyboardAvoidingView styles={styles.container} behavior='padding'>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            value={nome}
                            onChangeText={nome => setNome(nome)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='CPF'
                            value={cpf}
                            keyboardType='numeric'
                            maxLength={11}
                            onChangeText={cpf => setCpf(cpf)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Endereço'
                            value={endereco}
                            onChangeText={endereco => setEndereco(endereco)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Data de Nascimento'
                            value={dataNascimento}
                            onChangeText={dataNascimento => setDataNascimento(dataNascimento)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Data de Admissão'
                            value={dataAdmissao}
                            onChangeText={dataAdmissao => setDataAdmissao(dataAdmissao)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Data de Demissão'
                            value={dataDemissao}
                            onChangeText={dataDemissao => setDataDemissao(dataDemissao)}
                        />
                        <View style={styles.button}>
                            <Button
                                title='Cadastrar'
                                onPress={criarFuncionario}
                                style={styles.button}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    );
};

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
    button: {
        width: 300,
        marginTop: 10,
        backgroundColor: '#fff',
    }
});

export default CadastrarFuncionario;