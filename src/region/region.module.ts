import { Module } from '@nestjs/common';
import { RegionController } from './controllers/region.controller';
import { RegionService } from './services/region.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Region]),],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
