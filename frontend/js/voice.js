/**
 * Voice Input Handler
 * Manages speech-to-text functionality using Web Audio API and backend API
 */

class VoiceHandler {
    constructor() {
        this.isRecording = false;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.recordBtn = document.getElementById('recordBtn');
        this.transcriptionBox = document.getElementById('transcription');

        this.recordBtn.addEventListener('click', () => this.toggleRecording());
    }

    /**
     * Check browser support for Web Audio API
     */
    async checkBrowserSupport() {
        const support = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
        if (!support) {
            alert('Your browser does not support voice recording. Please use a modern browser.');
            return false;
        }
        return true;
    }

    /**
     * Toggle recording on/off
     */
    async toggleRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            await this.startRecording();
        }
    }

    /**
     * Start recording audio
     */
    async startRecording() {
        const supported = await this.checkBrowserSupport();
        if (!supported) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onstop = () => {
                this.sendToTranscription();
            };

            this.mediaRecorder.start();
            this.isRecording = true;

            // Update button state
            this.recordBtn.textContent = '⏹️ Stop Recording';
            this.recordBtn.classList.add('recording');
            this.transcriptionBox.textContent = 'Recording...';

        } catch (error) {
            console.error('Error accessing microphone:', error);
            alert('Unable to access microphone. Please check permissions.');
        }
    }

    /**
     * Stop recording audio
     */
    stopRecording() {
        if (this.mediaRecorder) {
            this.mediaRecorder.stop();
            this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
            this.isRecording = false;

            // Update button state
            this.recordBtn.textContent = '🎤 Processing...';
        }
    }

    /**
     * Send audio to backend for transcription
     */
    async sendToTranscription() {
        try {
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.wav');

            this.recordBtn.textContent = '⏳ Transcribing...';

            const response = await fetch(`${API_BASE}/process/speech-to-text`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Transcription failed');
            }

            // Display transcription
            this.displayTranscription(data.text);

            // Fill text input
            document.getElementById('inputText').value = data.text;

        } catch (error) {
            console.error('Transcription error:', error);
            this.transcriptionBox.textContent = `Error: ${error.message}`;
        } finally {
            this.recordBtn.textContent = '🎤 Speak';
            this.recordBtn.classList.remove('recording');
        }
    }

    /**
     * Display transcribed text
     */
    displayTranscription(text) {
        this.transcriptionBox.innerHTML = `
            <div style="padding: 15px; background: #f0fdf4; border-radius: 6px; border: 1px solid #86efac;">
                <strong>Transcribed Text:</strong><br>
                <p>${text}</p>
            </div>
        `;
    }
}

// Initialize voice handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const voiceHandler = new VoiceHandler();
});
