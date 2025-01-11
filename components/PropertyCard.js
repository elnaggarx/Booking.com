import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const PropertyCard = ({rooms,children,property,adults,availableRooms,place,image}) => {
    const navigate = useNavigation();
    const {width,height} = Dimensions.get("window")
    return (
    <View>
      <Pressable
       onPress={()=>
       navigate.navigate("Info",{
        propertyName:property.PropertyName,
        adults:adults,
        children:children,
        rooms:rooms
       })
       }
       style={{padding:15,flexDirection:'row',borderBottomColor:"#D7D7D7",borderBottomWidth:1,backgroundColor:"white"}}>
        <View>
            <Image style={{height:height/3,width:width-280 ,borderRadius:10}} source={{uri:image}}></Image>
        </View>
        <View style={{padding:10}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{width:200,fontWeight:"bold"}}>{property.PropertyName}</Text>
                <FontAwesome5 name="heart" size={24} color="black" />
            </View>
            <View style={{flexDirection:"row",alignItems:"center",gap:6,marginTop:7}}>
                <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",backgroundColor:"#003580",width:"12%",paddingHorizontal:1,paddingVertical:4,borderTopLeftRadius:4,borderTopRightRadius:4,borderBottomRightRadius:4}}>
                    <Text style={{color:"white"}}>{property.overallRating}</Text>
                   
                </View>
                <Text style={{fontWeight:"500"}}>{property.overallRating>9 ? "Excellent":"Very Good"}</Text>
            </View>
            <Text style={{width:210,marginTop:6,fontSize:13,fontWeight:"400"}}><FontAwesome5 name="map-marker-alt" size={15} color="gray" /> {place}</Text>
            <Text style={{width:210,marginTop:6,fontSize:13,fontWeight:"400"}}><MaterialCommunityIcons name="umbrella-beach-outline" size={13} color="gray" /> Beachfront</Text>
            <View style={{marginTop:"30%",alignSelf:"flex-end"}}>
                <Text style={{fontWeight:"400"}}><Text style={{fontWeight:"bold"}}>Hotel Room :</Text> Beds : 1 double</Text>

            </View>
            <Text style={{fontSize:15,fontWeight:"bold",marginTop:5,alignSelf:'flex-end'}}>EGP {property.price*adults}</Text>
            <Text style={{fontSize:15,fontWeight:"500",color:"gray",marginTop:5,alignSelf:'flex-end'}}>+ {(Math.ceil(0.3*property.price*adults))} taxes & fees</Text>
            <Text style={{fontSize:14,fontWeight:"bold",color:"green",marginTop:5,alignSelf:'flex-end'}}><AntDesign name="check" size={15} color="green" /> Free Cancelation</Text>
            <Text style={{fontSize:14,fontWeight:"bold",color:"green",marginTop:5,alignSelf:'flex-end'}}><AntDesign name="check" size={15} color="green" /> No payement needed</Text>


        </View>
        
      </Pressable>
    </View>
  )
}

export default PropertyCard

const styles = StyleSheet.create({})