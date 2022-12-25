import { StyleSheet, Text, View, TextInput, Button, Pressable, StatusBar } from 'react-native';
import styles from '../styles';
import { useState, useEffect } from 'react';


export default function Home( {navigation} ) {

    const [text, setText] = useState("");
    const [pass,setPass] = useState("");
  
    const onPressFunction = () => {
        navigation.navigate('Game')
    }

    return (
      <View style={styles.container}>
        <Text
            style={{
                padding: 16,
                marginBottom: 20,
                justifyContent:'center',
                alignItems:'center',
                borderColor: 'white',
                width: "80%",
                borderRadius:10
              }}
        >Cliquez sur le bouton pour commencer</Text>
          <Pressable onPress={onPressFunction}
            style={{
              padding: 16,
              marginTop: 10,
              justifyContent:'center',
              alignItems:'center',
              borderWidth:2,
              backgroundColor:'#86C8BC',
              borderColor: 'white',
              width: "80%",
              borderRadius:10
            }}
          >
            <Text>commencer</Text>
          </Pressable>
          <StatusBar hidden={true} />
      </View>
    );
  }