import { Text, View, Image, useWindowDimensions,ImageBackground,SafeAreaView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native'
import { TabView,SceneMap } from 'react-native-tab-view';
import {useState,useEffect} from 'react';
import FestivalInformation from './components/FestivalInformation';
import FestivalLocation from './components/FestivalLocation';
import FestivalReview from './components/FestivalReview';
import RestaurantAround from './components/RestaurantAround';

const HeaderContainer = styled.SafeAreaView`
    flex:1;
    margin-top: 20px;
    padding-bottom: 10px;
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
    margin-bottom:21px;
`;
const MainContainer = styled.View`
    flex:3;
`;
const TabBar = styled.View`
    flex-direction:row;
`;

const renderScene = SceneMap({
    first: FestivalInformation,
    second: FestivalLocation,
    third:FestivalReview,
    fourth:RestaurantAround,
});
const SchoolDetail = () => { 
    StatusBar.setBarStyle('dark-content');
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [schoolName,setSchoolName] = useState();
    const [routes] = useState([
        { key: 'first', title: '축제소개' },
        { key: 'second', title: '배치도' },
        { key: 'third', title:'축제 후기'},
        { key: 'fourth', title:'주변 맛집'}
    ]);
    const renderTabBar = () =>(
        <TabBar
            indicatorStyle={{ backgroundColor: 'pink' }}
      />
    )
	return (
        <View style={{flex:1,}}>
            <HeaderContainer>
                <HeaderBar>
                    <View style={{flex:1,padding:10,}}><Icon name="left" style={{fontSize:25,color:'white'}}/></View>
                    <View style={{flex:8,}}></View>
                    <View style={{flex:1,padding:10,}}><Icon name="sharealt" style={{fontSize:25,color:'white'}}/></View>
                    <View style={{flex:1,padding:10,marginRight:10,}}>
                        <Icon name="hearto" style={{fontSize:25,color:'white'}}/>
                        <Text style={{color:"white",padding:1,}}>1.1k</Text>
                    </View>
                </HeaderBar>
                <View style={{flex:1,}}></View>
                <HeaderSchoolName>
                    <Image source={require('./assets/SchoolMark/konkuklogo.png')} style={{height:60,width:60,marginLeft:10,padding:1,}} />
                    <View style={{marginLeft:10,}}>
                        <TouchableOpacity style={{backgroundColor:"#3C89FF",width:44,height:19,alignItems:'center',borderRadius:50,padding:1,}}>
                            <Text style={{fontSize:12,color:'white',padding:1,}}>D-10</Text>
                        </TouchableOpacity>
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
