import React, { useState } from 'react';
import { 
  View,         
  TextInput,    
  TouchableOpacity,  
  StyleSheet,   
  Text,         
  Alert         
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewPasswordScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        if (!name || !username || !password) {
          Alert.alert('Error', 'All fields are required!');
          return;
        }
        Alert.alert('Success', 'Password saved!');
        navigation.goBack();
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleCancel} style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.title}>New Password</Text>
                <TouchableOpacity onPress={handleSave} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder='Enter Account Name'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        onChangeText={setUsername}
                        value={username}
                        placeholder='Enter Username'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Enter Password'
                        secureTextEntry
                        style={styles.input}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#5A5A5A',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    form: {
        marginTop: 20,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        color: '#000',
    },
    button: {
        padding: 10,
        backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 16,
        color: 'black', // Set button text color to gray
    },
});

export default NewPasswordScreen;
