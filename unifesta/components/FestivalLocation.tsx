import { Text, View, Image,ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FestivalLocation = () => {
    const [isSelect,setSelect] = useState([true,false,false]);
    const DayButton = (id:number)=>{
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
                    }}>DAY {id+1}
                </Text>
            </TouchableOpacity>    
        )
    }
    return(
        <ScrollView style={{ flex: 1, }}>
            <View style={{flex:4,}}>
                <Image source={require('../assets/map.png')} style={{width:'100%',height:150,}}/>
            </View>
            <View style={{flex:1,flexDirection:'row',marginTop:40,}}>
                {DayButton(0)}
                {DayButton(1)}
                {DayButton(2)}
                <View style={{flex:3,}}></View>
            </View>
            <View style={{flex:8,margin:7,}}>
                <View style={{flex:1,}}>
                    <View style={{flex:1,marginBottom:10,flexDirection:'row',}}>
                        <View style={{backgroundColor:'#3C89FF',borderRadius:100,width:18,height:18,alignItems:'center',justifyContent:'center',marginRight:5,}}>
                            <Text style={{color:'white',fontWeight:'bold',}}>1</Text>
                        </View>
                        <Text style={{fontWeight:'bold',}}>부스이름</Text>
                    </View>
                    <View style={{flex:3,marginBottom:80,}}>
                        <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
                    </View>
                </View>
                <View style={{flex:1,}}>
                    <View style={{flex:1,marginBottom:10,flexDirection:'row',}}>
                        <View style={{backgroundColor:'#3C89FF',borderRadius:100,width:18,height:18,alignItems:'center',justifyContent:'center',marginRight:5,}}>
                            <Text style={{color:'white',fontWeight:'bold',}}>2</Text>
                        </View>
                        <Text style={{fontWeight:'bold',}}>부스이름</Text>
                    </View>
                    <View style={{flex:3,marginBottom:80,}}>
                        <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
                    </View>
                </View>
                <View style={{flex:1,}}>
                    <View style={{flex:1,marginBottom:10,flexDirection:'row',}}>
                        <View style={{backgroundColor:'#3C89FF',borderRadius:100,width:18,height:18,alignItems:'center',justifyContent:'center',marginRight:5,}}>
                            <Text style={{color:'white',fontWeight:'bold',}}>3</Text>
                        </View>
                        <Text style={{fontWeight:'bold',}}>부스이름</Text>
                    </View>
                    <View style={{flex:3,marginBottom:80,}}>
                        <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
                    </View>
                </View>
                <View style={{flex:1,}}>
                    <View style={{flex:1,marginBottom:10,flexDirection:'row',}}>
                        <View style={{backgroundColor:'#3C89FF',borderRadius:100,width:18,height:18,alignItems:'center',justifyContent:'center',marginRight:5,}}>
                            <Text style={{color:'white',fontWeight:'bold',}}>4</Text>
                        </View>
                        <Text style={{fontWeight:'bold',}}>부스이름</Text>
                    </View>
                    <View style={{flex:3,marginBottom:80,}}>
                        <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default FestivalLocation;