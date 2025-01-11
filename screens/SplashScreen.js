import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{height:"100%",backgroundColor:"#003580",flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:"white",fontSize:35,fontWeight:"bold"}}>Booking.com</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})