// create form to sign up

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity, StyleSheet
} from 'react-native';

export const Cadastro = ({ navigation }) => {

  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={
        Platform.OS === 'ios' ? 'padding' : null
      } style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu RG"
          value={rg}
          onChangeText={text => setRg(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={text => setCpf(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu endereço"
          value={endereco}
          onChangeText={text => setEndereco(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          value={telefone}
          onChangeText={text => setTelefone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View >
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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