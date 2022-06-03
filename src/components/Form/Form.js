import { useState } from 'react';
import NotesStore from '../../store/NotesStore';
import './Form.css';

const Form = () => {
    const [note, setNote] = useState("");

    const submit = (e) => {
        e.preventDefault();
        NotesStore.addNote(note);
        setNote("");
    }

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
    )
}

export default Form;