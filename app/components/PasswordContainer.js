import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const PasswordContainer = () => {
  return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.textTitle}>App Name</Text>
          <Text style={styles.text}>Username: example_user</Text>
          <Text style={styles.text}>Password: ********</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom:10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Adds shadow for Android
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default PasswordContainer;
