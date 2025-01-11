import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import PropertyCard from '../components/PropertyCard';

const PlaceScreen = ({route}) => {
  const [properties,setProperties]=useState([]);
  const [properyPhotos,setPropertyPhotos]=useState([])
    useEffect(()=>{
        fetch("http://192.168.1.29:5000/properties").then((res)=>res.json()).then(({pp,p})=>{setProperties(p);setPropertyPhotos(pp)}).catch((err)=>console.log("error1"));
    },[])
    const navigate = useNavigation()
  return (
    <View>
        <Pressable style={{ borderBottomColor:"#D7D7D7",borderBottomWidth:1,flexDirection:'row',alignItems:'center',paddingHorizontal:20,justifyContent:'space-between',paddingVertical:12,backgroundColor:"white"}}>
            <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="swap" size={24} color="black" />
                <Text style={{fontSize:15,fontWeight:500,marginLeft:8}}>Sort</Text>
            </Pressable>
            <Pressable style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicons name="filter" size={24} color="black" />
                <Text style={{fontSize:15,fontWeight:500,marginLeft:8}}>Filter</Text>
            </Pressable>
            <Pressable onPress={()=>navigate.navigate("Map",{longitude:route.params.longitude , latitude:route.params.latitude,place:route.params.place})} style={{flexDirection:'row',alignItems:'center'}}>
            <FontAwesome5 name="map-marker-alt" size={24} color="black" />
                <Text style={{fontSize:15,fontWeight:500,marginLeft:8}}>Map</Text>
            </Pressable>

        </Pressable>
        <ScrollView style={{backgroundColor:"#f5f5f5"}}>
            {
                properties.map((property,index)=>{
                    var x = properyPhotos.find((item)=>item.PropertyName === property.PropertyName)
                      if(property.Location === route.params.place){
                        return <PropertyCard key={index} rooms={route.params.rooms} adults={route.params.adults} children={route.params.children}
                      availableRooms={property.rooms} property={property} place={route.params.place} image={x.url}
                      ></PropertyCard>
                    }
                })
            }
        </ScrollView>
    </View>
  )
}

export default PlaceScreen

const styles = StyleSheet.create({})