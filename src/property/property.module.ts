import { Module } from '@nestjs/common';
import { Property } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './controllers/property.controller';
import { PropertyService } from './services/property.service';

@Module({
  imports: [TypeOrmModule.forFeature([Property]),],
  controllers: [PropertyController],
  providers: [PropertyService]
})


export class PropertyModule {}
