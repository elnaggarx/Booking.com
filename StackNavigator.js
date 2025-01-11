import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Entypo from '@expo/vector-icons/Entypo'
import SavedScreen from './screens/SavedScreen'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native'
import BookingScreen from './screens/BookingScreen'
import ProfileScreen from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen'
import PlaceScreen from './screens/PlaceScreen'
import MapScreen from './screens/MapScreen'
import InfoScreen from './screens/InfoScreen'
const StackNavigator = () => {
    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()
    
    function BottomTabs(){
        return( 
        <Tab.Navigator screenOptions={{
            title:"Booking.com",
            headerStyle:{backgroundColor:"#003580",height:110,borderBottomColor:"transparent",shadowColor:"transparent"},
            headerTitleStyle:{color:"white",fontWeight:"bold",fontSize:20},
            headerRight:()=>{return <Ionicons name="notifications-outline" size={24} color="white" style={{marginRight: 12}} />}
        }}>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{tabBarLabel:"Home",
            tabBarIcon:({focused})=>
                focused?(
                    <Entypo name="home" size={24} color="#003580" />

                )
                    :
                (
                    <AntDesign name="home" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen 
            name='Saved' 
            component={SavedScreen} 
            options={{tabBarLabel:"Saved",headerShown:false,
            tabBarIcon:({focused})=>
                focused?(
                    <AntDesign name="heart" size={24} color="#003580" />
                )
                    :
                (
                    <AntDesign name="hearto" size={24} color="black" />
                )
            }}
            />

            <Tab.Screen 
            name='Booking' 
            component={BookingScreen} 
            options={{tabBarLabel:"Booking",headerShown:false,
            tabBarIcon:({focused})=>
                focused?(
                     <Ionicons name="notifications" size={24} color="#003580" />
                )
                    :
                (
                     <Ionicons name="notifications-outline" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen 
            name='Profile' 
            component={ProfileScreen} 
            options={{tabBarLabel:"Profile",headerShown:false,
            tabBarIcon:({focused})=>
                focused?(
                    <Ionicons name="person" size={24} color="#003580" />
                )
                    :
                (
                    <Ionicons name="person-outline" size={24} color="black" />
                )
            }}
            />

        </Tab.Navigator>
        )
    }

    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
                <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Places" component={PlaceScreen} options={{title:"Popular Places",
                headerTitleStyle:{color:"white",fontWeight:"bold",fontSize:20},
                headerBackTitle:"Back"
                ,headerStyle:{backgroundColor:"#003580",height:110,borderBottomColor:"transparent",shadowColor:"transparent"}}}/>
                <Stack.Screen name='Map' options={{headerShown:false}} component={MapScreen}></Stack.Screen>
                <Stack.Screen name="Info" component={InfoScreen} options={({route})=>({title:route.params.propertyName,headerStyle:{backgroundColor:"#003580"},headerTitleStyle:{color:"white"}})}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})