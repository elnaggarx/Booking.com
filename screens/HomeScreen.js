import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
} from "react-native";
import { React, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Feather from "@expo/vector-icons/Feather";
import DatePicker from "react-native-date-ranges-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [noOfProperties,setNoOfProps] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(()=>{
    fetch("http://192.168.1.29:5000/").then((res)=>res.json()).then((noOfProps)=>setNoOfProps(noOfProps));
  },[])
  const searchPlaces = (place)=>{
    if(!route.params){
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text:"Cancel",
            onPress:()=> console.log("Cancel pressed"),
            style:"cancel"
      
            
          },
          {text:"OK" , onPress: ()=>console.log("OK pressed")},{
            cancelable: false
          }
        ]
      )
    }
    if(route.params){
      navigation.navigate("Places",{
        rooms:rooms,
        adults:adults,
        children:children,
        selectedDates:selectedDates,
        place:place,
        longitude:route.params.longitude,
        latitude:route.params.latitude
      })
    }
  }
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "86%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      ></Button>
    );
  };
  return (
    <>
      <View>
        <Header></Header>
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            <Pressable
              onPress={()=>navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderWidth: 2,
                borderColor: "#FFC72C",borderBottomColor:"transparent"
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholder={route.params? route.params.input : "Enter your Destination"}
                placeholderTextColor={"black"}
              ></TextInput>
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderWidth: 2,
                borderColor: "#FFC72C",
                borderBottomColor:"transparent",borderTopColor:"#DEDEDE",borderTopWidth:1
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    color:"black"
                  },
                  headerStyle: { backgroundColor: "#003580" },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    headerDateTitle: { color: "transparent" },
                  },
                }}
                selectedColor="#0047AB"
                allowFontScaling={false}
                placeholder={"Apr 27, 2025 - Jul 10, 2025"}
                mode={"range"}
              />
            </Pressable>

            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderWidth: 2,
                borderColor: "#FFC72C",borderBottomColor:"transparent",borderTopColor:"#D3D3D3",borderTopWidth:1
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholder={`${rooms} Room • ${adults} Adults • ${children} Children`}
                placeholderTextColor={"black"}
              ></TextInput>
            </Pressable>

            <Pressable style={{borderTopColor:"transparent",flexDirection:'row',alignItems:"center",justifyContent:"center",paddingVertical:15,backgroundColor:"#2D6ADC",                borderWidth: 2,
                borderColor: "#FFC72C",}}
                onPress={()=>searchPlaces(route?.params.input)}
                >
                <Text style={{color:"white",fontWeight:"bold"}}>Search</Text>
            </Pressable>
          </View>
          <View>
            <Text style={{fontSize:19,fontWeight:"bold",marginHorizontal:20}}>Travel More Spend Less</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable style={{backgroundColor:"#003580",width:200,height:150,borderRadius:10,padding:20,marginTop:10,marginHorizontal:20}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"white",marginVertical:7}}>Genius</Text>
                    <Text style={{fontSize:15,fontWeight:"400",color:"white"}}>You are at genius level one on our loyalty program</Text>
                </Pressable>
                <Pressable style={{borderWidth:2,borderColor:"#E0E0E0",width:200,height:150,borderRadius:10,padding:20,marginTop:10,marginHorizontal:20}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",marginVertical:7}}>15% Discounts</Text>
                    <Text style={{fontSize:15,fontWeight:"400",color:"black"}}>Complete 5 stays to unlock Genius level 2</Text>
                </Pressable>
                <Pressable style={{borderWidth:2,borderColor:"#E0E0E0",width:200,height:150,borderRadius:10,padding:20,marginTop:10,marginHorizontal:20}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",marginVertical:7}}>10% off rental cars</Text>
                    <Text style={{fontSize:15,fontWeight:"400",color:"black"}}>Save on select rental cars</Text>
                </Pressable>
            </ScrollView>
          </View>
          <View style={{marginTop:20,paddingBottom:100}}>
            <Text style={{fontSize:19,fontWeight:"bold",marginHorizontal:20}}>Explore Egypt</Text>
            <Text style={{fontSize:15,fontWeight:"400",marginHorizontal:20,marginTop:5}}>These popular destinations have a lot to offer</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                
                    <Pressable style={{marginTop:10,flexDirection:"column",justifyContent:"flex-end",position:"relative",width:200,height:150,borderRadius:10,padding:20,marginHorizontal:20}} >
                        <Image source={require('../assets/644333.jpg')} style={{width:200,height:150,position:"absolute",left:0,top:0,borderRadius:10,resizeMode:"stretch"}} />
                            <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>Hurghada</Text>
                            <Text style={{fontSize:15,fontWeight:"500",color:"white"}}>0 Properties</Text>
                        
                    </Pressable>
                    <Pressable style={{marginTop:10,flexDirection:"column",justifyContent:"flex-end",position:"relative",width:200,height:150,borderRadius:10,padding:20,marginHorizontal:20}} >
                        <Image source={require('../assets/644429.webp')} style={{width:200,height:150,position:"absolute",left:0,top:0,borderRadius:10,resizeMode:"stretch"}} />
                            <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>Dahab</Text>
                            <Text style={{fontSize:15,fontWeight:"500",color:"white"}}>{noOfProperties.find((p)=>p.Location === "Dahab")?.count} Properties</Text>
                        
                    </Pressable>
                    <Pressable style={{marginTop:10,flexDirection:"column",justifyContent:"flex-end",position:"relative",width:200,height:150,borderRadius:10,padding:20,marginHorizontal:20}} >
                        <Image source={require('../assets/691351.jpg')} style={{width:200,height:150,position:"absolute",left:0,top:0,borderRadius:10,resizeMode:"stretch"}} />
                            <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>Ain Elsokhna</Text>
                            <Text style={{fontSize:15,fontWeight:"500",color:"white"}}>{noOfProperties.find((p)=>p.Location === "Ain elsokhna")?.count} Properties</Text>
                        
                    </Pressable>
                    <Pressable style={{marginTop:10,flexDirection:"column",justifyContent:"flex-end",position:"relative",width:200,height:150,borderRadius:10,padding:20,marginHorizontal:20}} >
                        <Image source={require('../assets/644628.jpg')} style={{width:200,height:150,position:"absolute",left:0,top:0,borderRadius:10,resizeMode:"stretch"}} />
                            <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>Sharm Elsheikh</Text>
                            <Text style={{fontSize:15,fontWeight:"500",color:"white"}}>{noOfProperties.find((p)=>p.Location === "Sharm Elsheikh")?.count} Properties</Text>
                        
                    </Pressable>
                
                
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <BottomModal
        modalTitle={
          <ModalTitle
            title="Select rooms and guests"
            style={{
              borderColor: "transparent",
              shadowColor: "transparent",
              backgroundColor: "white",
            }}
          ></ModalTitle>
        }
        footer={
          <ModalFooter>
            <ModalButton
              onPress={() => setModalVisible(!modalVisible)}
              text="Apply"
              style={{
                marginBottom: 20,
                backgroundColor: "#003580",
                color: "white",
              }}
            ></ModalButton>
          </ModalFooter>
        }
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={modalVisible}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                paddingHorizontal: 6,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Rooms
            </Text>
            <Pressable
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable
               onPress={()=>setRooms(Math.max(1,rooms-1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    paddingHorizontal: 6,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ paddingHorizontal: 6, fontSize: 18 }}>
                  {rooms}
                </Text>
              </Pressable>
              <Pressable
              onPress={()=>setRooms((c)=>c+1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    paddingHorizontal: 6,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                paddingHorizontal: 6,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Adults
            </Text>
            <Pressable
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable
               onPress={()=>setAdults(Math.max(1,adults-1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    paddingHorizontal: 6,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ paddingHorizontal: 6, fontSize: 18 }}>
                  {adults}
                </Text>
              </Pressable>
              <Pressable
              onPress={()=>setAdults((c)=>c+1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    paddingHorizontal: 6,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                paddingHorizontal: 6,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Children
            </Text>
            <Pressable
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable
              onPress={()=>setChildren(Math.max(0,children-1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    paddingHorizontal: 6,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ paddingHorizontal: 6, fontSize: 18 }}>
                  {children}
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={()=>setChildren((c)=>c+1)}
              >
                <Text
                  style={{
                    fontSize: 15,
                    paddingHorizontal: 6,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
