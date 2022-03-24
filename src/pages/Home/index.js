import React from 'react';
import {View, Text, StyleSheet,Image,ScrollView, TouchableOpacity,TextInput, Linking} from 'react-native';

export default function Home(){

return (
  <View style={styles.caixa}>

  <ScrollView>
    <View style={{width: '100%', alignItems: 'center'}}>
      <Image style={{width: 200, height: 150, marginTop: 20,}} source={require('../../../img/jadeflix.png')}/>

    <View style={styles.viewSearch}>
      <TextInput 
      style={styles.input}
      placeholder="Procurando algo?"
      />

      <TouchableOpacity>
        <Text style={styles.titulo}>...</Text>
      </TouchableOpacity>
    </View>

      <Image style={{width: '100%', height: 150}} source={require('../../../img/peaky-blinders.jpg')}/>

      
      <TouchableOpacity style={styles.botao} onPress={() => {
              Linking.openURL('https://www.youtube.com/watch?v=2nsT9uQPIrk');
            }}>
         <Text>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text>Sinopse</Text>
      </TouchableOpacity>
    </View>

   <Text style={styles.titulo}>Melhores Animes:</Text>
   <ScrollView horizontal={true}>
        <Image source={require('../../../img/demonslayer.png')} style={styles.imagem}/>
        <Image source={require('../../../img/naruto.png')} style={styles.imagem}/>
        <Image source={require('../../../img/tenkuushinpan.jpg')} style={styles.imagem}/>
        <Image source={require('../../../img/owarinoseraph.jpg')} style={styles.imagem}/>
        <Image source={require('../../../img/Black-Clover.jpg')} style={styles.imagem}/>
        <Image source={require('../../../img/citrus.jpg')} style={styles.imagem}/>
        <Image source={require('../../../img/deathnote.jpg')} style={styles.imagem}/>
        <Image source={require('../../../img/tokio.jpg')} style={styles.imagem}/>
   </ScrollView>

   <Text style={styles.titulo}>Melhores Séries:</Text>
   <ScrollView horizontal={true}>
         <Image source={require('../../../img/riverdale.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/stranger.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/the100.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/comodefenderumassassino.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/twd.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/witcher.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/bigbang.jpg')} style={styles.imagem}/>
         <Image source={require('../../../img/flash.jpg')} style={styles.imagem}/>
   </ScrollView>

   <Text style={styles.texto}>Copyright ©2022 - Aplicativo desenvolvido por Evellyn Jade.</Text>

  </ScrollView>

  </View>
)
}

const styles = StyleSheet.create({
  caixa:{
    backgroundColor: '#000',
    flex: 1,
  },

  imagem:{
    marginTop: 20,
    marginLeft: 15,
    width: 100,
    height:180,
    borderRadius: 10,
  },

  texto:{
    color: 'darkgray',
    textAlign: 'center',
    marginTop: 30,
  },

  titulo:{
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
  },

  botao:{
    backgroundColor: '#d50404',
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 10,
  },

  viewSearch:{
    borderRadius: 10,
    marginVertical: 10,
    width: '98%',
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: '#d50404',
    borderWidth: 1,
  },

   input:{
    width: '90%',
    padding: 10,
    fontSize: 16,
    color: '#fff',
  },

})
