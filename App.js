import { TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styled from 'styled-components/native'
import PressableButton from './PressableButton'; 

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
          color='#212529'
         />
         <PressableButton
          onPress={() => true}
          title='INFO'
          bgColor='#11CDEF'
          color='#212529'
         />
         <PressableButton
          onPress={() => true}
          title='SUCCESS'
          bgColor='#2DCE89'
          color='#212529'
         />
         <PressableButton
          onPress={() => true}
          title='WARNING'
          bgColor='#FB6340'
          color='#212529'
         />
         <PressableButton
          onPress={() => true}
          title='ERROR'
          bgColor='#F5365C'
          color='#212529'
         />
    </Container>
    )
  }
}

export default App
