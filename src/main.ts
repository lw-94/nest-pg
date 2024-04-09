import { NestFactory } from '@nestjs/core'
import { VersioningType } from '@nestjs/common'
import * as session from 'express-session'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableVersioning({
    type: VersioningType.URI,
  })
  app.use(session({
    secret: 'lw',
    rolling: true,
    name: 'demo.sid',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }))
  await app.listen(3000)
}
bootstrap()
