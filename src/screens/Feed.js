import React from "react";
import { StyleSheet } from "react-native";

import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Post from '../components/Post'
import axios from 'axios'

export const Feed = () => {
  const [posts, setPosts] = React.useState([
    { text: "cokornasdfjkdsjf", likes: 3454535, comments: [{from:'ismet',text:"Muhtesemmm xD"}] },
    { text: "aaa", likes: 435243234 },
  ]);
  const getFeed =() => {
    axios.post('http://192.168.1.125:9000'+"/post",{
      method:"get-feed",
      data: {}
    },{
      headers:{
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImVtYWlsIjoibXVoYW1tZWRheWRvZ2FuMDEwMTIzMTIzMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWEiLCJpYXQiOjE2MjM2MjAzNzcsImV4cCI6MTYyMzc5MzE3N30.FGYs8nKVCG64swGy_sSdLD3zPAgPN1ImUgwvv1HIwxY"  }
    }).then((data)=>{
      console.log("0CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      console.log(data.data.posts)
      console.log("1CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      setPosts(data.data.posts);
    })
  }
  React.useEffect(()=>{
    getFeed()
  },[])
  return (
  // <TouchableOpacity onPress={()=>{getFeed()}}>
    <ScrollView>
      {posts.map((post,i)=>{
        return <Post content={post} />
      })}
    </ScrollView>
    // </TouchableOpacity> 
    )
};

const styles = StyleSheet.create({
  derp: {
    backgroundColor:'black',
    width:'100%',
    height:'100%',
    // flex: 1,
    // alignSelf:'center',
    // alignItems:'center',
    // justifyContent:'center',
    // color: "green",
    // justifyContent: "center",
    fontSize: 16,
  },
});
