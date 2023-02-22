import {
   IsEmail,
   IsNotEmpty,
   IsNotEmptyObject,
   IsNumber,
   IsNumberString,
   IsObject,
   ValidateNested
} from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class  CreateCustomerDto{
   @IsEmail()
   email: string;
   @IsNumber()
   @IsNotEmpty()
   id: number;
   @IsNotEmpty()
   name : string;

   @ValidateNested()
   @IsNotEmptyObject()
   @Type(()=>CreateAddressDto)
   address : CreateAddressDto;

}