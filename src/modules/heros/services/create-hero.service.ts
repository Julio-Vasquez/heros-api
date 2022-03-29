import { Repository, EntityManager, DataSource } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { HeroEntity } from 'src/entities/hero.entity'
import { CreateHeroDto } from '../dto/create-hero.dto'

@Injectable()
export class CreateHeroService {
  constructor(
    @InjectRepository(HeroEntity)
    private readonly heroRepository: Repository<HeroEntity>,
    private readonly manager: EntityManager,
    private readonly dataSource: DataSource,
  ) {}

  public async newHero(hero: CreateHeroDto) {
    console.log(hero)
    this.dataSource.manager.transaction(async entityManager => {
      //code
    })
    this.manager.transaction(async entityManager => {
      //code
    })
  }
}
