import React from "react";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const HomeScreen = () => {
   return (
      <SafeAreaView style={tw`bg-white h-full`}>
         <View style={tw`p-5`}>
            <Image 
               style={styles.img}
               source={{ 
                  uri: 'https://links.papareact.com/gzs',
               }}
            />
            <NavOptions /> 
         </View>
      </SafeAreaView>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   img: {
      width: 100,
      height: 100,
      resizeMode: "contain",
   },
});