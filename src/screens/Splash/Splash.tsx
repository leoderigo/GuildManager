import React, { useEffect } from 'react'
import {
    Text,
    View,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '..'
import { SafeStorage } from '../../providers/SafeStorage'
import { User } from '../../models/User'
import { AuthService } from '../../services/auth-service'
import store from '../../store'
import { authActions } from '../../store/auth'


const SplashScreen = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Splash'>) => {
    useEffect(() => {
        validateUser()
    }, [])

    function validateUser() {
        AuthService.isLogged()
            .then(logged => {
                if (!logged) {
                    navigation.navigate('Login', {})
                    return
                }
                navigation.navigate('Home', {})
            })
            .catch(err => {
                console.log('Erro na validação de usuário:', err)
                navigation.navigate('Login', {})
            })
    }

    return (
        <View>
            <Text>
                Carregando
            </Text>
        </View>
    )
}

export default SplashScreen
