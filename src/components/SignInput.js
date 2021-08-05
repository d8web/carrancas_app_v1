import React from 'react'
import styled from 'styled-components/native'

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #83d6e3;
    border-radius: 30px;
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
    margin-bottom: 15px;
`

const SvgIcon = styled.View`
    width: 20px;
    height: 20px;
    background-color: #268596;
`

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`

const SignInput = ({ placeholder, value, onChangeText, password }) => {
    return (
        <InputArea>
            <SvgIcon/>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}

export default SignInput