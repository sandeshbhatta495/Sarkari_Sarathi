# Sarkari Sarathi - Setup Guide

## Prerequisites
- Python 3.8 or higher
- Node.js 14+ (for frontend development)
- Modern web browser with Web Audio API support
- Internet connection (for API services)

## Backend Setup

### 1. Create Virtual Environment
```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables
```bash
# Copy example file
cp .env.example .env

# Edit .env with your API keys
nano .env
```

You need:
- `GOOGLE_API_KEY` from [Google Cloud Console](https://console.cloud.google.com/)
- `HUGGINGFACE_API_KEY` from [Hugging Face](https://huggingface.co/settings/tokens)

### 4. Run Backend Server
```bash
python app.py
```

Server will start at `http://localhost:5000`

---

## Frontend Setup

### Option 1: Simple HTTP Server
```bash
cd frontend

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Open `http://localhost:8000` in your browser

### Option 2: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"

---

## Project Structure Verification

After setup, your structure should look like:
```
Sarkari Sarathi/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── routes/
│   │   ├── documents.py
│   │   ├── templates.py
│   │   └── processing.py
│   └── utils/
│       └── rag_engine.py
├── frontend/
│   ├── index.html
│   ├── css/styles.css
│   └── js/
│       ├── app.js
│       └── voice.js
├── knowledge_base/
│   └── templates/
│       └── electricity_meter.json
├── pdf_engine/
│   └── generator.py
└── .env
```

---

## First Run

### 1. Start Backend
```bash
cd backend
python app.py
```

### 2. Start Frontend
```bash
cd frontend
python -m http.server 8000
```

### 3. Test the System
1. Open `http://localhost:8000`
2. Select "Electricity Meter Connection" service
3. Enter your details
4. Click "Generate Document"

---

## Troubleshooting

### API Connection Error
- Ensure backend is running on `http://localhost:5000`
- Check CORS settings in `.env`
- Open browser console for detailed errors (F12)

### Microphone Access Denied
- Check browser microphone permissions
- Test with different browser
- Enable microphone in browser settings

### Python Module Not Found
```bash
# Upgrade pip first
pip install --upgrade pip

# Reinstall requirements
pip install -r requirements.txt --force-reinstall
```

### Nepali Font Issues
- Download Noto Sans Devanagari font
- Place in `static/fonts/` directory
- Ensure font file is properly referenced

---

## API Testing

### Test Backend with cURL
```bash
# Health check
curl http://localhost:5000/api/health

# Get templates
curl http://localhost:5000/api/templates/list

# Generate document
curl -X POST http://localhost:5000/api/documents/generate \
  -H "Content-Type: application/json" \
  -d '{
    "service_type": "electricity_meter",
    "user_details": {
      "full_name": "Test User",
      "address": "Kathmandu",
      "ward_number": "5"
    }
  }'
```

---

## Next Steps

1. Configure your Google API and Hugging Face keys
2. Test voice input functionality
3. Implement PDF generation
4. Add more service templates
5. Deploy to production

See `API.md` for complete endpoint documentation.
