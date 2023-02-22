export interface User {
    username: string;
    password: string;
}
export declare class SerializeUser {
    username: string;
    password: string;
    constructor(partial: Partial<SerializeUser>);
}
