import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  Text,
} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { ServiceCard } from '../Components/ServiceCard';
import { SafeAreaView } from 'react-native-safe-area-context';

import { listarOrdemDeServico } from '../Services/OrdemDeServicoService';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10).replace(/-/g, "/").split("/").reverse().join("/"));
  const [refreshing, setRefreshing] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Converter data para string e formatar para o padrão brasileiro
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "/").split("/").reverse().join("/");
    setDate(dateStr);
    hideDatePicker();
  };



  useEffect(() => {
    obterDados();
  }, []);

  const obterDados = () => {
    listarOrdemDeServico()
      .then(response => {
        setLoading(true);
        setData(response);
      }).catch(error => {

      }).finally(() => {
        setLoading(false);
      })
  };

  const onRefresh = () => {
    setLoading(true);
    obterDados();
  };

  const jsxEmpity = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nenhum serviço encontrado</Text>
      </View>
    )
  }

  const jsxServicos = () => (
    <SafeAreaView>
      {/* <View style={styles.data_container}>
        <View>
          <Text style={styles.data_seleciona}>Data: {date} </Text>
        </View>
        <View style={styles.btn_filtrar}>
          <Button title="Filtrar" onPress={showDatePicker} style={styles.filtro} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View> */}
      <FlatList
        data={data.sort((a, b) => a.id_os - b.id_os)}
        renderItem={Item}
        ListEmptyComponent={jsxEmpity}
        style={styles.list}
        key={item => item.id_ordemdeservico}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('CriarOrdemDeServico')}
      >
        <Icon name="add" style={styles.button} />
      </TouchableOpacity>
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
    marginTop: "auto",
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  button: {
    resizeMode: 'contain',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 50,
    height: 50,
    color: '#fff',
    fontSize: 40,
    borderRadius: 100,
    left: "80%",
    bottom: "auto",
    backgroundColor: '#0094df',
    marginTop: 10,
  },
  // filtro: {
  //   width: 100,
  //   height: 50,
  //   color: '#fff',
  //   fontSize: 20,
  //   borderRadius: 100,
  //   left: 330,
  //   bottom: -350,
  //   backgroundColor: '#0094df',
  // },
  // data_container: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: 10,
  //   backgroundColor: '#fff',
  // },
  // data_seleciona: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#000',
  // },
  // btn_filtrar: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: 10,
  //   backgroundColor: '#fff',
  // },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    margin: 20,
  },
});

export default Home;