import React, { Component } from 'react'
import {View,Image,TouchableOpacity,Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'
import Andesign from 'react-native-vector-icons/AntDesign'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
export default class ImageUpload extends Component{
    state = {
        image: null,
      };
      componentDidMount() {
        this.getPermissionAsync();
      }
      getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#dee7f1' }}>
               {/**Header  */}
               <View style={{ width: '100%' }}>
                    <LinearGradient
                        colors={['#054aa5', '#c08af3',]}
                        start={{ x: 1, y: 0.5 }}
                        end={{ x: 0, y: 1 }}
                        style={{ height: 40, alignContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Store')}>
                        <Andesign name="arrowleft" size={35} color="#fff" style={{ alignSelf: 'flex-start', marginLeft: 10 }}></Andesign>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20, color: '#fff', fontWeight: 'bold', alignSelf: 'center'
                        }}>UPLAOD A PHOTO</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
                        <Entypo name="home" size={25} color="#fff" style={{ marginRight: 10, }}></Entypo>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {/*View for image uplaod */}
                <View style={{flex:1,justifyContent:'center'}}>
                <View style={{height:210,width:210,borderColor:"#054aa5",borderWidth:5,alignSelf:'center'}}>
                   {this.state.image==null?<Image source={require('./images/imageup_icon.png')} style={{ width: 200, height: 200 }}></Image>:(this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200,resizeMode:'stretch'}} />)}
                </View>
               
                </View>




                <View style={{position:'absolute',bottom:0,flexDirection:'row' ,alignContent:'stretch'}}>
                <LinearGradient
                        colors={['#054aa5', '#c08af3',]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={{width:'50%'}}
                        >
                            <TouchableOpacity  style={{width:'100%',alignItems:'center'}} onPress={this._pickImage}>
                                <Text style={{color:'white',padding:8,fontSize:20}}>CAMERA ROll
                                </Text>
                                </TouchableOpacity>
                        </LinearGradient>
                        <View style={{backgroundColor:'#1a1a1a',width:3}}></View>
                        <LinearGradient
                        colors={['#054aa5', '#c08af3',]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={{width:'50%',justifyContent:'center',alignContent:'center',alignItems:'center'}}
                        >
                            <TouchableOpacity style={{width:'100%',alignItems:'center'}}>
                                <Text style={{color:'white',padding:8,fontSize:20}}>UPLAOD IMAGE
                                </Text>
                                </TouchableOpacity>
                        </LinearGradient>
                </View>
            </View>
        )
    }
}