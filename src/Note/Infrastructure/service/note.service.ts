import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from '../dto/note.dto';
import { UpdateNoteDto } from '../dto/note.dto';

// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NoteServise {
  private counterId = 1;
  // constructor(
  //   @InjectRepository(User) private personRepo: Repository<User>,
  //   @InjectRepository(CourseInfraestructure)
  //   private courseRepo: Repository<CourseInfraestructure>,
  // ) {}
  private notes: CreateNoteDto[] = [
    {
      id: '1',
      title: 'Nota 1',
      content: 'Este es el contenido de la Nota 1',
    },
  ];
  findAll() {
    return this.notes;
  }
  findOne(id: number) {
    const user = this.notes.find((u) => parseInt(u.id) == id);
    if (!user) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    return user;
  }
  create(data: CreateNoteDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...data,
    };
    this.notes.push(newUser);
    return newUser;
  }
  update(id: number, changes: UpdateNoteDto) {
    const product = this.findOne(id);
    const index = this.notes.findIndex((item) => parseInt(item.id) === id);
    this.notes[index] = {
      ...product,
      ...changes,
    };
    return this.notes[index];
  }
  remove(id: number) {
    const index = this.notes.findIndex((item) => parseInt(item.id) === id);
    if (index === -1) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    this.notes.splice(index, 1);
    return true;
  }
}
