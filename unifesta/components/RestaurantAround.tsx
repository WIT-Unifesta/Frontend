import { Text, View, Button,Image, LayoutAnimation,useWindowDimensions,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const RestaurantAround = () => {
    return(
        <ScrollView style={{ flex: 1,}}>
            <View style={{flex:1,marginTop:30,marginLeft:20,}}>
                <Text style={{fontSize:20,fontWeight:'500',}}>
                    재학생들이 추천하는 찐맛집
                </Text>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                        <View style={{flexDirection:'column',flex:1,}}> 
                            <View style={{width:100,height:100,borderRadius:10,backgroundColor:'#444eee',marginTop:10,}}></View>
                            <View style={{marginTop:5,flexDirection:'row',marginLeft:3,}}>
                                <Text style={{fontWeight:'600',marginRight:10,}}>포비</Text>
                                <Text style={{fontWeight:'200',}}>일식당</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',flex:1,}}> 
                            <View style={{width:100,height:100,borderRadius:10,backgroundColor:'#444eee',marginTop:10,}}></View>
                            <View style={{marginTop:5,flexDirection:'row',marginLeft:3,}}>
                                <Text style={{fontWeight:'600',marginRight:10,}}>포비</Text>
                                <Text style={{fontWeight:'200',}}>일식당</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                        <View style={{flexDirection:'column',flex:1,}}> 
                            <View style={{width:100,height:100,borderRadius:10,backgroundColor:'#444eee',marginTop:10,}}></View>
                            <View style={{marginTop:5,flexDirection:'row',marginLeft:3,}}>
                                <Text style={{fontWeight:'600',marginRight:10,}}>포비</Text>
                                <Text style={{fontWeight:'200',}}>일식당</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',flex:1,}}> 
                            <View style={{width:100,height:100,borderRadius:10,backgroundColor:'#444eee',marginTop:10,}}></View>
                            <View style={{marginTop:5,flexDirection:'row',marginLeft:3,}}>
                                <Text style={{fontWeight:'600',marginRight:10,}}>포비</Text>
                                <Text style={{fontWeight:'200',}}>일식당</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                        <View style={{flexDirection:'column',flex:1,}}> 
                            <View style={{width:100,height:100,borderRadius:10,backgroundColor:'#444eee',marginTop:10,}}></View>
                            <View style={{marginTop:5,flexDirection:'row',marginLeft:3,}}>
                                <Text style={{fontWeight:'600',marginRight:10,}}>포비</Text>
                                <Text style={{fontWeight:'200',}}>일식당</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',flex:1,}}> 
                            <View style={{width:100,height:100,borderRadius:10,backgroundColor:'#444eee',marginTop:10,}}></View>
                            <View style={{marginTop:5,flexDirection:'row',marginLeft:3,}}>
                                <Text style={{fontWeight:'600',marginRight:10,}}>포비</Text>
                                <Text style={{fontWeight:'200',}}>일식당</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                                <View style={{marginTop:5,flexDirection:'row',marginLeft:3, backgroundColor:'#d3d3d3',width:40,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',}}>
                                    <View><Text style={{fontSize:10,}}>야끼우동</Text></View>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    
                </View>
                

            </View>
        </ScrollView>
    )
};

export default RestaurantAround;