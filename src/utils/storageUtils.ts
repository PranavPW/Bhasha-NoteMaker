import { Note } from '../types/Note';

const STORAGE_KEY = 'keepYourDocs_notes';

export const saveNotes = (notes: Note[]): void => {
  try {
    const serialized = JSON.stringify(notes, null, 2);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Error saving notes:', error);
    throw new Error('Failed to save notes');
  }
};

export const loadNotes = (): Note[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return parsed.map((note: any) => ({
      ...note,
      createdAt: new Date(note.createdAt),
      updatedAt: new Date(note.updatedAt)
    }));
  } catch (error) {
    console.error('Error loading notes:', error);
    return [];
  }
};

export const saveNote = (note: Note): void => {
  try {
    const existingNotes = loadNotes();
    const noteIndex = existingNotes.findIndex(n => n.id === note.id);
    
    if (noteIndex >= 0) {
      existingNotes[noteIndex] = note;
    } else {
      existingNotes.push(note);
    }
    
    saveNotes(existingNotes);
  } catch (error) {
    console.error('Error saving note:', error);
    throw new Error('Failed to save note');
  }
};

export const deleteNote = (noteId: string): void => {
  try {
    const existingNotes = loadNotes();
    const filteredNotes = existingNotes.filter(note => note.id !== noteId);
    saveNotes(filteredNotes);
  } catch (error) {
    console.error('Error deleting note:', error);
    throw new Error('Failed to delete note');
  }
};