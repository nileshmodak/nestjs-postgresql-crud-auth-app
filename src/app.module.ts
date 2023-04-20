import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgModule } from './org/org.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
import { RegionModule } from './region/region.module';
import { FieldsModule } from './fields/fields.module';
import { CropModule } from './crop/crop.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import entities from './typeorm';

@Module({
  imports: [
    OrgModule,
    PropertyModule,
    RegionModule,
    FieldsModule,
    CropModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
