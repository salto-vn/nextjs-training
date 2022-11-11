export type IUser = {
    email: string,
    password: string
}

export type Status = {
    token: string ,
    username: string
}
export type FirebaseUser = {
    DisplayName: string,
    email: string,
    prevState: null
}

export type RealTimeFireBase = {
    userId: string, 
    name: string,
    email: string, 
    imageUrl: string
}
