import './App.css';
import Form from './components/Form';
import Note from './components/Note/Note';
import NotesStore from './store/NotesStore';
import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import { initialize } from './api/api';

const App = observer(() => {

  useEffect(() => {
    initialize(() => {}, () => null).on('data', (data) => {
      if (data.smart_app_data) {
        switch (data.smart_app_data.type) {
          case 'addTask':
            NotesStore.addNote(data.smart_app_data.value);
            break;
          case 'doneTask':
            NotesStore.doneNote(data.smart_app_data.value);
            break;
          case 'backTask':
            NotesStore.doneNote(data.smart_app_data.value);
            break;
          case 'deleteTask':
            NotesStore.deleteNote(data.smart_app_data.value);
            break;
          default:
            console.log('');
        }
      }      
    });
  }, []);

  return (
    <main className="container">
      <div className="todolist">
        <Form />
        <ul className="notelist">
          {NotesStore.notes.map((note, i) => (
            <Note key={note.id} note={note} i={i} />
          ))}
        </ul>
        </div>
      </main>
  );
});

export default App;
