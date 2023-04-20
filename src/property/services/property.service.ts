import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from 'src/typeorm';
import { CreateProperyDto } from '../dto/property.dto';

@Injectable()
export class PropertyService {
    constructor(
        @InjectRepository(Property) private readonly propRepository: Repository<Property>,) {

    }
          
    createProperty(createPropertyDto: CreateProperyDto) {
        const newProperty = this.propRepository.create(createPropertyDto);
        return this.propRepository.save(newProperty);
    }
        
    findPropertyById(id: number) {
        return this.propRepository.findOneBy({id:id});
    }
}
