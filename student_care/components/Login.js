import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {students} from '../assets/StudentsDb.js';

export default function Login() {
  const [showPw, setShowPw] = useState(false);
  const [userName, setUsername] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {

    const student = students.find(s => s.username === userName);

    if(student && student.password === pw){
      alert('Login successful');
    }
    else{
        alert('Invalid credentials');
    }
 
}
  return (
    <View style={styles.container}>
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
          <Text>{showPw ? '🙉' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
  },
  button: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});