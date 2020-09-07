import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Styles from '../src/Style'
import { Card } from "react-native-elements";
export default class Store extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#dee7f1' }}>
                {/**Header  */}
                <View style={{ width: '100%' }}>
                    <LinearGradient
                        colors={['#054aa5', '#c08af3',]}
                        start={{ x: 1, y: 0.5 }}
                        end={{ x: 0, y: 1 }}
                        style={{ height: 40, alignContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <Entypo name="menu" size={35} color="#fff" style={{ alignSelf: 'flex-start', marginLeft: 10 }}></Entypo>

                        <Text style={{
                            fontSize: 23, color: '#fff', fontWeight: 'bold', alignSelf: 'center'
                        }}>STORE</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ImageUplaod')}>
                        <Entypo name="camera" size={25} color="#fff" style={{ marginRight: 10, }}></Entypo>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {/*All Categories */}
                <View style={{ height: 150, backgroundColor: '#fff', marginLeft: 5, marginRight: 5, alignSelf: 'stretch', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                    <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 16 }}>All categories</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', margin: 15 }}>
                            <View style={{ backgroundColor: '#dee7f1', height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../src/images/egg_icon.jpg')} style={{ height: 40, width: 40, borderRadius: 50, resizeMode: 'stretch' }}></Image>
                            </View>
                            <Text>Eggs</Text>
                        </View>
                        <View style={{ alignItems: 'center', margin: 15 }}>
                            <View style={{ backgroundColor: '#dee7f1', height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../src/images/meat_icon.jpg')} style={{ height: 40, width: 40, borderRadius: 50, resizeMode: 'stretch' }}></Image>
                            </View>
                            <Text>Meat</Text>
                        </View>
                        <View style={{ alignItems: 'center', margin: 15 }}>
                            <View style={{ backgroundColor: '#dee7f1', height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../src/images/vegetables_icon.png')} style={{ height: 40, width: 40, borderRadius: 50, resizeMode: 'stretch' }}></Image>
                            </View>
                            <Text>Vegetables</Text>
                        </View>
                        <View style={{ alignItems: 'center', margin: 9 }}>
                            <View style={{ backgroundColor: '#dee7f1', height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../src/images/ghee_icon.png')} style={{ height: 40, width: 40, borderRadius: 50, resizeMode: 'stretch' }}></Image>
                            </View>
                            <Text>Ghee</Text>
                        </View>
                    </View>
                </View>
                {/*design for products */}
                <ScrollView>
                <View>
                    <View style={{ alignContent: 'stretch', width: '100%', marginTop: 20, flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 16 }}>Feathered products</Text>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', marginLeft: '48%' }}>
                                <Text>more {'>>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 170 }}>
                            <Card>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ backgroundColor: '#054aa5', color: 'white', padding: 3 }}>100G</Text>
                                    <Antdesign name="hearto" size={25} style={{ paddingLeft: 50 }}></Antdesign>
                                </View>
                                <Image source={require('../src/images/ginger_icon.jpg')} style={{ height: 90, width: 120, resizeMode: 'stretch' }}></Image>
                                <Text>Ginger</Text>
                                <Text style={{ color: '#054aa5', fontWeight: 'bold' }}>Rs.60.00</Text>
                            </Card>
                        </View>
                        <View style={{ width: 170 }}>
                            <Card>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ backgroundColor: '#054aa5', color: 'white', padding: 3 }}>100G</Text>
                                    <Antdesign name="heart" size={25} color="#054aa5" style={{ paddingLeft: 50 }}></Antdesign>
                                </View>
                                <Image source={require('../src/images/ginger_icon.jpg')} style={{ height: 90, width: 120, resizeMode: 'stretch' }}></Image>
                                <Text>Ginger</Text>
                                <Text style={{ color: '#054aa5', fontWeight: 'bold' }}>Rs.60.00</Text>
                            </Card>
                        </View>

                    </View>
                </View>
                {/**-----new products */}
                <View>
                    <View style={{ alignContent: 'stretch', width: '100%', marginTop: 20, flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 16 }}>New products</Text>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', marginLeft: '55%' }}>
                                <Text>more {'>>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 170 }}>
                            <Card>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ backgroundColor: '#054aa5', color: 'white', padding: 3 }}>100G</Text>
                                    <Antdesign name="hearto" size={25} style={{ paddingLeft: 50 }}></Antdesign>
                                </View>
                                <Image source={require('../src/images/ginger_icon.jpg')} style={{ height: 90, width: 120, resizeMode: 'stretch' }}></Image>
                                <Text>Ginger</Text>
                                <Text style={{ color: '#054aa5', fontWeight: 'bold' }}>Rs.60.00</Text>
                            </Card>
                        </View>
                        <View style={{ width: 170 }}>
                            <Card>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ backgroundColor: '#054aa5', color: 'white', padding: 3 }}>100G</Text>
                                    <Antdesign name="heart" size={25} color="#054aa5" style={{ paddingLeft: 50 }}></Antdesign>
                                </View>
                                <Image source={require('../src/images/ginger_icon.jpg')} style={{ height: 90, width: 120, resizeMode: 'stretch' }}></Image>
                                <Text>Ginger</Text>
                                <Text style={{ color: '#054aa5', fontWeight: 'bold' }}>Rs.60.00</Text>
                            </Card>
                        </View>

                    </View>
                    
                </View>
                {/**-----Favourit products */}
                <View>
                    <View style={{ alignContent: 'stretch', width: '100%', marginTop: 20, flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 16 }}>Favourites</Text>
                            
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 170 }}>
                            <Card>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ backgroundColor: '#054aa5', color: 'white', padding: 3 }}>100G</Text>
                                    <Antdesign name="hearto" size={25} style={{ paddingLeft: 50 }}></Antdesign>
                                </View>
                                <Image source={require('../src/images/ginger_icon.jpg')} style={{ height: 90, width: 120, resizeMode: 'stretch' }}></Image>
                                <Text>Ginger</Text>
                                <Text style={{ color: '#054aa5', fontWeight: 'bold' }}>Rs.60.00</Text>
                            </Card>
                        </View>
                        <View style={{ width: 170 }}>
                            <Card>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ backgroundColor: '#054aa5', color: 'white', padding: 3 }}>100G</Text>
                                    <Antdesign name="heart" size={25} color="#054aa5" style={{ paddingLeft: 50 }}></Antdesign>
                                </View>
                                <Image source={require('../src/images/ginger_icon.jpg')} style={{ height: 90, width: 120, resizeMode: 'stretch' }}></Image>
                                <Text>Ginger</Text>
                                <Text style={{ color: '#054aa5', fontWeight: 'bold' }}>Rs.60.00</Text>
                            </Card>
                        </View>

                    </View>
                    
                </View>
                </ScrollView>
            </View>
            
        )
    }
}

