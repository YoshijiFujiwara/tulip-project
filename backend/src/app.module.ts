import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExhibitsModule } from './exhibits/exhibits.module';
import { ProfileModule } from './profile/profile.module';
import { BoothsModule } from './booths/booths.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    ExhibitsModule,
    ProfileModule,
    BoothsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
