# Sarkari Sarathi API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Health Check
**GET** `/health`

Check if the API is running.

**Response:**
```json
{
  "status": "healthy",
  "service": "Sarkari-Sarathi API"
}
```

---

### 2. Generate Document
**POST** `/documents/generate`

Generate a formal government application.

**Request Body:**
```json
{
  "service_type": "electricity_meter",
  "user_details": {
    "full_name": "John Doe",
    "address": "Kathmandu, Nepal",
    "ward_number": "5",
    "purpose": "residential"
  },
  "speech_text": "optional voice transcription"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Document generated",
  "pdf_url": "/documents/sample.pdf",
  "content": "Full formal Nepali text..."
}
```

---

### 3. List Templates
**GET** `/templates/list`

Get available government templates.

**Response:**
```json
{
  "templates": [
    "electricity_meter",
    "water_connection",
    "citizenship_certificate"
  ]
}
```

---

### 4. Get Specific Template
**GET** `/templates/<template_name>`

Retrieve a specific template structure.

**Response:**
```json
{
  "service_id": "electricity_meter",
  "service_name": "Electricity Meter Connection",
  "template_structure": {...},
  "required_fields": [...]
}
```

---

### 5. Speech to Text
**POST** `/process/speech-to-text`

Convert speech to text using Whisper API.

**Request:** Multipart form with audio file

**Response:**
```json
{
  "status": "success",
  "text": "Transcribed Nepali text...",
  "confidence": 0.95
}
```

---

### 6. Classify Intent
**POST** `/process/classify-intent`

Identify the service intent from user input.

**Request Body:**
```json
{
  "text": "User input text in Nepali"
}
```

**Response:**
```json
{
  "status": "success",
  "intent": "electricity_meter",
  "confidence": 0.95
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Missing required field: service_type"
}
```

### 404 Not Found
```json
{
  "error": "Template not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

---

## Authentication
Currently, no authentication is required. Future versions will implement API key-based authentication.

---

## Rate Limiting
Not currently implemented. Will be added in production.

---

## CORS
Frontend requests must come from configured allowed origins (see `.env` file).
