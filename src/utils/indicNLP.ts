// Enhanced Indic NLP Library Integration
// Comprehensive text processing features for Indian languages

interface TokenizeResult {
  words: string[];
  sentences: string[];
  wordBoundaries: Array<{ start: number; end: number; word: string }>;
  sentenceBoundaries: Array<{ start: number; end: number; sentence: string }>;
}

interface NormalizationResult {
  normalized: string;
  changes: Array<{
    original: string;
    normalized: string;
    position: number;
    type: 'unicode' | 'spelling' | 'punctuation' | 'whitespace';
  }>;
}

interface AutocorrectSuggestion {
  word: string;
  suggestions: string[];
  confidence: number;
  context?: string;
  morphology?: MorphologyInfo;
}

interface MorphologyInfo {
  root: string;
  inflections: string[];
  partOfSpeech: string;
  gender?: string;
  number?: string;
  case?: string;
}

interface LanguageDetectionResult {
  language: string;
  confidence: number;
  script: string;
  alternativeLanguages: Array<{ language: string; confidence: number }>;
}

interface TextAnalysisResult {
  tokenized: TokenizeResult;
  normalized: NormalizationResult;
  autocorrectSuggestions: AutocorrectSuggestion[];
  languageDetection: LanguageDetectionResult;
  morphology: MorphologyInfo[];
  stats: TextStatistics;
  readability: ReadabilityMetrics;
  sentiment?: SentimentAnalysis;
}

interface TextStatistics {
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  paragraphCount: number;
  averageWordsPerSentence: number;
  averageCharactersPerWord: number;
  uniqueWords: number;
  languageComplexity: number;
  vocabularyRichness: number;
  typeTokenRatio: number;
}

interface ReadabilityMetrics {
  fleschScore: number;
  readingLevel: string;
  averageSentenceLength: number;
  averageSyllablesPerWord: number;
  complexWordPercentage: number;
}

interface SentimentAnalysis {
  polarity: number; // -1 to 1
  subjectivity: number; // 0 to 1
  emotion: string;
  confidence: number;
}

