
import {
  BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
import { PropertyService } from '../services/property.service';
import { CreateProperyDto } from '../dto/property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService,) {}
  
  @Get('/:id')
  async findOrgsById(@Param('id', ParseIntPipe) id: number) {
    const property =  await this.propertyService.findPropertyById(id);
    if (!property) {
      throw new BadRequestException('Invalid property id');
    }
    return property;
  }
  
  @Post('create')
  @UsePipes(ValidationPipe)
  createOrg(@Body() createPropertyDto: CreateProperyDto) {
    return this.propertyService.createProperty(createPropertyDto);
  }
}
