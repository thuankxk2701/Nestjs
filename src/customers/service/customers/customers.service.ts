import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "../../controllers/dtos/CreateCustomer.dto";


@Injectable()
export class CustomersService{

  private  customers =[
    {
      id: 1,
      email:" dsad@dfsadsd.com",
      name: "danny"
    },
    {
      id: 2,
      email:"Phong@dfsad.com",
      name : "jenky"
    },
    {
      id: 3,
      email:"Thuan@dfsad.com",
      name: "John"
    }
  ]
  findCustomerById(id: number){
    return this.customers.find(user=>user.id ===id)
  }

  createCustomer(customerDto: CreateCustomerDto){
   this.customers.push(customerDto)
  }
  getAllCustomers()
  {
    return this.customers;
  }
}