import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState<string[]>([]);
  const [showInstituicoes, setShowInstituicoes] = useState(false);


  const logos = {
    BB: require('../assets/bb-logo.png'),
    CEF: require('../assets/cef-logo.png'),
    BRA: require('../assets/bra-logo.png'),
  };

  const instituicoes = ['BB', 'CEF', 'BRA'];

  const handleConfirm = () => {
    navigation.navigate('Finanças', {
      screen: 'InitScreen',
    });
  };

  const toggleInstituicao = (instituicao: string) => {
    if (instituicaoSelecionada.includes(instituicao)) {
      setInstituicaoSelecionada(instituicaoSelecionada.filter((item) => item !== instituicao));
    } else {
      setInstituicaoSelecionada([...instituicaoSelecionada, instituicao]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao seu novo jeito de organizar as finanças!</Text>
      <Text style={styles.subtitle}>Vamos juntos conquistar seus objetivos?</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      {/* Seção das instituições */}
      <TouchableOpacity style={styles.institutionToggle} onPress={() => setShowInstituicoes(!showInstituicoes)}>
        <Text style={styles.label}>Compartilhar Open Finance</Text>
        <MaterialIcons name={showInstituicoes ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
      </TouchableOpacity>

      {showInstituicoes && (
        <View style={styles.institutionList}>
          {instituicoes.map((instituicao, index) => (
            <TouchableOpacity
              key={index}
              style={styles.institutionItem}
              onPress={() => toggleInstituicao(instituicao)}
            >
              {/* Ícone da caixinha de seleção */}
              <CheckBox
                checked={instituicaoSelecionada.includes(instituicao)}
                onPress={() => toggleInstituicao(instituicao)}
                containerStyle={styles.checkBoxContainer}
                checkedIcon={<MaterialIcons name="check" size={24} color="black" />} // Ícone de "V" preto
                uncheckedIcon={<MaterialIcons name="check-box-outline-blank" size={24} color="black" />} // Ícone de caixa vazia
              />

              {/* Nome da instituição */}
              <Text style={styles.institutionText}>{instituicao}</Text>

              {/* Logo da instituição */}
              <Image source={logos[instituicao]} style={styles.logo} />
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  institutionToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  institutionList: {
    width: '100%',
    paddingVertical: 10,
  },
  institutionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    paddingBottom: 10,
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginRight: 10, 
  },
  institutionText: {
    fontSize: 16,
    flex: 1, 
  },
  logo: {
    width: 30, 
    height: 30,
    marginLeft: 10, 
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
