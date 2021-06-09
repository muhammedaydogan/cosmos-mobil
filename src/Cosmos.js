import React from "react";
import {View,Text } from 'react-native'
import Switch from './screens/Switch'
import BottomBar from './components/BottomBar'
import TopBar from './components/TopBar'
import { Color } from "./util/Config";
const classes = {
    root:{
        backgroundColor:Color.background,
        width:'100%',
        height:'100%',
        display:'flex',
        justifContent:'space-between',
    }
}
const Cosmos = (props) => {

  return (
    <View style={classes.root}>
      <TopBar />
      <Switch />
      <BottomBar />
    </View>
  );
};

export default Cosmos;



