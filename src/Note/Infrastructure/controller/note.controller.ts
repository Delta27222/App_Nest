import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { NoteServise } from '../service/note.service';
import { CreateNoteDto, UpdateNoteDto } from '../dto/note.dto';

@Controller('notes')
export class NoteController {
  constructor(private service: NoteServise) {}

  //Las notas registradas
  @Get()
  findAll() {
    return this.service.findAll();
  }

  //Una nota en especifica
  @Get(':notaId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('notaId', ParseIntPipe) notaId: number) {
    // response.status(200).send({
    //   message: `product ${notaId}`,
    // })
    return this.service.findOne(notaId);
  }

  //Crear nota
  @Post()
  create(@Body() payload: CreateNoteDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // }
    return this.service.create(payload);
  }

  //Actualizar nota
  @Put(':notaId')
  update(@Param('notaId') notaId: string, @Body() payload: UpdateNoteDto) {
    return this.service.update(+notaId, payload);
  }

  //Eliminar nota
  @Delete(':notaId')
  delete(@Param('notaId') notaId: string) {
    return this.service.remove(+notaId);
  }
}
