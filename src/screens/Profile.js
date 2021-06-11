import React from "react";

import { 
  Text,
  ScrollView,
  View,
  Image, 
} from "react-native";
import { Divider } from 'react-native-elements';
import Post from '../components/Post'

const classes = {
  topView: {
    width:'100%',
    height:'30%',
    // backgroundColor:'green',
    flexDirection:'row'
  },
  topLeftSide: {
    width:'40%',
    height:'100%',
    padding:10,
    // backgroundColor:'red',
  },
  topRightSide: {
    width:'60%',
    height:'100%',
    padding:25,
    // backgroundColor:'orange',
  },
  avatar_icon:{
    width:150,
    height:150,
    borderRadius:100,
  },
  postAndFollowers:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  userNameText:{
    fontSize:20,
    paddingTop:10,
  },
  userNameSubText:{
    fontSize:16,
    paddingTop:10,
    color:'grey'
  },
  bottomView: {
    width:'100%',
    height:'70%',
    // backgroundColor:'green',
    flexDirection:'row',
    flexWrap: "wrap",

  },
  photo:{
    width:200,
    height:200,
  },
}

export const Profile = () => {
  const [photos, setPhotos] = React.useState([
    { uri:"https://i.pinimg.com/736x/f9/44/86/f944860191500f18879b1813bda542be--beautiful-people.jpg" },
    { uri:"https://www.karadenizgazete.com.tr/External/v1/Images/images/5f057863ae298b5d9e7b19c3.jpg" },
    { uri:"https://pbs.twimg.com/media/EWfYWS7XkAAHZNI.jpg:large" },
    { uri:"https://im0-tub-ru.yandex.net/i?id=a329679966b8b8916f2aa1c10d8ef4cc-l&ref=rim&n=13&w=1080&h=1080" },
  ]);
  return <>
  <View style={classes.topView}>
    <View style={classes.topLeftSide}>
      <Image
        style={classes.avatar_icon}
        source={{
          uri:
            "https://i.pinimg.com/736x/f9/44/86/f944860191500f18879b1813bda542be--beautiful-people.jpg",
        }}
      />
    </View> 
    <View style={classes.topRightSide}>
        <View style={classes.postAndFollowers}>
          <Text>{"521\nposts"}</Text>
          <Text>{"141k\nfollowers"}</Text>
          <Text>{"714\nfollowing"}</Text>
        </View>
        <Divider orientation="horizontal" style={{padding:5}} />
        <Text style={classes.userNameText}>{"Cansu Akin"}</Text>
        <Text style={classes.userNameSubText}>{"Influencer - Fashion/Lifestyle"}</Text>
    </View> 
  </View> 
  {/* <ScrollView style={classes.bottomView}> */}
  <View style={classes.bottomView}>
      {photos.map((e,i)=>{
        return <Image
        style={classes.photo}
        source={{
          uri:e.uri,
        }}
        />
      })}
    </View>
    {/* </ScrollView> */}
  </>
};
