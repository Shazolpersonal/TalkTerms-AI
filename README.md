# TalkTerms AI: The Master Blueprint (v3.0)

**Project Status:** Phase 3 - Core AI Engine Implementation

This document serves as the single source of truth for the TalkTerms AI project.

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
    *   **Static Knowledge Base (The "Wise Coach"):** Pinecone as the Vector Database for our Retrieval-Augmented Generation (RAG) system.
    *   **Dynamic Knowledge Access (The "Smart Analyst"):** Gemini's native "Function Calling" capability to access real-time data via external APIs or web searches.

---

## 3. Development Roadmap

*   **Phase 1 & 2:** Foundation, UI/UX, Authentication & Dashboard. **(✓ Completed)**

*   **Phase 3: The Negotiation Studio - The Engine (Current Focus)**
    *   **Goal:** To replace the mock data with a live, intelligent, and context-aware AI engine.
    *   **Task 3.1: Setup Backend Environment:**
        *   Initialize Firebase Cloud Functions (2nd Gen) in the project.
        *   Install necessary SDKs: `@google/generative-ai`, `@pinecone-database/pinecone`, `langchain`.
        *   Set up necessary secret keys (Gemini API Key, Pinecone API Key) in the function's environment variables.
    *   **Task 3.2: Implement the "Wise Coach" (RAG Flow):**
        *   Create a new HTTP-callable Cloud Function (`analyzeNegotiation`).
        *   Inside, create a basic LangChain chain that:
            1.  Takes user's text as input.
            2.  (For now) Skips the Vector DB query but is structured to add it later.
            3.  Sends a prompt to Gemini to analyze the text and generate a structured JSON response matching our frontend components (Scorecard, Key Levers, Talking Points, Draft Email).
    *   **Task 3.3: Connect Frontend to the Live AI Engine:**
        *   Update the `NegotiatePage.jsx` to call the live `analyzeNegotiation` Cloud Function.
        *   Update the `ResultsPage.jsx` to parse the JSON response from the AI and display the live data across all tabs, replacing all mock data.

*   **Phase 4: Advanced AI - Activating the "Smart Analyst"**
    *   *(Tasks to be defined: Implement Vector DB connection, Define and integrate Function Calling tools.)*
*   **Phase 3: The Negotiation Studio (Current Focus)**
    *   **Goal:** Build the end-to-end user experience for analyzing a negotiation document. We will use a **Frontend-First approach with mock data** to perfect the UI/UX before implementing the backend AI logic.

    *   **Part 1: The Stage (UI/UX Construction with Mock Data)**
        *   **Task 3.1: Create the Negotiation Input Page:**
            *   Create a new page at `/negotiate`, accessible from the "Start Your First Negotiation" button on the dashboard.
            *   Implement a clean, tabbed input interface: "Paste Text" (active), "Upload File" (disabled), "Use a Template" (disabled).
            *   Include a smart text area and a "Choose Your Goal" dropdown menu.
            *   Add a primary CTA button: "Analyze My Offer".
        *   **Task 3.2: Create the Results Page Structure:**
            *   Create a new page at `/negotiate/results` where users are directed after clicking "Analyze".
            *   Implement a tabbed interface for the results: "Overview", "Strategy", and "Draft".
        *   **Task 3.3: Build the "Overview" Tab with Mock Data:**
            *   Design and implement the "Offer Scorecard" and "Key Levers" components using static, hard-coded data. This is for visual and UX testing.
        *   **Task 3.4: Build the "Strategy" and "Draft" Tabs with Mock Data:**
            *   Implement the UI for "Talking Points," "Counter-Proposals," and the editable "Draft" email. All content will be hard-coded for now.

    *   **Part 2: The Engine (AI & Firebase Integration)**
        *   *(Tasks to be defined after UI/UX is finalized)*
