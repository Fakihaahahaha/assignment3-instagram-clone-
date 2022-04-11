import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity ,Image} from 'react-native';
import React, {useState} from 'react';
import { ImageBackground } from 'react-native-web';
import { TextInput } from "react-native-web";

export default function App() {
  const [ email, setEmail] = useState()
  const [password] = useState("");
  return (
   
    
    <View style={styles.container}>
       
      <Image source={require('./assets/instagram.jpg')}
        style={styles.imgClose}
        resizeMode="contain"
      />
       
      
      
      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="phone number, username or email"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setusername(username)}
        />

</View>
<View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setpassword(password)}
        />
      </View>
      
      <View style={styles.input_container}>
        <Text style={{fontSize:15,paddingLeft: 200,color:'#3B82F6'}}>Forget Password?</Text>
      <TouchableOpacity style={styles.logINBtn}>
        <Text style={styles.signInText}
        placeholderTextColor='white'
        onChangeText={(logIn) => setlogin(logIn)}>log In</Text>
        </TouchableOpacity>
        <View style={styles.input_container}>
        
        <Text style={{fontSize:15,}}>or</Text>
        <Text style={{fontSize:15, paddingTop:40,}}>Continue as Fasiha Khan</Text>
        </View>
        
      
      </View>
      </View>
     
      
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    borderWidth:2,
    borderRadius:1,
  },
  
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 200,
    height: 30,
    marginBottom: 50,
 alignItems: "centre"
  },
  TextInput: {
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 12,
    
    width:250,
    
    padding: 20,
  },
  input_container: {
    width: 400,
    height: 400,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: 'center',
    
    

  },
  imgClose: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width:20,
    height:20,
    padding:0,
    alignItems:'center',
    width:300,
    height:200,
    borderRadius:40,

  },
 
  confrimButton: {
    height: 30,
    marginBottom: 30,
  },
  logINBtn: {
    width: 250,
    fontWeight:'bold',
    
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: '#3B82F6',
  },

});
