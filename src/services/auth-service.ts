import md5 from 'md5'
import storageConstants from '../global/storage-constants'

import { User } from '../models/User'
import { SafeStorage } from '../providers/SafeStorage'
import store from '../store'
import { authActions } from '../store/auth'


export class AuthService {
    static login(email: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            if (email != 'leoderigo.sjb@gmail.com') {
                reject('Email e/ou senha inválido')
                return
            }
            const hash = md5(password)
            const token = 'token-hash'
            const response = {
                token,
                user: {
                    id: 'idmuitolko',
                    fullName: 'Leonardo Aliberti Derigo',
                    name: 'Leonardo',
                    nickname: 'Leoderigo'
                }
            }
            AuthService.saveAuth(response.user, response.token)
            .then(() => {
                console.log('Auth saved')
            })
            .catch(err => {
                console.log('Auth not saved - ERROR: ', err)
            })

            store.dispatch({
                type: authActions.SET_AUTH,
                payload: { token, user: response.user },
                client: 'LoginPage (onPressLoginButton)'
            })
            resolve(response.user)
        })
    }

    private static saveAuth(user: User, token: string) {
        return Promise.all([
            SafeStorage.set(storageConstants.AUTH_USER, user),
            SafeStorage.set(storageConstants.AUTH_TOKEN, token),
        ]).then(_ => {})
    }

    static isLogged(): Promise<boolean> {
        return Promise.all([
            SafeStorage.get<User>(storageConstants.AUTH_USER),
            SafeStorage.get<string>(storageConstants.AUTH_TOKEN),
        ])
        .then(result => {
            const user = result[0]
            const token = result[1]

            if (!user || !token) return false

            
            store.dispatch({
                type: authActions.SET_AUTH,
                payload: { user, token },
                client: 'SplashScreen (validateUser)'
            })
            return true
        })
        .catch(err => {
            console.log('Erro ao autenticar - ERROR:', err)
            return false
        })
    }
}
