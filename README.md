# TalkTerms AI: The Master Blueprint (v1.1)

**Project Status:** Phase 1 - Landing Page Construction

This document serves as the single source of truth for the TalkTerms AI project. All development, whether by human or AI agents, must adhere to the principles and specifications outlined herein.

---

## 1. Vibe & Philosophy

*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm. We are not just building a 'negotiation app'; we are building a trusted AI Negotiation Coach.
*   **User Feeling:** The primary goal is to build trust and alleviate the user's core fear: "Does this really work?". The UI must be clean, professional, and reassuring.
*   **Design Philosophy:** "Serene Digitalism". A clean, modern aesthetic with a human touch. This means generous whitespace, soft shadows, beautiful typography, and subtle, meaningful animations. We will utilize a "Bento Grid" layout for a structured yet visually appealing presentation.

---

## 2. Technical Architecture

*   **Application Type:** Web Application.
*   **Frontend:** React (bootstrapped with Vite) and styled with Tailwind CSS.
*   **Backend & Infrastructure:** Firebase Ecosystem.
*   **AI Layer:** Serverless Cloud Functions for Firebase connecting to the Google AI (Gemini) API.

---

## 3. Core Design System (Initial)

*   **Primary Color (Action Blue):** `#4A90E2`
*   **Background Color (Clean Slate):** `#F5F7FA`
*   **Text Color (Primary):** `#1F2937`
*   **Typography:** 'Inter' font family.
*   **Component Style:** All interactive elements must have a `border-radius` of `8px`.

---

## 4. Development Roadmap

*   **Phase 1: Foundation & Landing Page (Current Focus)**
    *   **Task 1.1:** Setup project structure with Vite, React, and Tailwind CSS. **(✓ Completed)**
    *   **Task 1.2:** Initialize Firebase in the project. **(✓ Completed)**
    *   **Task 1.3:** Create Core Reusable Components:
        *   `/src/components/Navbar.jsx`: A clean navigation bar with a logo placeholder and Login/Sign Up buttons.
        *   `/src/components/Button.jsx`: A prop-driven, reusable button adhering to the Design System.
    *   **Task 1.4:** Build Landing Page Structure & Hero Section:
        *   Create the main file at `/src/pages/LandingPage.jsx`.
        *   Implement the Hero Section with the headline: **"Confidence is your best counteroffer. We help you build it."** and a primary CTA button.
    *   **Task 1.5:** Build the "How It Works" & "Glimpse" (Interactive Mockup) Sections:
        *   **How It Works:** A simple, 3-step visual guide (e.g., Upload -> Analyze -> Negotiate).
        *   **Glimpse (Mockup):** An interactive section with three tabs: "Job Offer", "Freelance Contract", "Business Deal". Clicking a tab will show a pre-defined "Before" text and an AI-annotated "After" view. **This is a front-end mockup; no live AI call is needed.**
    *   **Task 1.6:** Build the "Confidence Corner" (Social Proof) & FAQ Sections:
        *   **Confidence Corner:** A section for testimonials and trust-building statistics (use placeholders).
        *   **FAQ:** A section answering 3-4 key user questions (e.g., "Is my data secure?").
    *   **Task 1.7:** Build the Footer & Final Assembly:
        *   Implement a simple, clean footer.
        *   Update `App.jsx` to render the `LandingPage.jsx` component.

*   **Phase 2: Authentication & Dashboard**
    *   *(Tasks to be defined)*
