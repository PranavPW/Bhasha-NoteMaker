import React, { useState } from 'react';
import { BookOpen, Globe, Plus, FileText } from 'lucide-react';
import { getTranslation } from '../utils/languages';
import TemplateSelector from './TemplateSelector';
import { Template } from '../types/Template';

interface HeaderProps {
  currentLanguage: string;
  onNewNote: () => void;
  onTemplateSelect: (template: Template) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onNewNote, onTemplateSelect }) => {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                {getTranslation('appName', currentLanguage)}
              </h1>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Globe className="h-4 w-4" />
              <span>Multi-language Academic Notes</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowTemplates(true)}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
            >
              <FileText className="h-4 w-4" />
              <span>Templates</span>
            </button>
            <button
              onClick={onNewNote}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" />
              <span>{getTranslation('newNote', currentLanguage)}</span>
            </button>
          </div>
        </div>
      </header>

      <TemplateSelector
        isVisible={showTemplates}
        onClose={() => setShowTemplates(false)}
        onSelectTemplate={onTemplateSelect}
        currentLanguage={currentLanguage}
      />
    </>
  );
};

export default Header;