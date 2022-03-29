import React from 'react';
import { Text, View } from 'react-native';

const data = [
   {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
   },
   {
      id: "456",
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "EatScreen",
   },
];

const NavOptions = () => {
   return (
      <View>
         <Text>
            Hello World
         </Text>
      </View>
   );
};

export default NavOptions;
