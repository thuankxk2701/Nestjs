import { CustomersService } from "../../service/customers/customers.service";
import { Request, Response } from 'express';
import { CreateCustomerDto } from "../dtos/CreateCustomer.dto";
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    getCustomer(id: number, req: Request, res: Response): void;
    searchCustomerById(id: number): {
        id: number;
        email: string;
        name: string;
    };
    getAllCustomers(): {
        id: number;
        email: string;
        name: string;
    }[];
    createCustomer(createCustomerDto: CreateCustomerDto): void;
}
