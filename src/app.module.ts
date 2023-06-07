import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './Note/Infrastructure/note.module';
import { UserModule } from './User/Infrastructure/user.module';

@Module({
  imports: [UserModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
