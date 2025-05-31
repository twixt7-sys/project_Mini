import React, { useEffect, useState } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import 'expo-router/entry';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const HomeScreen = () => {

  const navigator = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      router.push('/screens/homescreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Mini Logo.png')} // Replace with your logo URL
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default HomeScreen;
