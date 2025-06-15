import { Language, LanguageTranslations, LanguageHelper } from '../types/Language';

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    rtl: false,
    fontFamily: 'Noto Sans, sans-serif'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    rtl: false,
    fontFamily: 'Noto Sans Devanagari, sans-serif'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    rtl: false,
    fontFamily: 'Noto Sans Bengali, sans-serif'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    rtl: false,
    fontFamily: 'Noto Sans Telugu, sans-serif'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    rtl: false,
    fontFamily: 'Noto Sans Devanagari, sans-serif'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    rtl: false,
    fontFamily: 'Noto Sans Tamil, sans-serif'
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    rtl: false,
    fontFamily: 'Noto Sans Gujarati, sans-serif'
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    rtl: true,
    fontFamily: 'Noto Sans Arabic, sans-serif'
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    rtl: false,
    fontFamily: 'Noto Sans Kannada, sans-serif'
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    rtl: false,
    fontFamily: 'Noto Sans Malayalam, sans-serif'
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    rtl: false,
    fontFamily: 'Noto Sans Oriya, sans-serif'
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    rtl: false,
    fontFamily: 'Noto Sans Gurmukhi, sans-serif'
  },
  {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    rtl: false,
    fontFamily: 'Noto Sans Bengali, sans-serif'
  },
  {
    code: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    rtl: false,
    fontFamily: 'Noto Sans Devanagari, sans-serif'
  }
];

export const translations: LanguageTranslations = {
  en: {
    appName: 'Bhasha-NoteMaker',
    newNote: 'New Note',
    searchNotes: 'Search notes...',
    allLanguages: 'All Languages',
    title: 'Title',
    content: 'Content',
    save: 'Save',
    export: 'Export',
    exportPDF: 'Export PDF',
    exportWord: 'Export Word',
    emailShare: 'Email Share',
    mathMode: 'Math Mode',
    insertMath: 'Insert Math',
    createdAt: 'Created',
    updatedAt: 'Updated',
    language: 'Language',
    tags: 'Tags',
    noNotes: 'No notes found',
    createFirstNote: 'Create your first note',
    untitledNote: 'Untitled Note'
  },
  hi: {
    appName: 'भाषा-नोटमेकर',
    newNote: 'नया नोट',
    searchNotes: 'नोट खोजें...',
    allLanguages: 'सभी भाषाएं',
    title: 'शीर्षक',
    content: 'सामग्री',
    save: 'सहेजें',
    export: 'निर्यात',
    exportPDF: 'पीडीएफ निर्यात',
    exportWord: 'वर्ड निर्यात',
    emailShare: 'ईमेल साझा करें',
    mathMode: 'गणित मोड',
    insertMath: 'गणित डालें',
    createdAt: 'बनाया गया',
    updatedAt: 'अपडेट किया गया',
    language: 'भाषा',
    tags: 'टैग',
    noNotes: 'कोई नोट नहीं मिला',
    createFirstNote: 'अपना पहला नोट बनाएं',
    untitledNote: 'बिना शीर्षक का नोट'
  },
  bn: {
    appName: 'ভাষা-নোটমেকার',
    newNote: 'নতুন নোট',
    searchNotes: 'নোট খুঁজুন...',
    allLanguages: 'সব ভাষা',
    title: 'শিরোনাম',
    content: 'বিষয়বস্তু',
    save: 'সংরক্ষণ',
    export: 'রপ্তানি',
    exportPDF: 'পিডিএফ রপ্তানি',
    exportWord: 'ওয়ার্ড রপ্তানি',
    emailShare: 'ইমেইল শেয়ার',
    mathMode: 'গণিত মোড',
    insertMath: 'গণিত যোগ করুন',
    createdAt: 'তৈরি',
    updatedAt: 'আপডেট',
    language: 'ভাষা',
    tags: 'ট্যাগ',
    noNotes: 'কোন নোট পাওয়া যায়নি',
    createFirstNote: 'আপনার প্রথম নোট তৈরি করুন',
    untitledNote: 'শিরোনামহীন নোট'
  }
};

export const languageHelpers: { [key: string]: LanguageHelper } = {
  hi: {
    numbers: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    commonTerms: ['और', 'या', 'में', 'के', 'से', 'को', 'पर', 'द्वारा'],
    academicTerms: ['अध्याय', 'प्रश्न', 'उत्तर', 'परीक्षा', 'अध्ययन', 'विषय', 'गणित', 'विज्ञान']
  },
  bn: {
    numbers: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
    commonTerms: ['এবং', 'বা', 'মধ্যে', 'থেকে', 'দিয়ে', 'জন্য'],
    academicTerms: ['অধ্যায়', 'প্রশ্ন', 'উত্তর', 'পরীক্ষা', 'অধ্যয়ন', 'বিষয়', 'গণিত', 'বিজ্ঞান']
  },
  te: {
    numbers: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'],
    commonTerms: ['మరియు', 'లేదా', 'లో', 'నుండి', 'తో', 'కోసం'],
    academicTerms: ['అధ్యాయం', 'ప్రశ్న', 'సమాధానం', 'పరీక్ష', 'అధ్యయనం', 'విషయం', 'గణితం', 'విజ్ఞానం']
  }
};

export const getLanguageByCode = (code: string): Language | undefined => {
  return languages.find(lang => lang.code === code);
};

export const getTranslation = (key: string, languageCode: string): string => {
  return translations[languageCode]?.[key] || translations.en[key] || key;
};