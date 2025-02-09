import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

export default function App() {

  const myprojs = {
                    'python':'Web Scrapper', 
                    'Java':'AutoMobile Sales Management System',
                    'web': 'E-commerce Website',
                    'React Native':'Water Reminder App',
                    'C# .NET' : 'AutoMobile Sales Management System',
                    'Databases' : 'Railways Management System'
                  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Welcome,This app demonstrates the rendering of data from a list in a ScrollView.</Text>

      <ScrollView>
        {
          Object.keys(myprojs).map((key, index) => {
            return (
              <View key={index} style={{marginBottom: 40, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>{key}</Text>
                <Text style={{fontSize: 16, color: '#666', marginBottom:30}}>{myprojs[key]}</Text>
              </View>
            )
          })
        }
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    
    padding: 30,
  },

  headingText:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#9F0BC4',
    marginBottom:30,
    textAlign:'center',
  },
});
