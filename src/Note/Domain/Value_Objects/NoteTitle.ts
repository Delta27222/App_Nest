export class NoteTitle {
  private readonly value: string;

  constructor(value: string) {
    // Realizar validaciones si es necesario
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }
}

export class PersonName {
  name: string;
  PersonName(name: string) {
    this.name = name;
  }

  validName(name: string) {
    if (!/[^a-zA-Z]/.test(name)) {
      return true;
    }
    return false;
  }
}
