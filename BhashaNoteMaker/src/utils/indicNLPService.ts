// Enhanced Indic NLP Service with API Integration Option
// This provides a bridge between our JavaScript implementation and potential backend services

interface NLPServiceConfig {
  useAPI: boolean;
  apiEndpoint?: string;
  fallbackToLocal: boolean;
  timeout: number;
}

interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  processingTime?: number;
}

class IndicNLPService {
  private config: NLPServiceConfig;
  private cache = new Map<string, any>();

  constructor(config: Partial<NLPServiceConfig> = {}) {
    this.config = {
      useAPI: false, // Set to true when backend is available
      apiEndpoint: 'https://your-nlp-api.com/api',
      fallbackToLocal: true,
      timeout: 5000,
      ...config
    };
  }

  async analyzeText(text: string, language: string): Promise<any> {
    const cacheKey = `${language}:${this.hashText(text)}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    let result;

    if (this.config.useAPI) {
      try {
        result = await this.callAPI('analyze', { text, language });
      } catch (error) {
        console.warn('API call failed, falling back to local implementation:', error);
        if (this.config.fallbackToLocal) {
          result = await this.localAnalysis(text, language);
        } else {
          throw error;
        }
      }
    } else {
      result = await this.localAnalysis(text, language);
    }

    // Cache the result
    this.cache.set(cacheKey, result);
    return result;
  }

  async getAutocorrectSuggestions(word: string, language: string, context?: string): Promise<any> {
    if (this.config.useAPI) {
      try {
        return await this.callAPI('autocorrect', { word, language, context });
      } catch (error) {
        if (this.config.fallbackToLocal) {
          return this.localAutocorrect(word, language, context);
        }
        throw error;
      }
    }
    
    return this.localAutocorrect(word, language, context);
  }

  async detectLanguage(text: string): Promise<any> {
    if (this.config.useAPI) {
      try {
        return await this.callAPI('detect-language', { text });
      } catch (error) {
        if (this.config.fallbackToLocal) {
          return this.localLanguageDetection(text);
        }
        throw error;
      }
    }
    
    return this.localLanguageDetection(text);
  }

  private async callAPI(endpoint: string, data: any): Promise<any> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(`${this.config.apiEndpoint}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result: APIResponse<any> = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'API request failed');
      }

      return result.data;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private async localAnalysis(text: string, language: string): Promise<any> {
    // Import our existing local implementation
    const { analyzeTextComprehensive } = await import('./indicNLP');
    return analyzeTextComprehensive(text, language);
  }

  private async localAutocorrect(word: string, language: string, context?: string): Promise<any> {
    const { getEnhancedAutocorrectSuggestions } = await import('./indicNLP');
    return getEnhancedAutocorrectSuggestions(word, language, context);
  }

  private async localLanguageDetection(text: string): Promise<any> {
    const { detectLanguage } = await import('./indicNLP');
    return detectLanguage(text);
  }

  private hashText(text: string): string {
    // Simple hash function for caching
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  // Configuration methods
  enableAPI(endpoint: string) {
    this.config.useAPI = true;
    this.config.apiEndpoint = endpoint;
  }

  disableAPI() {
    this.config.useAPI = false;
  }

  clearCache() {
    this.cache.clear();
  }
}

// Export singleton instance
export const nlpService = new IndicNLPService();

// Export class for custom instances
export { IndicNLPService };

// Backward compatibility exports
export const analyzeText = (text: string, language: string) => 
  nlpService.analyzeText(text, language);

export const getAutocorrectSuggestions = (word: string, language: string, context?: string) => 
  nlpService.getAutocorrectSuggestions(word, language, context);

export const detectLanguage = (text: string) => 
  nlpService.detectLanguage(text);