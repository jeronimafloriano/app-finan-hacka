import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmDataScreen = () => {
  const navigation = useNavigation(); 
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [ganhos, setGanhos] = useState("R$ 1000,00");
  const [despesasEssenciais, setDespesasEssenciais] = useState("R$ 500,00");
  const [despesasNaoEssenciais, setDespesasNaoEssenciais] = useState("R$ 200,00");


  const instituicoes = ['BB', 'CEF', 'BRA'];

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Finanças', {
        screen: 'FinanceScreen',
      });
    }, 1000); 
  };
  

  const handleEdit = () => {
    setIsEditing(!isEditing); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar Dados</Text>

      {/* Caixa para "Ganhos Recebidos" */}
      <View style={styles.item}>
        <Text style={styles.itemText}>Ganhos Recebidos</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={ganhos}
            onChangeText={setGanhos}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.value}>{ganhos}</Text>
        )}
      </View>

      {/* Caixa para "Despesas Essenciais" */}
      <View style={styles.item}>
        <Text style={styles.itemText}>Despesas Essenciais</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={despesasEssenciais}
            onChangeText={setDespesasEssenciais}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.value}>{despesasEssenciais}</Text>
        )}
      </View>

      {/* Caixa para "Despesas Não Essenciais" */}
      <View style={styles.item}>
        <Text style={styles.itemText}>Despesas Não Essenciais</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={despesasNaoEssenciais}
            onChangeText={setDespesasNaoEssenciais}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.value}>{despesasNaoEssenciais}</Text>
        )}
      </View>

      {/* Caixa para "Instituições Consultadas" */}
      <View style={styles.item}>
        <Text style={styles.itemText}>Instituições Consultadas</Text>
        <View style={styles.institutionContainer}>
          {instituicoes.map((instituicao, index) => (
            <Text key={index} style={styles.institutionText}>- {instituicao}</Text>
          ))}
        </View>
      </View>

      {/* Loading e botões de ação */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEdit} onPress={handleEdit}>
            <Text style={styles.buttonText}>{isEditing ? 'Salvar' : 'Editar'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonConfirm} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      )}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5, 
  },
  institutionContainer: {
    marginTop: 5,
  },
  institutionText: {
    fontSize: 16,
    color: '#000000',
    marginTop: 2, 
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#007AFF',
    width: 100,
    textAlign: 'right',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  buttonEdit: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
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

export default ConfirmDataScreen;
