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

    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')
    
    const handleSignClick = async () => {

        if(emailField !== '' && passwordField !== '') {

            let json = await Api.signIn(emailField, passwordField)

            if(json.token) {
                // Save token in AsyncStorage
                await AsyncStorage.setItem('token', json.token)

                // Save avatar in context
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                })

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })

            } else {
                alert('Email e/ou senha incorretos!')
            }

        } else {
            alert('Preencha todos os campos')
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    return (
        <Container>
            <Text>Sign in</Text>

            <InputArea>

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
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}

export default Signin