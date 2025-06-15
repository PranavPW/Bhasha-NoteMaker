import React, { useState, useRef, useEffect } from 'react';
import { Save, Download, Mail, Calculator, Type, Eye, EyeOff, Keyboard, Zap, CheckCircle, AlertCircle, Brain, TrendingUp } from 'lucide-react';
import { Note } from '../types/Note';
import { getLanguageByCode, getTranslation } from '../utils/languages';
import { exportToPDF, exportToWord, shareByEmail } from '../utils/exportUtils';
import { analyzeTextComprehensive, detectLanguage, type TextAnalysisResult } from '../utils/indicNLP';
import LanguageSelector from './LanguageSelector';
import LanguageToolbar from './LanguageToolbar';
import MathToolbar from './MathToolbar';
import MathRenderer from './MathRenderer';
import VirtualKeyboard from './VirtualKeyboard';

interface NoteEditorProps {
  note: Note | null;
  onSave: (note: Note) => void;
  currentLanguage: string;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ note, onSave, currentLanguage }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState(currentLanguage);
  const [showMathToolbar, setShowMathToolbar] = useState(false);
  const [showLanguageToolbar, setShowLanguageToolbar] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [textAnalysis, setTextAnalysis] = useState<TextAnalysisResult | null>(null);
  const [showNlpPanel, setShowNlpPanel] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const selectedLanguage = getLanguageByCode(language);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setLanguage(note.language);
    } else {
      setTitle('');
      setContent('');
      setLanguage(currentLanguage);
    }
  }, [note, currentLanguage]);

  // Enhanced NLP analysis with comprehensive features
  useEffect(() => {
    if (content && content.length > 20 && ['hi', 'mr', 'bn', 'te', 'ta', 'gu', 'kn', 'ml', 'ur', 'pa', 'or'].includes(language)) {
      const debounceTimer = setTimeout(() => {
        try {
          const analysis = analyzeTextComprehensive(content, language);
          setTextAnalysis(analysis);
        } catch (error) {
          console.error('Enhanced NLP Analysis error:', error);
          setTextAnalysis(null);
        }
      }, 1500);
      
      return () => clearTimeout(debounceTimer);
    } else {
      setTextAnalysis(null);
    }
  }, [content, language]);

  const handleSave = () => {
    const now = new Date();
    const noteToSave: Note = {
      id: note?.id || Date.now().toString(),
      title: title || getTranslation('untitledNote', currentLanguage),
      content,
      language,
      createdAt: note?.createdAt || now,
      updatedAt: now,
      tags: [],
      hasMath: content.includes('$')
    };
    
    onSave(noteToSave);
  };

  const handleInsertText = (text: string) => {
    if (contentRef.current) {
      const start = contentRef.current.selectionStart;
      const end = contentRef.current.selectionEnd;
      const newContent = content.substring(0, start) + text + content.substring(end);
      setContent(newContent);
      
      // Reset cursor position
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.focus();
          contentRef.current.setSelectionRange(start + text.length, start + text.length);
        }
      }, 0);
    }
  };

  const handleVirtualKeyboardInput = (inputText: string) => {
    if (inputText === '\b') {
      // Handle backspace
      const start = Math.max(0, cursorPosition - 1);
      const newContent = content.slice(0, start) + content.slice(cursorPosition);
      setContent(newContent);
      setCursorPosition(start);
    } else {
      // Handle regular text input
      const newContent = content.slice(0, cursorPosition) + inputText + content.slice(cursorPosition);
      setContent(newContent);
      setCursorPosition(cursorPosition + inputText.length);
    }
  };

  const handleInsertMath = (latex: string) => {
    const mathText = latex.includes('{}') ? latex : `$${latex}$`;
    handleInsertText(mathText);
  };

  const handleCursorPositionChange = () => {
    if (contentRef.current) {
      setCursorPosition(contentRef.current.selectionStart || 0);
    }
  };

  const handleExport = async (type: 'pdf' | 'word' | 'email') => {
    if (!note && !title && !content) return;
    
    setIsExporting(true);
    try {
      const noteToExport: Note = {
        id: note?.id || 'temp',
        title: title || getTranslation('untitledNote', currentLanguage),
        content,
        language,
        createdAt: note?.createdAt || new Date(),
        updatedAt: new Date(),
        tags: [],
        hasMath: content.includes('$')
      };

      switch (type) {
        case 'pdf':
          await exportToPDF(noteToExport);
          break;
        case 'word':
          exportToWord(noteToExport);
          break;
        case 'email':
          shareByEmail(noteToExport);
          break;
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Editor Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowLanguageToolbar(!showLanguageToolbar)}
                className={`p-2 rounded-lg transition-colors ${
                  showLanguageToolbar
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Language Helpers"
              >
                <Type className="h-4 w-4" />
              </button>
              <button
                onClick={() => setShowMathToolbar(!showMathToolbar)}
                className={`p-2 rounded-lg transition-colors ${
                  showMathToolbar
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Math Toolbar"
              >
                <Calculator className="h-4 w-4" />
              </button>
              <button
                onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
                className={`p-2 rounded-lg transition-colors ${
                  showVirtualKeyboard
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Enhanced Virtual Keyboard"
              >
                <Keyboard className="h-4 w-4" />
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`p-2 rounded-lg transition-colors ${
                  showPreview
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Toggle Preview"
              >
                {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              {textAnalysis && (
                <button
                  onClick={() => setShowNlpPanel(!showNlpPanel)}
                  className={`p-2 rounded-lg transition-colors ${
                    showNlpPanel
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="Enhanced NLP Analysis"
                >
                  <Brain className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleExport('pdf')}
                disabled={isExporting}
                className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors disabled:opacity-50"
                title="Export PDF"
              >
                PDF
              </button>
              <button
                onClick={() => handleExport('word')}
                disabled={isExporting}
                className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
                title="Export Word"
              >
                Word
              </button>
              <button
                onClick={() => handleExport('email')}
                disabled={isExporting}
                className="p-1.5 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors disabled:opacity-50"
                title="Email Share"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>{getTranslation('save', currentLanguage)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toolbars */}
      <div className="p-4 space-y-2">
        <LanguageToolbar
          language={language}
          onInsertText={handleInsertText}
        />
        <MathToolbar
          onInsertMath={handleInsertMath}
          isVisible={showMathToolbar}
        />
        
        {/* Enhanced NLP Analysis Panel */}
        {showNlpPanel && textAnalysis && (
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6 fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-5 w-5 text-orange-600" />
              <span className="text-lg font-semibold text-orange-700">Enhanced Indic NLP Analysis</span>
              <Zap className="h-4 w-4 text-yellow-500" />
            </div>
            
            {/* Comprehensive Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-orange-100">
                <div className="text-2xl font-bold text-orange-900">{textAnalysis.stats.wordCount}</div>
                <div className="text-xs text-orange-600 font-medium">Words</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-orange-100">
                <div className="text-2xl font-bold text-orange-900">{textAnalysis.stats.sentenceCount}</div>
                <div className="text-xs text-orange-600 font-medium">Sentences</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-orange-100">
                <div className="text-2xl font-bold text-orange-900">{textAnalysis.stats.uniqueWords}</div>
                <div className="text-xs text-orange-600 font-medium">Unique Words</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-orange-100">
                <div className="text-2xl font-bold text-orange-900">{(textAnalysis.stats.languageComplexity * 100).toFixed(1)}%</div>
                <div className="text-xs text-orange-600 font-medium">Complexity</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-orange-100">
                <div className="text-2xl font-bold text-orange-900">{textAnalysis.readability.fleschScore.toFixed(0)}</div>
                <div className="text-xs text-orange-600 font-medium">Readability</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-orange-100">
                <div className="text-2xl font-bold text-orange-900">{(textAnalysis.stats.vocabularyRichness * 100).toFixed(1)}</div>
                <div className="text-xs text-orange-600 font-medium">Vocab Rich.</div>
              </div>
            </div>
            
            {/* Language Detection & Readability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-4 border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Language Detection
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Primary:</span>
                    <span className="font-medium text-orange-700">
                      {textAnalysis.languageDetection.language.toUpperCase()} 
                      ({(textAnalysis.languageDetection.confidence * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Script:</span>
                    <span className="font-medium text-orange-700">{textAnalysis.languageDetection.script}</span>
                  </div>
                  {textAnalysis.languageDetection.alternativeLanguages.length > 0 && (
                    <div className="text-xs text-gray-500 mt-2">
                      <span className="font-medium">Alternatives:</span> {
                        textAnalysis.languageDetection.alternativeLanguages
                          .slice(0, 2)
                          .map(alt => `${alt.language.toUpperCase()} (${(alt.confidence * 100).toFixed(0)}%)`)
                          .join(', ')
                      }
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Readability Analysis
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Level:</span>
                    <span className="font-medium text-orange-700">{textAnalysis.readability.readingLevel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg. Sentence:</span>
                    <span className="font-medium text-orange-700">{textAnalysis.readability.averageSentenceLength.toFixed(1)} words</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Complex Words:</span>
                    <span className="font-medium text-orange-700">{textAnalysis.readability.complexWordPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Autocorrect Suggestions */}
            {textAnalysis.autocorrectSuggestions.length > 0 && (
              <div className="border-t border-orange-200 pt-4">
                <div className="text-sm font-semibold text-orange-700 mb-3 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Smart Autocorrect Suggestions ({textAnalysis.autocorrectSuggestions.length} found):
                </div>
                <div className="space-y-3 max-h-40 overflow-y-auto">
                  {textAnalysis.autocorrectSuggestions.slice(0, 5).map((suggestion, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-orange-100 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium text-gray-900" style={{ fontFamily: selectedLanguage?.fontFamily }}>
                            {suggestion.word}
                          </span>
                          <span className="text-gray-500">→</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {(suggestion.confidence * 100).toFixed(0)}% confidence
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {suggestion.suggestions.slice(0, 3).map((sug, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                            style={{ fontFamily: selectedLanguage?.fontFamily }}
                          >
                            {sug}
                          </span>
                        ))}
                      </div>
                      {suggestion.morphology && (
                        <div className="text-xs text-gray-500 mt-2 bg-gray-50 rounded p-2">
                          <span className="font-medium">Root:</span> {suggestion.morphology.root} | 
                          <span className="font-medium"> Type:</span> {suggestion.morphology.partOfSpeech}
                          {suggestion.morphology.gender && (
                            <span> | <span className="font-medium">Gender:</span> {suggestion.morphology.gender}</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Morphological Analysis */}
            {textAnalysis.morphology.length > 0 && (
              <div className="border-t border-orange-200 pt-4 mt-4">
                <div className="text-sm font-semibold text-orange-700 mb-3">
                  Morphological Analysis ({textAnalysis.morphology.length} analyzed):
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-32 overflow-y-auto">
                  {textAnalysis.morphology.slice(0, 6).map((morph, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-orange-100 text-sm">
                      <div className="font-medium text-gray-900" style={{ fontFamily: selectedLanguage?.fontFamily }}>
                        Root: {morph.root}
                      </div>
                      <div className="text-gray-600">Type: {morph.partOfSpeech}</div>
                      {morph.inflections.length > 0 && (
                        <div className="text-xs text-gray-500 mt-1">
                          Forms: {morph.inflections.slice(0, 3).join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Editor Content */}
      <div className="flex-1 p-4">
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={getTranslation('title', currentLanguage)}
            className="w-full text-2xl font-bold border-none outline-none bg-transparent placeholder-gray-400"
            style={{
              fontFamily: selectedLanguage?.fontFamily,
              direction: selectedLanguage?.rtl ? 'rtl' : 'ltr'
            }}
          />
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 h-96">
          {/* Editor */}
          <div className={showPreview ? 'block' : 'lg:col-span-2'}>
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                handleCursorPositionChange();
              }}
              onSelect={handleCursorPositionChange}
              onClick={handleCursorPositionChange}
              onKeyUp={handleCursorPositionChange}
              placeholder={getTranslation('content', currentLanguage)}
              className="w-full h-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{
                
                fontFamily: selectedLanguage?.fontFamily,
                direction: selectedLanguage?.rtl ? 'rtl' : 'ltr',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            />
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-y-auto">
              <div className="text-sm text-gray-500 mb-2">Preview</div>
              <div
                style={{
                  fontFamily: selectedLanguage?.fontFamily,
                  direction: selectedLanguage?.rtl ? 'rtl' : 'ltr',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {content ? (
                  <MathRenderer content={content} />
                ) : (
                  <div className="text-gray-400 italic">
                    {getTranslation('content', currentLanguage)}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Virtual Keyboard */}
      <VirtualKeyboard
        isVisible={showVirtualKeyboard}
        onClose={() => setShowVirtualKeyboard(false)}
        onTextInput={handleVirtualKeyboardInput}
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />

      {isExporting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span>Exporting...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteEditor;