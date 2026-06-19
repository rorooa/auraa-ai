# AURAA — Startup Project Overview

## 📖 Introduction
**AURAA** is an interactive AI application that detects a user's real-time emotions via webcam and responds with an empathetic 3D avatar. Built for the startup ecosystem, it combines emotional intelligence with cutting-edge web technologies to provide a unique companion experience.

---

## 🏗 Tech Stack

### Frontend (Next.js)
- **Framework**: Next.js 15+ (App Router, TypeScript)
- **3D Engine**: Three.js (React Three Fiber)
- **Styling**: Tailwind CSS & Framer Motion
- **Sensing**: Web Speech API & Socket.io-client

### Backend (FastAPI)
- **Server**: FastAPI & Uvicorn (Asynchronous Python)
- **Emotion Sensing**: DeepFace & OpenCV (Facial analysis)
- **Conversation**: Groq API (Llama-3 models)
- **Real-time**: Socket.IO
- **Database**: Firestore (NoSQL) & Firebase Auth

### Business Layer
- **Payments**: Razorpay (Pro/Premium subscriptions)
- **Growth**: Built-in Review/Feedback & Testimonial wall
- **Productivity**: Proactive Trigger System & Neural Insights

---

## 🧩 Architecture Flow
1.  **Sight**: Webcam capture -> Socket.IO -> `emotion.py` (DeepFace) -> Real-time mood state.
2.  **Sound**: User speaks -> `Web Speech API` -> Text -> Backend -> `chatbot_llm.py` (Groq).
3.  **Synthesis**: LLM generates response -> `personality_engine.py` adds flair -> `AIAvatar` animates/speaks.
4.  **Growth**: Session ends -> `FeedbackModal` prompts rating -> Testimonial wall updates.

---

## 📂 Key File Structure

### Backend (`/backend`)
| File | Description |
|---|---|
| `main.py` | Entry point & Router registration |
| `emotion.py` | Facial analysis logic |
| `chatbot_llm.py` | Groq AI interface |
| `payments.py` | Razorpay integration |
| `reviews.py` | Feedback system API |
| `memory_engine.py` | User relationship tracking |

### Frontend (`/myapp`)
| File | Description |
|---|---|
| `app/companion/page.tsx` | Main interactive interface |
| `app/reviews/page.tsx` | Public testimonials wall |
| `components/AIAvatar.tsx` | 3D Character logic |
| `components/FeedbackModal.tsx` | Premium review UI |
| `next.config.ts` | API rewrites & workspace config |

---

## 🚀 Setup & Usage
1.  **Backend**: `pip install -r requirements.txt` -> `uvicorn main:app --reload`
2.  **Frontend**: `npm install` -> `npm run dev`
3.  **Env Vars**: Set `GROQ_API_KEY`, `RAZORPAY_KEY_*`, and Firebase credentials.

---

## 🧭 Simple User Guide (For Non-Technical Users)

Welcome to **AURAA**! This is your personal, emotionally intelligent AI companion. Here is how you can use the app:

### 1. The Home Screen
When you first open the app, you will see the main title "AURAA" and a menu with several buttons:
*   **Talk with AURAA:** This is the main feature. Click this to start a real-time conversation with your AI companion.
*   **Aura Rooms:** Enter specialized virtual rooms (like a Zen garden or a sci-fi lounge) to relax and chat.
*   **Emotion Mirror:** A special tool that analyzes your face through the webcam to show you real-time data about your current mood.
*   **Confessions:** A private space to safely vent and share your thoughts anonymously.
*   **Shapeshifter:** Have some fun transforming your voice or the AI's persona!

### 2. Choosing Your AI Avatar
If you click **Talk with AURAA**, you will be asked to pick a "Neural Interface" (a body for your AI):
*   **Bot Core (🤖):** A classic, holographic-style robot interface.
*   **AI NextGen (🧬):** A high-quality, realistic 3D human-like avatar that moves its lips when it speaks.
*   **Custom Core (👤):** An option to create or upload a completely custom 3D avatar using a selfie!

### 3. Chatting with AURAA
Once you pick an avatar, the camera will turn on (to read your facial emotions) and the AI will greet you.
*   **To talk:** Type your message in the "Transmit thought..." box at the bottom right, or click the **Microphone icon** 🎤 to use your voice!
*   **To go back:** Click the **"← Home"** button at the top left of the screen at any time.
*   **Extras:** Use the floating buttons on the bottom right to rate your experience (⭐), view your current emotional Aura Card (🎴), or Export a Video Clip (🎬) of your chat.