// Enhanced language patterns with comprehensive Unicode ranges
const enhancedLanguagePatterns = {
  hi: {
    unicodeRange: /[\u0900-\u097F]/g,
    wordBoundary: /[\s\u0964\u0965।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?\u0964\u0965]+/,
    vowels: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'ऋ', 'ॠ', 'ऌ', 'ॡ'],
    consonants: ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'],
    matras: ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'ॢ', 'ॣ', 'े', 'ै', 'ो', 'ौ', '्'],
    numerals: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    punctuation: ['।', '॥', '॰'],
    conjuncts: ['क्ष', 'त्र', 'ज्ञ', 'श्र'],
    script: 'Devanagari'
  },
  mr: {
    unicodeRange: /[\u0900-\u097F]/g,
    wordBoundary: /[\s\u0964\u0965।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?\u0964\u0965]+/,
    vowels: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'ऋ', 'ॠ'],
    consonants: ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'],
    matras: ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'े', 'ै', 'ो', 'ौ', '्'],
    numerals: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    punctuation: ['।', '॥', '॰'],
    conjuncts: ['क्ष', 'त्र', 'ज्ञ', 'श्र'],
    script: 'Devanagari'
  },
  bn: {
    unicodeRange: /[\u0980-\u09FF]/g,
    wordBoundary: /[\s।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?]+/,
    vowels: ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'ৠ', 'ঌ', 'ৡ', 'এ', 'ঐ', 'ও', 'ঔ'],
    consonants: ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ'],
    matras: ['া', 'ি', 'ী', 'ু', 'ূ', 'ৃ', 'ৄ', 'ৢ', 'ৣ', 'ে', 'ৈ', 'ো', 'ৌ', '্'],
    numerals: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
    punctuation: ['।', '॥'],
    conjuncts: ['ক্ষ', 'জ্ঞ'],
    script: 'Bengali'
  },
  te: {
    unicodeRange: /[\u0C00-\u0C7F]/g,
    wordBoundary: /[\s।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?]+/,
    vowels: ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఌ', 'ౡ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ'],
    consonants: ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'శ', 'ష', 'స', 'హ', 'ళ', 'ఱ'],
    matras: ['ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ', '్'],
    numerals: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'],
    punctuation: ['।', '॥'],
    conjuncts: ['క్ష', 'త్ర', 'జ్ఞ'],
    script: 'Telugu'
  },
  ta: {
    unicodeRange: /[\u0B80-\u0BFF]/g,
    wordBoundary: /[\s।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?]+/,
    vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'],
    consonants: ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன', 'ஜ', 'ஶ', 'ஷ', 'ஸ', 'ஹ'],
    matras: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்'],
    numerals: ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'],
    punctuation: ['।', '॥'],
    conjuncts: ['க்ஷ'],
    script: 'Tamil'
  },
  gu: {
    unicodeRange: /[\u0A80-\u0AFF]/g,
    wordBoundary: /[\s\u0964\u0965।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?\u0964\u0965]+/,
    vowels: ['અ', 'આ', 'ઇ', 'ઈ', 'ઉ', 'ઊ', 'ઋ', 'ૠ', 'ઌ', 'ૡ', 'એ', 'ઐ', 'ઓ', 'ઔ'],
    consonants: ['ક', 'ખ', 'ગ', 'ઘ', 'ઙ', 'ચ', 'છ', 'જ', 'ઝ', 'ઞ', 'ટ', 'ઠ', 'ડ', 'ઢ', 'ણ', 'ત', 'થ', 'દ', 'ધ', 'ન', 'પ', 'ફ', 'બ', 'ભ', 'મ', 'ય', 'ર', 'લ', 'વ', 'શ', 'ષ', 'સ', 'હ', 'ળ'],
    matras: ['ા', 'િ', 'ી', 'ુ', 'ૂ', 'ૃ', 'ૄ', 'ૢ', 'ૣ', 'ે', 'ૈ', 'ો', 'ૌ', '્'],
    numerals: ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'],
    punctuation: ['।', '॥', '॰'],
    conjuncts: ['ક્ષ', 'ત્ર', 'જ્ઞ'],
    script: 'Gujarati'
  },
  kn: {
    unicodeRange: /[\u0C80-\u0CFF]/g,
    wordBoundary: /[\s।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?]+/,
    vowels: ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ೠ', 'ಌ', 'ೡ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ'],
    consonants: ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ', 'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ', 'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ', 'ಱ'],
    matras: ['ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೃ', 'ೄ', 'ೆ', 'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ೌ', '್'],
    numerals: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
    punctuation: ['।', '॥'],
    conjuncts: ['ಕ್ಷ', 'ತ್ರ', 'ಜ್ಞ'],
    script: 'Kannada'
  },
  ml: {
    unicodeRange: /[\u0D00-\u0D7F]/g,
    wordBoundary: /[\s।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?]+/,
    vowels: ['അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ', 'ഋ', 'ൠ', 'ഌ', 'ൡ', 'എ', 'ഏ', 'ഐ', 'ഒ', 'ഓ', 'ഔ'],
    consonants: ['ക', 'ഖ', 'ഗ', 'ഘ', 'ങ', 'ച', 'ഛ', 'ജ', 'ഝ', 'ഞ', 'ട', 'ഠ', 'ഡ', 'ഢ', 'ണ', 'ത', 'ഥ', 'ദ', 'ധ', 'ന', 'പ', 'ഫ', 'ബ', 'ഭ', 'മ', 'യ', 'ര', 'ല', 'വ', 'ശ', 'ഷ', 'സ', 'ഹ', 'ള', 'ഴ', 'റ'],
    matras: ['ാ', 'ി', 'ീ', 'ു', 'ൂ', 'ൃ', 'ൄ', 'െ', 'േ', 'ൈ', 'ൊ', 'ോ', 'ൌ', '്'],
    numerals: ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'],
    punctuation: ['।', '॥'],
    conjuncts: ['ക്ഷ'],
    script: 'Malayalam'
  },
  ur: {
    unicodeRange: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g,
    wordBoundary: /[\s\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000۔؍؎؏؞؟]+/,
    sentenceBoundary: /[۔؍؎؏؞؟\.\!\?]+/,
    vowels: ['ا', 'آ', 'ع', 'ی', 'و', 'ے'],
    consonants: ['ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'ں', 'ہ', 'ھ', 'ء'],
    numerals: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
    punctuation: ['۔', '؍', '؎', '؏', '؞', '؟', '٪', '٭'],
    script: 'Arabic'
  },
  pa: {
    unicodeRange: /[\u0A00-\u0A7F]/g,
    wordBoundary: /[\s\u0964\u0965।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?\u0964\u0965]+/,
    vowels: ['ਅ', 'ਆ', 'ਇ', 'ਈ', 'ਉ', 'ਊ', 'ਏ', 'ਐ', 'ਓ', 'ਔ'],
    consonants: ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਸ', 'ਹ', 'ਲ਼', 'ਸ਼', 'ਖ਼', 'ਗ਼', 'ਜ਼', 'ਫ਼'],
    matras: ['ਾ', 'ਿ', 'ੀ', 'ੁ', 'ੂ', 'ੇ', 'ੈ', 'ੋ', 'ੌ', '੍'],
    numerals: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'],
    punctuation: ['।', '॥', '॰'],
    script: 'Gurmukhi'
  },
  or: {
    unicodeRange: /[\u0B00-\u0B7F]/g,
    wordBoundary: /[\s।॥\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]+/,
    sentenceBoundary: /[।॥\.\!\?]+/,
    vowels: ['ଅ', 'ଆ', 'ଇ', 'ଈ', 'ଉ', 'ଊ', 'ଋ', 'ୠ', 'ଌ', 'ୡ', 'ଏ', 'ଐ', 'ଓ', 'ଔ'],
    consonants: ['କ', 'ଖ', 'ଗ', 'ଘ', 'ଙ', 'ଚ', 'ଛ', 'ଜ', 'ଝ', 'ଞ', 'ଟ', 'ଠ', 'ଡ', 'ଢ', 'ଣ', 'ତ', 'ଥ', 'ଦ', 'ଧ', 'ନ', 'ପ', 'ଫ', 'ବ', 'ଭ', 'ମ', 'ଯ', 'ର', 'ଲ', 'ଵ', 'ଶ', 'ଷ', 'ସ', 'ହ', 'ଳ', 'ଡ଼', 'ଢ଼', 'ୟ'],
    matras: ['ା', 'ି', 'ୀ', 'ୁ', 'ୂ', 'ୃ', 'ୄ', 'େ', 'ୈ', 'ୋ', 'ୌ', '୍'],
    numerals: ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'],
    punctuation: ['।', '॥'],
    script: 'Odia'
  }
};

