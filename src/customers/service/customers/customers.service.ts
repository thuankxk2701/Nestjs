import { Injectable } from "@nestjs/common";


@Injectable()
export class CustomersService{

 users =[
    {
      id: 1,
      email:" dsad@dfsadsd.com",
      createdAt: new Date(),
    },
    {
      id: 2,
      email:"Phong@dfsad.com",
      createdAt: new Date(),
    },
    {
      id: 3,
      email:"Thuan@dfsad.com",
      createdAt: new Date(),
    }
  ]
  findCustomerById(id: number){
    return this.users.find(user=>user.id ===id)
  }
}