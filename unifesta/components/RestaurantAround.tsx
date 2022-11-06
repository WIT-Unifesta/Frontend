import { Text, View, Button,Image, LayoutAnimation,useWindowDimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const RestaurantAround = () => (
    <View style={{ flex: 1, }}>
        <Text style={{fontSize:100}}>
            주변 맛집
        </Text>
    </View>
);

export default RestaurantAround;