import { IsNotEmpty, MinLength } from "class-validator";

export class CreateSignInDto {
  
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}