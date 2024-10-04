import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
  const objetivos = [
    {
      text: "Entender minhas movimentações financeiras",
      icon: "logo-whatsapp", 
    },
    {
      text: "Descobrir o que mais prejudica minhas finanças",
      icon: "logo-whatsapp", 
    },
    {
      text: "Ter uma previsão e me preparar para gastos futuros",
      icon: "logo-whatsapp", 
    },
    {
      text: "Criar um planejamento financeiro personalizado",
      icon: "logo-whatsapp", 
    },
    {
      text: "Centralizar todos os meus gastos em uma só plataforma",
      icon: "logo-whatsapp", 
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chegou a hora de falar sobre suas expectativas com a EloDuca. Qual seu principal objetivo?</Text>
      {objetivos.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name={"logo-whatsapp"} size={40} color="green" /> 
          </View>
          <Text style={styles.itemText}>{item.text}</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      ))}
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
  iconContainer: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#000000',
    flex: 1,
  },
  arrow: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default HomeScreen;
