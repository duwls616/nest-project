import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContController } from './cont/cont.controller';
import { ContService } from './cont/cont.service';

@Module({
  imports: [],
  controllers: [AppController, ContController],
  providers: [AppService, ContService],
})
export class AppModule {}
