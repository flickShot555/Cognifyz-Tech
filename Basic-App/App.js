import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My First App!</Text>
      <Text style={styles.subtitle}>
        This is a basic react native application that simply renders the UI components.
        it demonstrates the use of Text, View, and StatusBar components. And it is a 
        perfect starting point for beginners. React Native is a library used to build 
        mobile applications for Android and iOS platforms. It is developed by Facebook, and the
        first version was released in 2015. It is based on React, which is a JavaScript library.
        React is more focused on web development, whereas React Native is focused on mobile app development.
      </Text>
      <Text style={styles.special}>
        For more Tech Solutions, don't forget
      </Text>
      <Text style={styles.site}>"www.aepostrophee.kesug.com"!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#636E72',
    padding: 30,
    textAlign: 'center',
  },
  special: {
    fontSize: 20,
    color: '#342E',
    textAlign: 'center',
  },
  site: {
    fontSize: 20,
    color: '#342E',
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5,
  },
});
