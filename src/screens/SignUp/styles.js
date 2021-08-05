import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
  align-items: center;
  justify-content: center;
`

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`