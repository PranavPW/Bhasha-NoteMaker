import React, { useState } from 'react';
import { Search, FileText, Calendar, Globe, Tag, Trash2 } from 'lucide-react';
import { Note } from '../types/Note';
import { getLanguageByCode, getTranslation } from '../utils/languages';
import { format } from 'date-fns';
import LanguageSelector from './LanguageSelector';

interface NotesListProps {
  notes: Note[];
  selectedNote: Note | null;
  onSelectNote: (note: Note) => void;
  onDeleteNote: (noteId: string) => void;
  currentLanguage: string;
  onLanguageFilter: (language: string) => void;
  languageFilter: string;
}

const NotesList: React.FC<NotesListProps> = ({
  notes,
  selectedNote,
  onSelectNote,
  onDeleteNote,
  currentLanguage,
  onLanguageFilter,
  languageFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(note => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLanguage = 
      languageFilter === 'all' || note.language === languageFilter;
    
    return matchesSearch && matchesLanguage;
  });

  const handleDeleteNote = (e: React.MouseEvent, noteId: string) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDeleteNote(noteId);
    }
  };

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Search and Filter Header */}
      <div className="p-4 space-y-3 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={getTranslation('searchNotes', currentLanguage)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        <LanguageSelector
          currentLanguage={languageFilter}
          onLanguageChange={onLanguageFilter}
          showAllOption={true}
        />
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotes.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm">
              {searchQuery || languageFilter !== 'all'
                ? getTranslation('noNotes', currentLanguage)
                : getTranslation('createFirstNote', currentLanguage)
              }
            </p>
          </div>
        ) : (
          <div className="p-2 space-y-2">
            {filteredNotes.map((note) => {
              const language = getLanguageByCode(note.language);
              const isSelected = selectedNote?.id === note.id;
              
              return (
                <div
                  key={note.id}
                  onClick={() => onSelectNote(note)}
                  className={`note-card p-3 rounded-lg cursor-pointer border ${
                    isSelected
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 
                      className="font-medium text-gray-900 truncate flex-1"
                      style={{
                        fontFamily: language?.fontFamily,
                        direction: language?.rtl ? 'rtl' : 'ltr'
                      }}
                    >
                      {note.title || getTranslation('untitledNote', currentLanguage)}
                    </h3>
                    <button
                      onClick={(e) => handleDeleteNote(e, note.id)}
                      className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete note"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <p 
                    className="text-sm text-gray-600 line-clamp-2 mb-3"
                    style={{
                      fontFamily: language?.fontFamily,
                      direction: language?.rtl ? 'rtl' : 'ltr'
                    }}
                  >
                    {note.content.substring(0, 100)}
                    {note.content.length > 100 ? '...' : ''}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Globe className="h-3 w-3" />
                        <span>{language?.nativeName || note.language}</span>
                      </div>
                      {note.hasMath && (
                        <div className="flex items-center space-x-1">
                          <span className="text-blue-500">∑</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{format(note.updatedAt, 'MMM d')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesList;