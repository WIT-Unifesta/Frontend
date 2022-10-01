import {
  WrapSocialLoginButton,
  SocialLoginButton,
  SocialLoginText,
  WrapLogo,
} from './button.style';
import KakaoLogo from '../../public/images/kakao.svg';
import GoogleLogo from '../../public/images/google.svg';
import NaverLogo from '../../public/images/naver.svg';

const SocialLoginView = () => {
  return (
    <WrapSocialLoginButton>
      <SocialLoginButton style={{ backgroundColor: '#FAE100' }}>
        <WrapLogo>
          <KakaoLogo width={25} height={25} />
        </WrapLogo>
        <SocialLoginText>카카오 계정으로 로그인</SocialLoginText>
      </SocialLoginButton>
      <SocialLoginButton style={{ backgroundColor: '#06BE34' }}>
        <WrapLogo>
          <NaverLogo width={25} height={25} />
        </WrapLogo>
        <SocialLoginText style={{ color: '#FFFFFF' }}>네이버 계정으로 로그인</SocialLoginText>
      </SocialLoginButton>
      <SocialLoginButton style={{ backgroundColor: '#FFFFFF' }}>
        <WrapLogo>
          <GoogleLogo width={25} height={25} />
        </WrapLogo>
        <SocialLoginText>구글 계정으로 로그인</SocialLoginText>
      </SocialLoginButton>
    </WrapSocialLoginButton>
  );
};

export default SocialLoginView;
