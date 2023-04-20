import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateRegionDto {
  @IsNotEmpty()
  @MinLength(3)
  regionName: string;

  @IsNotEmpty()
  @IsNumber()
  propertyId: number;
}