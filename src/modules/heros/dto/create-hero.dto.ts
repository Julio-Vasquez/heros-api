import { IsString, IsNumberString, IsNotEmpty } from 'class-validator'

export class CreateHeroDto {
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
