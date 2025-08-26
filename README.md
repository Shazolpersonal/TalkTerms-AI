# TalkTerms AI: The Master Blueprint (v1.6)

**Project Status:** Phase 2 - Critical Bug Fix & Code Review

This document serves as the single source of truth for the TalkTerms AI project.

---

## 1. Vibe & Philosophy

*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm. We are building a trusted AI Negotiation Coach.
*   **User Feeling:** The primary goal is to build trust and provide a seamless, intuitive experience. The UI must be professional, reassuring, and feel alive.
*   **Design Philosophy:** "Dynamic Serenity". A clean, modern aesthetic ("Serene") combined with subtle, meaningful interactions ("Dynamic"). Key principles are Clarity, Hierarchy, Feedback, and purposeful Motion.

---

## 2. Technical Architecture

*   **Application Type:** Web Application.
*   **Frontend:** React (bootstrapped with Vite), Tailwind CSS v4, and React Router DOM.
*   **Backend & Infrastructure:** Firebase Ecosystem (Authentication, Firestore, Cloud Storage).
*   **AI Layer:** Serverless Cloud Functions connecting to the Google AI (Gemini) API.

---

## 3. Core Design System

*   **Primary Color (Action Blue):** `#4A90E2`
*   **Background Color (Clean Slate):** `#F5F7FA`
*   **Text Color (Primary):** `#1F2937` (High Contrast)
*   **Typography:** 'Inter' font family.
*   **Component Style:** `border-radius: 8px`. Interactive elements feature soft, layered `box-shadows`.
*   **Button Hierarchy:**
    *   **Primary Action:** Solid background (`#4A90E2`) with white text.
    *   **Secondary/Outline Action:** Transparent background with a strong border and text color (`#1F2937`) for high visibility.

---
## 4. Development Roadmap

*   **Phase 1: Foundation & Landing Page**
    *   All tasks are **(✓ Completed)**.

*   **Phase 2: Authentication, Dashboard & Refinement**
    *   **Task 2.6 - 2.8:** UI/UX Refinements. **(✓ Completed)**
    *   **Task 2.9 (Current Focus): Critical Bug Fix for Authentication & Code Cleanup.**
        *   **2.9.1 (Bug Fix):** The "Get Started" button in the `Navbar` is not completing the sign-in process. The Google Auth popup appears briefly and then disappears. This needs to be debugged and fixed to ensure a successful login and redirect to the dashboard.
        *   **2.9.2 (Code Review & Cleanup):** Conduct a self-review of all code related to the authentication flow (`Navbar.jsx`, `LoginPage.jsx`, `auth.js`, `AuthContext`). Remove any redundant, duplicate, or commented-out code to ensure the codebase is clean, efficient, and professional.

*   **Phase 3: Core AI Functionality**
    *   *(Tasks to be defined)*
