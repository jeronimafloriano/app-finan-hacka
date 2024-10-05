
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InicioScreen = () => {
  const [cpf, setCpf] = useState('/');
  const navigation = useNavigation();

  const validarCPF = (cpf) => {
    Alert.alert(cpf);
    const cpfLimpo = cpf.replace(/\D/g, '');
    return cpfLimpo.length === 11;
  };

  const handleNext = () => {
    
    Alert.alert(TextInput.toString);

    if (validarCPF(TextInput.toString)) {
      Alert.alert('CPF válido', 'Você pode prosseguir!');
    } else {
      Alert.alert('Erro', 'CPF inválido! Por favor, insira um CPF válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao seu novo jeito de organizar as finanças.</Text>
      <Text style={styles.title}>Vamos juntos conquistar seus objetivos!</Text>

      {/* Campo de CPF com validação */}
      <View style={styles.cpfContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
          maxLength={14} // Limita a 14 caracteres (formato com pontos e traço)
        />
      </View>

      {/* Botão de Próximo */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={handleNext}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  cpfContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  buttonConfirm: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default InicioScreen;
