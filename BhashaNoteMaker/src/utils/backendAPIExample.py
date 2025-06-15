# Example Backend API using the real indic-nlp-library
# This would run on a separate server (not in WebContainer)

"""
Flask API Example for Indic NLP Integration

To set up:
1. pip install indic-nlp-library flask flask-cors
2. Download and setup indic-nlp-library data
3. Run this server separately
4. Update frontend to use this API endpoint
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import traceback

# Import the actual indic-nlp-library
try:
    from indicnlp.tokenize import indic_tokenize
    from indicnlp.normalize import indic_normalize
    from indicnlp.transliterate import unicode_transliterate
    from indicnlp import common
    from indicnlp import loader
    
    # Initialize the library
    common.set_resources_path("path/to/indic_nlp_resources")
    loader.load()
    
    INDIC_NLP_AVAILABLE = True
except ImportError:
    print("Warning: indic-nlp-library not available. Install with: pip install indic-nlp-library")
    INDIC_NLP_AVAILABLE = False

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

@app.route('/api/analyze', methods=['POST'])
def analyze_text():
    try:
        start_time = time.time()
        data = request.get_json()
        text = data.get('text', '')
        language = data.get('language', 'hi')
        
        if not INDIC_NLP_AVAILABLE:
            return jsonify({
                'success': False,
                'error': 'Indic NLP library not available'
            }), 500
        
        # Use real indic-nlp-library functions
        tokens = indic_tokenize.trivial_tokenize(text, language)
        normalized = indic_normalize.normalize(text, language)
        
        # Perform comprehensive analysis
        result = {
            'tokens': tokens,
            'normalized': normalized,
            'word_count': len(tokens),
            'sentence_count': len([t for t in tokens if t in '.!?।॥']),
            'language_detected': language,
            'processing_time': time.time() - start_time
        }
        
        return jsonify({
            'success': True,
            'data': result,
            'processingTime': time.time() - start_time
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e),
            'traceback': traceback.format_exc()
        }), 500

@app.route('/api/autocorrect', methods=['POST'])
def autocorrect():
    try:
        start_time = time.time()
        data = request.get_json()
        word = data.get('word', '')
        language = data.get('language', 'hi')
        context = data.get('context', '')
        
        if not INDIC_NLP_AVAILABLE:
            return jsonify({
                'success': False,
                'error': 'Indic NLP library not available'
            }), 500
        
        # Use real indic-nlp-library for autocorrect
        # This is a simplified example - you'd implement proper autocorrect logic
        normalized_word = indic_normalize.normalize(word, language)
        
        # Mock suggestions - replace with actual autocorrect algorithm
        suggestions = [normalized_word + '_corrected1', normalized_word + '_corrected2']
        
        result = {
            'word': word,
            'suggestions': suggestions,
            'confidence': 0.85,
            'context': context
        }
        
        return jsonify({
            'success': True,
            'data': result,
            'processingTime': time.time() - start_time
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/detect-language', methods=['POST'])
def detect_language():
    try:
        start_time = time.time()
        data = request.get_json()
        text = data.get('text', '')
        
        # Implement language detection using indic-nlp-library
        # This is a simplified example
        detected_lang = 'hi'  # Replace with actual detection
        confidence = 0.95
        
        result = {
            'language': detected_lang,
            'confidence': confidence,
            'script': 'Devanagari'
        }
        
        return jsonify({
            'success': True,
            'data': result,
            'processingTime': time.time() - start_time
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'indic_nlp_available': INDIC_NLP_AVAILABLE,
        'timestamp': time.time()
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)