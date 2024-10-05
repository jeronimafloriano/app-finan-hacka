import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConteudoScreen = () => {
  // Exemplo de dados para as notícias
  const noticias = [
    { id: 1, titulo: "Fundamentos da Educação Financeira", resumo: "Entenda os conceitos básicos de finanças pessoais, incluindo orçamento, poupança, e planejamento financeiro. Ideal para iniciantes que desejam entender como gerenciar seu dinheiro de forma eficaz." },
    { id: 2, titulo: "Investimentos para Iniciantes", resumo: "Aprenda os princípios fundamentais dos investimentos, incluindo ações, títulos, fundos mútuos e imóveis, que podem ajudar a tomar decisões de investimento informadas." },
    { id: 3, titulo: "Planejamento de Aposentadoria", resumo: "Estratégias para garantir uma aposentadoria confortável, como planos de previdência, investimentos de longo prazo e gestão de riscos." },
  ];

  const handlePress = (titulo) => {
    alert(`Você clicou na ${titulo}`);
  };

  const handleIconPress = () => {
    // Adicione a lógica para o que acontece ao clicar no ícone
    alert("Ícone clicado!");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.greeting}>Conteúdo</Text>
        </View>

        {/* Container para as notícias */}
        <View style={styles.noticiasContainer}>
          {noticias.map((noticia) => (
            <TouchableOpacity key={noticia.id} style={styles.noticiaContainer} onPress={() => handlePress(noticia.titulo)}>
              <View style={styles.noticiaContent}>
                <Text style={styles.noticiaTitulo}>{noticia.titulo}</Text>
                <Text style={styles.noticiaResumo}>{noticia.resumo}</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={16} color="black" style={styles.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Ícone no canto inferior direito, fora do ScrollView */}
      <TouchableOpacity style={styles.iconButton} onPress={handleIconPress}>
        <Image source={require('../assets/chat.png')} style={styles.iconImage} /> {/* Atualize o caminho para o local da imagem */}
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 20,
  },
  noticiasContainer: {
   flexDirection: 'column',
    justifyContent: 'space-between', 
  },
  noticiaContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  noticiaContent: {
    marginBottom: 10, 
  },
  noticiaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noticiaResumo: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  iconButton: {
    position: 'absolute',
    bottom: 30, 
    right: 20,
    elevation: 2, 
  },
  iconImage: {
    width: 60, 
    height: 60,
  },
});

export default ConteudoScreen;
