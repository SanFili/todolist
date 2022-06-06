import "./App.scss";

import { initialize } from "api/api";
import Form from "components/Form";
import Note from "components/Note";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Helmet from "react-helmet";
import NotesStore from "store/NotesStore";
import { NoteType } from "types/note";

const App = observer(() => {
  useEffect(() => {
    initialize(
      // @ts-ignore
      () => {},
      () => null
    ).on("data", (data) => {
      // @ts-ignore
      const note = data.smart_app_data;
      // @ts-ignore
      if (data.smart_app_data) {
        switch (note.type) {
          case "addTask":
            NotesStore.addNote(note.value);
            break;
          case "doneTask":
            NotesStore.doneNote(note.value);
            break;
          case "backTask":
            NotesStore.doneNote(note.value);
            break;
          case "deleteTask":
            NotesStore.deleteNote(note.value);
            break;
        }
      }
    });
  }, []);

  return (
    <main className="todolist">
      <Helmet>
        <meta charSet="utf-8" />
        <title>TO DO LIST</title>
        <meta property="og:title" content="TO DO LIST" />
        <meta property="og:image" content="website" />
        <meta property="og:description" content="for your productive day" />
      </Helmet>
      <div className="todolist__container">
        <Form />
        <ul className="todolist__notes">
          {NotesStore.notes.map((note: NoteType, i: number) => (
            <Note key={note.id} note={note} i={i} />
          ))}
        </ul>
      </div>
    </main>
  );
});

export default App;
