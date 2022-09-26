import { StyleSheet, Text, View, Button,Image, LayoutAnimation,useWindowDimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import {TabView,SceneMap} from 'react-native-tab-view';
import {useState,useEffect} from 'react';

const HeaderContainer = styled.View`
    flex:1;
    margin-top: 10px;
    flex-direction: column;
    background-color: gray;
`;
const HeaderBar = styled.View`
    flex:1;
    flex-direction: row;
`;
const HeaderSchoolName = styled.View`
    flex:1;
    flex-direction: row;
`;
const MainContainer = styled.View`
    flex:3;
`;
const TabBar = styled.View`
    flex-direction:row;
`;
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
        <Image source={require('./assets/festivalposter.jpg')} style={{width:300,height:100,}}/>
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
const RestaurantAround = () => (
    <View style={{ flex: 1, }}>
        <Text style={{fontSize:100}}>
            주변 맛집
        </Text>
    </View>
);


const renderScene = SceneMap({
    first: FestivalInformation,
    second: FestivalLocation,
    third:FestivalReview,
    fourth:RestaurantAround,
});

const SchoolDetail = () => { 
    const topmargin = StatusBar.currentHeight;
    StatusBar.setBarStyle('dark-content');
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: '축제소개' },
        { key: 'second', title: '배치도' },
        { key: 'third', title:'축제 후기'},
        { key: 'fourth', title:'주변 맛집'}
    ]);
	return (
        <View style={{marginTop:topmargin,flex:1,paddingTop:25,}}>
            <HeaderContainer>
                <HeaderBar>
                    <View style={{flex:1,padding:8,}}><Icon name="left" style={{fontSize:25,color:'white'}}/></View>
                    <View style={{flex:8,}}></View>
                    <View style={{flex:1,padding:8,}}><Icon name="sharealt" style={{fontSize:25,color:'white'}}/></View>
                    <View style={{flex:1,padding:8,marginRight:10,}}><Icon name="hearto" style={{fontSize:25,color:'white'}}/></View>
                </HeaderBar>
                <View style={{flex:1,}}></View>
                <HeaderSchoolName>
                    <Image source={require('./assets/konkuklogo.png')} style={{height:60,width:60,marginLeft:10,padding:1,}} />
                    <View style={{marginLeft:10,}}>
                        <Text style={{fontSize:12,color:'white',padding:1,}}>D-10</Text>
                        <Text style={{fontSize:20,color:'white',padding:1,}}>건국대학교 서울캠퍼스</Text>
                        <Text style={{fontSize:12,color:'white',padding:1,}}>2022 / 09.28 ~ 09.30</Text>
                    </View>
                </HeaderSchoolName>
            </HeaderContainer>
            <MainContainer>
                <TabView 
                    navigationState={{index,routes}} 
                    renderScene={renderScene}
                    onIndexChange={setIndex} 
                    initialLayout={{width:layout.width}}
                />
            </MainContainer>
        </View>
    ) 
} 
export default SchoolDetail;
