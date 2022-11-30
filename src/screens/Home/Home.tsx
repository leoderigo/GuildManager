import React from 'react'
import {
    SafeAreaView,
    Text,
    View
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from '..'
import styles from './styles'
import { COLORS } from '../../global/colors'


const HomeScreen = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
    // TODO Uasar redux aqui
    const theme = 'light'

    return (
        <View>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={{ margin: 10 }}>
                    <IonIcon name='menu' size={25} color={COLORS[theme].defaultIcon} />
                </View>
                <View style={{ margin: 10 }}>
                    <IonIcon name='settings' size={25} color={COLORS[theme].defaultIcon} />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen
