import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContModule } from './cont/cont.module';

@Module({
  imports: [ContModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
