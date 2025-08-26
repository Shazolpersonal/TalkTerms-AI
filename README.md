# TalkTerms AI: The Master Blueprint (v1.5)

**Project Status:** Phase 2 - UI/UX Refinement & Core Logic Implementation

This document serves as the single source of truth for the TalkTerms AI project. All development must adhere to the principles and specifications outlined herein.

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
    *   **Task 1.1 - 1.9:** All foundational setup, page construction, and design polish tasks are **(✓ Completed)**.

*   **Phase 2: Authentication, Dashboard & Refinement (Current Focus)**
    *   **Task 2.1 - 2.5:** Initial Auth & Dashboard setup. **(✓ Completed)**
    *   **Task 2.6: Consolidate Authentication Flow:**
        *   In the `Navbar`, merge the "Login" and "Sign Up" buttons into a single, primary action button labeled **"Get Started"**.
        *   This "Get Started" button will now be the main entry point for new and returning users, directly initiating the Google sign-up/login process.
    *   **Task 2.7: Refine Dashboard UI/UX:**
        *   Remove all redundant elements. The `Navbar` should be the single source for user info and logout. Remove the duplicate "Welcome, [Name]!" message and the second "Logout" button from the main dashboard body.
        *   The dashboard body should be clean, focusing only on the primary action: "Start Your First Negotiation".
    *   **Task 2.8: Activate the "Glimpse" Button:**
        *   Make the "Get Your Glimpse" button on the `LandingPage` functional.
        *   When clicked, it should smoothly scroll the user down to the "Glimpse of the Power" section of the page.

*   **Phase 3: Core AI Functionality**
    *   *(Tasks to be defined)*
