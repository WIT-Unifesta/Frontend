import { StyleSheet, Text, View, Button,Image, LayoutAnimation,useWindowDimensions,TouchableOpacity,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const FestivalReview = () => {
    const [isSelect,setSelect] = useState([false,false,true]);
    const yearButton = (id:number)=>{
        return (
            <TouchableOpacity
                style={{
                    flex:1,
                    borderColor:'black',
                    padding:1,
                    borderWidth:1,
                    margin:5,
                    borderRadius:32,
                    justifyContent:'center',
                    alignItems:'center',
                    width:60,
                    height:30,
                    backgroundColor: isSelect[id] ? 'yellow' : 'white',
                }}
                onPress={()=>{
                    let newSelect:Array<boolean>=[];
                    for(let i=0;i<3;i++){
                        if(i==id) newSelect.push(true);
                        else newSelect.push(false);
                    }
                    setSelect(newSelect);
                }}>
                <Text 
                    style={{
                        fontWeight:isSelect[id]?'600':'100',
                    }}>{id+2018}
                </Text>
            </TouchableOpacity>    
        )
    }
    return(
        <ScrollView style={{ flex: 1, }}>
            <View style={{flex:2,marginLeft:10,marginRight:10,marginTop:30,marginBottom:30,justifyContent:'center',alignItems:'center',}}>
                <TouchableOpacity 
                    style={{
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        height:50,
                        borderWidth:1,
                        borderRadius:50,
                        borderColor:'#3C89FF',
                    }}>
                    <Text style={{color:'#3C89FF'}}>후기 쓰기</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,flexDirection:'row',margin:10,}}>
                {yearButton(2)}
                {yearButton(1)}
                {yearButton(0)}
                <View style={{flex:3,}}></View>
            </View>
            <View style={{flex:8,margin:10,}}>
                <View style={{flex:1,marginBottom:30,}}>
                    <View style={{flex:1,flexDirection:'row',marginBottom:7,justifyContent:'space-between',}}>
                        <View style={{width:40,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:4,}}>
                            <View style={{width:10,height:10,borderRadius:50,backgroundColor:'gray',marginRight:4,marginLeft:8,}}></View>
                            <Text style={{fontWeight:'bold',}}>학생 1</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#d3d3d3',width:60,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:50,marginRight:10,}}
                        >
                            <Icon name="hearto" style={{fontSize:15,marginRight:3,}}/>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontWeight:'500',marginBottom:3,}}>레드벨벳,크러쉬.. 가슴이 웅장해진다!</Text>
                        <Text style={{fontWeight:'200',fontSize:10,}}>2022 / 05.06 15:12</Text>
                    </View>
                </View>
                <View style={{flex:1,marginBottom:30,}}>
                    <View style={{flex:1,flexDirection:'row',marginBottom:7,justifyContent:'space-between',}}>
                        <View style={{width:40,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:4,}}>
                            <View style={{width:10,height:10,borderRadius:50,backgroundColor:'gray',marginRight:4,marginLeft:8,}}></View>
                            <Text style={{fontWeight:'bold',}}>학생 1</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#d3d3d3',width:60,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:50,marginRight:10,}}
                        >
                            <Icon name="hearto" style={{fontSize:15,marginRight:3,}}/>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontWeight:'500',marginBottom:3,}}>레드벨벳,크러쉬.. 가슴이 웅장해진다!</Text>
                        <Text style={{fontWeight:'200',fontSize:10,}}>2022 / 05.06 15:12</Text>
                    </View>
                </View>
                <View style={{flex:1,marginBottom:30,}}>
                    <View style={{flex:1,flexDirection:'row',marginBottom:7,justifyContent:'space-between',}}>
                        <View style={{width:40,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:4,}}>
                            <View style={{width:10,height:10,borderRadius:50,backgroundColor:'gray',marginRight:4,marginLeft:8,}}></View>
                            <Text style={{fontWeight:'bold',}}>학생 1</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#d3d3d3',width:60,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:50,marginRight:10,}}
                        >
                            <Icon name="hearto" style={{fontSize:15,marginRight:3,}}/>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontWeight:'500',marginBottom:3,}}>레드벨벳,크러쉬.. 가슴이 웅장해진다!</Text>
                        <Text style={{fontWeight:'200',fontSize:10,}}>2022 / 05.06 15:12</Text>
                    </View>
                </View>
                <View style={{flex:1,marginBottom:30,}}>
                    <View style={{flex:1,flexDirection:'row',marginBottom:7,justifyContent:'space-between',}}>
                        <View style={{width:40,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:4,}}>
                            <View style={{width:10,height:10,borderRadius:50,backgroundColor:'gray',marginRight:4,marginLeft:8,}}></View>
                            <Text style={{fontWeight:'bold',}}>학생 1</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#d3d3d3',width:60,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:50,marginRight:10,}}
                        >
                            <Icon name="hearto" style={{fontSize:15,marginRight:3,}}/>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontWeight:'500',marginBottom:3,}}>레드벨벳,크러쉬.. 가슴이 웅장해진다!</Text>
                        <Text style={{fontWeight:'200',fontSize:10,}}>2022 / 05.06 15:12</Text>
                    </View>
                </View>
                <View style={{flex:1,marginBottom:30,}}>
                    <View style={{flex:1,flexDirection:'row',marginBottom:7,justifyContent:'space-between',}}>
                        <View style={{width:40,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:4,}}>
                            <View style={{width:10,height:10,borderRadius:50,backgroundColor:'gray',marginRight:4,marginLeft:8,}}></View>
                            <Text style={{fontWeight:'bold',}}>학생 1</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#d3d3d3',width:60,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:50,marginRight:10,}}
                        >
                            <Icon name="hearto" style={{fontSize:15,marginRight:3,}}/>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontWeight:'500',marginBottom:3,}}>레드벨벳,크러쉬.. 가슴이 웅장해진다!</Text>
                        <Text style={{fontWeight:'200',fontSize:10,}}>2022 / 05.06 15:12</Text>
                    </View>
                </View>
                <View style={{flex:1,marginBottom:30,}}>
                    <View style={{flex:1,flexDirection:'row',marginBottom:7,justifyContent:'space-between',}}>
                        <View style={{width:40,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:4,}}>
                            <View style={{width:10,height:10,borderRadius:50,backgroundColor:'gray',marginRight:4,marginLeft:8,}}></View>
                            <Text style={{fontWeight:'bold',}}>학생 1</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#d3d3d3',width:60,height:30,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:50,marginRight:10,}}
                        >
                            <Icon name="hearto" style={{fontSize:15,marginRight:3,}}/>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontWeight:'500',marginBottom:3,}}>레드벨벳,크러쉬.. 가슴이 웅장해진다!</Text>
                        <Text style={{fontWeight:'200',fontSize:10,}}>2022 / 05.06 15:12</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default FestivalReview;