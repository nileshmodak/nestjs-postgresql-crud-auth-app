import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Org } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateOrgDto } from 'src/org/dto/org.dto';

@Injectable()
export class OrgService {
    constructor(
        @InjectRepository(Org) private readonly orgRepository: Repository<Org>,
      ) {}
          
      createOrg(createOrgDto: CreateOrgDto) {
        const newOrg = this.orgRepository.create(createOrgDto);
        return this.orgRepository.save(newOrg);
      }
          
      findOrgsById(id: number) {
        return this.orgRepository.findOneBy({id:id});
      }
}
