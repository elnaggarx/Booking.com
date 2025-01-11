import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
const MapScreen = ({route}) => {
    const mapView = useRef(null)
  return (
    <View>
      <MapView

    ref={mapView}
    style={{width:"100%",height:"100%"}}
        >
        <Marker title={route.params.place} coordinate={{longitude:Number(route.params.longitude),latitude:Number(route.params.latitude)}}></Marker>
    </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})