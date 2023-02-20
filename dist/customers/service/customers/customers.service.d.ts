export declare class CustomersService {
    users: {
        id: number;
        email: string;
        createdAt: Date;
    }[];
    findCustomerById(id: number): {
        id: number;
        email: string;
        createdAt: Date;
    };
}
