import styled from 'styled-components/native';

export const WrapSocialLoginButton = styled.View`
  flex-direction: column;
  height: 300px;
`;
export const SocialLoginButton = styled.Pressable`
  border-radius: 30px;
  width: 313px;
  height: 52px;
  margin: 9px auto;
  padding: 9px;
  position: relative;
`;

export const SocialLoginText = styled.Text`
  font-weight: AppleSDGothicNeoM;
  font-size: 16px;
  text-align: center;
  margin: auto;
`;

export const WrapLogo = styled.View`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 15px;
  left: 16px;
`;
