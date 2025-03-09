import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';
import { ResponseInterceptor } from './responseInterceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(config.get('port'), () => {
    return console.log(`Server is running on port ${config.get('port')}`);
  } );
}
bootstrap();
