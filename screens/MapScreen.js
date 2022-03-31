import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionCard from '../components/RideOptionCard';

const MapScreen = () => {
   const Stack = createStackNavigator();

   return (
      <View>
         <View style={tw`h-1/2`}>
            <Map />
         </View>

         <View style={tw`h-1/2`}>
            <Stack.Navigator>
               <Stack.Screen
                  name="NavigateCard"
                  component={NavigateCard}
                  options={{ 
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="RideOptionCard"
                  component={RideOptionCard}
                  options={{ 
                     headerShown: false,
                  }}
               />
            </Stack.Navigator>
         </View>
      </View>
   )
}

export default MapScreen;

