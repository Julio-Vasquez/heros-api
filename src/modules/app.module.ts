import { Module } from '@nestjs/common';

import { CommonModule } from './@common/common.module';
import { HerosModule } from './heros/heros.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule, HerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
