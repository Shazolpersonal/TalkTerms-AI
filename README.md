# TalkTerms AI: The Master Blueprint (v1.3)

**Project Status:** Phase 2 - Authentication & Dashboard

This document is the single source of truth for the TalkTerms AI project.

---

## 1. Vibe & Philosophy
*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm.
*   **Design Philosophy:** "Dynamic Serenity". A clean, premium aesthetic with subtle, meaningful interactions.

---

## 2. Technical Architecture
*   **Frontend:** React (Vite), Tailwind CSS v4, **React Router**.
*   **Backend & Infrastructure:** Firebase Ecosystem (Authentication, Firestore, etc.).
*   **AI Layer:** Serverless Cloud Functions connecting to the Google AI (Gemini) API.

---
... (Core Design System section remains unchanged) ...
---

## 4. Development Roadmap

*   **Phase 1: Foundation & Landing Page** **(✓ Completed)**
    *   ... (All previous tasks are completed) ...

*   **Phase 2: Authentication & Dashboard (Current Focus)**
    *   **Task 2.1: Setup Routing & Protected Routes:**
        *   Integrate `react-router-dom` into the project.
        *   Create a protected route system. Unauthenticated users visiting `/dashboard` should be redirected to the landing page (`/`).
    *   **Task 2.2: Build the Authentication Flow:**
        *   Create a simple, centered Login modal or page.
        *   Implement "Sign in with Google" and "Sign in with LinkedIn" functionality using Firebase Authentication.
        *   Upon successful login, redirect the user to `/dashboard`.
        *   Update the Navbar: When a user is logged in, it should show their profile picture/initials and a "Logout" button instead of "Login".
    *   **Task 2.3: Create the Dashboard Shell:**
        *   Create a new page component at `/src/pages/Dashboard.jsx`.
        *   The dashboard will have a simple layout: a clean Navbar and a main content area.
        *   The main area will display a welcome message (e.g., "Welcome, [User's Name]!") and a large button or card titled "Start Your First Negotiation".

*   **Phase 3: Core AI Functionality**
    *   *(Tasks to be defined)*
