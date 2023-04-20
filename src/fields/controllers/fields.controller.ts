import {   
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe, } from '@nestjs/common';
import { FieldsService } from '../services/fields.service';
import { CreateFieldsDto } from '../dto/fields.dto';

@Controller('fields')
export class FieldsController {
    constructor(private readonly fieldService: FieldsService) {}
  
    @Get('/:id')
    async findFieldsById(@Param('id', ParseIntPipe) id: number) {
        const fields = await this.fieldService.findFieldsById(id);
        if (!fields) {
          throw new BadRequestException('Invalid field id');
        }
        return fields; 
    }
    
    @Post('create')
    @UsePipes(ValidationPipe)
    createField(@Body() createFieldsDto: CreateFieldsDto) {
        return this.fieldService.createFields(createFieldsDto);
    }
}
