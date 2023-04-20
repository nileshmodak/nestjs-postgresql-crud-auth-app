import { Injectable } from '@nestjs/common';
import { Fields } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFieldsDto } from '../dto/fields.dto';

@Injectable()
export class FieldsService {
    constructor(@InjectRepository(Fields) private readonly fieldRepository: Repository<Fields>) {

    }
          
    createFields(createFieldDto: CreateFieldsDto) {
        const newOrg = this.fieldRepository.create(createFieldDto);
        return this.fieldRepository.save(newOrg);
    }
        
    findFieldsById(id: number) {
        return this.fieldRepository.findOneBy({id:id});
    }
}
