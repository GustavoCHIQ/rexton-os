import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';

import Api from './../services/Api';

import { ServiceCard } from '../components/ServiceCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const searchBar = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  input: {
    fontSize: 10,
    padding: 20,
    paddingLeft: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
  },
  icon: {
    color: '#747476',
    position: 'absolute',
    left: 20,
    bottom: 22,
    fontSize: 22,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 25,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  imgPokeball: {
    zIndex: -1,
    opacity: 0.025,
    width: 400,
    height: 400,
    position: 'absolute',
    alignSelf: 'center',
    top: -200,
  },
  title: {
    left: 25,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 10,
    lineHeight: 15,
    marginTop: 10,
    left: 25
  },
  list: {
    marginTop: 45,
  },
});

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    pegarPokemon();
  }, []);

  const pegarPokemon = () => {
    Api.get('/ordemdeservico')
      .then(response => {
        setLoading(true);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const jsxPokemons = () => (
    <SafeAreaView styles={styles.container} >
      <View>
      </View>
      <View style={searchBar.container}>
      </View>
      <FlatList
        data={dataFiltrado}
        renderItem={Item}
        style={styles.list} />
    </SafeAreaView>
  );

  const Item = propsItem => {
    return (
      <ServiceCard servico={propsItem.item} />
    );
  };

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  let dataFiltrado;

  if (q == '') {
    dataFiltrado = data;
  } else {
    dataFiltrado = [];
    let q2 = q.toUpperCase();
    for (let key in data) {
      let texto = `${data[key].name} ${data[key].id}`;
      if (texto.toUpperCase().indexOf(q2) >= 0) {
        dataFiltrado.push(data[key]);
      }
    }
  }
  if (loading) {
    return jsxLoading();
  } else {
    return jsxPokemons();
  }
};

export default Home;