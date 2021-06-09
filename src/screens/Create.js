import React from "react";
import { StyleSheet } from "react-native";

import { Text, ScrollView, View } from "react-native";
import Post from '../components/Post'

export const Feed = () => {
  const [posts, setPosts] = React.useState([
    { text: "cokornasdfjkdsjf", likes: 3454535, comments: [{from:'ismet',text:"Muhtesemmm xD"}] },
    { text: "aaa", likes: 435243234 },
  ]);
  return <ScrollView>
      {posts.map((post,i)=>{
        return <Post content={post} />
      })}
    </ScrollView>
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
