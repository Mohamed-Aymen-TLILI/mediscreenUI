export class Note {
  id!: number;
  patientId!: number;
  createdDate!: Date;
  note!: string;

  constructor(obj?: Partial<Note>) {
    Object.assign(this, obj);
  }
}
