import { IsString, IsNumberString, IsNotEmpty } from 'class-validator'

export class HeroDto {
  @IsNotEmpty()
  @IsString()
  readonly realName: string

  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNumberString()
  @IsNotEmpty()
  readonly power: number
}
