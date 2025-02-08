import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';

export default function App() {
  //state = 0;
  
  const [count, setCount] = useState(0);
  
  const handleInc = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    count>0? setCount(count - 1): null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the counter app!</Text>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={handleInc}>
          <Text style={styles.buttonFont}>+</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>Counter: {count}</Text>

        <TouchableOpacity style={styles.button} onPress={handleDec}>
          <Text style={styles.buttonFont}>-</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },

  box:{
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  counter:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 5,
    color: 'white',
  },

  buttonFont:{
    fontSize: 20,
    color: 'white',
    fontWeight:'bold',
  },
});
