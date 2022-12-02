export class Guild {
    name!: string

    constructor(value: Guild) {
        Object.keys(value).forEach((key) => {
            this[key as keyof Guild] = value[key as keyof Guild]
        })
    }
}
