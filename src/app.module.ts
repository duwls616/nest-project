import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path'; 
import { InviteController } from './invite/invite.controller';
import { InviteService } from './invite/invite.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend/dist'),
    }),
  ],
  controllers: [AppController, InviteController],
  providers: [AppService, InviteService],
})
export class AppModule {}
