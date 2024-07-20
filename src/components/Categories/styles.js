import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    item:{
        fontSize:13,
        color: 'rgba(0,0,0,0.5)',
        marginRight:17,
        paddingVertical:60,
    },
    selectedItem:{
        textDecorationLine: 'underline',
        color:'#000000'
    }
});

export default styles;