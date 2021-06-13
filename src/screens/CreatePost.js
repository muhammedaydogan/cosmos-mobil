import React from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
  AsyncStorage,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';

// // import config from '../util/Config's
import axios from 'axios'
const styles = {
    buttonView:{
        width:'100%',
    },
    createButton:{
        width:'70%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        // marginTop:50,
        marginTop:30,
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor: "#5b6d5b"
    },
    createButtonText:{
        fontSize:20,
    },
    textInput:{
        // backgroundColor: "#5b6d5b",
        alignItems:'center',
        justifyContent:'center',
        
    }
}
const config = {
    backendUrl: 'http://192.168.1.125:9000'
}

export const CreatePost = (props) => {
    
    const { width } = Dimensions.get('screen');
   const [tags, setTags] = React.useState("");
   const [image, setImage] = React.useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==');

   React.useEffect(()=>{console.log(tags)},[tags]);

   const createPost = async () => {
    let imagePath = await AsyncStorage.getItem('imagePath');
    let token = await AsyncStorage.getItem('token');
    console.log('createPost atilirken',{
      imagePath,
      token
    })
    // let res = await axios.post(config.backendUrl+"/post",{
    //   method:"create",
    //   data: {
    //     tagIds:tags,
    //   }
    // },{
    //   headers:{
    //     Authorization: token
    //   }
    // })
    // let res2 = await axios.post(config.backendUrl+"/getImages")
    // setImage(res2)
    // console.log("res2")
    // console.log(res2)
   
   }
   const addNew = async (user) => {
    let result = await ImagePicker.launchCameraAsync({
      quality: 0.1,
      aspect: [4, 3],
    });
  
    if (result.cancelled) {
      return;
    }
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    let formData = new FormData();
    formData.append('image', { uri: localUri, name: filename, type });
    formData.append('tagIds', tags);
    formData.append('productIds',"1,2" );
    console.log(formData)
//   await AsyncStorage.getItem('token');
    axios
      .post(config.backendUrl + "/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImVtYWlsIjoibXVoYW1tZWRheWRvZ2FuMDEwMTIzMTIzMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWEiLCJpYXQiOjE2MjM1OTQ2MDMsImV4cCI6MTYyMzc2NzQwM30.IYx6LYME8WTbxRyHu0C_B4cLPQukN9WO8j6lmpQEx7g",
        },
      })
      .then((res) => {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(res);
      })
      .catch((e) => {
        console.log("============================================================")
        console.log(e);
      });
  }
  
    
    return (
      <View  style={styles.home}>
        <View >
                   
         <Image
        //   source = {{uri:config.backendUrl+'/getImages/imageTEMP.jpg'}}
                      style = {{ width: 200, height: 200 }}
                      /> 
                    <View style={styles.textInput}>
                      <TextInput
                        
                        // borderless
                        placeholder="#tags..."
                        onChangeText = {(value)=>{
                          setTags(value)
                        }}
                      
                      />
                      
                    </View>
                    
                    <View style={styles.buttonView}>
                      <TouchableOpacity color="primary" style={styles.createButton} onPress={()=>{
                        addNew()
                      }}>
                        <Text style={styles.createButtonText}>
                          Select Photo
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                      <TouchableOpacity color="primary" style={styles.createButton} onPress={()=>{
                        createPost()
                      }}>
                        <Text style={styles.createButtonText}>
                          Create Post
                        </Text>
                      </TouchableOpacity>
                    </View>
                </View>
      </View>
    );
  
}


