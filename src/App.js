
import './App.css';
import { NewNoteForm } from './components/NewNoteForm';
import { useNotesStore } from './NotesContext';
import { useObserver } from 'mobx-react'

function App() {
  const notesStore = useNotesStore()
  return useObserver (() => ( /* useObserver hook to observe notesStore/wraps layout */
    <>
    <ul>
      {notesStore.notes.map(note => (
          <li onClick={ () => notesStore.removeNote(note.id)} /* remove note onClick */
          key={note.id}>{note.text}</li>
      ))}
    </ul>
   <NewNoteForm/>
    </>
  ));
}

export default App;
