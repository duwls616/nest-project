import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContModule } from './module/cont/cont.module';
import { UserModule } from './module/user/user.module';
import { User } from './module/user/entities/user.entity';

@Module({
  imports: [
    ContModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.247.9\\CRM',
      port: 1433,
      username:"crmsa",
      password: "#crm#2121!@",
      database: "LAB_UBLINK",
      entities: [User],
      synchronize: true,
      options: {
        encrypt: false,
        enableArithAbort: true
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
