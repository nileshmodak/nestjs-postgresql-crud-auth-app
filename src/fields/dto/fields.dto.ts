import { IsEmpty, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateFieldsDto {
  @IsNotEmpty()
  @MinLength(3)
  fieldName: string;

  @IsNotEmpty()
  @IsNumber()
  regionId: number;

  position: object[];
  
  size: object[];
}