import { Module } from '@nestjs/common';
import { CropController } from './controllers/crop.controller';
import { CropService } from './services/crop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crop } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Crop]),],
  controllers: [CropController],
  providers: [CropService]
})
export class CropModule {}
