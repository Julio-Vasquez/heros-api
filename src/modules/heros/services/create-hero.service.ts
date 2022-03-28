import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateHeroService {
  constructor() {}
  
  public async newHero(){
    console.log('Nuevo Heroe')
  }
}