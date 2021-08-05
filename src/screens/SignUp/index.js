import React, { useState, useContext } from 'react'
import { Text } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import Api from '../../Api'

import SignInput from '../../components/SignInput'

const Signin = () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [ nameField, setNameField ] = useState('')
    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')
    
    const handleSignClick = async () => {
        if(nameField !== '' && emailField !== '' && passwordField !== '') {
            let res = await Api.signUp(nameField, emailField, passwordField)

            if(res.token) {
                // Save token in AsyncStorage
                await AsyncStorage.setItem('token', res.token)

                // Save avatar in context
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                })

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })
            } else {
                alert(`Erro :${res.error}`)
            }
        } else {
            alert('Preencha todos os campos!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    return (
        <Container>
            <Text>Sign up</Text>

            <InputArea>
                <SignInput
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput
                    placeholder="Digite seu Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>
            
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}

export default Signin