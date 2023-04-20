import { Module } from '@nestjs/common';
import { FieldsController } from './controllers/fields.controller';
import { FieldsService } from './services/fields.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fields } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Fields]),],
  controllers: [FieldsController],
  providers: [FieldsService]
})
export class FieldsModule {}
