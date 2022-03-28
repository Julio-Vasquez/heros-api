import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HeroEntity } from 'src/entities/hero.entity'
import { HerosController } from './heros.controller'
import { HeroService } from './services'
import { CreateHeroService } from './services/create-hero.service'
import { DeleteHeroService } from './services/delete-hero.service'
import { FindHeroService } from './services/find-hero.service'
import { UpdateHeroService } from './services/update-hero.service'

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity])],
  controllers: [HerosController],
  providers: [
    HeroService,
    FindHeroService,
    UpdateHeroService,
    DeleteHeroService,
    CreateHeroService,
  ],
})
export class HerosModule {}
