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
            <Text style={styles.bannerText}>BS Software Engineering</Text>
          </View>
        </View>

        <View style={styles.sectionBreak}></View>

        <View style={styles.sections}>
          <Text style={styles.smallHeadings}>Certifications:</Text>
          <Text style={styles.text}>-{'>'} Full Stack Web Development {`(`}React & Node.js{`)`}</Text>
          <Text style={styles.text}>-{'>'} php and MySQL for backend</Text>
          <Text style={styles.text}>-{'>'} Postman API Student Expert</Text>
        </View>

        <View style={styles.sections}>
          <Text style={styles.smallHeadings}>Projects:</Text>
          <ScrollView>
          <Text style={styles.text}>-{'>'} Personal Portfolio Website {`(`}Web | Front-end{`)`}</Text>
          <Text style={styles.text}>-{'>'} Car Showroom Management System {`(`}Web | Full Stack{`)`}</Text>
          <Text style={styles.text}>-{'>'} College Social Media Website {`(`}Web | Front-end{`)`}</Text>
          <Text style={styles.text}>-{'>'} IT Services Company Website {`(`}Web | Front-end{`)`}</Text>
          <Text style={styles.text}>-{'>'} E-Commerce Website {`(`}Web | Front-end{`)`}</Text>
          <Text style={styles.text}>-{'>'} Online Compiler Website {`(`}Web | Front-end{`)`}</Text>
          <Text></Text>
          <Text style={styles.text}>-{'>'} Web Scrapper App {`(`}Python | Flask {`)`}</Text>
          <Text style={styles.text}>-{'>'} Weather Data Fetching App {`(`}Python | Flask {`)`}</Text>
          <Text></Text>
          <Text style={styles.text}>-{'>'} Water Reminder App {`(`}JavaScript | React-Native {`)`}</Text>
          <Text style={styles.text}>-{'>'} Counter App {`(` }JavaScript | React-Native {`)`}</Text>
          <Text></Text>
          <Text style={styles.text}>-{'>'} KNN model for Iris Detection system {`(`}Python | ML {`)`}</Text>
          <Text></Text>
          <Text style={styles.text}>-{'>'} AutoMobile Sales Management System {`(` }Java | {`)`}</Text>
          </ScrollView>
        </View>

        <View style={styles.sections}>
          Cears thr =======
        </View>

        {/*
        <Text>My Age is: 25</Text>
        <Text style={{padding: 20}}>My Address is: 123, ====Main Street, New York, USA</Text>
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
        */}
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
    marginTop:20,
    padding: 20,
    backgroundColor:'#2B2B2B',
    borderRadius:10,
    height:170,
    
  },

  smallHeadings:{
    color: '#ff4509',
    fontSize: 15,
    fontWeight:'bold',
    padding:1,
  },

  text:{
    color: '#fff',
    padding: 10,
  },

});
