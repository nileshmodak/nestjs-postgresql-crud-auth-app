import { RegionService } from '../services/region.service';
import { CreateRegionDto } from '../dto/region.dto';
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

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}
  
  @Get('/:id')
  async findRegionById(@Param('id', ParseIntPipe) id: number) {
    const region = await this.regionService.findRegionById(id);
    if (!region) {
      throw new BadRequestException('Invalid region id');
    }
    return region;
  }
  
  @Post('create')
  @UsePipes(ValidationPipe)
  createRegion(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.createRegion(createRegionDto);
  }
}
