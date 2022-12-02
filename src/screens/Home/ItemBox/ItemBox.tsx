import React from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native'

import { ItemBoxPros } from '.'


const ItemBox = ({ item }: ItemBoxPros) => {
    return (
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#555555', height: 150, width: 200 }}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default ItemBox
