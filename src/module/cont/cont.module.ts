import { Module } from '@nestjs/common';
import { ContController } from './cont.controller';
import { ContService } from './cont.service';

@Module({
    controllers: [ContController],
    providers: [ContService],
})
  
export class ContModule {}
