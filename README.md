# TalkTerms AI: The Master Blueprint (v4.2)

**Project Status:** Phase 3 - Direct AI Integration

This document serves as the single source of truth for the TalkTerms AI project.

---
## 1. Vibe & Philosophy
*(Unchanged)*
---
## 2. Technical Architecture
*   **Frontend:** React, Tailwind CSS, React Router DOM.
*   **Backend & Infrastructure:** Firebase Ecosystem (Authentication with Google & Email/Password, Firestore for user data).
*   **AI Layer (Direct Integration):** Secure calls from the React frontend to the **Google AI (Gemini) API** via **Netlify Functions** as a proxy.

---
## 3. Development Roadmap
*   **Phase 1 & 2:** All foundational, UI/UX, and advanced authentication tasks are **(✓ Completed)**.
*   **Phase 3: Direct AI Integration (Current Focus)**
    *   **Task 3.1: Secure API Key Management:** The `GEMINI_API_KEY` will be managed as a secure environment variable in Netlify.
    *   **Task 3.2: Create a Netlify Function:**
        *   Create a serverless Netlify Function (e.g., `analyzeNegotiation.js`) in the `netlify/functions` directory. This function will act as a secure proxy to the Gemini API.
    *   **Task 3.3: Implement Gemini API Call:**
        *   Inside the Netlify Function, install and use the `@google/generative-ai` SDK.
        *   Call the `gemini-2.5-flash-latest` model with a prompt to analyze the user's text and return a structured JSON.
    *   **Task 3.4: Connect Frontend to Netlify Function:**
        *   Update `NegotiatePage.jsx` to call our new Netlify Function endpoint.
        *   Update `ResultsPage.jsx` to display the live AI-generated data.