// Enhanced word dictionaries with morphological information
const enhancedCommonWords = {
  hi: {
    words: [
      // Basic words
      'और', 'का', 'एक', 'है', 'के', 'को', 'से', 'में', 'पर', 'यह', 'वह', 'जो', 'कि', 'गया', 'था', 'हो', 'गए', 'कर', 'दिया', 'होगा',
      // Academic terms
      'गणित', 'विज्ञान', 'अध्ययन', 'शिक्षा', 'विद्यालय', 'छात्र', 'अध्यापक', 'पुस्तक', 'लेख', 'प्रश्न', 'उत्तर', 'परीक्षा', 'अनुसंधान', 'सिद्धांत', 'प्रयोग',
      // Common verbs
      'करना', 'होना', 'जाना', 'आना', 'देना', 'लेना', 'कहना', 'देखना', 'सुनना', 'पढ़ना', 'लिखना', 'समझना', 'सीखना', 'सिखाना',
      // Adjectives
      'अच्छा', 'बुरा', 'बड़ा', 'छोटा', 'नया', 'पुराना', 'सही', 'गलत', 'आसान', 'कठिन', 'महत्वपूर्ण', 'आवश्यक'
    ],
    morphology: {
      'करना': { root: 'कर', inflections: ['करता', 'करती', 'करते', 'किया', 'की', 'किए'], partOfSpeech: 'verb' },
      'अच्छा': { root: 'अच्छ', inflections: ['अच्छी', 'अच्छे'], partOfSpeech: 'adjective', gender: 'masculine' }
    }
  },
  mr: {
    words: [
      'आणि', 'चा', 'एक', 'आहे', 'च्या', 'ला', 'पासून', 'मध्ये', 'वर', 'हे', 'ते', 'जे', 'की', 'गेला', 'होता', 'होणे', 'गेले', 'करणे', 'दिले', 'होईल',
      'गणित', 'विज्ञान', 'अभ्यास', 'शिक्षण', 'शाळा', 'विद्यार्थी', 'शिक्षक', 'पुस्तक', 'लेख', 'प्रश्न', 'उत्तर', 'परीक्षा', 'संशोधन', 'सिद्धांत', 'प्रयोग'
    ],
    morphology: {
      'करणे': { root: 'कर', inflections: ['करतो', 'करते', 'करून'], partOfSpeech: 'verb' }
    }
  },
  bn: {
    words: [
      'এবং', 'এর', 'একটি', 'আছে', 'এর', 'কে', 'থেকে', 'মধ্যে', 'উপর', 'এই', 'সেই', 'যে', 'যা', 'গিয়েছিল', 'ছিল', 'হতে', 'গিয়েছে', 'করা', 'দিয়েছে', 'হবে',
      'গণিত', 'বিজ্ঞান', 'অধ্যয়ন', 'শিক্ষা', 'বিদ্যালয়', 'ছাত্র', 'শিক্ষক', 'বই', 'প্রবন্ধ', 'প্রশ্ন', 'উত্তর', 'পরীক্ষা', 'গবেষণা', 'তত্ত্ব', 'পরীক্ষা'
    ],
    morphology: {
      'করা': { root: 'কর', inflections: ['করি', 'করে', 'করেছে'], partOfSpeech: 'verb' }
    }
  },
  te: {
    words: [
      'మరియు', 'యొక్క', 'ఒక', 'ఉంది', 'యొక్క', 'కు', 'నుండి', 'లో', 'మీద', 'ఇది', 'అది', 'ఏది', 'అని', 'వెళ్ళింది', 'ఉంది', 'అవ్వడం', 'వెళ్ళారు', 'చేయడం', 'ఇచ్చింది', 'అవుతుంది',
      'గణితం', 'విజ్ఞానం', 'అధ్యయనం', 'విద్య', 'పాఠశాల', 'విద్యార్థి', 'ఉపాధ్యాయుడు', 'పుస్తకం', 'వ్యాసం', 'ప్రశ్న', 'సమాధానం', 'పరీక్ష', 'పరిశోధన', 'సిద్ధాంతం', 'ప్రయోగం'
    ],
    morphology: {
      'చేయడం': { root: 'చేయ', inflections: ['చేస్తాను', 'చేస్తావు', 'చేస్తాడు'], partOfSpeech: 'verb' }
    }
  },
  ta: {
    words: [
      'மற்றும்', 'இன்', 'ஒரு', 'உள்ளது', 'இன்', 'க்கு', 'இருந்து', 'இல்', 'மீது', 'இது', 'அது', 'எது', 'என்று', 'சென்றது', 'இருந்தது', 'ஆக', 'சென்றனர்', 'செய்ய', 'கொடுத்தது', 'ஆகும்',
      'கணிதம்', 'அறிவியல்', 'ஆய்வு', 'கல்வி', 'பள்ளி', 'மாணவர்', 'ஆசிரியர்', 'புத்தகம்', 'கட்டுரை', 'கேள்வி', 'பதில்', 'தேர்வு', 'ஆராய்ச்சி', 'கோட்பாடு', 'சோதனை'
    ],
    morphology: {
      'செய்ய': { root: 'செய்', inflections: ['செய்கிறேன்', 'செய்கிறாய்', 'செய்கிறான்'], partOfSpeech: 'verb' }
    }
  },
  gu: {
    words: [
      'અને', 'ના', 'એક', 'છે', 'ના', 'ને', 'થી', 'માં', 'પર', 'આ', 'તે', 'જે', 'કે', 'ગયો', 'હતો', 'થવું', 'ગયા', 'કરવું', 'આપ્યું', 'થશે',
      'ગણિત', 'વિજ્ઞાન', 'અભ્યાસ', 'શિક્ષણ', 'શાળા', 'વિદ્યાર્થી', 'શિક્ષક', 'પુસ્તક', 'લેખ', 'પ્રશ્ન', 'જવાબ', 'પરીક્ષા', 'સંશોધન', 'સિદ્ધાંત', 'પ્રયોગ'
    ],
    morphology: {
      'કરવું': { root: 'કર', inflections: ['કરું', 'કરે', 'કર્યું'], partOfSpeech: 'verb' }
    }
  },
  kn: {
    words: [
      'ಮತ್ತು', 'ದ', 'ಒಂದು', 'ಇದೆ', 'ದ', 'ಗೆ', 'ಇಂದ', 'ನಲ್ಲಿ', 'ಮೇಲೆ', 'ಇದು', 'ಅದು', 'ಯಾವುದು', 'ಎಂದು', 'ಹೋಗಿದೆ', 'ಇತ್ತು', 'ಆಗುವುದು', 'ಹೋದರು', 'ಮಾಡುವುದು', 'ಕೊಟ್ಟಿತು', 'ಆಗುತ್ತದೆ',
      'ಗಣಿತ', 'ವಿಜ್ಞಾನ', 'ಅಧ್ಯಯನ', 'ಶಿಕ್ಷಣ', 'ಶಾಲೆ', 'ವಿದ್ಯಾರ್ಥಿ', 'ಶಿಕ್ಷಕ', 'ಪುಸ್ತಕ', 'ಲೇಖನ', 'ಪ್ರಶ್ನೆ', 'ಉತ್ತರ', 'ಪರೀಕ್ಷೆ', 'ಸಂಶೋಧನೆ', 'ಸಿದ್ಧಾಂತ', 'ಪ್ರಯೋಗ'
    ],
    morphology: {
      'ಮಾಡುವುದು': { root: 'ಮಾಡ', inflections: ['ಮಾಡುತ್ತೇನೆ', 'ಮಾಡುತ್ತೀರಿ', 'ಮಾಡುತ್ತಾರೆ'], partOfSpeech: 'verb' }
    }
  },
  ml: {
    words: [
      'ഒപ്പം', 'ന്റെ', 'ഒരു', 'ഉണ്ട്', 'ന്റെ', 'ക്ക്', 'നിന്ന്', 'ൽ', 'മേൽ', 'ഇത്', 'അത്', 'ഏത്', 'എന്ന്', 'പോയി', 'ആയിരുന്നു', 'ആകുക', 'പോയി', 'ചെയ്യുക', 'കൊടുത്തു', 'ആകും',
      'ഗണിതം', 'ശാസ്ത്രം', 'പഠനം', 'വിദ്യാഭ്യാസം', 'സ്കൂൾ', 'വിദ്യാർത്ഥി', 'അധ്യാപകൻ', 'പുസ്തകം', 'ലേഖനം', 'ചോദ്യം', 'ഉത്തരം', 'പരീക്ഷ', 'ഗവേഷണം', 'സിദ്ധാന്തം', 'പരീക്ഷണം'
    ],
    morphology: {
      'ചെയ്യുക': { root: 'ചെയ്', inflections: ['ചെയ്യുന്നു', 'ചെയ്തു', 'ചെയ്യും'], partOfSpeech: 'verb' }
    }
  },
  ur: {
    words: [
      'اور', 'کا', 'ایک', 'ہے', 'کے', 'کو', 'سے', 'میں', 'پر', 'یہ', 'وہ', 'جو', 'کہ', 'گیا', 'تھا', 'ہو', 'گئے', 'کر', 'دیا', 'ہوگا',
      'ریاضی', 'سائنس', 'مطالعہ', 'تعلیم', 'اسکول', 'طالب علم', 'استاد', 'کتاب', 'مضمون', 'سوال', 'جواب', 'امتحان', 'تحقیق', 'نظریہ', 'تجربہ'
    ],
    morphology: {
      'کرنا': { root: 'کر', inflections: ['کرتا', 'کرتی', 'کرتے'], partOfSpeech: 'verb' }
    }
  },
  pa: {
    words: [
      'ਅਤੇ', 'ਦਾ', 'ਇੱਕ', 'ਹੈ', 'ਦੇ', 'ਨੂੰ', 'ਤੋਂ', 'ਵਿੱਚ', 'ਉੱਤੇ', 'ਇਹ', 'ਉਹ', 'ਜੋ', 'ਕਿ', 'ਗਿਆ', 'ਸੀ', 'ਹੋ', 'ਗਏ', 'ਕਰ', 'ਦਿੱਤਾ', 'ਹੋਵੇਗਾ',
      'ਗਣਿਤ', 'ਵਿਗਿਆਨ', 'ਅਧਿਐਨ', 'ਸਿੱਖਿਆ', 'ਸਕੂਲ', 'ਵਿਦਿਆਰਥੀ', 'ਅਧਿਆਪਕ', 'ਕਿਤਾਬ', 'ਲੇਖ', 'ਸਵਾਲ', 'ਜਵਾਬ', 'ਪ੍ਰੀਖਿਆ', 'ਖੋਜ', 'ਸਿਧਾਂਤ', 'ਪ੍ਰਯੋਗ'
    ],
    morphology: {
      'ਕਰਨਾ': { root: 'ਕਰ', inflections: ['ਕਰਦਾ', 'ਕਰਦੀ', 'ਕਰਦੇ'], partOfSpeech: 'verb' }
    }
  },
  or: {
    words: [
      'ଏବଂ', 'ର', 'ଏକ', 'ଅଛି', 'ର', 'କୁ', 'ରୁ', 'ରେ', 'ଉପରେ', 'ଏହା', 'ସେହା', 'ଯାହା', 'ଯେ', 'ଗଲା', 'ଥିଲା', 'ହେବା', 'ଗଲେ', 'କରିବା', 'ଦେଲା', 'ହେବ',
      'ଗଣିତ', 'ବିଜ୍ଞାନ', 'ଅଧ୍ୟୟନ', 'ଶିକ୍ଷା', 'ବିଦ୍ୟାଳୟ', 'ଛାତ୍ର', 'ଶିକ୍ଷକ', 'ପୁସ୍ତକ', 'ପ୍ରବନ୍ଧ', 'ପ୍ରଶ୍ନ', 'ଉତ୍ତର', 'ପରୀକ୍ଷା', 'ଅନୁସନ୍ଧାନ', 'ସିଦ୍ଧାନ୍ତ', 'ପରୀକ୍ଷଣ'
    ],
    morphology: {
      'କରିବା': { root: 'କର', inflections: ['କରେ', 'କଲା', 'କରିବ'], partOfSpeech: 'verb' }
    }
  }
};

