import React from "react";
import { StyleSheet, View , Dimensions, Text, TouchableOpacity} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Color } from "../util/Config";
import { changeScreen } from "../redux/actions/screens";
import { useDispatch } from 'react-redux'

let classes = {
  root: {
    width: "100%",
    height: 60,
    bottom:0,
    marginTop:'auto',
    // paddingBottom:15,
    // marginBottom:15,
    paddingLeft:35,
    paddingRight:35,
    backgroundColor:Color.second,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  button:{
    // width:'100%',
    backgroundColor:Color.third,
    width:45,
    height:45,
    borderRadius:10,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
  }
};

export default function BottomBar() {
    const dispatch = useDispatch()
    const height = Dimensions.get('screen').height /12;
    const items = [
      {
        name: "Feed",
        screen: "Feed",
        icon: <AntDesign name="home" size={28} color="grey" />,
      },
      {
        name: "Search",
        screen: "Search",
        icon: <AntDesign name="search1" size={28} color="grey" />,
      },
      {
        name: "Products",
        screen: "Products",
        icon: <AntDesign name="gift" size={28} color="grey" />,
        
      },
      // {
      //   name: "Ask",
      //   screen: "Ask",
      //   icon: <AntDesign name="API" size={28} color="grey" />,

      // },
      {
        name: "Profile",
        screen: "Profile",
        icon: <Ionicons name="person-outline" size={28} color="grey" />,

      },
    ];
  return (
    <View style={[classes.root,{height}]}>
      {items.map((e,i)=>{
          return (
            <View style={classes.button}>
               <TouchableOpacity onPress={()=>{
                  dispatch({
                    type: "CHANGE_SCREEN",
                    screen: e.screen,
                  });
               }}>

              {e.icon}
               </TouchableOpacity>
            </View>
          );
      })}

    </View>
  );
}
