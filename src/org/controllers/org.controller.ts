import { CreateOrgDto } from 'src/org/dto/org.dto';
import { OrgService } from 'src/org/services/org.service';
import {
  BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}
  
  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOrgsById(@Param('id', ParseIntPipe) id: number) {
    const org = await this.orgService.findOrgsById(id);
    if (!org) {
      throw new BadRequestException('Invalid org id');
    }
    return org;
  }
  
  @Post('create')
  @UsePipes(ValidationPipe)
  createOrg(@Body() createOrgDto: CreateOrgDto) {
    return this.orgService.createOrg(createOrgDto);
  }
}
