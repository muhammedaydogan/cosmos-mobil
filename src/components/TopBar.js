import React from "react";
import { StyleSheet, View , Dimensions, Text, TouchableOpacity} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'

import { Color } from "../util/Config";

let classes = {
  root: {
    width: "100%",
    height: 60,
    top:0,
    marginTop:25,
    marginBottom:'auto',
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:Color.second,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  button:{
    // width:'100%',
    // backgroundColor:Color.third,
    width:45,
    height:45,
    borderRadius:10,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
  }
};

export default function TopBar() {
    const dispatch = useDispatch();
    const height = Dimensions.get('screen').height /12;
    const items = [
      {
        name: "Feed",
        screen: "Feed",
        icon: <TouchableOpacity onPress={()=>{
          dispatch({
            type: "CHANGE_SCREEN",
            screen: "CreatePost",
          });
        }}><Ionicons name="camera-outline" size={28} color="grey" /></TouchableOpacity>,
      },
      {
          icon: <View style={{width:90,alignSelf:'center',justifyContent:'center'}}><Text>COSMOS</Text></View>
      },
      
      {
        name: "Profile",
        screen: "Profile",
        icon: <Ionicons name="paper-plane-outline" size={28} color="grey" />,

      },
    ];
  return (
    <View style={[classes.root,{height}]}>
      {items.map((e,i)=>{
          return (
            <View style={classes.button}>
              {e.icon}
            </View>
          );
      })}

    </View>
  );
}
