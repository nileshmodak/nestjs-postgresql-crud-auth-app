import { IsEmpty, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateCropDto {
  @IsNotEmpty()
  @MinLength(3)
  cropName: string;

  @IsNotEmpty()
  @IsNumber()
  fieldId: number;
}