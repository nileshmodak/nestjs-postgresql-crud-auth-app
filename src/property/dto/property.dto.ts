import { IsNotEmpty, IsNumber, MinLength } from "class-validator";
import { Org } from "src/typeorm";

export class CreateProperyDto {
  @IsNotEmpty()
  @MinLength(3)
  propertyName: string;

  @IsNotEmpty()
  @IsNumber()
  orgId: Org;
}