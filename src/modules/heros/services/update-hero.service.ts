import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateHeroService {
  constructor() {}
  
  async heroById(){
    console.log('actualizar')
  }
}