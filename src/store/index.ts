import { configureStore, Reducer } from '@reduxjs/toolkit'
import { User } from '../models/User'

import { authActions, authRecuders } from './auth'


const INITIAL_STATE: {
    auth: {
        user: User|null,
        token: string|null
    }
} = {
    auth: {
        user: null,
        token: null
    }
}

const reducer: Reducer = (state = INITIAL_STATE, { type, payload, client }) => {
    if (type === authActions.SET_USER) {
        return {
            ...state,
            auth: authRecuders.setUser(payload, state.auth, client)
        }
    }

    return state
}

const store = configureStore<any, StoreActions>({
    reducer
})

export default store

interface StoreActions {
    type: string
    payload: any
    client: string
}