// Performance optimization with caching
const analysisCache = new Map<string, TextAnalysisResult>();
const maxCacheSize = 1000;

// Advanced tokenization with word boundaries
export const enhancedTokenizeWords = (text: string, language: string): TokenizeResult => {
  if (!text.trim()) return { words: [], sentences: [], wordBoundaries: [], sentenceBoundaries: [] };
  
  const pattern = enhancedLanguagePatterns[language as keyof typeof enhancedLanguagePatterns];
  if (!pattern) {
    // Fallback for unsupported languages
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const sentences = text.trim().split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    return {
      words,
      sentences,
      wordBoundaries: words.map((word, index) => ({ start: index, end: index + word.length, word })),
      sentenceBoundaries: sentences.map((sentence, index) => ({ start: index, end: index + sentence.length, sentence }))
    };
  }
  
  // Advanced word tokenization with boundaries
  const words: string[] = [];
  const wordBoundaries: Array<{ start: number; end: number; word: string }> = [];
  let wordMatch;
  let lastIndex = 0;
  
  const wordRegex = new RegExp(`[^${pattern.wordBoundary.source}]+`, 'g');
  while ((wordMatch = wordRegex.exec(text)) !== null) {
    const word = wordMatch[0];
    if (word.trim().length > 0) {
      words.push(word);
      wordBoundaries.push({
        start: wordMatch.index,
        end: wordMatch.index + word.length,
        word
      });
    }
  }
  
  // Advanced sentence tokenization
  const sentences: string[] = [];
  const sentenceBoundaries: Array<{ start: number; end: number; sentence: string }> = [];
  const sentenceRegex = new RegExp(`[^${pattern.sentenceBoundary.source}]+`, 'g');
  let sentenceMatch;
  
  while ((sentenceMatch = sentenceRegex.exec(text)) !== null) {
    const sentence = sentenceMatch[0].trim();
    if (sentence.length > 0) {
      sentences.push(sentence);
      sentenceBoundaries.push({
        start: sentenceMatch.index,
        end: sentenceMatch.index + sentence.length,
        sentence
      });
    }
  }
  
  return { words, sentences, wordBoundaries, sentenceBoundaries };
};

