import { ILike, Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { HeroEntity } from 'src/entities/hero.entity'

@Injectable()
export class FindHeroService {
  constructor(
    @InjectRepository(HeroEntity)
    private readonly heroRepository: Repository<HeroEntity>,
  ) {}

  public async heroById(_id: string) {
    return await this.heroRepository.findOne({
      select: ['_id', 'name', 'realName', 'power'],
      where: { _id },
    })
  }

  public async heroByName(name: string) {
    console.log(name)
    return await this.heroRepository.findBy({
      name: ILike(`%${name}%`),
    })
  }

  public async allHeros() {
    return await this.heroRepository.find({
      select: ['_id', 'name', 'realName', 'power'],
    })
  }
}
