
# 🎭 AURAA: Emotion-Aware AI Companion

> **A mirror for your soul. A voice for your thoughts. A digital companion that understands.**

AURAA (Adaptive User-Responsive Assistant) is a next-generation empathetic AI interface. Using advanced computer vision and real-time neural processing, AURAA doesn't just respond to your words—she responds to your feeling.

![Project Status](https://img.shields.io/badge/Status-Optimized-success?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-Next.js%2015-blue?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Graphics-React%20Three%20Fiber-lightblue?style=for-the-badge&logo=three.js)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green?style=for-the-badge&logo=fastapi)

---

## ✨ Core Neural Features

### 👤 Multi-Morph Avatar Selection
Choose between two distinct interfaces for your interaction:
- **Avatar 1 (Claudia)**: A high-fidelity, full-bodied humanoid rendered in a futuristic high-density blue wireframe. Features rigged skeletal animations and natural hand gestures.
- **Avatar 2 (Classic Bot)**: A nostalgically reactive core bot. Features a round facial sphere with multi-color emotive eyes and a dynamic mechanical mouth that reflects your state of mind.

### 🗣️ Proactive Personalized Interaction
- **Smart Greeting**: AURAA recognizes you upon arrival, greeting you by name with a human-like voice synthesis.
- **Dynamic Lip-Sync**: High-frequency visual data-pulses synchronize her movements with her voice for a convincing speech simulation.
- **Emotion-Reactive Lighting**: The digital environment and the avatar's internal glow shift dynamically (Teal for Happy, Red for Angry, Deep Blue for Sad) based on her perception of your mood.

### 🧠 Empathetic Neural Core
- **Real-time Computer Vision**: Powered by DeepFace and OpenCV to track 7 emotional states with stabilizing neural smoothing.
- **Llama-3 LLM Intelligence**: AURAA uses high-speed Groq inference to provide context-aware, empathetic, and supportive conversation.

---

## 🏗️ The Tech Stack

### Hyper-Modern Frontend (`/myapp`)
- **Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS with Glassmorphic Design Patterns
- **State**: React Hooks & Context API

### Scalable Backend (`/backend`)
- **Engine**: FastAPI (Python)
- **Vision**: OpenCV + DeepFace
- **Real-time**: Python-SocketIO for millisecond latency between cameras and shaders.
- **Intelligence**: Groq API integration (Llama-3 70B)

---

## 🏃‍♂️ Neural Initialization

### 1. Backend Activation
```bash
cd backend
# Setup venv and install requirements
python -m venv venv
# Activate & Install
pip install -r requirements.txt
# Launch Neural Engine
uvicorn main:app --reload --port 8000
```

### 2. Frontend Manifestation
```bash
cd myapp
npm install
npm run dev
```

---

## 📂 Neural Architecture
```
├── backend/                # FastAPI Empathy Engine
│   └── main.py             # Brain Entry Point
├── myapp/                  # Glassmorphic Workspace
│   ├── components/         # 3D Sceneries & UI Units
│   ├── hooks/              # useEmotionAI Neural Hook
│   └── public/             # Neural Assets (Claudia FBX, Classic GLB)
```

---

## 🤝 Protocol Contribution
Contributions to the empathetic future are welcome. Feel free to submit an issue or a neural pull request.

## 📄 License
Licensed under the [MIT License](LICENSE).
