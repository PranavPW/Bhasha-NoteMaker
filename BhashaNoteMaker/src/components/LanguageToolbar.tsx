import React from 'react';
import { Type, Hash } from 'lucide-react';
import { languageHelpers } from '../utils/languages';

interface LanguageToolbarProps {
  language: string;
  onInsertText: (text: string) => void;
}

const LanguageToolbar: React.FC<LanguageToolbarProps> = ({ language, onInsertText }) => {
  const helper = languageHelpers[language];
  
  if (!helper) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
      <div className="flex items-center space-x-2 mb-2">
        <Type className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Language Helpers</span>
      </div>
      
      <div className="space-y-2">
        {helper.numbers.length > 0 && (
          <div>
            <div className="flex items-center space-x-1 mb-1">
              <Hash className="h-3 w-3 text-gray-500" />
              <span className="text-xs font-medium text-gray-600">Numbers</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {helper.numbers.map((number, index) => (
                <button
                  key={index}
                  onClick={() => onInsertText(number)}
                  className="language-helper"
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {helper.commonTerms.length > 0 && (
          <div>
            <span className="text-xs font-medium text-gray-600">Common Terms</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {helper.commonTerms.map((term, index) => (
                <button
                  key={index}
                  onClick={() => onInsertText(term)}
                  className="language-helper"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {helper.academicTerms.length > 0 && (
          <div>
            <span className="text-xs font-medium text-gray-600">Academic Terms</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {helper.academicTerms.map((term, index) => (
                <button
                  key={index}
                  onClick={() => onInsertText(term)}
                  className="language-helper"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageToolbar;