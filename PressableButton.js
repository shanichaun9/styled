import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 5px;
  width: 343px;
  height: 48px;
  padding: 12px;
  border-radius: 4px;
  background-color: ${props => props.bgColor};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${props => props.color};
`;

const Break = styled.View`
  height: 10px;
  width: 100%;
  background-color: red;
`

const PressableButton = ({ onPress, bgColor, title, color }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
      <ButtonText color={color}>{title}</ButtonText>
  </ButtonContainer>
);

export default PressableButton;