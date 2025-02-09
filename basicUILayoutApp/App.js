import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Enumerator} from 'react-native';
//import { useState } from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to My Profile!</Text>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <ScrollView>
        <View style={styles.banner}>
          <Image
            style={{width: 100, height: 100}}
            source={require('./assets/pp6.png')}
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>Abbas Inayatullah Khan</Text>
            <Text style={styles.bannerText}>BS in Software Engineering</Text>
          </View>
        </View>

        <View style={styles.sectionBreak}></View>

        <View style={styles.sections}>

        </View>
        <Text>My Age is: 25</Text>
        <Text style={{padding: 20}}>My Address is: 123, Main Street, New York, USA</Text>
        <Text>My Email is: johndoe@example.com</Text>
        <Text>My Phone Number is: 1234567890</Text>
        <Text>My Skills are: React Native, Node.js, MongoDB</Text>
        <Text>My Experience is: 5 Years</Text>
        
        <Text>My Certifications are: React Native, Node.js</Text>
        <Text>My Projects are: 10</Text>
        <Text>My Goals are: To become a Full Stack Developer</Text>
        <Text>My Languages are: English, Spanish, French</Text>
        <Text>My Portfolio is: https://www.example.com/johndoe/portfolio</Text>
        <Text>My Recommendations are: 5</Text>
        <Text>My References are: 3</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading:{
    marginTop:10,
    padding:30,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },

  banner:{
    flexDirection: 'row',
    flexWrap:'wrap',
  },

  bannerTextContainer:{
    marginTop:9,
    padding:20,
    flexDirection: 'column',
    flexWrap:'wrap',
  },

  bannerText:{
    color: '#ff4509',
    fontSize: 20,
    fontWeight: 'bold',
  },

  sectionBreak:{
    marginTop:10,
    borderBottomColor: '#ff4509',
    borderBottomWidth: 3,
  },

  sections:{
    flexDirection:'column',
    marginTop:10,
    padding: 20,
    backgroundColor:'#2B2B2B',
    borderRadius:10,
    
  },

  smallHeadings:{
    color: '#ff4509',
    fontSize: 20,
    fontWeight:'bold',
  },

  text:{
    color: '#0000',
    padding: 20,
  },

});
