import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const ConteudoScreen = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: "Olá! Como posso te ajudar com assuntos financeiros hoje?", tipo: 'sistema' },
  ]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // New error message state

  const noticias = [
    { id: 1, titulo: "Fundamentos da Educação Financeira", resumo: "Entenda os conceitos básicos de finanças pessoais..." },
    { id: 2, titulo: "Investimentos para Iniciantes", resumo: "Aprenda os princípios fundamentais dos investimentos..." },
    { id: 3, titulo: "Planejamento de Aposentadoria", resumo: "Estratégias para garantir uma aposentadoria confortável..." },
  ];

  const handlePress = (titulo) => {
    alert(`Você clicou na ${titulo}`);
  };

  const handleIconPress = () => {
    setChatVisible(!chatVisible);
  };

  const handleSendMessage = async () => {
    if (mensagem.trim() !== '') {
      const novaMensagem = { id: mensagens.length + 1, texto: mensagem, tipo: 'usuario' };
      setMensagens([...mensagens, novaMensagem]);
      setMensagem('');
      setLoading(true);
      setErrorMessage(''); // Reset error message

      try {
        const API_KEY = Constants.manifest.extra.apiKey;
        const API_ENDPOINT = Constants.manifest.extra.apiEndpoint;
        const API_VERSION = Constants.manifest.extra.apiVersion;

        const response = await fetch(`${API_ENDPOINT}/sopenai/deployments/gpt-4/chat/completions?api-version=${API_VERSION}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': `${API_KEY}`, 
            'azure-region': 'canadacentral'
          },
          body: JSON.stringify({
            messages: [
              { role: 'system', content: 'Você é um assistente virtual financeiro.' },
              { role: 'user', content: mensagem }
            ],
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch response from AI');
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        const novaMensagemAI = { id: mensagens.length + 2, texto: aiResponse, tipo: 'sistema' };
        setMensagens((prevMensagens) => [...prevMensagens, novaMensagemAI]);
      } catch (error) {
        setErrorMessage('Erro de conexão'); // Set the error message
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.greeting}>Educação Financeira</Text>
        </View>

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

      {/* Caixa de chat ou ícone */}
      {chatVisible ? (
        <View style={styles.chatBox}>
          <TouchableOpacity style={styles.closeButton} onPress={handleIconPress}>
            <Ionicons name="close-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.chatTitle}>Chat</Text>

          <ScrollView style={styles.chatMessages}>
            {mensagens.map((mensagem) => (
              <Text
                key={mensagem.id}
                style={mensagem.tipo === 'sistema' ? styles.systemMessage : styles.userMessage}
              >
                {mensagem.texto}
              </Text>
            ))}
            {loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#007BFF" />
                <Text style={styles.loadingText}>Carregando...</Text>
              </View>
            )}
            {errorMessage !== '' && (
              <Text style={styles.errorMessage}>{errorMessage}</Text> // Display error message
            )}
          </ScrollView>

          <View style={styles.chatContent}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua pergunta..."
              value={mensagem}
              onChangeText={(text) => setMensagem(text)}
            />
            <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
              <Ionicons name="send-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity style={styles.iconButton} onPress={handleIconPress}>
          <Image source={require('../assets/chat.png')} style={styles.iconImage} />
        </TouchableOpacity>
      )}
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
  chatBox: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 350,
    height: 450,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 15,    
    right: 15,  
    zIndex: 10, 
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  chatMessages: {
    flex: 1,
    marginBottom: 10,
  },
  systemMessage: {
    fontSize: 16,
    color: 'black',
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  userMessage: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  chatContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
});

export default ConteudoScreen;