// Enhanced text normalization
export const enhancedNormalizeText = (text: string, language: string): NormalizationResult => {
  const changes: Array<{ original: string; normalized: string; position: number; type: 'unicode' | 'spelling' | 'punctuation' | 'whitespace' }> = [];
  let normalized = text;
  
  // Unicode normalization
  const unicodeNormalized = text.normalize('NFC');
  if (unicodeNormalized !== text) {
    changes.push({
      original: text,
      normalized: unicodeNormalized,
      position: 0,
      type: 'unicode'
    });
    normalized = unicodeNormalized;
  }
  
  // Whitespace normalization
  const whitespaceNormalized = normalized.replace(/\s+/g, ' ').trim();
  if (whitespaceNormalized !== normalized) {
    changes.push({
      original: normalized,
      normalized: whitespaceNormalized,
      position: 0,
      type: 'whitespace'
    });
    normalized = whitespaceNormalized;
  }
  
  // Language-specific normalization
  const pattern = enhancedLanguagePatterns[language as keyof typeof enhancedLanguagePatterns];
  if (pattern) {
    // Script-specific normalizations
    if (pattern.script === 'Devanagari') {
      // Normalize Devanagari variants
      normalized = normalized
        .replace(/क़/g, 'क')
        .replace(/ख़/g, 'ख')
        .replace(/ग़/g, 'ग')
        .replace(/ज़/g, 'ज')
        .replace(/फ़/g, 'फ')
        .replace(/य़/g, 'य');
    } else if (pattern.script === 'Bengali') {
      // Normalize Bengali variants
      normalized = normalized
        .replace(/ৎ/g, 'ত্')
        .replace(/ড়/g, 'র')
        .replace(/ঢ়/g, 'ঢ');
    } else if (pattern.script === 'Arabic') {
      // Normalize Arabic variants
      normalized = normalized
        .replace(/ي/g, 'ی')
        .replace(/ك/g, 'ک')
        .replace(/ة/g, 'ہ');
    }
  }
  
  return { normalized, changes };
};

