import { makeAutoObservable } from "mobx";
import { NoteType } from "types/note";

class Store {
  notes: NoteType[] = [
    {
      id: "hjhbjhb",
      title: "купить хлеб",
      completed: true,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addNote(text: string) {
    this.notes = [
      ...this.notes,
      {
        id: Math.random().toString(36).substring(7),
        title: text,
        completed: false,
      },
    ];
  }

  doneNote(text: string) {
    this.notes = this.notes.map((note) =>
      note.title.toLowerCase() === text.toLowerCase() ? { ...note, completed: !note.completed } : note
    );
  }

  deleteNote(text: string) {
    this.notes = this.notes.filter((note) => note.title.toLowerCase() !== text.toLowerCase());
  }
}

export default new Store();
