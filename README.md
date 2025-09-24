# 🤖 AI Code Reviewer (English + Hinglish Mode)

An AI-powered **code review website** that helps developers get quick feedback on their code.  
This project uses **Google Gemini API** to analyze and review code, providing suggestions in **two modes**:
- ✅ **English** (formal & clear review)  
- 😎 **Hinglish (Informal)** (fun, friendly, easy-to-understand review like a teammate)

---

## 🚀 Features
- ✨ Paste or write your code in an editor (with syntax highlighting).  
- 🤖 Get AI-powered code reviews using **Gemini API**.  
- ✅ Reviews highlight mistakes ❌ and good practices ✅.  
- 🔀 Switch between **English** and **Informal Hinglish** explanations.  
- 🎨 Clean UI with live markdown rendering.

---

## 🛠️ Tech Stack
### Frontend
- ⚛️ React + Vite  
- ✍️ `react-simple-code-editor` + PrismJS (syntax highlighting)  
- 📄 `react-markdown` + `rehype-highlight` (markdown rendering)  
- 🎨 CSS (custom styling)

### Backend
- 🌐 Express.js  
- 🔑 Google Generative AI SDK (`@google/generative-ai`)  
- 🔒 dotenv (for API keys)  
- 🛡️ CORS enabled  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
