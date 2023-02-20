import { CreateCustomerDto } from "../../controllers/dtos/CreateCustomer.dto";
export declare class CustomersService {
    private customers;
    findCustomerById(id: number): {
        id: number;
        email: string;
        name: string;
    };
    createCustomer(customerDto: CreateCustomerDto): void;
    getAllCustomers(): {
        id: number;
        email: string;
        name: string;
    }[];
}
