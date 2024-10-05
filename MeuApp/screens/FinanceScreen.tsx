import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FinanceScreen() {
  
  // State for budget amount
  const [budgetAmount, setBudgetAmount] = useState(1000);

  // State for Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // State to determine transaction type ('income' or 'expense')
  const [transactionType, setTransactionType] = useState('income');

  // States for input fields
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  // Handler to open modal for income
  const handleAddIncome = () => {
    setTransactionType('income');
    setDescription('');
    setValue('');
    setModalVisible(true);
  };

  // Handler to open modal for expense
  const handleAddExpense = () => {
    setTransactionType('expense');
    setDescription('');
    setValue('');
    setModalVisible(true);
  };

  // Handler for submitting the transaction
  const handleSubmit = () => {
    const numericValue = parseFloat(value.replace(',', '.'));

    if (isNaN(numericValue) || numericValue <= 0) {
      Alert.alert('Valor Inválido', 'Por favor, insira um valor válido maior que 0.');
      return;
    }

    if (transactionType === 'income') {
      setBudgetAmount((prev) => prev + numericValue);
    } else {
      setBudgetAmount((prev) => prev - numericValue);
    }

    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, João</Text>
        <Text style={styles.subHeader}>
          Aqui você pode ver uma visão geral das suas finanças
        </Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>

      {/* Budget Section */}
      <View style={styles.budgetSection}>
        <Text style={styles.budgetTitle}>Minhas receitas</Text>
        <Text style={styles.budgetAmount}>
          R$ {budgetAmount.toFixed(2).replace('.', ',')}
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddIncome}
            accessibilityLabel="Adicionar renda"
          >
            <Ionicons name="add-circle-outline" size={16} color="black" />
            <Text style={styles.buttonText}>Adicionar renda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddExpense}
            accessibilityLabel="Adicionar despesa"
          >
            <Ionicons name="remove-circle-outline" size={16} color="black" />
            <Text style={styles.buttonText}>Adicionar despesa</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Budget Overview */}
      <View style={styles.overview}>
        <Text style={styles.sectionTitle}>
          Visão geral das finanças no último mês
        </Text>
        <View style={styles.overviewRow}>
          <View style={styles.overviewCard}>
            <Ionicons
              name="arrow-up-circle-outline"
              size={24}
              color="green"
            />
            <Text style={styles.percentage}>+2.63%</Text>
            <Text style={styles.amount}>Rendimentos</Text>
            <Text style={styles.amount}>R$3.000,00</Text>
          </View>
          <View style={styles.overviewCard}>
            <Ionicons
              name="arrow-down-circle-outline"
              size={24}
              color="red"
            />
            <Text style={styles.percentageRed}>-1.89%</Text>
            <Text style={styles.amount}>Gastos</Text>
            <Text style={styles.amount}>R$1.450,00</Text>
          </View>
        </View>
      </View>

      {/* My Plan Section */}
      <View style={styles.planSection}>
        <Text style={styles.sectionTitle}>Meu Objetivo</Text>
        <View style={styles.planRow}>
          <View style={styles.planCard}>
            <Text style={styles.planCategory}>#Imóvel</Text>
            <Text style={styles.planTitle}>Comprar Imóvel</Text>
            <View style={styles.progressContainer}>
              <Text>R$240</Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${(240 / 400) * 100}%` },
                  ]}
                />
              </View>
              <Text>R$400</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Modal for Adding Income/Expense */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                {transactionType === 'income' ? 'Adicionar Renda' : 'Adicionar Despesa'}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={description}
                onChangeText={setDescription}
              />
              <TextInput
                style={styles.input}
                placeholder="Valor (R$)"
                value={value}
                onChangeText={setValue}
                keyboardType="decimal-pad"
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.submitButton]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.modalButtonText}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  header: {
    marginTop: 50,
    position: 'relative',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  budgetSection: {
    backgroundColor: '#90EE90',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  budgetTitle: {
    fontSize: 16,
    color: 'gray',
  },
  budgetAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6FFDA',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  overview: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overviewCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  percentage: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  percentageRed: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
  amount: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  planSection: {
    marginTop: 20,
  },
  planRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  planCategory: {
    color: 'gray',
    marginBottom: 5,
  },
  planTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FFCCCC',
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#CCFFCC',
    marginLeft: 10,
  },
  modalButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
