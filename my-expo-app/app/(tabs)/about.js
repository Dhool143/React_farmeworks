

import { View, Text, StyleSheet } from "react-native";
export default function About() {

    return ( 

        <View style={style.container}>
        <Text style={style.title}>About Page</Text>
        <Text style={style.text}> This  App was created using Expo and React Native.
        </Text>
     <Text style={style.text}>  Developed for the React Frameworks assignment</Text>

     </View>

  );

}


const style = StyleSheet.create({
 container:{
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 padding: 20,

 },

 title: {

fontSize: 22,
fontWeight: "bold",
marginBottom: 15,
  
 },


 text: {

fontSize: 16,
textAlign: "center",
marginBottom: 10,


 },
  
});

