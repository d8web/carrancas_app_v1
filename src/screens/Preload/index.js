import React, { useEffect, useContext } from 'react'
import { Text } from 'react-native'
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import Api from '../../Api'

const Preload = ({  }) => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token) {
                // Validar token
                let res = await Api.checkToken(token)
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
                    navigation.navigate("SignIn")
                }
            } else {
                navigation.navigate("SignIn")
            }
        }

        checkToken()
    }, [])

    return (
        <Container>
            <Text style={{color: 'white', fontSize: 20}}>Preload</Text>
            <LoadingIcon size="large" color="#fff" />
        </Container>
    )
}

export default Preload