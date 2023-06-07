export class Username {
  value: string;

  constructor(value: string) {
    // Realizar validaciones si es necesario, por ejemplo, verificar la longitud o caracteres permitidos
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }
}
