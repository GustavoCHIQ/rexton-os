import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Api from "../Services/Api";
import { SelectList } from 'react-native-dropdown-select-list'
import { SafeAreaView } from "react-native-safe-area-context";
import { listarOrdemDeServico } from "../Services/OrdemDeServicoService";

const CriarOrdemDeServico = () => {
    const [cliente, setCliente] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [servico, setServico] = useState('');
    const [observacao, setObservacao] = useState('');

    const [selectedCliente, setSelectedCliente] = useState('');
    const [selectedFuncionario, setSelectedFuncionario] = useState('');
    const [selectedServico, setSelectedServico] = useState('');


    useEffect(() => {
        listarClientes();
        listarFuncionario();
        listarServicos();
    }, []);

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    function listarClientes() {
        Api.get('/cliente')
            .then(response => {
                // extrair somente o nome
                const clientes = response.data.map(cliente => {
                    return {
                        key: cliente.id_cliente,
                        value: cliente.nome
                    }
                });
                setCliente(clientes);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const listarFuncionario = () => {
        Api.get('/funcionario')
            .then(response => {
                // extrair somente o nome
                const funcionarios = response.data.map(funcionario => {
                    return {
                        key: funcionario.id_funcionario,
                        value: funcionario.nome
                    }
                });
                setFuncionario(funcionarios);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const listarServicos = () => {
        Api.get('/servico')
            .then(response => {
                // extrair somente o nome
                const servicos = response.data.map(servico => {
                    return {
                        key: servico.id_servico,
                        value: servico.descricao
                    }
                });
                setServico(servicos);
            })
            .catch(error => {
                console.log(error);
            })
    };

    // Criar uma nova ordem de servico
    const criarOrdemDeServico = () => {
        const ordemDeServico = {
            cliente: selectedCliente,
            funcionario: selectedFuncionario,
            servico: selectedServico,
        };

        Api.post('/ordemdeservico', ordemDeServico)
            .then(response => {
                alert('Ordem de Serviço criada com sucesso!');
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View style={styles.lista_container}>
                    <Text>Cliente</Text>
                    <SelectList
                        data={cliente}
                        placeholder="Selecione um cliente"
                        searchPlaceholder="Pesquisar"
                        setSelected={(val) => setSelectedCliente(val)}
                        selected={selectedCliente}
                        style={styles.lista}
                        onSelect={() => setSelectedCliente}
                        maxHeight={150}
                        keyExtractor={item => item.key}
                    />

                    <Text>Funcionário</Text>
                    <SelectList
                        data={funcionario}
                        placeholder="Selecione um funcionário"
                        searchPlaceholder="Pesquisar"
                        setSelected={(val) => setSelectedFuncionario(val)}
                        selected={selectedFuncionario}
                        style={styles.lista}
                        onSelect={() => setSelectedFuncionario}
                        maxHeight={150}
                        keyExtractor={item => item.key}
                    />

                    <Text>Serviços</Text>
                    <SelectList
                        data={servico}
                        placeholder="Selecione um serviço"
                        searchPlaceholder="Pesquisar"
                        setSelected={(val) => setSelectedServico(val)}
                        selected={selectedServico}
                        style={styles.lista}
                        onSelect={() => setSelectedServico}
                        maxHeight={150}
                        keyExtractor={item => item.key}
                    />

                    <View style={styles.input_observacao}>
                        <Text>Observação</Text>
                        <TextInput
                            style={styles.observacao}
                            onChangeText={text => setObservacao(text)}
                            value={observacao}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Salvar"
                        onPress={() => criarOrdemDeServico()}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    lista_container: {
        paddingTop: 50,
        backgroundColor: '#fff',
        padding: 10,
    },
    lista: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 90,
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
    input_observacao: {
        marginTop: 20,
        marginBottom: 10,
    },
    observacao: {
        height: 100,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    btnCadastrar: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
    },

});


export default CriarOrdemDeServico;