import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../app/components/SearchBar';
import PasswordContainer from '../app/components/PasswordContainer';
import PasswordModal from '../app/components/PasswordModal';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPassword, setSelectedPassword] = useState(null);

  const passwords = [
    { id: 1, name: 'Facebook', details: 'Username: user1, Password: pass123' },
    { id: 2, name: 'Twitter', details: 'Username: user2, Password: pass456' },
    { id: 3, name: 'Instagram', details: 'Username: user3, Password: pass789' },
  ];
  
  const handlePasswordPress = (password) => {
    setSelectedPassword(password);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPassword(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Your Passwords</Text>
        <Icon name="add-circle" size={45} color="#ffffff" onPress={() => navigation.navigate("AddPassword")} />
      </View>
      <SearchBar />
      <ScrollView>
        {passwords.map((password) => (
          <PasswordContainer
            key={password.id}
            appName={password.name}
            username={password.details.split(', ')[0].split(': ')[1]} // Extract username
            password="********" // Hide actual password
            onPress={() => handlePasswordPress(password)}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Icon name="sort" size={30} color="#ffffff" />
        <Text style={{ color: '#ffffff', fontSize: 15 }}>{passwords.length} items</Text>
      </View>

      {/* Modal Component */}
      {selectedPassword && (
        <PasswordModal
          visible={modalVisible}
          password={selectedPassword}
          onClose={closeModal}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A5A5A',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    color: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  addButton: {
    width: 45,
    height: 45,
  },
  footer: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
