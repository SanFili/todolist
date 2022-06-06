import "./Note.scss";

import cn from "classnames";
import { FC, memo } from "react";
import NotesStore from "store/NotesStore";
import { NoteType } from "types/note";

type NoteParams = {
  note: NoteType;
  i: number;
};

const Note: FC<NoteParams> = memo((note) => {
  return (
    <li className={cn("note", note.note.completed && "note_checked")}>
      <p className="note__text">
        {note.i + 1}. {note.note.title}
      </p>
      <input
        className="note__check"
        type="checkbox"
        checked={note.note.completed}
        onChange={() => NotesStore.doneNote(note.note.title)}
      />
      <button className="note__delete" onClick={() => NotesStore.deleteNote(note.note.title)}>
        Удалить
      </button>
    </li>
  );
});

export default Note;
