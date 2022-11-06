import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const FestivalInformation = () => (
    <View style={{ flex: 1, padding:10, }}>
       <View style={{flex:1,flexDirection:'row',borderColor:'gray',}}>
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
       <View style={{flex:1,alignItems:'center'}}>
        <Image source={require('../assets/festivalposter.jpg')} style={{width:300,height:100,}}/>
       </View>
       <View style={{flex:1,}}>
        <Text style={{fontSize:18,fontWeight:'bold',}}>축제 소개</Text>
        <Text>10월 말경에는 5월 일감호 냄새 너무나요 김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이</Text>
       </View>
       <View style={{flex:1,}}>
        <Text style={{fontSize:18,fontWeight:'bold',}}>라인업</Text>
       </View>
    </View>
);

export default FestivalInformation;