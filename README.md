# TalkTerms AI: The Master Blueprint (v3.2)

**Project Status:** Phase 3 - Core AI Engine Implementation

This document serves as the single source of truth for the TalkTerms AI project.

---

## 1. Vibe & Philosophy
*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm.
*   **User Experience (UX) First:** Deliver Clarity and Confidence through a magical, intuitive AI experience.

---

## 2. Technical Architecture
*   **Frontend:** React, Tailwind CSS, React Router DOM.
*   **Backend & Infrastructure:** Firebase Ecosystem (Authentication, Firestore, Cloud Storage).
*   **AI Layer (The Coach's Brain):**
    *   **Core:** Firebase Cloud Functions (2nd Gen) for backend logic.
    *   **AI Model:** **Gemini 2.5 Flash** (via Google AI SDK) for state-of-the-art speed and efficiency.
    *   **Orchestration Framework:** LangChain.js to manage complex AI interactions.
    *   **Static Knowledge (The "Wise Coach"):** Firebase Vector Search Extension with a Firestore Collection.
    *   **Dynamic Knowledge (The "Smart Analyst"):** Gemini's built-in **Google Search Tool** for real-time data access.

---

## 3. Development Roadmap

*   **Phase 1 & 2:** Foundation, UI/UX, Authentication & Dashboard. **(✓ Completed)**

*   **Phase 3: The Negotiation Studio - The Engine (Current Focus)**
    *   **Goal:** To replace mock data with a live, intelligent AI engine using the latest technology.
    *   **Task 3.1: Setup Cloud Function & Secrets:**
        *   Initialize Firebase Cloud Functions (2nd Gen). Create an HTTP-callable function `analyzeNegotiation`.
        *   *Note for Human Operator:* The `GEMINI_API_KEY` will be set manually via the Google Cloud Console UI.
    *   **Task 3.2: Implement the AI Core Logic with Gemini 2.5 Flash:**
        *   Inside the Cloud Function, install `@google/generative-ai` and `langchain`.
        *   Using LangChain, create a chain that calls the **`gemini-2.5-flash-latest`** model.
        *   Engineer a master prompt that instructs Gemini to act as an expert coach and return a structured JSON object matching our frontend's needs.
    *   **Task 3.3: Connect Frontend to the Live AI Engine:**
        *   Update `NegotiatePage.jsx` to call the live `analyzeNegotiation` function.
        *   Implement professional loading (skeleton UI) and error states.
        *   Update `ResultsPage.jsx` to display the live AI-generated data, replacing all mock data.

*   **Phase 4: Advanced AI - Activating RAG & Web Search**
    *   *(Tasks to be defined)*
