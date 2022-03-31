import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';


const NavigateCard = () => {
   const Stack = createStackNavigator();

   return ( 
      <SafeAreaView style={tw`bg-white flex-1`}>
         <Text>Good Morning Frans Sebastian</Text>
      </SafeAreaView>
   )
}

export default NavigateCard;