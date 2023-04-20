import { IsNotEmpty, MinLength } from "class-validator";

export class CreateOrgDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}