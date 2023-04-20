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
import { CropService } from 'src/crop/services/crop.service';
import { CreateCropDto } from 'src/crop/dto/crop.dto';

@Controller('crop')
export class CropController {
    constructor(private readonly cropService: CropService) {}
  
    @Get('/:id')
    async findOrgsById(@Param('id', ParseIntPipe) id: number) {
        const crop = await this.cropService.findCropsById(id);
        if (!crop) {
          throw new BadRequestException('Invalid region id');
        }
        return crop;  
    }
    
    @Post('create')
    @UsePipes(ValidationPipe)
    createOrg(@Body() createCropDto: CreateCropDto) {
        return this.cropService.createCrop(createCropDto);
    }
}
