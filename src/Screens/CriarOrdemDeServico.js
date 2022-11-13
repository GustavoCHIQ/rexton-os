import React from "react";
import {
    View,
    TextInput,
    Button,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';

const CriarOrdemDeServico = () => {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.container}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do cliente"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do serviço"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor do serviço"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite a data do serviço"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite a hora do serviço"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do técnico"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor do técnico"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor total"
                />
                <Button title="Cadastrar" />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        width: '90%',
        height: 45,
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15,
        padding: 10,
    },
});


export default CriarOrdemDeServico;