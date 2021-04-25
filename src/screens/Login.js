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
import { onLogin } from "../redux/actions";
import { changeScreen } from "../redux/actions/screens";

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
  form: {
    marginTop: 30,
  },
  input: {
    width: "100%",
    height: 65,
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    color: Color.third,
    // borderWidth: 1,
    backgroundColor: Color.second,
    // borderColor: Color.third,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 50,
  },
  label: {
    fontSize: 10,
    marginTop: 25,
    marginBottom: 5,
    paddingLeft: 15,
    color: Color.third,
  },
  submit: {
    marginTop: 30,
  },
  button: {
    backgroundColor: Color.third,
    borderRadius: 50,
    height: 65,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Color.first,
    fontSize: 20,
  },
};

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitLogin = () => {
    console.log("sea");
    props.changeScreen("Dashboard");
  };

  return (
    <View style={classes.root}>
      <View style={classes.headerContainer}>
        <Text style={classes.header}>Welcome to Etherci!</Text>
      </View>
      <View style={classes.form}>
        <Text style={classes.label}>Email</Text>
        <TextInput
          placeholder="john@doe.com"
          style={classes.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Text style={classes.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={classes.input}
          value={password}
          placeholder="password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={classes.submit}>
        <TouchableOpacity
          style={classes.button}
          onPress={() => {
            submitLogin();
          }}
        >
          <Text style={classes.buttonText}>Giris</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default connect(undefined, { onLogin, changeScreen })(Login);
