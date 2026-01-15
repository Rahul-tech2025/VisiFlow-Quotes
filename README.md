# VisiFlow Quotes 🌌

A beautiful, cosmic-themed quote generator application that provides quotes based on your mood. Features a stunning UI with parallax effects, animations, and soundscapes.

![VisiFlow Preview](https://visiflow-quotes-rahul.vercel.app/favicon.ico)

## 🚀 Live Demo
**[https://visiflow-quotes-rahul.vercel.app](https://visiflow-quotes-rahul.vercel.app)**

## ✨ Features
-   **Mood-based Quotes**: Select from Happy, Sad, Stressed, Angry, Neutral, and Motivational.
-   **Immersive Audio**: Background space lofi music and sound effects.
-   **Visual Effects**:
    -   Parallax mouse movement.
    -   Shooting stars and meteors.
    -   Dynamic nebula backgrounds.
    -   Glassmorphism UI.
-   **Dark/Light Mode**: Toggle between cosmic dark mode and clean light mode.
-   **Share & Save**: Share quotes directly to WhatsApp or save them as images.

## 🛠️ Tech Stack
-   **Frontend**: HTML5, Vanilla JavaScript, TailwindCSS.
-   **Backend**: Node.js, Express.js (Serverless on Vercel), Helmet, Express Rate Limit.
-   **Deployment**: Vercel (Monorepo structure).

## 📦 Setup Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rahul-tech2025/VisiFlow-Quotes.git
    cd VisiFlow-Quotes
    ```

2.  **Install Frontend Dependencies**
    ```bash
    cd frontend
    npm install
    ```

3.  **Run Frontend**
    ```bash
    npm run build
    npx serve .
    ```
    *Note: The `build` command compiles TailwindCSS.*

4.  **Backend (Optional for local)**
    The frontend is configured to talk to the live Vercel backend. To run backend locally:
    ```bash
    cd ../backend
    npm install
    node index.js
    ```

## ☁️ Deployment
This project is configured for **Vercel**.
-   `vercel.json` handles the routing between frontend and backend.
-   Just push to main or run `vercel --prod`.
