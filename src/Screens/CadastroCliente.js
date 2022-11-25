import React, { useState } from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../Services/Api';

const CadastrarCliente = () => {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const navigation = useNavigation();

  const formatarData = (data) => {
    const dataFormatada = data.split('/').reverse().join('-');
    console.log(dataFormatada);
    return dataFormatada;
  }

  const cadastrarCliente = () => {
    const cliente = {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
      cidade: cidade,
      estado: estado,
      telefone: telefone,
      email: email,
      dataNascimento: formatarData(dataNascimento)
    }
    Api.post('/cliente', cliente)
      .then(response => {
        Alert.alert(
          'Sucesso',
          'Cliente cadastrado com sucesso',
          [{ text: 'OK' }],
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000)
        )
      })
      .catch(error => {
        Alert.alert(
          'Erro',
          'Erro ao cadastrar cliente',
          [{ text: 'OK' }],
        )
      })
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <KeyboardAvoidingView styles={styles.container} behavior='padding'>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            value={cpf}
            keyboardType='numeric'
            onChangeText={text => setCpf(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu Endereço"
            value={endereco}
            onChangeText={text => setEndereco(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua Cidade"
            value={cidade}
            onChangeText={text => setCidade(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu Estado"
            value={estado}
            maxLength={2}
            onChangeText={text => setEstado(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu Telefone"
            keyboardType='numeric'
            value={telefone}
            onChangeText={text => setTelefone(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua Data de Nascimento"
            value={dataNascimento}
            onChangeText={text => setDataNascimento(text)}
          />
          <View style={styles.button}>
            <Button
              title='Cadastrar'
              onPress={cadastrarCliente}
              style={styles.button}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default CadastrarCliente;