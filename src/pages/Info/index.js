import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>

      <Image style={{width: 200, height: 150, marginLeft: 30}} source= {require('../../../img/jadeflix.png')}/>
      <Text style={styles.conteudo}>Plataforma de trailer contendo séries e animes.</Text>
      <Text style={styles.conteudo}>O intuito dessa aplicação é destinada apenas para estudo de desenvolvimento mobile.</Text>
      <StatusBar style="auto" />

      <Text style={styles.texto}>Copyright ©2022 - Aplicativo desenvolvido por Evellyn Jade.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  conteudo:{
    color: '#fff',
    textAlign: 'center',
  },

  texto:{
    color: 'darkgray',
    textAlign: 'center',
    marginTop: '110%',
    
  }
});
