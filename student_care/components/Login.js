import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {students} from '../assets/StudentsDb.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default function Login() {
  const [showPw, setShowPw] = useState(false);
  const [userName, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {

    const student = students.find(s => s.username === userName);

    if(student && student.password === pw){
      alert('Login successful');
    }
    else{
      setErrorMessage('❌ Invalid username or password');
    }
 
}
  return (
    <View style={styles.container}>
        <Header/>
      <Text style={styles.title}>STUDENT LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUsername}
      />

      <View style={styles.password}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={pw}
          onChangeText={setPw}
          secureTextEntry={!showPw}
        />
        <TouchableOpacity onPress={() => setShowPw(!showPw)}>
          <Text>{showPw ? '👁️‍🗨️' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Footer/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    marginTop: 16,
    padding: 12,
    backgroundColor: 'purple',
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    padding: 3,
    color: 'black',
    marginTop: 10,
    backgroundColor: '#f08080',
    borderRadius: 4,
    fontWeight: 'bold',
  },
});