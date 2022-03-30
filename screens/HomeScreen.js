import React from "react";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env"; 


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

            <GooglePlacesAutocomplete 
               placeholder="Where From?"
               styles={{ 
                  container: {
                     flex: 0, 
                  }, 
                  textInput: {
                     fontSize: 18,
                  }
               }}
               onPress={(data, details = null) => {
                  console.log(data, details);
               }}
               fetchDetails={true}
               enablePoweredByContainer={false}
               minLength={2}
               query={{ 
                  key: GOOGLE_MAPS_APIKEY,
                  leanguage: 'id'
               }}
               nearbyPlacesAPI="GooglePlacesSearch"
               debounce={400}   
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