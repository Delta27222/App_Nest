import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;
}
export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
