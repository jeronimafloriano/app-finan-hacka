import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryScreen({ route }) {
  const { transactions } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>History</Text>
      {transactions.length === 0 ? (
        <Text style={styles.noTransactions}>No transactions yet</Text>
      ) : (
        transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionCard}>
            <Ionicons
              name={transaction.amount > 0 ? 'arrow-down-circle-outline' : 'arrow-up-circle-outline'}
              size={24}
              color={transaction.amount > 0 ? 'green' : 'red'}
            />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>
                {transaction.date} - {transaction.time}
              </Text>
              <Text style={styles.transactionDescription}>
                {transaction.description}
              </Text>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                transaction.amount > 0 ? styles.income : styles.expense,
              ]}
            >
              {transaction.amount > 0 ? '+' : ''}
              R$ {Math.abs(transaction.amount).toFixed(2).replace('.', ',')}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noTransactions: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  transactionCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionDate: {
    fontSize: 12,
    color: 'gray',
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  income: {
    color: 'green',
  },
  expense: {
    color: 'red',
  },
});