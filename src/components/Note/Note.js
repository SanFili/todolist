import NotesStore from '../../store/NotesStore';
import './Note.css';

const Note = (note) => {

    return (
        <li className={`note ${note.note.completed && "note_checked"}`}>
            <p className="note__text">
              {note.i + 1}. {note.note.title}
            </p>
            <input
              className="note__check"
              type="checkbox"
              checked={note.note.completed}
              onChange={() => NotesStore.doneNote(note.note.title)}
            />
            <button
              className="note__delete"
              onClick={() => NotesStore.deleteNote(note.note.title)}
            >
              Удалить
            </button>
        </li>
    )
}

export default Note;