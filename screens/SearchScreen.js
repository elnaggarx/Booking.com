import { StyleSheet, Text, View,SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import SearchResults from '../components/SearchResults';
import { Image } from 'react-native';
const SearchScreen = () => {
    const data = [
        {id:0,place:"Hurghada",shortDescription:"Located on the coast of the Red Sea",properties:[],placeImage:"https://hurghadiansproperty.com/wp-content/uploads/2023/12/Downloaderla-657f005ab3db3.jpg",longitude:"33.8443845",latitude:"27.2102249"},
        {id:1,place:"Sharm Elsheikh",shortDescription:"Located on south of Sinai",properties:["Hilton","Cleopatra","  ","a","  z" , "  z"],placeImage:"https://content.r9cdn.net/rimg/dimg/df/2c/94762a60-city-20452-1651040efcc.jpg?width=1366&height=768&xhint=2147&yhint=1584&crop=true",longitude:"34.3841993",latitude:"27.9506425"},
        {id:2,place:"Ain elsokhna",shortDescription:"A town in the Suez Governorate",properties:["Porto Elsokhna","Steigen Burger", "2" , " 3" , "4","2" ],placeImage:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/db/a8/22.jpg",longitude:"32.3694385",latitude:"29.6465533"},
        {id:3,place:"Dahab",shortDescription:"Located on the southest coast of Sinai",properties:["Swiss In","Tropitel","1" , "2" , "4" ,"3"],placeImage:'https://www.propertyfinder.eg/blog/wp-content/uploads/2020/10/shutterstock_1396879814-1-800x534.jpg',longitude:"34.5166672",latitude:"28.4914523"},

    ]
  const [input, setInput] = useState("");
  return (
    <SafeAreaView>
      <View style={{padding:10,margin:10,flexDirection:'row',alignItems:'center' , justifyContent:'space-between',borderColor:'#FFC72C',borderRadius:10,borderWidth:4}}>
        <TextInput value={input} onChangeText={(text)=>setInput(text)} placeholder='Enter Your Destination'></TextInput>
        <Feather name="search" size={24} color="black" />
      </View>
      <SearchResults data={data} input={input} setInput={setInput}></SearchResults>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})