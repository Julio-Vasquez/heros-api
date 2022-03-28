import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteHeroService {
  constructor() {}
  
  public async heroById(){
    console.log('eliminar hero')
  }
}