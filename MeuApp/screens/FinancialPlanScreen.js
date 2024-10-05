// FinancialPlanScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinancialPlanScreen = ({ route }) => {
  const { totalIncome, totalExpense, totalEssentialExpense, totalNonEssentialExpense, totalInvestment } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plano Financeiro: Comprar Imóvel</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumo Financeiro</Text>
        <Text>Receita Total: R$ {totalIncome.toFixed(2).replace('.', ',')}</Text>
        <Text>Despesa Total: R$ {totalExpense.toFixed(2).replace('.', ',')}</Text>
        <Text>Despesa Essencial: R$ {totalEssentialExpense.toFixed(2).replace('.', ',')}</Text>
        <Text>Despesa Não Essencial: R$ {totalNonEssentialExpense.toFixed(2).replace('.', ',')}</Text>
        <Text>Investimentos: R$ {totalInvestment.toFixed(2).replace('.', ',')}</Text>
      </View>

      <View style={styles.actions}>
        <Text style={styles.action}>Diminuir despesas não essenciais em 20%</Text>
        <Text style={styles.action}>Aumentar os investimentos em 5%</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actions: {
    marginTop: 20,
  },
  action: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 10,
  },
});

export default FinancialPlanScreen;
