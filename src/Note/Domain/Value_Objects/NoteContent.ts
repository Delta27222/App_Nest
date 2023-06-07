export class NoteContent {
  value: string;

  constructor(value: string) {
    // Realizar validaciones si es necesario
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }
}
