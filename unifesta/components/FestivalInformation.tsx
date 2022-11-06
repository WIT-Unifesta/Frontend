import { Text, View, Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const FestivalInformation = () => {

    const [line,setLine] = useState(3);
    const [isActivated,setIsActivated] = useState(false);

    const handleLine = () =>{
        isActivated?setLine(3):setLine(Number.MAX_SAFE_INTEGER);
        setIsActivated(prev=>!prev);
    }

    const FestivalDescription = styled.Text`
    `

    const LineupCircle = () => {
        return (
            <View style={{width:60,height:60,borderRadius:50,backgroundColor:"gray",margin:10,}} >
                <View style={{width:100,height:40,}}></View>
                <View style={{alignItems:'center',}}>
                    <View style={{backgroundColor:'yellow',padding:2,borderRadius:50,}}>
                        <Text>♥ 5.6k</Text>
                    </View>
                    <Text style={{paddingTop:2,}}>뉴진스</Text>
                </View>
                
            </View>
        )
    }
    return(
        <ScrollView style={{ flex: 1, padding:10, }}>
            <View>
                <View style={{flex:1,flexDirection:'row',borderColor:'#E2E2E2',borderBottomWidth:6,}}>
                    <View style={{margin:10,}}>
                        <Text style={{fontSize:15,paddingBottom:2,}}>낮 프로그램</Text>
                        <Text style={{fontSize:15,paddingBottom:2,}}>저녁 주점</Text>
                        <Text style={{fontSize:15,paddingBottom:2,}}>공연</Text>
                        <Text style={{fontSize:15,paddingBottom:2,}}>주소</Text>
                    </View>
                    <View style={{margin:10,}}>
                        <Text style={{fontSize:15,paddingBottom:2,}}>10:00 ~ 18:00</Text>
                        <Text style={{fontSize:15,paddingBottom:2,}}>18:00 ~ 22:00</Text>
                        <Text style={{fontSize:15,paddingBottom:2,}}>18:00 ~ 22:00</Text>
                        <Text style={{fontSize:15,paddingBottom:2,}}>서울시 광진구 능동로 120</Text>
                    </View>
                </View>
                <View style={{flex:1,alignItems:'center',marginTop:15,marginBottom:60,}}>
                    <Image source={require('../assets/festivalposter.jpg')} style={{width:300,height:100,}}/>
                </View>
                <View style={{flex:1,marginBottom:40,}}>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:10,}}>축제 소개</Text>
                    <FestivalDescription numberOfLines={line} ellipsizeMode="tail" onPress={()=>handleLine()}>
                        10월 말경에는 5월 일감호 축전 김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이
                    </FestivalDescription>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:20,}}>라인업</Text>
                    <View style={{flex:1,marginBottom:80,}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                            <LineupCircle />
                            <LineupCircle />
                            <LineupCircle />
                            <LineupCircle />
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                            <LineupCircle />
                            <LineupCircle />
                            <LineupCircle />
                            <LineupCircle />
                        </View>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    );
};

export default FestivalInformation;