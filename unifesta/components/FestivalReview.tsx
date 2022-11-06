import { StyleSheet, Text, View, Button,Image, LayoutAnimation,useWindowDimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const FestivalReview = () => (
    <View style={{ flex: 1, }}>
        <View style={{flex:2,margin:10,}}>
            <Button title="후기 쓰기" />
        </View>
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={{borderColor:'gray',borderWidth:1,margin:10,borderRadius:10,padding:1,}}>
                <Text>2019</Text>
            </View>
            <View style={{borderColor:'gray',borderWidth:1,margin:10,borderRadius:10,padding:1,}}>
                <Text>2020</Text>
            </View>
            <View style={{borderColor:'gray',borderWidth:1,margin:10,borderRadius:10,padding:1,}}>
                <Text>2021</Text>
            </View>
        </View>
        <View style={{flex:8,}}>
            <Text>학생 1</Text>
            <Text>레드벨벳 가웅</Text>
            <Text>학생 1</Text>
            <Text>레드벨벳 가웅</Text>
            <Text>학생 1</Text>
            <Text>레드벨벳 가웅</Text>
            <Text>학생 1</Text>
            <Text>레드벨벳 가웅</Text>
            <Text>학생 1</Text>
            <Text>레드벨벳 가웅</Text>
        </View>
    </View>
);

export default FestivalReview;