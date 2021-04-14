import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContModule } from './module/cont/cont.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.247.9\\CRM',
      username:"crmsa",
      password: "#crm#2121!@",
      database: "LAB_UBLINK",
      entities: [__dirname + '/../**/**/entities/*.entity{.ts, .js}'],
      synchronize: true,
    }),
    ContModule, UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
