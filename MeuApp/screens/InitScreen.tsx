import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  InitScreen: undefined;
  ConfirmDataScreen: undefined;
};

const InitScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [offsetX] = useState(new Animated.Value(-400));

  const translate = Animated.timing(offsetX, {
    toValue: 0,
    duration: 1000,
    easing: Easing.inOut(Easing.linear),
    useNativeDriver: true,
  });

  const reset = Animated.timing(offsetX, {
    toValue: -430,
    duration: 0,
    useNativeDriver: true,
  });

  const animation = Animated.sequence([translate, reset]);

  useEffect(() => {
    Animated.loop(animation).start();

    const timer = setTimeout(() => {
      navigation.replace('ConfirmDataScreen'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [animation, navigation]);

  const transform = { transform: [{ translateX: offsetX }] };

  return (
    <SafeAreaView>
      <View style={styles.headerContentContainer}>
        <Text style={styles.title1}>
          O Aplicativo está sincronizando seus dados.
        </Text>
      </View>
      <Animated.View style={styles.syncProgressBarContainer}>
        <Animated.View style={[transform, styles.syncProgressBar]} />
        <Animated.View style={[transform, styles.syncProgressBar]} />
        <Animated.View style={[transform, styles.syncProgressBar]} />
        <Animated.View style={[transform, styles.syncProgressBar]} />
      </Animated.View>
      <View style={styles.syncContentContainer}>
        <Text style={styles.title3}>Não feche ou saia do aplicativo.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContentContainer: {
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 40,
  },
  syncContentContainer: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title1: {
    fontWeight: '700',
    fontSize: 32,
  },
  title3: {
    fontWeight: '700',
    fontSize: 18,
  },
  body2: {
    fontSize: 14,
  },
  syncProgressBarContainer: {
    flexDirection: 'row',
  },
  syncProgressBar: {
    height: 4,
    marginHorizontal: 10,
    width: 200,
    backgroundColor: '#0000ff',
  },
});

export default InitScreen;
