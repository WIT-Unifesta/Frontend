import { WrapEasyLogin, Line, EasyLogin, View } from './text.style';

const EasyLoginView = () => {
  return (
    <WrapEasyLogin style={{ marginTop: 100, marginBottom: 10 }}>
      <Line style={{ marginLeft: 25 }} />
      <View>
        <EasyLogin style={{ paddingHorizontal: 8 }}>간편 로그인</EasyLogin>
      </View>
      <Line style={{ marginRight: 25 }} />
    </WrapEasyLogin>
  );
};

export default EasyLoginView;
