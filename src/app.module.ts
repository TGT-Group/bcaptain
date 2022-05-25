import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CommonModule } from './common/common.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
