import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../src/Style";
import { TextInput } from 'react-native-gesture-handler';
export default class SignIn extends Component {
    render() {
        return (
            <LinearGradient
                // Button Linear Gradient
                colors={['#c08af3', '#054aa5',]}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1, borderRadius: 5, alignItems: 'center', alignContent: 'center', }}>
                <Text
                    style={styles.text_}>

                    SIGN IN
        </Text>
                <View style={styles.signIn_View}>
                    {/** For Email */}
                    <View style={styles.input}>
                        <Text style={{ color: '#666666', fontSize: 14 }}>Email</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="gmail" color="#666666" size={15}></MaterialIcons>
                            <TextInput style={{ width: '80%', paddingLeft: 11, fontSize: 18 }}></TextInput>
                        </View>
                    </View>
                    {/** For password */}
                    <View style={styles.input}>
                        <Text style={{ color: '#666666', fontSize: 14 }}>Password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="lock" color="#666666" size={15}></MaterialIcons>
                            <TextInput style={{ width: '80%', paddingLeft: 11, fontSize: 18 }}></TextInput>
                        </View>
                    </View>
                    {/** For forgot password */}
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 5 }}  >
                        <Text style={{ color: '#5c11a2', marginRight: 25, }}>Forgot password?
                            </Text>
                    </TouchableOpacity>
                    {/** For forgot SignUp arrow button */}
                   
                       <LinearGradient
                        colors={['#c08af3', '#054aa5',]}
                        start={{ x: 1, y: 0.5 }}
                        end={{ x: 0, y: 1 }}
                        style={{borderRadius:100,alignSelf:'flex-end',marginRight:30,marginTop:30,height:45,justifyContent:'center'}}
                        
                       >
                           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Store')} >
                           <MaterialIcons name="arrow-right" color="#fff" size={35} style={{padding:6}} ></MaterialIcons>
                           </TouchableOpacity>
                           
                       </LinearGradient>
                       
                    

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Don't have account? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 15 }}>click here</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}