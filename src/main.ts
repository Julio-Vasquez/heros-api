import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as compression from 'compression'

import { AppModule } from './modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['warn', 'error', 'log', 'debug'],
  })

  const confApp: ConfigService = app.get(ConfigService)
  const PORT = confApp.get<number>('app.port') || 3000
  app.enableCors()
  app.use(compression())
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  app.setGlobalPrefix(confApp.get<string>('app.prefix'))

  const configSwagger = new DocumentBuilder()
    .setTitle('Heros API')
    .setDescription('')
    .setVersion('0.1')
    .addTag('Heros')
    .build()

  const document = SwaggerModule.createDocument(app, configSwagger)

  SwaggerModule.setup('API', app, document)

  await app.listen(PORT, async () => {
    Logger.debug('Init app ', 'Test')
    Logger.debug(`🔥🐱 ${confApp.get<string>('app.name')} 🐱🔥`, 'Log-App')
    Logger.log(`🎓  Mode : dev 🎓`, 'Log-App')
    Logger.debug(`Server: ${confApp.get<number>('app.host')}`, 'Log-Server')
    Logger.debug(`Port: ${confApp.get<number>('app.port')}`, 'Log-Server')
    Logger.debug(`Prefix: ${confApp.get<string>('app.prefix')}`, 'Log-Server')
    Logger.log(`🚀 Running on : ${await app.getUrl()}/p2/ 🚀 `, 'Log-Server')
  })
}
bootstrap()
