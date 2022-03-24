import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Login () {

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  function cadastro(){
        alert('Aguarde, estaremos te redirecionando para página principal');
  }

  return (
    <View style={styles.container}>

      <Image style={{width: 200, height: 150}} source= {require('../../../img/jadeflix.png')}/>

      <TextInput placeholder="Seu e-mail..." style={styles.textinput} onChangeText={text=>setEmail(text)}/>
      <TextInput secureTextEntry={true} placeholder="Sua senha..." style={styles.textinput} onChangeText={text=>setSenha(text)}/>

      <TouchableOpacity onPress={cadastro} style={styles.botao}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },

  textinput:{
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },

  botao:{
    backgroundColor: 'red',
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
})
