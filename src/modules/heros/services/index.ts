import { Injectable } from '@nestjs/common'
import { CreateHeroService } from './create-hero.service'
import { DeleteHeroService } from './delete-hero.service'
import { FindHeroService } from './find-hero.service'
import { UpdateHeroService } from './update-hero.service'

@Injectable()
export class HeroService {
  constructor(
    private readonly Create: CreateHeroService,
    private readonly Update: UpdateHeroService,
    private readonly Delete: DeleteHeroService,
    private readonly Find: FindHeroService,
  ) {}

  readonly create = this.Create
  readonly update = this.Update
  readonly remove = this.Delete
  readonly find = this.Find
}
