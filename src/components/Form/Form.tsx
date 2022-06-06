import "./Form.scss";

import { memo, useState } from "react";
import NotesStore from "store/NotesStore";

const Form = memo(() => {
  const [note, setNote] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    NotesStore.addNote(note);
    setNote("");
  };

  return (
    <form className="form" onSubmit={(event) => submit(event)}>
      <input
        className="form__input"
        type="text"
        placeholder="Add Note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <button className="form__button">Добавить</button>
    </form>
  );
});

export default Form;
