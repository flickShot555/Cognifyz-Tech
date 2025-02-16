import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const App = () => {
  // Predefined list of items
  const allItems = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
    { id: '4', name: 'Date' },
    { id: '5', name: 'Elderberry' },
  ];

  // State to store displayed items
  const [items, setItems] = useState([]);

  // Function to load items
  const loadData = () => {
    setItems(allItems); // Load predefined items
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fetch and Display Data</Text>

      {/* Load Data Button */}
      <Button title="Load Data" onPress={loadData} />

      {/* Displaying List of Items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
});

export default App;
