"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("../../types");
const class_transformer_1 = require("class-transformer");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                username: "thuan",
                password: "123"
            }, {
                username: "thuan1",
                password: "1234"
            }, {
                username: "thuan2",
                password: "12345"
            }
        ];
    }
    getUsers() {
        return this.users.map((user) => (0, class_transformer_1.plainToClass)(types_1.SerializeUser, user));
    }
    getUserByUsername(username) {
        return this.users.find(user => user.username === username);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map