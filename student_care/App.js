import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
