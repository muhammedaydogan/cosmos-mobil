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
              uri:"http://192.168.1.125:9000/getPhoto/"+ (content.id ? content.id : 1)
                  }}
          />
        </View>

        <View style={classes.username}>
          <Text style={classes.username_text}>
            {content?.user?.firstName +" " +content?.user?.lastName}
          </Text>
        </View>
        <View style={classes.threedots}></View>
      </View>
      {/* header */}
      <View style={classes.image_container}>
        <Image
          style={classes.image}
          source={{
            uri:"http://192.168.1.125:9000/getPhoto/"+ (content.id ? content.id : 1)
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
          {liked + 403} Kisi Begendi
          {/* {content.likes?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kisi */}
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