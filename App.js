import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from './app/components/SearchBar';
import PasswordContainer from './app/components/PasswordContainer';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Your Passwords</Text>
          <Image
            style={styles.addButton} 
            source={require('./assets/addButton.png')}
          />
        </View>
        <SearchBar></SearchBar>
        <ScrollView>
          <PasswordContainer></PasswordContainer>
          <PasswordContainer></PasswordContainer>
          <PasswordContainer></PasswordContainer>
          <PasswordContainer></PasswordContainer>
          <PasswordContainer></PasswordContainer>
          <PasswordContainer></PasswordContainer>
        </ScrollView>
        <View style={styles.footer}>
          <Icon name="sort" size={30} color="#ffffff" />
          <Text style={{color: '#ffffff', fontSize: 15}}>N items</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
  footer:{
    padding: 10,               // Add padding for a better look
    justifyContent: 'space-between',   // Center content vertically
    alignItems: 'center',       // Center content horizontally
    flexDirection: 'row', 
    fontSize: 1,

  }
});
