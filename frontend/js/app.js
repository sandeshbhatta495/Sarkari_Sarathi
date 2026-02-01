/**
 * Sarkari Sarathi - Main Application Script
 * Handles UI interactions and API communication
 */

const API_BASE = 'http://localhost:5000/api';

// State management
const appState = {
    currentService: null,
    userDetails: {},
    generatedDocument: null,
    inputMode: 'text' // 'text' or 'voice'
};

// DOM Elements
const serviceButtons = document.querySelectorAll('.service-btn');
const voiceBtnModeSwitch = document.getElementById('voiceBtn');
const textBtnModeSwitch = document.getElementById('textBtn');
const inputSection = document.getElementById('inputSection');
const outputSection = document.getElementById('outputSection');
const generateBtn = document.getElementById('generateBtn');
const voiceInputArea = document.getElementById('voiceInput');
const textInputArea = document.getElementById('textInput');

// Initialize event listeners
function init() {
    // Service selection
    serviceButtons.forEach(btn => {
        btn.addEventListener('click', selectService);
    });

    // Input mode switching
    voiceBtnModeSwitch.addEventListener('click', switchToVoice);
    textBtnModeSwitch.addEventListener('click', switchToText);

    // Generate document
    generateBtn.addEventListener('click', generateDocument);

    // Action buttons
    document.getElementById('downloadBtn')?.addEventListener('click', downloadPDF);
    document.getElementById('editBtn')?.addEventListener('click', editDocument);
    document.getElementById('newBtn')?.addEventListener('click', resetForm);
}

/**
 * Handle service selection
 */
function selectService(event) {
    const btn = event.currentTarget;
    const service = btn.dataset.service;

    // Update UI
    document.querySelectorAll('.service-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update state
    appState.currentService = service;

    // Show input section
    inputSection.style.display = 'block';
}

/**
 * Switch to voice input mode
 */
function switchToVoice() {
    appState.inputMode = 'voice';
    voiceInputArea.style.display = 'block';
    textInputArea.style.display = 'none';
    voiceBtnModeSwitch.classList.add('active');
    textBtnModeSwitch.classList.remove('active');
}

/**
 * Switch to text input mode
 */
function switchToText() {
    appState.inputMode = 'text';
    voiceInputArea.style.display = 'none';
    textInputArea.style.display = 'block';
    textBtnModeSwitch.classList.add('active');
    voiceBtnModeSwitch.classList.remove('active');
}

/**
 * Collect user details from form
 */
function collectUserDetails() {
    return {
        inputText: document.getElementById('inputText').value,
        fullName: document.getElementById('userName').value,
        address: document.getElementById('userAddress').value,
        wardNumber: document.getElementById('wardNumber').value,
        inputMode: appState.inputMode
    };
}

/**
 * Generate formal document
 */
async function generateDocument() {
    try {
        // Validate inputs
        if (!appState.currentService) {
            showNotification('Please select a service', 'error');
            return;
        }

        appState.userDetails = collectUserDetails();

        if (!appState.userDetails.inputText && !appState.userDetails.fullName) {
            showNotification('Please provide some information', 'error');
            return;
        }

        // Show loading state
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';

        // Call API
        const response = await fetch(`${API_BASE}/documents/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_type: appState.currentService,
                user_details: appState.userDetails
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to generate document');
        }

        // Store generated document
        appState.generatedDocument = data;

        // Display preview
        displayPreview(data);

        // Show output section
        outputSection.style.display = 'block';
        inputSection.style.display = 'none';

        showNotification('Document generated successfully!', 'success');

    } catch (error) {
        console.error('Error:', error);
        showNotification(error.message, 'error');
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate Document';
    }
}

/**
 * Display document preview
 */
function displayPreview(data) {
    const preview = document.getElementById('preview');
    preview.innerHTML = `
        <div style="padding: 20px; line-height: 1.8;">
            <h3>Generated Document Preview</h3>
            <p>${data.content || 'Document content will appear here'}</p>
            <p style="margin-top: 40px; color: #999; font-size: 0.9em;">
                ________________________<br>
                Ward Stamp
            </p>
            <p style="color: #999; font-size: 0.9em;">
                ________________________<br>
                Applicant Signature
            </p>
        </div>
    `;
}

/**
 * Download PDF
 */
function downloadPDF() {
    if (!appState.generatedDocument) {
        showNotification('No document to download', 'error');
        return;
    }

    // TODO: Implement PDF download
    showNotification('PDF download feature coming soon', 'error');
}

/**
 * Edit document
 */
function editDocument() {
    outputSection.style.display = 'none';
    inputSection.style.display = 'block';
}

/**
 * Reset form and start over
 */
function resetForm() {
    appState.currentService = null;
    appState.userDetails = {};
    appState.generatedDocument = null;

    document.querySelectorAll('.service-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('inputText').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('userAddress').value = '';
    document.getElementById('wardNumber').value = '';

    inputSection.style.display = 'none';
    outputSection.style.display = 'none';
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const container = document.querySelector('.main-content');
    container.insertBefore(notification, container.firstChild);

    setTimeout(() => notification.remove(), 3000);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
