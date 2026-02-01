"""
Sarkari-Sarathi Backend API
Flask-based REST API for AI-powered digital scribe system
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# Import routes
from routes import documents, templates, processing

# Register blueprints
app.register_blueprint(documents.bp)
app.register_blueprint(templates.bp)
app.register_blueprint(processing.bp)

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'Sarkari-Sarathi API'}), 200

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    DEBUG = os.getenv('FLASK_DEBUG', False)
    PORT = int(os.getenv('PORT', 5000))
    app.run(debug=DEBUG, host='0.0.0.0', port=PORT)
