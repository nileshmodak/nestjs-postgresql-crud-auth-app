import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crop } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCropDto } from 'src/crop/dto/crop.dto';

@Injectable()
export class CropService {
    constructor(@InjectRepository(Crop) private readonly cropRepository: Repository<Crop>) {

    }
          
    createCrop(createCropDto: CreateCropDto) {
        const newOrg = this.cropRepository.create(createCropDto);
        return this.cropRepository.save(newOrg);
    }
        
    findCropsById(id: number) {
        return this.cropRepository.findOneBy({id:id});
    }
}
