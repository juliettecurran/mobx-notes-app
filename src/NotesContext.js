import React from 'react'
import { createNotesStore } from './notesStore'
import { useLocalStore } from 'mobx-react'

/* Context */

const NotesContext = React.createContext(null)

export const NotesProvider = ({children}) => {
    const notesStore = useLocalStore(createNotesStore) /* wrap in useLocalStore to make it observable */

    return <NotesContext.Provider value={notesStore}>
        {children}
    </NotesContext.Provider>
}


/* Hook to use Context */
export const useNotesStore = () => React.useContext(NotesContext)