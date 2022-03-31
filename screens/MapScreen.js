import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';


const MapScreen = () => {
   return (
      <View>
         <Text>Here are mapscreen</Text>

         <View style={tw`h-12`}>
            <Map />
         </View>

         <View style={tw`h-1/2`}></View>
      </View>
   )
}

export default MapScreen;

