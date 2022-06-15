export interface userInterface {
    id: number,
    name: string,
    mobile: number,
    email: string,
    pincode: number,
    profile_image: string,
    refer_code: string,
    address: string,
    wallet: any
}

export interface IUserClass {
    user: userInterface;
    token: string;
}