// Enhanced autocorrect with morphological analysis
export const getEnhancedAutocorrectSuggestions = (word: string, language: string, context?: string): AutocorrectSuggestion => {
  const dictionary = enhancedCommonWords[language as keyof typeof enhancedCommonWords];
  
  if (!dictionary) {
    return { word, suggestions: [], confidence: 0 };
  }
  
  // Check if word exists in dictionary
  if (dictionary.words.includes(word)) {
    const morphology = dictionary.morphology?.[word];
    return {
      word,
      suggestions: [],
      confidence: 1.0,
      context,
      morphology
    };
  }
  
  // Calculate edit distance and find suggestions
  const suggestions = dictionary.words
    .map(dictWord => ({
      word: dictWord,
      distance: calculateEnhancedEditDistance(word, dictWord),
      morphology: dictionary.morphology?.[dictWord]
    }))
    .filter(item => item.distance <= Math.max(2, Math.floor(word.length * 0.3)))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);
  
  // Context-based scoring
  let contextBonus = 0;
  if (context && suggestions.length > 0) {
    // Simple context matching (can be enhanced with ML models)
    const contextWords = context.toLowerCase().split(/\s+/);
    suggestions.forEach(suggestion => {
      if (contextWords.some(cWord => cWord.includes(suggestion.word.toLowerCase()))) {
        contextBonus += 0.2;
      }
    });
  }
  
  const confidence = suggestions.length > 0 ? 
    Math.min(0.95, Math.max(0.1, (1 - (suggestions[0].distance / word.length)) + contextBonus)) : 0;
  
  return {
    word,
    suggestions: suggestions.map(s => s.word),
    confidence,
    context,
    morphology: suggestions[0]?.morphology
  };
};

