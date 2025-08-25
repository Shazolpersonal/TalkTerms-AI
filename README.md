# TalkTerms AI: The Master Blueprint (v1.0)

**Project Status:** Phase 1 - Foundation & Landing Page

This document serves as the single source of truth for the TalkTerms AI project. All development, whether by human or AI agents, must adhere to the principles and specifications outlined herein.

---

## 1. Vibe & Philosophy

*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm. We are not just building a 'negotiation app'; we are building a trusted AI Negotiation Coach. It is designed to be a reliable partner during life's stressful moments, replacing fear with confidence and clarity.
*   **User Feeling:** The primary goal is to inspire trust. Upon first interaction, the user should feel: "Finally, someone is on my side to help me get what I deserve." The user interface (UI) must be clean, uncluttered, and professional.
*   **Design Philosophy:** "Calm Professionalism". This translates to soft, accessible colors, rounded corners (`8px` radius), and generous spacing. Avoid aggressive colors, sharp edges, or jarring animations.

---

## 2. Technical Architecture

*   **Application Type:** Web Application.
*   **Frontend:** React (bootstrapped with Vite) and styled with Tailwind CSS.
*   **Backend & Infrastructure:** Firebase Ecosystem.
    *   **Authentication:** Firebase Authentication (initially with Google & LinkedIn OAuth providers).
    *   **Database:** Firestore for storing user data, negotiation sessions, and generated scripts.
    *   **File Storage:** Cloud Storage for Firebase for secure user document uploads (e.g., PDF, DOCX).
*   **AI Layer:** Serverless Cloud Functions for Firebase will act as the intermediary to the Google AI (Gemini) API for all NLP and content generation tasks.

---

## 3. Core Design System (Initial)

*   **Primary Color (Action Blue):** `#4A90E2`
*   **Background Color (Clean Slate):** `#F5F7FA`
*   **Text Color (Primary):** `#1F2937`
*   **Typography:** 'Inter' font family (to be imported from Google Fonts). Body text default size: 16px.
*   **Component Style:** All interactive elements like buttons and input fields must have a `border-radius` of `8px`.

---

## 4. Development Roadmap

*   **Phase 1: Foundation & Landing Page (Current Focus)**
    *   **Task 1.1:** Set up the initial project structure using Vite with the React template. Integrate and configure Tailwind CSS.
    *   **Task 1.2:** Initialize Firebase in the project. Create a `firebase.config.js` file and set up environment variables for the Firebase configuration details.
    *   **Task 1.3:** Create the primary `LandingPage` component located at `/src/pages/LandingPage.jsx`. This page should follow the structural inspiration from `bargainbuddy.io` (Hero section, Features section, CTA), but must be implemented using our defined Design System.
    *   **Task 1.4:** Create two reusable core components: a `Button.jsx` and a `Navbar.jsx` inside the `/src/components/` directory.

*   **Phase 2: Authentication & Dashboard**
    *   *(Tasks to be defined)*

*   **Phase 3: Core AI Functionality**
    *   *(Tasks to be defined)*
