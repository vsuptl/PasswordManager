import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const SearchBar = (props) => {
  return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          {/* Search Icon */}
          <Image 
            source={require('./assets/searchIcon.png')}
            style={styles.searchIcon}
          />

          {/* Text Input */}
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#ffffff"
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row', // Horizontal layout for image and input
    alignItems: 'center', // Center items vertically
    backgroundColor: '#5A5A5A',
    borderRadius: 25,
    paddingHorizontal: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginVertical: 10, // Optional: Adjust spacing from other elements
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
    marginRight: 8,
  },
  input: {
    flex: 1, // Allow TextInput to fill remaining space
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default SearchBar;
