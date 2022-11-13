import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
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
    width: 330,
    height: 350,
    marginBottom: 20,
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
    height: 50,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Login;