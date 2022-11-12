import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Button
} from 'react-native';

import { ServiceCard } from '../Components/ServiceCard';
import { SafeAreaView } from 'react-native-safe-area-context';

import Api from '../Services/Api';
import { Icon } from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    obterDados();
  }, []);

  const obterDados = () => {
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

  const jsxServicos = () => (
    <SafeAreaView>
      <View>
      </View>
      <View>
      </View>
      <FlatList
        data={data}
        renderItem={Item}
        style={styles.list} />
      {/* criar botao para add */}
      <View style={styles.button}>
        <Button
          title="Adicionar"
          onPress={() => { console.log('Adicionar') }}
        />
      </View>
    </SafeAreaView>
  );

  const Item = propsItem => {
    return (
      <View>
        <ServiceCard servico={propsItem.item} />
      </View>
    );
  };

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  if (loading) {
    return jsxLoading();
  } else {
    return jsxServicos();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#fff',
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
    marginTop: -20,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  button: {
    // resizeMode: 'contain',
    // textAlignVertical: 'center',
    // textAlign: 'center',
    // width: 50,
    // height: 50,
    // color: '#fff',
    // fontSize: 40,
    // borderRadius: 100,
    // left: 330,
    // bottom: -350,
    // backgroundColor: '#0094df',
  }
});

export default Home;