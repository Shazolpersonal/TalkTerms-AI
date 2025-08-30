# TalkTerms AI: The Master Blueprint (v4.1)

**Project Status:** Phase 2 (Revisited) - Advanced Authentication Flow

This document serves as the single source of truth for the TalkTerms AI project.

---
## 1. Vibe & Philosophy
*   **User Experience (UX) First:** The sign-up and login process must be seamless, secure, and professional, offering users multiple convenient options.

---
## 2. Technical Architecture
*   **Frontend:** React, Tailwind CSS, React Router DOM.
*   **Backend & Infrastructure:** Firebase Ecosystem.
    *   **Authentication:** Firebase Authentication supporting **Google OAuth** and **Email/Password** methods.
    *   **Database:** Firestore for storing additional user information.
*   **AI Layer (Direct Integration):** To be implemented via Netlify Functions.

---
## 3. Development Roadmap
*   **Phase 1:** Foundation & Landing Page. **(✓ Completed)**
*   **Phase 2 (Revisited): Advanced Authentication (Current Focus)**
    *   **Task 2.10: Implement Multi-Method Authentication UI:**
        *   Create a unified, professional Authentication page at `/auth`.
        *   This page will have a tabbed or segmented interface for "Login" and "Sign Up".
        *   **Sign Up Form:** Fields for Name, Email, and Password.
        *   **Login Form:** Fields for Email and Password.
        *   Both forms will include a prominent "Login/Sign Up with Google" button as the primary alternative.
    *   **Task 2.11: Implement Firebase Email/Password Logic:**
        *   In `src/firebase/auth.js`, create new functions for:
            *   `signUpWithEmail(name, email, password)`
            *   `signInWithEmail(email, password)`
        *   On successful sign-up, create a corresponding user document in a "users" collection in Firestore to store their name.
    *   **Task 2.12: Refine User Flow & Routing:**
        *   The "Get Started" button in the `Navbar` should now navigate to the `/auth` page.
        *   Implement robust form validation and error handling for both forms (e.g., "Password is too weak," "User already exists").
        *   Ensure a seamless redirect to the `/dashboard` upon successful login or sign-up through any method.

*   **Phase 3: Direct AI Integration**
    *   *(Tasks to be defined)*```

---
