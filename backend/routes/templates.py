"""
Template management routes
Handles retrieval and management of official government templates
"""

from flask import Blueprint, jsonify
import json
import os

bp = Blueprint('templates', __name__, url_prefix='/api/templates')

@bp.route('/list', methods=['GET'])
def list_templates():
    """Get list of available templates"""
    try:
        templates_dir = 'knowledge_base/templates'
        templates = []
        
        if os.path.exists(templates_dir):
            for file in os.listdir(templates_dir):
                if file.endswith('.json'):
                    templates.append(file.replace('.json', ''))
        
        return jsonify({'templates': templates}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<template_name>', methods=['GET'])
def get_template(template_name):
    """Get specific template"""
    try:
        template_path = f'knowledge_base/templates/{template_name}.json'
        
        if not os.path.exists(template_path):
            return jsonify({'error': 'Template not found'}), 404
        
        with open(template_path, 'r', encoding='utf-8') as f:
            template = json.load(f)
        
        return jsonify(template), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
