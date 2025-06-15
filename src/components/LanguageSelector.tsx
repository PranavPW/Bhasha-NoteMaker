import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { languages, getTranslation } from '../utils/languages';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  showAllOption?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  showAllOption = false
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 transition-colors min-w-[150px]"
      >
        <Globe className="h-4 w-4 text-gray-500" />
        <span className="flex-1 text-left">
          {currentLanguage === 'all' 
            ? getTranslation('allLanguages', 'en')
            : currentLang?.nativeName || currentLanguage
          }
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {showAllOption && (
            <button
              onClick={() => {
                onLanguageChange('all');
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors border-b border-gray-200"
            >
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <span>{getTranslation('allLanguages', 'en')}</span>
              </div>
            </button>
          )}
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                currentLanguage === language.code ? 'bg-blue-50 text-blue-700' : ''
              }`}
              style={{ 
                fontFamily: language.fontFamily,
                direction: language.rtl ? 'rtl' : 'ltr'
              }}
            >
              <div className="flex items-center justify-between">
                <span>{language.nativeName}</span>
                <span className="text-xs text-gray-500">{language.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;