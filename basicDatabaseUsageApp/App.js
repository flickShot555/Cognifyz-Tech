import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState({ field1: '', field2: '' });
  const [message, setMessage] = useState('');

  // Function to handle data entry
  const handleEnterData = () => {
    if (data.field1 && data.field2) {
      // Here, you would send data to the database (simulated for now)
      setMessage('Successful Entry');
    } else {
      setMessage('Please fill in both fields.');
    }
  };

  // Function to handle data retrieval
  const handleFetchData = () => {
    // Simulating a database retrieval
    setMessage('Successful Retrieval');
  };

  return (
    <View style={styles.container}>
      {/* Avatar Image */}
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter first value"
        value={data.field1}
        onChangeText={(text) => setData({ ...data, field1: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second value"
        value={data.field2}
        onChangeText={(text) => setData({ ...data, field2: text })}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={handleEnterData}>
        <Text style={styles.buttonText}>Enter Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.fetchButton]} onPress={handleFetchData}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </TouchableOpacity>

      {/* Status Message */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '90%',
    backgroundColor: '#4CAF50',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  fetchButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default App;
