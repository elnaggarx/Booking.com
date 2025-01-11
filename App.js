import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';
import SplashScreen from './screens/SplashScreen';
import { useEffect, useState } from 'react';
export default function App() {
  const  [showSplash,setShowSplash] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setShowSplash(false);
    },3000)
  },[])
  return (
    <>  
      {
        showSplash?<SplashScreen></SplashScreen>:    <>  
        <StackNavigator></StackNavigator>
        <ModalPortal></ModalPortal></>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
