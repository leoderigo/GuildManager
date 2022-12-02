import React from 'react'
import {
    FlatList,
    ListRenderItem,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'

import { RootStackParamList } from '..'
import styles from './styles'
import { COLORS } from '../../global/colors'
import { Guild } from '../../models/Guild'
import ItemBox from './ItemBox'



const HomeScreen = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
    // TODO Uasar redux aqui
    const theme = 'light'
    const data: Guild[] = [
        {
            name: 'Blackwings'
        },
        {
            name: 'Rising'
        },
    ]

    const ListHeader = () => {
        return (
            <View style={{ paddingLeft: 10 }} />
        )
    }
    const ListItemSeparator = () => {
        return (
            <View style={{ marginLeft: 15 }} />
        )
    }
    const ListItemGuild: ListRenderItem<Guild> = ({ item }) => {
        return (
            <ItemBox item={item} />
        )
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity style={{ padding: 10 }}>
                    <IonIcon name='menu-outline' size={35} color={COLORS[theme].secondary} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <IonIcon name='settings-outline' size={35} color={COLORS[theme].secondary} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>

                </View>
                <TouchableOpacity
                    style={{ padding: 10 }}
                >
                    <FontAwesomeIcon icon={faSnowflake} size={35} color={COLORS[theme].secondary} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 18 }}>
                    Grupos Recrutando
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>
                        Ver todos
                    </Text>
                </TouchableOpacity>
            </View>
            <View></View>
            <FlatList
                data={data}
                renderItem={ListItemGuild}
                ListHeaderComponent={ListHeader}
                ItemSeparatorComponent={ListItemSeparator}
                horizontal
            />
        </View>
    )
}

export default HomeScreen
