import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const SearchResults = ({data,input,setInput}) => {
const navigation = useNavigation();
  return (
    <View>
      <FlatList data={data} renderItem={({item})=>{
       
        if(item.place.toLowerCase().includes(input.toLowerCase())){
            if(input===""){
                return null
            }
            return <Pressable onPress={()=>{
                setInput(item.place);
                navigation.navigate("Main",{
                    params:{input: item.place,longitude:item.longitude,latitude:item.latitude},
                    screen:"Home"
                })
            }}
             style={{flexDirection:'row',alignItems:'center',marginVertical:10,marginHorizontal:15}}>
                <View>
                    <Image style={{width:70, height:70}} source={{uri:item.placeImage}}></Image>
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:15,fontWeight:"500"}}>
                        {item.place}
                    </Text>
                    <Text style={{marginVertical:10}}>
                        {item.shortDescription}
                    </Text>
                    <Text style={{color:'gray',fontSize:15}}>
                        {item.properties.length}
                    </Text>
                </View>
            </Pressable>
        }
      }} />
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})