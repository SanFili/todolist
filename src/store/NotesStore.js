import { makeAutoObservable } from 'mobx';

class Store {
  notes = [{
    id: "hjhbjhb",
    title: "купить хлеб",
    completed: true,
    }];
    constructor() {
      makeAutoObservable(this);
    }

    addNote(note) {
        this.notes = [
            ...this.notes,
            {
              id: Math.random().toString(36).substring(7),
              title: note,
              completed: false,
            },
        ]
    }

    doneNote(text) {
        this.notes = this.notes.map((note) =>
          note.title.toLowerCase() === text.toLowerCase() ? { ...note, completed: !note.completed } : note
        )
    }

    deleteNote(text) {
      this.notes = this.notes.filter((note) => note.title.toLowerCase() !== text.toLowerCase())
    }
}
  
  export default new Store();
  