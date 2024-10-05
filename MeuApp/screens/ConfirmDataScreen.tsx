import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const ConfirmDataScreen = () => {
  const [loading, setLoading] = React.useState(false);

  const handleConfirm = () => {
    setLoading(true);
    // Simular uma ação, como uma requisição à API
    setTimeout(() => {
      setLoading(false);
      alert("Dados confirmados!");
    }, 2000); // Exemplo de tempo de carregamento simulado
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar Dados</Text>
      
      <View style={styles.dataRow}>
        <Text style={styles.label}>Ganhos Recebidos:</Text>
        <Text style={styles.value}>R$ 5,00</Text>
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.label}>Despesas Essenciais:</Text>
        <Text style={styles.value}>R$ 2,00</Text>
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.label}>Despesas Não Essenciais:</Text>
        <Text style={styles.value}>R$ 1,00</Text>
      </View>

      <Text style={styles.label}>Instituições Consultadas:</Text>
      <View style={styles.institutions}>
        <Text style={styles.institution}>- BB</Text>
        <Text style={styles.institution}>- CEF</Text>
        <Text style={styles.institution}>- BRA</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEdit}>
            <Text style={styles.buttonText}>Editar</Text>
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
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  institutions: {
    marginVertical: 10,
  },
  institution: {
    fontSize: 16,
    color: '#000',
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
