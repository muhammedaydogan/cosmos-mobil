import React from "react";
import { FontAwesome, Ionicons } from '@expo/vector-icons';


import { Text, ScrollView, Image,View, TouchableOpacity } from "react-native";

export default Post = ({content}) => {
  const [commentOpen, setCommentOpen] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const likePost = () => {
    setLiked(!liked)
  }
  return (
    <View style={classes.root}>
      <View style={classes.header}>
        <View style={classes.avatar}>
          <Image
            style={classes.avatar_icon}
            source={{
              uri:
                "data:image/png;base64,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",
            }}
          />
        </View>

        <View style={classes.username}>
          <Text style={classes.username_text}>
            {content.username || "cansuakinn"}
          </Text>
        </View>
        <View style={classes.threedots}></View>
      </View>
      {/* header */}
      <View style={classes.image_container}>
        <Image
          style={classes.image}
          source={{
            uri:
              "https://i1.haber7.net/haber/haber7/photos/2020/28/Urmro_1594216175_6392.jpg",
          }}
        />
      </View>
      <View style={classes.actions}>
        <TouchableOpacity onPress={likePost} style={classes.actions_icons}>
          {liked ? <Ionicons name="heart" size={28} color="#e31b23" /> : <Ionicons name="heart-outline" size={28} color="grey" /> }
          
        </TouchableOpacity>
        <View style={classes.actions_icons}>
          <Ionicons name="chatbubble-outline" size={28} color="grey" />
        </View>
        <View style={classes.actions_icons}>
          <FontAwesome name="send-o" size={28} color="grey" />
        </View>
        <View style={classes.actions_archive}>
          <Ionicons name="archive-outline" size={28} color="grey" />
        </View>
      </View>
      {/* action */}
      <View style={classes.likes}>
        <Text style={classes.likes_text}>
          {content.likes?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kisi
          Begendi
        </Text>
      </View>
      {/* likes */}
      <View style={classes.text}>
        <Text style={classes.text_text}>
          {"Check my new photo. Ladssss :D"}
        </Text>
      </View>
      {/* text */}
      <View style={classes.comment}>
        {commentOpen ? (
          <ScrollView style={classes.commentOpen_root}>
            {
              content.comments?.map((comment,i)=>{
              return <Text style={classes.commentOpen_text}>{comment.text}</Text>
              })
            }
          </ScrollView>
        ) : (
          <TouchableOpacity onPress={()=>{setCommentOpen(true)}}>
            {content.comments?.length > 0 &&  <Text style={classes.comment_text}>
              {content.comments?.length} Yorumu Goruntule
            </Text> }
          
          </TouchableOpacity>
        )}
      </View>
      {/* comment */}
    </View>
  );
};

const classes = {
  root: {
    width:'100%',
    height:550,
    color: "green",
    fontSize: 16,
  },
  image_container:{
    backgroundColor:'pink',
    height:350,
  },
  image:{
    height:350,
  },
  header:{
      width:'100%',
      padding:5,
      marginBottom:10,
      height:50,
      flexDirection:'row',
      justifyContent:'flex-start',
  },
  avatar:{
    //   width:80,
  },
  avatar_icon:{
      width:50,
      height:50,
      borderRadius:100,
  },
  username:{
      justifyContent:'center',
      paddingLeft:10,
      paddingTop:10,
  },
  username_text :{
      fontFamily:'vegan'
  },
  actions:{
    width:'100%',
    padding:10,
    // marginTop:5,
    height:50,
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  actions_archive:{
    // marginLeft:30,
    marginLeft:'auto',
    right:0,
  },
  actions_icons:{
    marginRight:10,
  },
  likes:{
    paddingLeft:10,
  },
  likes_text:{
    paddingLeft:2,
    fontWeight:'bold',
  
  },
  text:{
    paddingLeft:10,
  },
  text_text:{
    paddingLeft:2,
  },
  comment:{
    paddingLeft:10,
  },
  comment_text:{
    paddingLeft:2,
    color:'grey',
  },
}