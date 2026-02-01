# Sarkari-Sarathi: The AI Digital Scribe

**Hackathon:** PROTOBYTES 2.0  
**Domain:** E-Governance & Digital Accessibility  

---

## 1. Project Overview

Sarkari-Sarathi is an AI-powered digital scribe designed to help Nepali citizens generate **formal ward-level government applications (Nivedans)** using simple spoken or written Nepali.  

The system bridges the gap between **everyday language** and **official legal Nepali (Khas Nepali)** by leveraging a **Retrieval-Augmented Generation (RAG)** architecture, ensuring that all generated documents strictly follow **official government templates** and accepted formats.

**Primary Demonstration Service:**  
Electricity Meter Connection Application

---

## 2. Problem Statement

In Nepal, citizens must submit formally written applications for nearly every ward-level service. This creates multiple challenges:

- **Complex Formal Language:** Government letters require legal Nepali terms unfamiliar to most citizens.
- **Lekhapadi Dependency:** People are forced to pay private scribes to write applications.
- **Accessibility Barriers:** Elderly and rural citizens struggle with text-heavy notices.
- **Digital Exclusion:** Typing Nepali and navigating online systems is difficult for many users.

These issues increase cost, delay public services, and exclude vulnerable populations.

---

## 3. Proposed Solution

Sarkari-Sarathi acts as a **smart digital bridge** between citizens and government offices.

### Key Features
- **Voice-Based Interaction:** Users speak in simple Nepali.
- **Intent Understanding:** The system identifies the required service and extracts user details.
- **Template-Grounded Writing:** Official ward-approved templates are retrieved from a knowledge base.
- **AI-Assisted Drafting:** Details are filled into the template using formal legal Nepali.
- **Print-Ready Output:** Generates an A4 PDF with proper formatting and space for ward stamp and signature.

---

## 4. System Architecture

The system follows a modular, client-server architecture:

### Frontend Layer
- HTML, CSS, JavaScript
- Mobile-first responsive UI
- Microphone-based input

### Backend Layer
- Python Flask REST API
- Request orchestration and validation

### AI & NLP Layer
- **Google Gemini 1.5 Flash** for reasoning and formal Nepali generation
- **Whisper Nepali (Hugging Face API)** for Speech-to-Text

### Knowledge Layer
- JSON-based repository of official government templates

### Document Engine
- Python-based PDF generation
- A4 layout with Nepali Unicode fonts

---

## 5. Retrieval-Augmented Generation (RAG) Methodology

RAG is used to prevent hallucinations and ensure legal correctness.

### Workflow
1. User speech/text is converted into structured input
2. Service intent is classified (e.g., Electricity Meter)
3. Official template is retrieved from JSON knowledge base
4. Context-constrained prompt is created
5. AI generates formal Nepali text strictly within provided context

This ensures the system **never invents rules or formats**.

---

## 6. Development Methodology

The project follows a **hackathon-optimized, demo-first development approach**:

- **Phase 1:** Scope freeze and service selection
- **Phase 2:** Government template collection and digitization
- **Phase 3:** Backend API development
- **Phase 4:** Prompt engineering and RAG integration
- **Phase 5:** Frontend integration and user flow design
- **Phase 6:** End-to-end testing and demo preparation

---

## 7. Task Distribution & Team Responsibilities

### Project Lead – Sandesh Bhatta
- System architecture design
- AI workflow and prompt engineering
- RAG logic definition
- Final system integration
- Technical explanation during judging

### Backend Engineer – Pranav
- Flask backend development
- REST API implementation
- Template retrieval logic
- PDF generation module

### UI/UX & Presentation – Ritika
- Figma-based UI/UX design
- User journey mapping
- Pitch deck creation
- Visual storytelling for demo

### Frontend & Demo Support – Team 4 (Amrit )
- HTML/CSS/JS frontend wiring
- Voice input integration
- Demo flow stabilization
- Presentation support

---

## 8. API Design

### Endpoint
