import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FinanceScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, João</Text>
        <Text style={styles.subHeader}>Aqui você pode ver uma visão geral das suas finanças</Text>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      </View>

      {/* Budget Section */}
      <View style={styles.budgetSection}>
        <Text style={styles.budgetTitle}>Minhas receitas</Text>
        <Text style={styles.budgetAmount}>R$ 1.550,00</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="download-outline" size={16} color="black" />
            <Text style={styles.buttonText}>Adicionar renda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="download-outline" size={16} color="black" />
            <Text style={styles.buttonText}>Adicionar despesa</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Budget Overview */}
      <View style={styles.overview}>
        <Text style={styles.sectionTitle}>Visão geral das finanças no último mês</Text>
        <View style={styles.overviewRow}>
          <View style={styles.overviewCard}>
            <Ionicons name="download-outline" size={24} color="black" />
            <Text style={styles.percentage}>+2.63%</Text>
            <Text style={styles.amount}>Rendimentos</Text>
            <Text style={styles.amount}>R$3.000,00</Text>
          </View>
          <View style={styles.overviewCard}>
            <Ionicons name="download-outline" size={24} color="black" />
            <Text style={styles.percentageRed}>+1.89%</Text>
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
            <View style={styles.progress}>
              <Text>R$249</Text>
              <Text>R$400</Text>
            </View>
          </View>
          {/* <View style={styles.planCard}>
            <Text style={styles.planCategory}>#Trabalho</Text>
            <Text style={styles.planTitle}>Configuração do Setup de Trabalho</Text>
            <View style={styles.progress}>
              <Text>R$249</Text>
            </View>
          </View> */}
        </View>
      </View>
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
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  budgetSection: {
    //backgroundColor: '#DFFF85',
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
  },
  overview: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  },
  percentage: {
    color: 'green',
    fontWeight: 'bold',
  },
  percentageRed: {
    color: 'red',
    fontWeight: 'bold',
  },
  amount: {
    marginTop: 5,
    fontWeight: 'bold',
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
  },
  planCategory: {
    color: 'gray',
    marginBottom: 5,
  },
  planTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
