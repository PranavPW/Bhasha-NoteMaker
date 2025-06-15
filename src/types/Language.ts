export interface Language {
  code: string;
  name: string;
  nativeName: string;
  rtl: boolean;
  fontFamily: string;
}

export interface LanguageTranslations {
  [key: string]: {
    [key: string]: string;
  };
}

export interface MathSymbol {
  symbol: string;
  latex: string;
  category: string;
  description: string;
}

export interface LanguageHelper {
  numbers: string[];
  commonTerms: string[];
  academicTerms: string[];
}