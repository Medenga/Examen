import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from '../styles';
import { useState, useEffect } from 'react';


export default function Game() {
    const [nbm,setNbre] = useState(3)
    const [check,setCheck] = useState(true)
    const [choice,setChoice] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setNbre(c => c -1)
        }, 1000)
        if( nbm == -1){
            setCheck(c => !c)
           return () => clearTimeout(timer); 
        }
    })

    const onPress1 = () =>{
        setChoice(1)
    }
    const onPress2 = () =>{
        setChoice(2)
    }
    const onPress3 = () =>{
        setChoice(3)
    }

    return (
        <View style={styles.container}>
            {check ? (<Text
                style={{
                    fontSize:60
                  }}
            >{nbm}</Text>) : (<Text>{choice}</Text>)
            }
            <View style={{
                flexDirection:'row'
          }}>
                <Pressable onPress={onPress1}
                    style={{
                        padding: 16,
                        marginTop: 20,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:2,
                        backgroundColor:'#86C8BC',
                        borderColor: 'white',
                        width: 100,
                        borderRadius:10
                    }}
                    >
                    <Text>Chi</Text>
                </Pressable>
                <Pressable onPress={onPress2}
                    style={{
                        padding: 16,
                        marginTop: 20,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:2,
                        backgroundColor:'#86C8BC',
                        borderColor: 'white',
                        width: 100,
                        borderRadius:10
                    }}
                    >
                    <Text>Fou</Text>
                </Pressable>
                <Pressable onPress={onPress3}
                    style={{
                        padding: 16,
                        marginTop: 20,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:2,
                        backgroundColor:'#86C8BC',
                        borderColor: 'white',
                        width: 100,
                        borderRadius:10
                    }}
                    >
                    <Text>Mi</Text>
                </Pressable>
            </View>
        </View>
    )
}