import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Api from '../Services/Api';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    const usuario = {
      email: email,
      senha: senha,
    };

    if (!email || !senha) {
      Alert.alert(
        'Erro',
        'Preencha todos os campos para continuar',
        [{ text: 'OK' }],
      )
      return;
    } else {
      Api.post('/login', usuario)
        .then(response => {
          Alert.alert(
            'Sucesso',
            'Login realizado com sucesso',
            [{ text: 'OK' }],
          )
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000);
        })
        .catch(error => {
          Alert.alert(
            'Erro',
            'Usuário ou senha inválidos',
            [{ text: 'OK' }],
          )
        });
    }
  };


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={
        Platform.OS === 'ios' ? 'padding' : null
      } style={styles.container}>
        <Image style={styles.logo} source={require('../Assets/logo.png')} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => logar()}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          {/* Acessar tela de cadastro de usuario */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarUsuario')}>
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
  logo: {
    width: 300,
    height: 320,
    marginBottom: 50,
    left: -15,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 75,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#3498db',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Login;