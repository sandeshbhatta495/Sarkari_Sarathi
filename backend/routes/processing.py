"""
Processing routes
Handles speech-to-text and intent classification
"""

from flask import Blueprint, request, jsonify

bp = Blueprint('processing', __name__, url_prefix='/api/process')

@bp.route('/speech-to-text', methods=['POST'])
def speech_to_text():
    """
    Convert speech to text using Whisper Nepali API
    
    Expected: audio file in request
    """
    try:
        if 'audio' not in request.files:
            return jsonify({'error': 'No audio file provided'}), 400
        
        audio_file = request.files['audio']
        
        # TODO: Send to Whisper Nepali API
        # TODO: Return transcribed text
        
        return jsonify({
            'status': 'success',
            'text': 'Transcribed Nepali text'
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/classify-intent', methods=['POST'])
def classify_intent():
    """
    Classify the service intent from user input
    
    Expected JSON:
    {
        'text': 'User input text'
    }
    """
    try:
        data = request.get_json()
        
        if not data or 'text' not in data:
            return jsonify({'error': 'Missing text field'}), 400
        
        # TODO: Use Gemini to classify intent
        
        return jsonify({
            'status': 'success',
            'intent': 'electricity_meter',
            'confidence': 0.95
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
