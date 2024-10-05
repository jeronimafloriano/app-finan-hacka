import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const objetivos = [
    {
      text: "Pagar Dívidas",
      icon: "payments", 
    },
    {
      text: "Juntar Dinheiro",
      icon: "attach-money", 
    },
    {
      text: "Comprar Imóvel",
      icon: "house", 
    },
    {
      text: "Comprar Veículo",
      icon: "directions-car-filled", 
    },
    {
      text: "Investir",
      icon: "money", 
    },
    {
      text: "Outros",
      icon: "logo-whatsapp", 
    }
  ];

  const handleNavigation = (item) => {
    if (item.text !== "Outros") {
      navigation.navigate('ConfirmDataScreen');
    } else {
      alert('Você clicou na opção "Outros".'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chegou a hora de falar sobre suas expectativas com a EloDuca. Qual seu principal objetivo?</Text>
      {objetivos.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.item} 
          onPress={() => handleNavigation(item)} 
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name={item.icon} size={20} color="black" /> 
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
