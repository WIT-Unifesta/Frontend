import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const FestivalLocation = () => (
    <View style={{ flex: 1, }}>
        <View style={{flex:4,}}>
            <Text>GoogleMap 지도 들어감</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={{borderColor:'gray',borderWidth:1,margin:10,borderRadius:10,padding:1,}}>
                <Text>DAY 1</Text>
            </View>
            <View style={{borderColor:'gray',borderWidth:1,margin:10,borderRadius:10,padding:1,}}>
                <Text>DAY 2</Text>
            </View>
            <View style={{borderColor:'gray',borderWidth:1,margin:10,borderRadius:10,padding:1,}}>
                <Text>DAY 3</Text>
            </View>
        </View>
        <View style={{flex:8,}}>
            <View>
                <Text>1 부스이름</Text>
                <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
            </View>
            <View>
                <Text>2 부스이름</Text>
                <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
            </View>
            <View>
                <Text>3 부스이름</Text>
                <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
            </View>
            <View>
                <Text>4 부스이름</Text>
                <Text>부스 설명 어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</Text>
            </View>
        </View>
    </View>
);

export default FestivalLocation;