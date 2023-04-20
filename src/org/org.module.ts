import { Module } from '@nestjs/common';
import { OrgController } from './controllers/org.controller';
import { OrgService } from './services/org.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Org } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Org]),],
  controllers: [OrgController],
  providers: [OrgService]
})
export class OrgModule {}
