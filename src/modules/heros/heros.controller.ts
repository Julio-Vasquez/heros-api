import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common'

import { HeroService } from './services'

import { HeroEntity } from 'src/entities/hero.entity'
import { IResponse } from '../@common/interface/response.interface'
import { CreateHeroDto } from './dto/create-hero.dto'

@ApiTags('heros')
@Controller('hero')
export class HerosController {
  constructor(private readonly heroService: HeroService) {}

  @ApiOperation({ summary: 'Get all heros' })
  @ApiResponse({ status: 404, description: 'No Found' })
  @ApiResponse({ status: 200, description: 'OK', type: HeroEntity })
  @Get('/')
  public async getAllHeros() {
    const result = await this.heroService.find.allHeros()
    return !result
      ? {
          status: HttpStatus.NOT_FOUND,
          detail: `No data`,
          result: [],
        }
      : {
          result,
          status: HttpStatus.OK,
          detail: 'OK',
        }
  }

  @ApiOperation({ summary: 'Get hero by name' })
  @ApiResponse({ status: 404, description: 'No Found' })
  @ApiResponse({ status: 200, description: 'OK', type: HeroEntity })
  @Get('name=:name')
  public async getHeroByName(@Param('name') name: string) {
    const result = await this.heroService.find.heroByName(name)
    return !result
      ? {
          status: HttpStatus.NOT_FOUND,
          detail: `There is no data with this name (${name})`,
          result: [],
        }
      : {
          result,
          status: HttpStatus.OK,
          detail: 'OK',
        }
  }

  @ApiOperation({ summary: 'Get hero by id' })
  @ApiResponse({ status: 404, description: 'No Found' })
  @ApiResponse({ status: 200, description: 'OK', type: HeroEntity })
  @Get(':id')
  public async getHeroById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<IResponse> {
    const result = await this.heroService.find.heroById(id)
    return !result
      ? {
          status: HttpStatus.NOT_FOUND,
          detail: `There is no data with this id (${id})`,
          result: [],
        }
      : {
          result,
          status: HttpStatus.OK,
          detail: 'OK',
        }
  }

  @Post('/create')
  public async createHero(@Body() hero: CreateHeroDto) {
    return await this.heroService.create.newHero(hero)
  }

  @Put('/update/:id')
  public async updateHero() {
    return await this.heroService.update.heroById()
  }

  @Delete('/delete/:id')
  public async deleteHero() {
    return await this.heroService.remove.heroById()
  }
}
