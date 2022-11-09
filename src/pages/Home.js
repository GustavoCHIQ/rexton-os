import { View, Text, StyleSheet } from "react-native"
import AgendaScreen from "../components/Agenda"
// criar pagina principal e listar tarefas por data

export const Home = () => {
  return (
    // <View>
    <AgendaScreen />
    // </View>
  )
}

const styles = StyleSheet.create({

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
})