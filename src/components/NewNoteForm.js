import React from "react";
import { useNotesStore } from "../NotesContext";

export const NewNoteForm = () => {
const [noteText, setNoteText] = React.useState("") /* Use state */
const notesStore = useNotesStore()
    return <>
     <input value={noteText} onChange={(e) => setNoteText(e.target.value) } type="text" />
    <button onClick={() => notesStore.addNote(noteText)}>Add note</button>
    <p>Click task to remove from list</p>
    </>
}