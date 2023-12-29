import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";


export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titel}>Welcome to My App!</Text>
        <Image source={require('./assets/logo.png')} style={styles.image} />
        <Text style={styles.description}>{'please log in to continue\n to the App'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.facebook]}>
          <Text style={styles.buttonText}>Login with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.google]}>
          <Text style={styles.buttonText}>Login with google</Text>
        </TouchableOpacity>
      </View>

    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titel: {
    fontSize: 24,
    color: '#464b8b',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 40,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: '#4e4747'
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-around'
  },
  button: {
    width: '45%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'

  },
  facebook: {
    backgroundColor: '#4267B2'
  },
  google: {
    backgroundColor: '#DB4437'
  }


})