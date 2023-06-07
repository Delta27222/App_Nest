import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  // readonly notesId: string[];
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
