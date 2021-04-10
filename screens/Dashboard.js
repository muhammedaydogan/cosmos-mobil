import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Color } from "../util/Config";
import { onLogin } from '../redux/actions'
import {changeScreen } from '../redux/actions/screens'
import axios from "axios";

const classes = {
  root: {
    padding: 35,
    paddingTop: "40%",

    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 25,
    color: Color.third,
    alignSelf: "center",
  },

};

const Dashboard = (props) => {

  const [cHash, setCHash] = React.useState(0);

  React.useEffect(()=>{
    getRates()
  })

  const getRates = async () => {
    console.log(props.miner_address);
    const res = await axios.get(`https://api.ethermine.org/miner/${props.miner_address}/workers/`);
    const miner1 = res.data.data[0]
    setCHash(miner1.currentHashrate)
  }
  return (
    <View style={classes.root}>
      <View style={classes.headerContainer}>
      <Text style={classes.header}>currentHashrate {cHash}</Text>
      </View>
      
    </View>
  );
};

export default connect(state=>({
  miner_address: state.auth.miner_address
}),{ onLogin, changeScreen })(Dashboard);
