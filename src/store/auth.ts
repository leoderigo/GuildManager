import { User } from "../models/User"

const authActions = {
    SET_AUTH: 'SET_AUTH',
    SET_TOKEN: 'SET_TOKEN',
    SET_USER: 'SET_USER',
}

const authRecuders = {
    setUser(payload: User, state: any, client?: string) {
        console.log(`AuthReducers - Client: ${client}`)
        return {
            ...payload,
            user: payload
        }
    }
}

export {
    authActions,
    authRecuders
}
