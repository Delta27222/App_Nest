import { randomUUID } from 'crypto';

export class NoteId {
  id: string;
  NoteId() {
    this.id = randomUUID();
  }
}
