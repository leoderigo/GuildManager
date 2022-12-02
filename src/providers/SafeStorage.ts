import AsyncStorage from "@react-native-async-storage/async-storage";


export class SafeStorage {
    static async get<T = any>(key: string) {
        try {
            const stringfied = await AsyncStorage.getItem(key)
            if (!stringfied) return

            return JSON.parse(stringfied) as T
        } catch(err) {
            console.log('SafeStorage GET Error: ', err)
        }
    }

    static async set(key: string, value: any) {
        try {
            const stringfied = await JSON.stringify(value)

            return await AsyncStorage.setItem(key, stringfied)
        } catch(err) {
            console.log('SafeStorage SET Error: ', err)
        }
    }

    static async delete(key: string) {
        try {
            return await AsyncStorage.removeItem(key)
        } catch(err) {
            console.log('SafeStorage DELETE Error: ', err)
        }
    }
}
