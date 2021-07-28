import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ListItem({ title, subTitle, image, endtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{image}}/>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        {/* <Text style={styles.subTitle}>{endtitle}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
        backgroundColor:'blue'
    },
    title:{
        fontSize:25,
        fontWeight: "bold"
    },
    subTitle:{
        fontSize:20,
        fontWeight: "bold"
    },
});

export default ListItem;