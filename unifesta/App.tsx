import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLogo } from './components/image/image.style';
import AppLogoImage from './public/images/unifesta_logo.svg';
import * as Font from 'expo-font';
import { Greeting } from './components/text/text.style';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import EasyLoginView from './components/text/textView';
import SocialLoginView from './components/button/butttonView';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const animation = useRef(null);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          AppleSDGothicNeoUL: require('./assets/fonts/AppleSDGothicNeoUL.ttf'),
          AppleSDGothicNeoB: require('./assets/fonts/AppleSDGothicNeoB.ttf'),
          AppleSDGothicNeoM: require('./assets/fonts/AppleSDGothicNeoM.ttf'),
        });
        await new Promise((resolve) => setTimeout(resolve, 1));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255, 224, 64, 0.5737)', 'transparent']}
        style={styles.background}
        start={[0, 0]}
        end={[1, 1]}>
        <LottieView
          autoPlay
          ref={animation}
          source={require('./assets/74694-confetti.json')}
          style={{ width: 400, height: 1000, position: 'absolute', bottom: 40 }}
          resizeMode="cover"
        />
        <AppLogoImage width={262} height={187.56} />
        <Greeting>어서오세요!</Greeting>
        <Greeting>같이 즐겨볼까요?</Greeting>
        <EasyLoginView />
        <SocialLoginView />
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

// LinearGradient를 이용하기 위해 사용
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C89FF',
    paddingTop: '30%',
  },
});
