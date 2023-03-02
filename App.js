import { TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styled from 'styled-components/native'
import PressableButton from './PressableButton'; 
import {SmallButton, Typography} from './SmallButton';

const Container = styled.View`
  flex: 1;
  background-color: #F8F9FE;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #525F7F;
  font-weight: 500;
`;

const SubContainer = styled.View`
  flex-direction: row;
  margin-right: 15px;
`
export class App extends Component {
  render() {
    return (
      <Container>
        <Text>Buttons</Text>
        <PressableButton
          onPress={() => true}
          title='DEFAULT'
          bgColor='#172B4D'
          color='#FFFFFF'
         />
         <PressableButton
          onPress={() => true}
          title='SECONDARY'
          bgColor='#F7FAFC'
          color='#212529'
         />
         <PressableButton
          onPress={() => true}
          title='PRIMARY'
          bgColor='#5E72E4'
          color='#FFFFFF'
         />
         <PressableButton
          onPress={() => true}
          title='INFO'
          bgColor='#11CDEF'
          color='#FFFFFF'
         />
         <PressableButton
          onPress={() => true}
          title='SUCCESS'
          bgColor='#2DCE89'
          color='#FFFFFF'
         />
         <PressableButton
          onPress={() => true}
          title='WARNING'
          bgColor='#FB6340'
          color='#FFFFFF'
         />
         <PressableButton
          onPress={() => true}
          title='ERROR'
          bgColor='#F5365C'
          color='#FFFFFF'
         />
        <SubContainer>
         <SmallButton 
          onPress={() => true}
          widthB='100px'
          title='01'
          color='#FFFFFF'
          fontSize={12}
         />
         <SmallButton 
          onPress={() => true}
          widthB='74px'
          title='DELETE'
          color='#FFFFFF'
          fontSize={12}
         />
         <SmallButton 
          onPress={() => true}
          widthB='130px'
          title='SAVE FOR LATER'
          color='#FFFFFF'
          fontSize={12}
         />
        </SubContainer>
        <Typography 
          color='#32325D'
          fontSize={44}
          title='Heading 1'
        />
        <Typography 
          color='#32325D'
          fontSize={40}
          title='Heading 2'
        />
        <Typography 
          color='#32325D'
          fontSize={32}
          title='Heading 3'
        />
        <Typography 
          color='#32325D'
          fontSize={24}
          title='Heading 4'
        />
        <Typography 
          color='#32325D'
          fontSize={18}
          title='Heading 5'
        />
    </Container>
    )
  }
}

export default App
