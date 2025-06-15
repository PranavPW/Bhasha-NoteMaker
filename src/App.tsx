import React, { useState, useEffect } from 'react';
import { Note } from './types/Note';
import { Template } from './types/Template';
import { generateId } from './utils/generateId';
import { loadNotes, saveNote, deleteNote as deleteNoteFromStorage } from './utils/storageUtils';
import Header from './components/Header';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Load notes on app start
  useEffect(() => {
    try {
      const loadedNotes = loadNotes();
      setNotes(loadedNotes);
      if (loadedNotes.length > 0) {
        setSelectedNote(loadedNotes[0]);
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Auto-save functionality
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Ensure any pending saves are completed
      if (selectedNote) {
        try {
          saveNote(selectedNote);
        } catch (error) {
          console.error('Error auto-saving note:', error);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [selectedNote]);

  const handleNewNote = () => {
    const newNote: Note = {
      id: generateId(),
      title: '',
      content: '',
      language: currentLanguage,
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: [],
      hasMath: false
    };
    
    setSelectedNote(newNote);
  };

  const handleTemplateSelect = (template: Template) => {
    const newNote: Note = {
      id: generateId(),
      title: template.name,
      content: template.content,
      language: template.language,
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: [...template.tags],
      hasMath: template.content.includes('$')
    };
    
    setSelectedNote(newNote);
  };

  const handleSaveNote = (note: Note) => {
    try {
      saveNote(note);
      
      // Update notes list
      setNotes(prevNotes => {
        const existingIndex = prevNotes.findIndex(n => n.id === note.id);
        if (existingIndex >= 0) {
          const updated = [...prevNotes];
          updated[existingIndex] = note;
          return updated.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
        } else {
          return [note, ...prevNotes];
        }
      });
      
      setSelectedNote(note);
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note. Please try again.');
    }
  };

  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
  };

  const handleDeleteNote = (noteId: string) => {
    try {
      deleteNoteFromStorage(noteId);
      setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
      
      if (selectedNote?.id === noteId) {
        const remainingNotes = notes.filter(note => note.id !== noteId);
        setSelectedNote(remainingNotes.length > 0 ? remainingNotes[0] : null);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete note. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-lg text-gray-700">Loading notes<span className="loading-dots"></span></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header
        currentLanguage={currentLanguage}
        onNewNote={handleNewNote}
        onTemplateSelect={handleTemplateSelect}
      />
      
      <div className="flex-1 flex">
        <NotesList
          notes={notes}
          selectedNote={selectedNote}
          onSelectNote={handleSelectNote}
          onDeleteNote={handleDeleteNote}
          currentLanguage={currentLanguage}
          onLanguageFilter={setLanguageFilter}
          languageFilter={languageFilter}
        />
        
        <NoteEditor
          note={selectedNote}
          onSave={handleSaveNote}
          currentLanguage={currentLanguage}
        />
      </div>
    </div>
  );
}

export default App;