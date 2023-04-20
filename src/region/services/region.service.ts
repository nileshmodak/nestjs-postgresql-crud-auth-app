import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from 'src/typeorm';
import { CreateRegionDto } from '../dto/region.dto';

@Injectable()
export class RegionService {
    constructor(@InjectRepository(Region) private readonly regionRepository: Repository<Region>,) {

    }
          
    createRegion(createRegionDto: CreateRegionDto) {
        const newOrg = this.regionRepository.create(createRegionDto);
        return this.regionRepository.save(newOrg);
    }
        
    findRegionById(id: number) {
        return this.regionRepository.findOneBy({id:id});
    }
}
