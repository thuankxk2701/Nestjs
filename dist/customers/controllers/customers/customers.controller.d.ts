import { CustomersService } from "../../service/customers/customers.service";
import { Request, Response } from 'express';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    getCustomer(id: number, req: Request, res: Response): void;
    searchCustomerById(id: number): {
        id: number;
        email: string;
        createdAt: Date;
    };
}
