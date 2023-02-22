import { User } from "../../types";
export declare class UsersService {
    private users;
    getUsers(): User[];
    getUserByUsername(username: string): User;
}
