# TalkTerms AI: The Master Blueprint (v2.0)

**Project Status:** Phase 3 - Core AI Experience (The Negotiation Studio)

This document serves as the single source of truth for the TalkTerms AI project.

---

## 1. Vibe & Philosophy
*   **Core Vibe:** Empowering, Confident, Trustworthy, Calm.
*   **User Experience (UX) First:** Every feature must be designed to directly address a user's core psychological pain points: The Fog of Uncertainty, The Fear of Confrontation, and The Blank Page Syndrome. Our goal is a magical, intuitive, and reassuring user journey.
*   **Design Philosophy:** "Dynamic Serenity".

---

## 2. Technical Architecture
*   *(Unchanged)*
---
## 3. Core Design System
*   *(Unchanged)*
---
## 4. Development Roadmap

*   **Phase 1 & 2: Foundation, Landing Page, Auth & Dashboard**
    *   All tasks are **(✓ Completed)**.

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
