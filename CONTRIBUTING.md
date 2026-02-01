# Contributing to Sarkari Sarathi

Thank you for your interest in contributing! This document provides guidelines for developers working on the project.

## Getting Started

1. **Fork the repository** and clone it locally
2. **Follow the Setup Guide** in `docs/SETUP.md`
3. **Create a feature branch**: `git checkout -b feature/your-feature-name`

## Code Structure

### Backend (Python/Flask)
- `backend/app.py` - Main Flask application
- `backend/routes/` - API endpoint definitions
- `backend/utils/` - Helper functions and RAG engine
- `knowledge_base/` - Templates and knowledge base

### Frontend (HTML/CSS/JavaScript)
- `frontend/index.html` - Main page structure
- `frontend/css/styles.css` - Styling
- `frontend/js/app.js` - Main application logic
- `frontend/js/voice.js` - Voice input handling

### Documentation
- `docs/API.md` - Complete API documentation
- `docs/SETUP.md` - Setup and troubleshooting guide

## Coding Standards

### Python
- Follow PEP 8 guidelines
- Use type hints where possible
- Include docstrings for functions
- Use meaningful variable names

Example:
```python
def generate_document(service_type: str, user_details: dict) -> Optional[str]:
    """
    Generate formal document with given details.
    
    Args:
        service_type: Type of service (e.g., 'electricity_meter')
        user_details: Dictionary containing user information
    
    Returns:
        Generated document text or None if failed
    """
    pass
```

### JavaScript
- Use clear function names
- Add comments for complex logic
- Use const/let instead of var
- Follow consistent indentation (2 spaces)

Example:
```javascript
/**
 * Handle service selection
 * @param {Event} event - Click event
 */
function selectService(event) {
    const btn = event.currentTarget;
    const service = btn.dataset.service;
    // Implementation
}
```

### CSS
- Use meaningful class names
- Follow BEM naming convention for complex components
- Use CSS variables for consistent theming
- Ensure responsive design

## Commit Messages

Write clear, descriptive commit messages:
```
[Feature/Fix/Docs] Short description

- More detailed explanation
- Additional context if needed
- References issue numbers if applicable
```

Examples:
```
[Feature] Add speech-to-text functionality
[Fix] Resolve CORS error in API calls
[Docs] Update setup instructions for Windows
```

## Pull Request Process

1. **Update documentation** if your changes affect usage
2. **Test your changes** thoroughly
3. **Keep commits clean** - one logical change per commit
4. **Write a clear PR description** explaining what you've done

## Project Areas & Responsibilities

### Backend Development
- API implementation and optimization
- Template management system
- RAG workflow and AI integration
- PDF generation and document formatting

### Frontend Development
- User interface and experience
- Voice input integration
- Document preview and display
- Form validation and user feedback

### Templates & Knowledge Base
- Government template digitization
- Field validation rules
- Official format compliance

### Documentation
- API documentation
- Setup guides
- Code examples
- User guides

## Feature Development Workflow

1. **Identify the feature** and create an issue
2. **Discuss approach** with team leads
3. **Create feature branch** from main
4. **Implement incrementally** with regular commits
5. **Test thoroughly** before PR
6. **Request review** from team members
7. **Address feedback** and merge

## Testing

- Test your changes in multiple browsers
- Test voice input on different devices
- Verify PDF generation on various systems
- Check responsive design on mobile devices

## Deployment

Before deploying to production:
1. Update version number in documentation
2. Test all functionality end-to-end
3. Verify environment variables are set
4. Ensure all dependencies are documented
5. Test with real government data

## Issues & Bug Reports

When reporting bugs:
- Provide clear reproduction steps
- Include browser/system information
- Attach error messages or screenshots
- Specify which template you're using

## Questions?

Reach out to the team leads:
- **Sandesh Bhatta** - Architecture & AI
- **Pranav** - Backend Development
- **Ritika** - UI/UX & Design
- **Vibe Coding Team** - Frontend & Demo

---

Happy coding! Your contributions help make government services more accessible to Nepali citizens.
