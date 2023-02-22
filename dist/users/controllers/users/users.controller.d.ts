import { UsersService } from "../../service/users/users.service";
import { SerializeUser } from "../../types";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): import("../../types").User[];
    getByUsername(username: string): SerializeUser;
}
