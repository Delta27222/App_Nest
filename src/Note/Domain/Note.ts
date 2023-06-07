import { NoteId } from 'src/shared/value_objects/NoteId';
import { NoteTitle } from './Value_Objects/NoteTitle';
import { NoteContent } from './Value_Objects/NoteContent';

export class Note {
  private id: NoteId;
  private title: NoteTitle;
  private content: NoteContent;

  constructor(id: NoteId, title: NoteTitle, content: NoteContent) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  public getId(): NoteId {
    return this.id;
  }

  public getTitle(): NoteTitle {
    return this.title;
  }

  public getContent(): NoteContent {
    return this.content;
  }
}
