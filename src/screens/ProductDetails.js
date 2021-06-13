import React from "react";

import { 
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity, 
} from "react-native";
import { connect} from "react-redux"
import { Divider } from 'react-native-elements';
import Post from '../components/Post'
import axios from "axios"

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
    // borderRadius:100,
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
const ProductDetails = (props) => {
  const [photos, setPhotos] = React.useState([
    { uri:"http://192.168.1.125:9000/getPhoto/5" },
    { uri:"https://wikisouthafrica.co.za/wp-content/uploads/2020/03/Mihlali-Ndamase.jpg" },
    { uri:"https://yt3.ggpht.com/a/AATXAJyGnHht0meDX29PGCgvMIocVTA4ixpy86Qsldd8Ig=s900-c-k-c0xffffffff-no-rj-mo" },
    { uri:"https://im0-tub-ru.yandex.net/i?id=032e036b3c067e178058aa2ae1de8d5a&ref=rim&n=33&w=126&h=150" },
    { uri:"https://yt3.ggpht.com/a/AATXAJwXCo0bsVUMlQpa4NeROeg4ANO_lRDL4Gg2YR2tpA=s900-c-k-c0xffffffff-no-rj-mo" },
    { uri:"https://i.pinimg.com/originals/7b/78/f3/7b78f3d94c91e9ef4d33dc30418ad139.jpg" },
  ]);
  const {
    name,
    brand,
    price,
    currency,
    website,
    freeShipping,
    url,
    imageLinks,
  } = props.product;
  const getFeed =() => {
    axios.post('http://192.168.1.125:9000'+"/post",{
      "method":"get-by-product",
      "data":{
        "productUrl": url,
      }
    },{
      headers:{
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImVtYWlsIjoibXVoYW1tZWRheWRvZ2FuMDEwMTIzMTIzMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWEiLCJpYXQiOjE2MjM2MjAzNzcsImV4cCI6MTYyMzc5MzE3N30.FGYs8nKVCG64swGy_sSdLD3zPAgPN1ImUgwvv1HIwxY" 
      }
    }).then((data)=>{
      console.log("02CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      console.log(data.data.posts)
      setPhotos(data.data.posts);
      console.log("02=CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

    })
  }
  React.useEffect(()=>{
    // getFeed()
  },[])
  React.useEffect(()=>{
    console.log("1111111111111111111111111")
    console.log(props.product)
  })
  return (
    <>
      <View style={classes.topView}>
        <View style={classes.topLeftSide}>
          <TouchableOpacity
            onPress={() => {
              console.log(props.product.product);
            }}
          >
            <Image
              style={classes.avatar_icon}
              source={{
                uri:
                  imageLinks[0],
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={classes.topRightSide}>
          <View style={classes.postAndFollowers}>
            <Text>{`${price} \nTRY`}</Text>
            <Text>{freeShipping && "Free Shipping"}</Text>
          </View>
          <Divider orientation="horizontal" style={{ padding: 5 }} />
          <Text style={classes.userNameText}>{name}</Text>
          <Text style={classes.userNameSubText}>{brand}</Text>
        </View>
      </View>
      <View style={classes.bottomView}>
        {photos.map((e, i) => {
          return (
            <Image
              style={classes.photo}
              source={{
                uri: e.uri,
                // uri: "http://192.168.1.125:9000/getPhoto/"+e.id,
              }}
            />
          );
        })}
      </View>
    </>
  );
};
export default connect((state) => ({
  product: state.screens.product,
}))(ProductDetails);
