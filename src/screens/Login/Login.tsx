import React, { useState } from 'react'
import {
    GestureResponderEvent,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '..'
import { COLORS } from '../../global/colors'
import { AuthService } from '../../services/auth-service'
import store from '../../store'
import { authActions } from '../../store/auth'


const LoginScreen = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Login'>) => {
    const theme = 'light'
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onPressLoginButton = (ev: GestureResponderEvent) => {
        AuthService.login(email, password)
        .then(user => {
            navigation.navigate('Home', {})
        })
        .catch(err => {
            ToastAndroid.show(err, ToastAndroid.LONG)
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 2, paddingHorizontal: 50 }}>
                <TextInput
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                    textAlign='center'
                    style={{ fontSize: 16 }}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder='Senha'
                    onChangeText={setPassword}
                    value={password}
                    textAlign='center'
                    style={{ fontSize: 16 }}
                    textContentType='password'
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={onPressLoginButton}
                    style={{ padding: 15, backgroundColor: COLORS[theme].secondary, borderRadius: 10 }}
                >
                    <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: COLORS[theme].primary, fontSize: 16 }}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen
