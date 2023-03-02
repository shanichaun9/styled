import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  width: ${props => props.widthB};
  height: 33px;
  border-radius: 4px;
  background-color: #172B4D;
  justify-content: center;
  margin-left: 20px;
`;

const ButtonText = styled.Text`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  align-self: center;
`;


const SmallButton = ({ onPress, widthB, title, color, fontSize}) => (
  <ButtonContainer onPress={onPress} widthB={widthB} >
    <ButtonText color={color} fontSize={fontSize}>{title}</ButtonText>
  </ButtonContainer>
);

const Typography = ({color, fontSize, title}) => (
  <ButtonText color={color} fontSize={fontSize}>
    {title}
  </ButtonText>
)

const PressableButton = ({ onPress, bgColor, title, color }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
      <ButtonText color={color}>{title}</ButtonText>
  </ButtonContainer>
);

export {SmallButton, Typography, PressableButton};