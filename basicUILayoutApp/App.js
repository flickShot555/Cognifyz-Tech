import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Linking} from 'react-native';
//import { useState } from 'react';

export default function App() {

  const handlePress = (url) => {
    Linking.openURL(url);
  }

  const openLocation = () => {
    const lat = 33.628263;
    const long = 73.1004454;
    const label = 'RWP, Pakistan';

    const url = `geo:${lat},${long}?q=${lat},${long}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));

    //Linking.openURL('https://maps.app.goo.gl/GaVhsMxnc8JaHArh7');
  }

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
          <View style={styles.textHolder}>
          <Text style={styles.text}>-{'>'} Full Stack Web Development {`(`}React & Node.js{`)`}</Text>
          <Text style={styles.text}>-{'>'} php and MySQL for backend</Text>
          <Text style={styles.text}>-{'>'} Postman API Student Expert</Text>
          </View>
        </View>

        <View style={styles.sections}>
          <Text style={styles.smallHeadings}>Projects:</Text>
          <View style={styles.textHolder}>
            <ScrollView style={{ flexGrow:1 }}>
              <Text style={styles.text}>-{'>'} Personal Portfolio Website {`(`}Web | Front-end{`)`}</Text>
              <Text style={styles.text}>-{'>'} Car Showroom Management System {`(`}Web | Full Stack{`)`}</Text>
              <Text style={styles.text}>-{'>'} College Social Media Website {`(`}Web | Front-end{`)`}</Text>
              <Text style={styles.text}>-{'>'} IT Services Company Website {`(`}Web | Front-end{`)`}</Text>
              <Text style={styles.text}>-{'>'} E-Commerce Website {`(`}Web | Front-end{`)`}</Text>
              <Text style={styles.text}>-{'>'} Online Compiler Website {`(`}Web | Front-end{`)`}</Text>
              <Text></Text>
              <Text style={styles.text}>-{'>'} Web Scrapper App {`(`}Python | Flask {`)`}</Text>
              <Text style={styles.text}>-{'>'} Weather Data Fetching App {`(`}Python | Flask {`)`}</Text>
              <Text style={styles.text}>-{'>'} KNN model for Iris Detection system {`(`}Python | ML {`)`}</Text>
              <Text></Text>
              <Text style={styles.text}>-{'>'} Water Reminder App {`(`}JavaScript | React-Native {`)`}</Text>
              <Text style={styles.text}>-{'>'} Counter App {`(` }JavaScript | React-Native {`)`}</Text>
              <Text></Text>
              <Text style={styles.text}>-{'>'} AutoMobile Sales Management System {`(` }Java | {`)`}</Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.sections}>
          <Text style={styles.smallHeadings}>Skills:</Text>
          <View style={styles.textHolder}>
          <ScrollView styles={{ maxHieght:120 }}>
              <Text style={styles.text}>-{'>'} React Native</Text>
              <Text style={styles.text}>-{'>'} React</Text>
              <Text style={styles.text}>-{'>'} HTML, CSS, JS</Text>
              <Text style={styles.text}>-{'>'} API calling</Text>
              <Text style={styles.text}>-{'>'} php</Text>
              <Text style={styles.text}>-{'>'} Laravel</Text>
              <Text style={styles.text}>-{'>'} MySQL</Text>
              <Text style={styles.text}>-{'>'} Java</Text>
              <Text style={styles.text}>-{'>'} Python</Text>
            </ScrollView>
              
          </View>
        </View>

        <View style={styles.sections}>
          <Text style={styles.smallHeadings}>Contact:</Text>
          <View style={styles.textHolder}>
            <ScrollView>
              <Text style={styles.text}>-{'>'} Email: 
                <TouchableOpacity >
                  <Text style={{color:'#ffff', textDecorationLine:'underline'}} onPress={() => handlePress('mailto:abbas1795khan@gmail.com')}>
                   Abbas Khan
                  </Text>
                </TouchableOpacity>
              </Text>
              <Text style={styles.text}>-{'>'} Phone:
                <TouchableOpacity >
                  <Text style={{color:'#ffff', textDecorationLine:'underline'}} onPress={() => handlePress('tel:0333-1234567')}>
                    0333-1234567
                  </Text>
                </TouchableOpacity>
              </Text>
              <Text style={styles.text}>-{'>'} Address: 
                <TouchableOpacity >
                  <Text style={{color:'#ffff', textDecorationLine:'underline'}} onPress={() => openLocation()}>
                    PAF Jinnah Camp, Rawalpindi, Pakistan
                  </Text>
                </TouchableOpacity>
              </Text>
            </ScrollView>
            </View>
        </View>
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

  textHolder:{
    padding:4,
  },

  text:{
    color: '#fff',
    padding: 4,
  },

});