// Enhanced edit distance with phonetic similarity
const calculateEnhancedEditDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }
  
  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const char1 = str1[i - 1];
      const char2 = str2[j - 1];
      
      let cost = char1 === char2 ? 0 : 1;
      
      // Phonetic similarity bonus for Indic scripts
      if (cost === 1) {
        cost = getPhoneticSimilarity(char1, char2);
      }
      
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,           // deletion
        matrix[j - 1][i] + 1,           // insertion
        matrix[j - 1][i - 1] + cost     // substitution
      );
    }
  }
  
  return matrix[str2.length][str1.length];
};

// Phonetic similarity for Indic characters
const getPhoneticSimilarity = (char1: string, char2: string): number => {
  // Simplified phonetic similarity - can be enhanced with proper phonetic rules
  const phoneticGroups = [
    ['क', 'ख', 'ग', 'घ'],  // Velar
    ['च', 'छ', 'ज', 'झ'],  // Palatal
    ['ट', 'ठ', 'ड', 'ढ'],  // Retroflex
    ['त', 'थ', 'द', 'ध'],  // Dental
    ['प', 'फ', 'ब', 'भ'],  // Labial
    ['अ', 'आ'], ['इ', 'ई'], ['उ', 'ऊ'], ['ए', 'ऐ'], ['ओ', 'औ']  // Vowels
  ];
  
  for (const group of phoneticGroups) {
    if (group.includes(char1) && group.includes(char2)) {
      return 0.5; // Similar sounds
    }
  }
  
  return 1; // Different sounds
};

// Language detection
export const detectLanguage = (text: string): LanguageDetectionResult => {
  const scores: { [key: string]: number } = {};
  
  // Count characters for each script
  Object.entries(enhancedLanguagePatterns).forEach(([lang, pattern]) => {
    const matches = text.match(pattern.unicodeRange) || [];
    scores[lang] = matches.length / text.length;
  });
  
  // Find the language with highest score
  const sortedScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .filter(([,score]) => score > 0);
  
  if (sortedScores.length === 0) {
    return {
      language: 'en',
      confidence: 0.5,
      script: 'Latin',
      alternativeLanguages: []
    };
  }
  
  const [topLanguage, topScore] = sortedScores[0];
  const pattern = enhancedLanguagePatterns[topLanguage as keyof typeof enhancedLanguagePatterns];
  
  return {
    language: topLanguage,
    confidence: Math.min(0.99, topScore * 2), // Boost confidence
    script: pattern.script,
    alternativeLanguages: sortedScores.slice(1, 4).map(([lang, score]) => ({
      language: lang,
      confidence: Math.min(0.99, score * 2)
    }))
  };
};

// Morphological analysis
export const analyzeMorphology = (words: string[], language: string): MorphologyInfo[] => {
  const dictionary = enhancedCommonWords[language as keyof typeof enhancedCommonWords];
  if (!dictionary?.morphology) return [];
  
  return words.map(word => {
    const morphInfo = dictionary.morphology[word];
    if (morphInfo) {
      return morphInfo;
    }
    
    // Basic morphological analysis for unknown words
    return {
      root: word,
      inflections: [],
      partOfSpeech: 'unknown'
    };
  }).filter(info => info.partOfSpeech !== 'unknown');
};

// Readability analysis
export const calculateReadability = (tokenized: TokenizeResult): ReadabilityMetrics => {
  const { words, sentences } = tokenized;
  
  if (sentences.length === 0 || words.length === 0) {
    return {
      fleschScore: 0,
      readingLevel: 'Unknown',
      averageSentenceLength: 0,
      averageSyllablesPerWord: 0,
      complexWordPercentage: 0
    };
  }
  
  const averageSentenceLength = words.length / sentences.length;
  const averageSyllablesPerWord = words.reduce((sum, word) => sum + countSyllables(word), 0) / words.length;
  
  // Simplified Flesch score calculation
  const fleschScore = 206.835 - (1.015 * averageSentenceLength) - (84.6 * averageSyllablesPerWord);
  
  let readingLevel = 'Graduate';
  if (fleschScore >= 90) readingLevel = 'Very Easy';
  else if (fleschScore >= 80) readingLevel = 'Easy';
  else if (fleschScore >= 70) readingLevel = 'Fairly Easy';
  else if (fleschScore >= 60) readingLevel = 'Standard';
  else if (fleschScore >= 50) readingLevel = 'Fairly Difficult';
  else if (fleschScore >= 30) readingLevel = 'Difficult';
  
  const complexWords = words.filter(word => word.length > 6).length;
  const complexWordPercentage = (complexWords / words.length) * 100;
  
  return {
    fleschScore: Math.max(0, Math.min(100, fleschScore)),
    readingLevel,
    averageSentenceLength,
    averageSyllablesPerWord,
    complexWordPercentage
  };
};

