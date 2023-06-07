import { Module } from '@nestjs/common';
import { NoteController } from './controller/note.controller';
import { NoteServise } from './service/note.service';

@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteServise],
})
export class NoteModule {}
