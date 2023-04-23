import { IsNotEmpty, IsString } from "class-validator";

export class CreateAddressDto{
  @IsNotEmpty()
  @IsString()
  line1: string;
  line2 : string;
  @IsString()
  @IsNotEmpty()
  zip: string;
  @IsNotEmpty()
  @IsString()
  city : string;

  state : string;
}