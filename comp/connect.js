import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from '../styles';
import { useState, useEffect } from 'react';

export default function Connect({navigation}) {

  const [text, setText] = useState("");
  const [pass,setPass] = useState("");
  const [error,setErrot] = useState(false)

  const onPressFunction = () => {
    console.log(text,pass)
    if( (text === "") && (pass === "")){
        navigation.navigate('Home')
    }else{
        setErrot(c => !c)
    }   
    
  }
  return (
    <View style={styles.container}>
      <Text>Connectez-vous svp</Text>
      <TextInput
          style={{
            padding: 16,
            marginTop: 50,
            borderWidth:2,
            borderColor: '#86C8BC',
            height: 40, width: "80%",
            borderRadius:10
          }}
          onChangeText={setText}
          value={text}
          placeholder={'Pseudo'}
        />
        <TextInput
          style={{
            padding: 16,
            marginTop: 20,
            marginBottom: 40,
            borderWidth:2,
            borderColor: '#86C8BC',
            height: 40, width: "80%",
            borderRadius:10
          }}
          onChangeText={setPass}
          value={pass}
          placeholder={'Mot de passe'}
        />
        { error && <Text>Information incorrect</Text>}
        <Pressable onPress={onPressFunction}
          style={{
            padding: 16,
            marginTop: 20,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:2,
            backgroundColor:'#86C8BC',
            borderColor: 'white',
            width: "80%",
            borderRadius:10
          }}
        >
          <Text>Connection</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