// Syllable counting (simplified)
const countSyllables = (word: string): number => {
  // Simplified syllable counting - can be enhanced for each language
  const vowelPattern = /[aeiouAEIOU\u0905-\u0914\u0960-\u0961\u0972-\u0977]/g;
  const matches = word.match(vowelPattern);
  return Math.max(1, matches ? matches.length : 1);
};

// Enhanced text analysis with caching
export const analyzeTextComprehensive = (text: string, language: string): TextAnalysisResult => {
  // Check cache first
  const cacheKey = `${language}:${text.substring(0, 100)}:${text.length}`;
  if (analysisCache.has(cacheKey)) {
    return analysisCache.get(cacheKey)!;
  }
  
  // Perform comprehensive analysis
  const tokenized = enhancedTokenizeWords(text, language);
  const normalized = enhancedNormalizeText(text, language);
  const languageDetection = detectLanguage(text);
  
  // Get autocorrect suggestions for each word
  const autocorrectSuggestions = tokenized.words.map((word, index) => {
    const context = tokenized.words.slice(Math.max(0, index - 2), index + 3).join(' ');
    return getEnhancedAutocorrectSuggestions(word, language, context);
  }).filter(suggestion => suggestion.suggestions.length > 0);
  
  // Morphological analysis
  const morphology = analyzeMorphology(tokenized.words, language);
  
  // Calculate statistics
  const uniqueWords = new Set(tokenized.words.map(w => w.toLowerCase()));
  const stats: TextStatistics = {
    characterCount: text.length,
    wordCount: tokenized.words.length,
    sentenceCount: tokenized.sentences.length,
    paragraphCount: text.split(/\n\s*\n/).length,
    averageWordsPerSentence: tokenized.sentences.length > 0 ? tokenized.words.length / tokenized.sentences.length : 0,
    averageCharactersPerWord: tokenized.words.length > 0 ? text.length / tokenized.words.length : 0,
    uniqueWords: uniqueWords.size,
    languageComplexity: tokenized.words.length > 0 ? uniqueWords.size / tokenized.words.length : 0,
    vocabularyRichness: tokenized.words.length > 0 ? uniqueWords.size / Math.sqrt(tokenized.words.length) : 0,
    typeTokenRatio: tokenized.words.length > 0 ? uniqueWords.size / tokenized.words.length : 0
  };
  
  // Readability analysis
  const readability = calculateReadability(tokenized);
  
  const result: TextAnalysisResult = {
    tokenized,
    normalized,
    autocorrectSuggestions,
    languageDetection,
    morphology,
    stats,
    readability
  };
  
  // Cache the result
  if (analysisCache.size >= maxCacheSize) {
    const firstKey = analysisCache.keys().next().value;
    analysisCache.delete(firstKey);
  }
  analysisCache.set(cacheKey, result);
  
  return result;
};

// Performance testing
export const testNLPPerformance = async (text: string, language: string) => {
  const startTime = performance.now();
  
  const result = analyzeTextComprehensive(text, language);
  
  const endTime = performance.now();
  const processingTime = endTime - startTime;
  
  return {
    ...result,
    performance: {
      processingTime,
      wordsPerSecond: result.tokenized.words.length / (processingTime / 1000),
      charactersPerSecond: text.length / (processingTime / 1000),
      cacheHitRate: analysisCache.size / maxCacheSize
    }
  };
};

// Backward compatibility exports
export const tokenize = (text: string, language: string) => enhancedTokenizeWords(text, language);
export const tokenizeWords = (text: string, language: string) => enhancedTokenizeWords(text, language).words;
export const tokenizeSentences = (text: string, language: string) => enhancedTokenizeWords(text, language).sentences;
export const normalizeText = (text: string, language: string) => enhancedNormalizeText(text, language);
export const getAutocorrectSuggestions = (word: string, language: string) => getEnhancedAutocorrectSuggestions(word, language);
export const analyzeText = (text: string, language: string) => analyzeTextComprehensive(text, language);
export const testPerformance = (text: string, language: string) => testNLPPerformance(text, language);

// Export all enhanced functions
export default {
  // Enhanced functions
  enhancedTokenizeWords,
  enhancedNormalizeText,
  getEnhancedAutocorrectSuggestions,
  analyzeTextComprehensive,
  detectLanguage,
  analyzeMorphology,
  calculateReadability,
  testNLPPerformance,
  
  // Backward compatibility
  tokenize,
  tokenizeWords,
  tokenizeSentences,
  normalizeText,
  getAutocorrectSuggestions,
  analyzeText,
  testPerformance
};