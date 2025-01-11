import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { pixelNormalize } from '../components/Normalise'
import Amenities from '../components/Amenities'
const InfoScreen = ({route}) => {
    const pName= encodeURI(route.params.propertyName);
    const [propInform,setPropInfom] = useState({});
    const [propertyPhotos,setPropPhotos] = useState([]);
    const [amenities,setAmenities] = useState([]);
    useEffect(()=>{
        fetch(`http://192.168.1.29:5000/info?PropertyName=${pName}`).then((res)=>res.json()).then((info)=>{setPropInfom(info.propInfo[0]);setPropPhotos(info.propPhotos);setAmenities(info.propAmenities[0].amenity_name)})
    },[])
  return (
    <SafeAreaView style={{marginTop:-30,padding:0}}>
      <ScrollView style={{margin:0,padding:0}}>
        <Pressable style={{flexDirection:'row',flexWrap:'wrap',gap:8,margin:10}}>
            {propertyPhotos.map((photo,index)=>{
                console.log(photo.url)
                return <Image style={{width:120,height:pixelNormalize(110),borderRadius:pixelNormalize(4)}} source={{uri:photo.url}} key={index}></Image>
            })}
            <Pressable style={{borderColor:"#d7d7d7",borderWidth:1,borderRadius:pixelNormalize(4),width:120,justifyContent:'center',alignItems:'center'}}><Text style={{textAlign:'center'}}>Show More</Text></Pressable>
        </Pressable>

        <View style={{marginHorizontal:12,marginTop:10}}>
            <View>
                <Text style={{fontSize:17,fontWeight:"bold"}}>{route.params.propertyName}</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:6,marginTop:7}}>
                    <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",backgroundColor:"#003580",width:"10%",paddingHorizontal:1,paddingVertical:4,borderTopLeftRadius:4,borderTopRightRadius:4,borderBottomRightRadius:4}}>
                        <Text style={{color:"white"}}>{propInform.overallRating}</Text>
                                       
                    </View>
                        <Text style={{fontWeight:"500"}}>{propInform.overallRating>=9 ? "Excellent":"Very Good"}</Text>
                </View>
            </View>
        </View>
        <Text style={{borderColor:"#E0E0E0",borderWidth:3,height:1,marginTop:15}}></Text>

        <View style={{
            marginTop:14,
            gap:8,marginHorizontal:12
        }}>
            <Text style={{color:"gray"}}>Price for 1 night and {route.params.adults} adults.</Text>
            <Text style={{fontSize:20,fontWeight:"bold"}}>EGP {propInform.price*route.params.adults}</Text>
        </View>
        <Text style={{borderColor:"#E0E0E0",borderWidth:3,height:1,marginTop:15}}></Text>
        <View style={{flexDirection:'row',alignItems:'center',gap:60,margin:12}}>
        <View>
            <Text style={{fontSize:16,fontWeight:"600",marginBottom:3}}>Check In</Text>
            <Text style={{fontSize:16,fontWeight:"bold",color:"#007fff"}}>26/1/2025</Text>
        </View>
        <View>
            <Text style={{fontSize:16,fontWeight:"600",marginBottom:3}}>Check Out</Text>
            <Text style={{fontSize:16,fontWeight:"bold",color:"#007fff"}}>29/1/2025</Text>
        </View>
        </View>
        <Text style={{borderColor:"#E0E0E0",borderWidth:3,height:1,marginTop:15}}></Text>
        <View style={{margin:12}}>
            <Text style={{fontSize:16,fontWeight:"600",marginBottom:3}}>Rooms and Guests</Text>
            <Text style={{fontSize:16,fontWeight:"bold",color:"#007fff"}}>{route.params.rooms} rooms {route.params.adults} adults {route.params.children} children</Text>
        </View>

        <Text style={{borderColor:"#E0E0E0",borderWidth:3,height:1,marginTop:15}}></Text>
        <View style={{margin:12}}>
            <Text style={{fontSize:16,fontWeight:"600"}}>Amenities</Text>
            <View style={{marginTop:10,borderRadius:4,padding:8,backgroundColor:"#007fff",width:35}}>
                <Text style={{color:"white"}}>{amenities}</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default InfoScreen

const styles = StyleSheet.create({})