import React, { useState, useEffect } from 'react';
import { Keyboard, Globe, X, Space, Delete, ArrowLeft, ArrowRight, CheckCircle, Brain, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { getLanguageByCode } from '../utils/languages';
import { nlpService } from '../utils/indicNLPService';
import NLPStatusIndicator from './NLPStatusIndicator';

interface VirtualKeyboardProps {
  isVisible: boolean;
  onClose: () => void;
  onTextInput: (text: string) => void;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

interface AutocorrectSuggestion {
  word: string;
  suggestions: string[];
  confidence: number;
  context?: string;
  morphology?: {
    root: string;
    inflections: string[];
    partOfSpeech: string;
    gender?: string;
    number?: string;
    case?: string;
  };
}

// Keyboard layouts for different languages (keeping existing layouts)
const keyboardLayouts = {
  en: {
    rows: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '[', ']', ';', "'", ',', '.', '/', '\\']
  },
  hi: {
    rows: [
      ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ'],
      ['ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न'],
      ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व'],
      ['श', 'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ']
    ],
    vowels: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'],
    matras: ['ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', '्'],
    numbers: ['१', '२', '३', '४', '५', '६', '७', '८', '९', '०'],
    symbols: ['।', '॥', 'ॐ', '₹']
  },
  mr: {
    rows: [
      ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ'],
      ['ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न'],
      ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व'],
      ['श', 'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ']
    ],
    vowels: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'],
    matras: ['ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', '्'],
    numbers: ['१', '२', '३', '४', '५', '६', '७', '८', '९', '०'],
    symbols: ['।', '॥', 'ॐ', '₹']
  },
  bn: {
    rows: [
      ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ'],
      ['ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন'],
      ['প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ'],
      ['ষ', 'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ']
    ],
    vowels: ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'],
    matras: ['া', 'ি', 'ী', 'ু', 'ূ', 'ৃ', 'ে', 'ৈ', 'ো', 'ৌ', '্'],
    numbers: ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '০'],
    symbols: ['।', '॥', '৳']
  },
  te: {
    rows: [
      ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ'],
      ['ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న'],
      ['ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ'],
      ['శ', 'ష', 'స', 'హ', 'ళ', 'క్ష', 'ఱ']
    ],
    vowels: ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఌ', 'ౡ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ'],
    matras: ['ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ', '్'],
    numbers: ['౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯', '౦'],
    symbols: ['।', '॥']
  },
  ta: {
    rows: [
      ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம'],
      ['ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன', 'ஜ'],
      ['ஶ', 'ஷ', 'ஸ', 'ஹ', 'க்ஷ']
    ],
    vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'],
    matras: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்'],
    numbers: ['௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯', '௦'],
    symbols: ['।', '॥']
  },
  gu: {
    rows: [
      ['ક', 'ખ', 'ગ', 'ઘ', 'ઙ', 'ચ', 'છ', 'જ', 'ઝ', 'ઞ'],
      ['ટ', 'ઠ', 'ડ', 'ઢ', 'ણ', 'ત', 'થ', 'દ', 'ધ', 'ન'],
      ['પ', 'ફ', 'બ', 'ભ', 'મ', 'ય', 'ર', 'લ', 'વ'],
      ['શ', 'ષ', 'સ', 'હ', 'ળ', 'ક્ષ', 'જ્ઞ']
    ],
    vowels: ['અ', 'આ', 'ઇ', 'ઈ', 'ઉ', 'ઊ', 'ઋ', 'એ', 'ઐ', 'ઓ', 'ઔ'],
    matras: ['ા', 'િ', 'ી', 'ુ', 'ૂ', 'ૃ', 'ે', 'ૈ', 'ો', 'ૌ', '્'],
    numbers: ['૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯', '૦'],
    symbols: ['।', '॥', '₹']
  },
  ur: {
    rows: [
      ['ق', 'و', 'ع', 'ر', 'ت', 'ے', 'ء', 'ی', 'ہ', 'پ'],
      ['ا', 'س', 'د', 'ف', 'گ', 'ح', 'ج', 'ک', 'ل'],
      ['ز', 'خ', 'چ', 'ط', 'ب', 'ن', 'م']
    ],
    numbers: ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'],
    symbols: ['۔', '؍', '؎', '؏', '؞', '؟', '٪', '٭']
  },
  kn: {
    rows: [
      ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'],
      ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'],
      ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ', 'ವ'],
      ['ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ', 'ಕ್ಷ', 'ಜ್ಞ']
    ],
    vowels: ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ೠ', 'ಌ', 'ೡ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ'],
    matras: ['ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೃ', 'ೄ', 'ೆ', 'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ೌ', '್'],
    numbers: ['೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯', '೦'],
    symbols: ['।', '॥']
  },
  ml: {
    rows: [
      ['ക', 'ഖ', 'ഗ', 'ഘ', 'ങ', 'ച', 'ഛ', 'ജ', 'ഝ', 'ഞ'],
      ['ട', 'ഠ', 'ഡ', 'ഢ', 'ണ', 'ത', 'ഥ', 'ദ', 'ധ', 'ന'],
      ['പ', 'ഫ', 'ബ', 'ഭ', 'മ', 'യ', 'ര', 'ല', 'വ'],
      ['ശ', 'ഷ', 'സ', 'ഹ', 'ള', 'ഴ', 'റ']
    ],
    vowels: ['അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ', 'ഋ', 'ൠ', 'ഌ', 'ൡ', 'എ', 'ഏ', 'ഐ', 'ഒ', 'ഓ', 'ഔ'],
    matras: ['ാ', 'ി', 'ീ', 'ു', 'ൂ', 'ൃ', 'ൄ', 'െ', 'േ', 'ൈ', 'ൊ', 'ോ', 'ൌ', '്'],
    numbers: ['൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯', '൦'],
    symbols: ['।', '॥']
  }
};

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  isVisible,
  onClose,
  onTextInput,
  currentLanguage,
  onLanguageChange
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [keyboardMode, setKeyboardMode] = useState<'letters' | 'numbers' | 'symbols' | 'vowels' | 'matras'>('letters');
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [textBuffer, setTextBuffer] = useState('');
  const [autocorrectSuggestions, setAutocorrectSuggestions] = useState<AutocorrectSuggestion | null>(null);
  const [textAnalysis, setTextAnalysis] = useState<any>(null);
  const [showAnalysisPanel, setShowAnalysisPanel] = useState(false);
  const [nlpStatus, setNlpStatus] = useState<'api' | 'local' | 'offline'>('local');

  const currentLayout = keyboardLayouts[currentLanguage as keyof typeof keyboardLayouts] || keyboardLayouts.en;
  const language = getLanguageByCode(currentLanguage);

  useEffect(() => {
    if (activeKey) {
      const timer = setTimeout(() => setActiveKey(null), 150);
      return () => clearTimeout(timer);
    }
  }, [activeKey]);

  // Enhanced autocorrect with NLP service
  useEffect(() => {
    if (currentWord.length > 2 && ['hi', 'mr', 'bn', 'te', 'ta', 'gu', 'kn', 'ml', 'ur', 'pa', 'or'].includes(currentLanguage)) {
      const debounceTimer = setTimeout(async () => {
        try {
          const context = textBuffer.split(/\s+/).slice(-5).join(' ');
          const suggestions = await nlpService.getAutocorrectSuggestions(currentWord, currentLanguage, context);
          if (suggestions && suggestions.suggestions && suggestions.suggestions.length > 0) {
            setAutocorrectSuggestions(suggestions);
          } else {
            setAutocorrectSuggestions(null);
          }
        } catch (error) {
          console.error('Enhanced autocorrect error:', error);
          setAutocorrectSuggestions(null);
        }
      }, 800);
      
      return () => clearTimeout(debounceTimer);
    } else {
      setAutocorrectSuggestions(null);
    }
  }, [currentWord, currentLanguage, textBuffer]);

  // Comprehensive text analysis with NLP service
  useEffect(() => {
    if (textBuffer.length > 50 && ['hi', 'mr', 'bn', 'te', 'ta', 'gu', 'kn', 'ml', 'ur', 'pa', 'or'].includes(currentLanguage)) {
      const debounceTimer = setTimeout(async () => {
        try {
          const analysis = await nlpService.analyzeText(textBuffer, currentLanguage);
          setTextAnalysis(analysis);
        } catch (error) {
          console.error('Text analysis error:', error);
          setTextAnalysis(null);
        }
      }, 2000);
      
      return () => clearTimeout(debounceTimer);
    }
  }, [textBuffer, currentLanguage]);

  const handleKeyPress = (key: string) => {
    setActiveKey(key);
    
    if (key === 'space') {
      onTextInput(' ');
      setTextBuffer(prev => prev + ' ');
      setCurrentWord('');
    } else if (key === 'backspace') {
      onTextInput('\b');
      setTextBuffer(prev => prev.slice(0, -1));
      setCurrentWord(prev => prev.slice(0, -1));
    } else if (key === 'enter') {
      onTextInput('\n');
      setTextBuffer(prev => prev + '\n');
      setCurrentWord('');
    } else {
      const finalKey = isShiftPressed ? key.toUpperCase() : key;
      onTextInput(finalKey);
      setTextBuffer(prev => prev + finalKey);
      
      // Update current word for autocorrect
      if (/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(finalKey)) {
        setCurrentWord(prev => prev + finalKey);
      } else if (/[a-zA-Z]/.test(finalKey)) {
        setCurrentWord(prev => prev + finalKey);
      } else {
        setCurrentWord('');
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Replace current word with suggestion
    for (let i = 0; i < currentWord.length; i++) {
      onTextInput('\b');
    }
    onTextInput(suggestion);
    
    // Update text buffer
    setTextBuffer(prev => {
      const words = prev.split(/(\s+)/);
      if (words.length > 0) {
        words[words.length - 1] = suggestion;
      }
      return words.join('');
    });
    
    setCurrentWord('');
    setAutocorrectSuggestions(null);
  };

  const renderKey = (key: string, extraClasses = '') => {
    const isActive = activeKey === key;
    return (
      <button
        key={key}
        onClick={() => handleKeyPress(key)}
        className={`
          virtual-key flex items-center justify-center min-h-[44px] px-3 py-2 
          bg-white border border-gray-300 rounded-lg shadow-sm
          hover:bg-gray-50 active:bg-gray-100 transition-all duration-150
          text-lg font-medium select-none
          ${isActive ? 'bg-blue-100 border-blue-300 scale-95' : ''}
          ${extraClasses}
        `}
        style={{
          fontFamily: language?.fontFamily || 'Noto Sans, sans-serif',
          direction: language?.rtl ? 'rtl' : 'ltr'
        }}
      >
        {key}
      </button>
    );
  };

  const renderSpecialKey = (key: string, icon: React.ReactNode, extraClasses = '') => {
    const isActive = activeKey === key;
    return (
      <button
        key={key}
        onClick={() => handleKeyPress(key)}
        className={`
          virtual-key flex items-center justify-center min-h-[44px] px-4 py-2
          bg-gray-100 border border-gray-300 rounded-lg shadow-sm
          hover:bg-gray-200 active:bg-gray-300 transition-all duration-150
          ${isActive ? 'bg-blue-200 border-blue-300 scale-95' : ''}
          ${extraClasses}
        `}
      >
        {icon}
      </button>
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 p-4">
      <div 
        className="bg-white rounded-t-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden"
        style={{ direction: language?.rtl ? 'rtl' : 'ltr' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center space-x-3">
            <Keyboard className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Enhanced Virtual Keyboard</h3>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600" style={{ fontFamily: language?.fontFamily }}>
                {language?.nativeName || currentLanguage}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* NLP Status Indicator */}
            <NLPStatusIndicator onStatusChange={setNlpStatus} />
            
            {/* Language Selector */}
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="mr">मराठी</option>
              <option value="bn">বাংলা</option>
              <option value="te">తెలుగు</option>
              <option value="ta">தமிழ்</option>
              <option value="gu">ગુજરાતી</option>
              <option value="ur">اردو</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
            </select>
            
            {/* Analysis Panel Toggle */}
            {textAnalysis && (
              <button
                onClick={() => setShowAnalysisPanel(!showAnalysisPanel)}
                className={`p-2 rounded-lg transition-colors ${
                  showAnalysisPanel
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Text Analysis"
              >
                <Brain className="h-4 w-4" />
              </button>
            )}
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              title="Close Keyboard"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Enhanced Autocorrect Suggestions Bar with More Space */}
        {autocorrectSuggestions && autocorrectSuggestions.suggestions && autocorrectSuggestions.suggestions.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                Smart Autocorrect {nlpStatus === 'api' ? '(API Enhanced)' : '(Local)'}
              </span>
              <div className="flex items-center space-x-2 text-xs text-blue-600">
                <span>"{autocorrectSuggestions.word}"</span>
                <TrendingUp className="h-3 w-3" />
                <span>{(autocorrectSuggestions.confidence * 100).toFixed(0)}% confidence</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-3">
              {autocorrectSuggestions.suggestions.slice(0, 5).map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-6 py-3 bg-white border border-blue-200 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
                  style={{ fontFamily: language?.fontFamily }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
            
            {/* Morphological Information */}
            {autocorrectSuggestions.morphology && (
              <div className="text-xs text-blue-600 bg-blue-100 rounded-lg p-3">
                <span className="font-medium">Root:</span> {autocorrectSuggestions.morphology.root} | 
                <span className="font-medium"> Type:</span> {autocorrectSuggestions.morphology.partOfSpeech}
                {autocorrectSuggestions.morphology.gender && (
                  <span> | <span className="font-medium">Gender:</span> {autocorrectSuggestions.morphology.gender}</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Text Analysis Panel */}
        {showAnalysisPanel && textAnalysis && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-green-700">
                Comprehensive Text Analysis {nlpStatus === 'api' ? '(API Enhanced)' : '(Local)'}
              </span>
              <Zap className="h-4 w-4 text-yellow-500" />
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-green-900">{textAnalysis.stats?.wordCount || 0}</div>
                <div className="text-xs text-green-600">Words</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-green-900">{textAnalysis.stats?.sentenceCount || 0}</div>
                <div className="text-xs text-green-600">Sentences</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-green-900">{textAnalysis.stats?.uniqueWords || 0}</div>
                <div className="text-xs text-green-600">Unique</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-green-900">{((textAnalysis.stats?.languageComplexity || 0) * 100).toFixed(1)}%</div>
                <div className="text-xs text-green-600">Complexity</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-green-900">{(textAnalysis.readability?.fleschScore || 0).toFixed(0)}</div>
                <div className="text-xs text-green-600">Readability</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-green-900">{(textAnalysis.languageDetection?.confidence || 0).toFixed(2)}</div>
                <div className="text-xs text-green-600">Lang Conf.</div>
              </div>
            </div>
            
            {/* Language Detection */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Detected: {(textAnalysis.languageDetection?.language || 'unknown').toUpperCase()}</span>
                <span className="text-green-600">({textAnalysis.languageDetection?.script || 'Unknown'})</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Level: {textAnalysis.readability?.readingLevel || 'Unknown'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Mode Selector */}
        <div className="flex items-center space-x-2 p-4 bg-gray-50 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setKeyboardMode('letters')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              keyboardMode === 'letters'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Letters
          </button>
          
          {currentLayout.numbers && (
            <button
              onClick={() => setKeyboardMode('numbers')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                keyboardMode === 'numbers'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Numbers
            </button>
          )}
          
          {currentLayout.vowels && (
            <button
              onClick={() => setKeyboardMode('vowels')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                keyboardMode === 'vowels'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Vowels
            </button>
          )}
          
          {currentLayout.matras && (
            <button
              onClick={() => setKeyboardMode('matras')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                keyboardMode === 'matras'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Matras
            </button>
          )}
          
          {currentLayout.symbols && (
            <button
              onClick={() => setKeyboardMode('symbols')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                keyboardMode === 'symbols'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Symbols
            </button>
          )}
        </div>

        {/* Keyboard Layout */}
        <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
          {keyboardMode === 'letters' && currentLayout.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center space-x-1">
              {row.map((key) => renderKey(key))}
            </div>
          ))}
          
          {keyboardMode === 'numbers' && currentLayout.numbers && (
            <div className="flex justify-center space-x-1 flex-wrap">
              {currentLayout.numbers.map((key) => renderKey(key))}
            </div>
          )}
          
          {keyboardMode === 'vowels' && currentLayout.vowels && (
            <div className="grid grid-cols-6 gap-2">
              {currentLayout.vowels.map((key) => renderKey(key))}
            </div>
          )}
          
          {keyboardMode === 'matras' && currentLayout.matras && (
            <div className="grid grid-cols-6 gap-2">
              {currentLayout.matras.map((key) => renderKey(key))}
            </div>
          )}
          
          {keyboardMode === 'symbols' && currentLayout.symbols && (
            <div className="grid grid-cols-6 gap-2">
              {currentLayout.symbols.map((key) => renderKey(key))}
            </div>
          )}
          
          {/* Special Keys Row */}
          <div className="flex justify-center space-x-2 pt-4 border-t border-gray-200">
            {currentLanguage !== 'en' && (
              <button
                onClick={() => setIsShiftPressed(!isShiftPressed)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isShiftPressed
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Shift
              </button>
            )}
            
            {renderSpecialKey('backspace', <Delete className="h-5 w-5" />, 'flex-shrink-0')}
            {renderSpecialKey('space', <Space className="h-5 w-5" />, 'flex-1 max-w-xs')}
            {renderSpecialKey('enter', <ArrowLeft className="h-5 w-5" />, 'flex-shrink-0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;