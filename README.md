# TalkTerms AI: The Master Blueprint (v3.0)

**Project Status:** Phase 3 - Core AI Engine Implementation

This document serves as the single source of truth for the TalkTerms AI project. All development must adhere to the principles and specifications outlined herein.

---

## 1. Vibe & Philosophy
*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm.
*   **User Experience (UX) First:** Our AI must deliver not just data, but **Clarity and Confidence**.
*   **Design Philosophy:** "Dynamic Serenity".

---

## 2. Technical Architecture
*   **Frontend:** React, Tailwind CSS, React Router DOM.
*   **Backend & Infrastructure:** Firebase Ecosystem (Authentication, Firestore, Cloud Storage).
*   **AI Layer (The Coach's Brain):**
    *   **Core:** Firebase Cloud Functions (2nd Gen) for backend logic.
    *   **Orchestration Framework:** LangChain.js to manage complex AI interactions.
    *   **Static Knowledge Base (The "Wise Coach"):**
        *   **Storage:** A dedicated Firestore Collection (`knowledge_base`) to store our expert articles.
        *   **Vectorization & Indexing:** The official **Firebase Vector Search & Indexing Extension**.
        *   **Searching:** **Google Cloud's Vector Search**.
    *   **Dynamic Knowledge Access (The "Smart Analyst"):** Gemini's native "Function Calling" capability.

---

## 3. Development Roadmap

*   **Phase 1 & 2:** Foundation, UI/UX, Authentication & Dashboard. **(✓ Completed)**

*   **Phase 3: The Negotiation Studio - The Engine (Current Focus)**
    *   **Goal:** To replace the mock data with a live, intelligent, and context-aware AI engine. We will build this in stages.
    *   **Part 1: Foundational AI Backend**
        *   **Task 3.1: Setup Backend Environment:**
            *   Initialize Firebase Cloud Functions (2nd Gen) in the project.
            *   Install necessary SDKs: `@google/generative-ai`, `langchain`.
            *   Set up secret management for the Gemini API Key.
        *   **Task 3.2: Implement the Direct AI Flow (without RAG yet):**
            *   Create a new HTTP-callable Cloud Function (`analyzeNegotiation`).
            *   Inside, create a simple LangChain chain that takes the user's text as input.
            *   This chain will send a meticulously engineered prompt to the Gemini API, instructing it to return a **single, structured JSON object** that perfectly matches our frontend component's data structure (Scorecard, Key Levers, Talking Points, Draft Email).
        *   **Task 3.3: Connect Frontend to the Live AI Engine:**
            *   Update the `NegotiatePage.jsx` to call the live `analyzeNegotiation` Cloud Function.
            *   Implement robust loading (e.g., a skeleton loader on the results page) and error states.
            *   Update the `ResultsPage.jsx` to parse the JSON response and display the live AI-generated data across all its components, replacing all mock data.

    *   **Part 2: Activating the "Wise Coach" (RAG Integration)**
        *   *(Tasks to be defined: Install and configure the Firebase Vector Search Extension, update the LangChain chain to include the retrieval step.)*
