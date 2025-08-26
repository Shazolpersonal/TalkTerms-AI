# TalkTerms AI: The Master Blueprint (v1.2)

**Project Status:** Phase 1 - Landing Page Design Polish

This document serves as the single source of truth for the TalkTerms AI project. All development must adhere to the principles and specifications outlined herein.

---

## 1. Vibe & Philosophy

*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm.
*   **User Feeling:** Build trust and alleviate the user's core fear: "Does this really work?". The UI must be professional, reassuring, and feel alive.
*   **Design Philosophy:** "Dynamic Serenity". A clean, modern aesthetic ("Serene") combined with subtle, meaningful interactions ("Dynamic"). Our design should feel premium, fluid, and intuitive.
    *   **Core Principles:**
        *   **Clarity:** No visual clutter. Every element must have a purpose.
        *   **Hierarchy:** Guide the user's eye naturally to the most important elements (like the primary CTA).
        *   **Feedback:** Interactive elements should provide subtle visual feedback (e.g., hover states).
        *   **Motion:** Animations should be purposeful, guiding the user and adding delight without being distracting. Use gentle fades and transforms.

---

## 2. Technical Architecture

*   **Frontend:** React (Vite) & Tailwind CSS v4.
*   **Backend & Infrastructure:** Firebase Ecosystem.
*   **AI Layer:** Serverless Cloud Functions connecting to the Google AI (Gemini) API.

---

## 3. Core Design System

*   **Primary Color (Action Blue):** `#4A90E2`
*   **Background Color (Clean Slate):** `#F5F7FA`
*   **Text Color (Primary):** `#1F2937`
*   **Typography:** 'Inter' font family.
*   **Component Style:** `border-radius: 8px`. Interactive elements will feature soft, layered `box-shadows`.

---

## 4. Development Roadmap

*   **Phase 1: Foundation & Landing Page**
    *   **Task 1.1 - 1.2:** Project Foundation & Firebase Init. **(✓ Completed)**
    *   **Task 1.3 - 1.7:** Initial Landing Page Construction. **(✓ Completed)**
    *   **Task 1.8 (Current Focus): Design Polish & Refinement.** This task is dedicated to elevating the visual and interactive quality of the landing page.
        *   **1.8.1: Improve Visual Hierarchy:** Convert the primary Hero CTA to a solid button. Apply a subtle text gradient to the main headline.
        *   **1.8.2: Implement Motion & Interactivity:** Add a "fade-in-on-scroll" animation to all major sections. Add soft `box-shadows` and hover effects to interactive elements (buttons, tabs, links).
        *   **1.8.3: Enhance Ambiance:** Integrate a very subtle, low-density, slow-moving particle animation into the Hero Section's background **only**. This must be performance-optimized.

*   **Phase 2: Authentication & Dashboard**
    *   *(Tasks to be defined)*
