export class User {
    id!: string
    name!: string
    fullName!: string
    nickname!: string

    constructor(value: User) {
        const prototypeKeys = Object.keys(User.prototype)
        Object.keys(value).forEach(key => {
            if (!prototypeKeys.includes(key)) return
            this[key as keyof User] = value[key as keyof User]
        })
    }
}
