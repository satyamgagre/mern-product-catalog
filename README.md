<h1 align="center">📝 ThoughtPad ✨</h1>
<parameter name="center">Your Digital Notebook</h3>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Click_Here-success?style=for-the-badge)](https://mern-product-catalog-c8ha.onrender.com)

</div>

---

## 🌟 Highlights

- 🧱 Built with MERN Stack (MongoDB, Express, React, Node.js)
- 📝 CRUD Notes App – Create, Read, Update & Delete notes
- ⚙️ REST API with clean backend structure
- 🎨 Modern & Responsive UI
- 🚀 Production-ready with clear setup instructions

---

## 📸 Screenshots

<div align="center">

### 🏠 Homepage
*View all your notes in an organized dashboard*

![Homepage View](/frontend/public/ThoughtPad-HomePage.png)

---

### ➕ Create Note Page
*Add new notes with title and description*

![Create Note Page](/frontend/public/ThoughtPad-CreatePage.png)

---

### ✏️ Update Note Page
*Edit and update your existing notes*

![Update Note Page](/frontend/public/ThoughtPad-DetailPage.png)

---

### 📱 Responsive Design
*Seamless experience across all devices*

![Mobile View](/frontend/public/ThoughtPad-MobileView.jpg)

</div>

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React.js** - Modern UI Library
- 🎨 **Tailwind CSS** - Utility-First CSS Framework
- 🔄 **Axios** - HTTP Client for API Requests
- 🎭 **React Icons** - Beautiful Icon Library

### Backend
- 🟢 **Node.js** - JavaScript Runtime
- 🚂 **Express.js** - Web Application Framework
- 🍃 **MongoDB** - NoSQL Database
- 🔴 **Redis (Upstash)** - Rate Limiting & Caching
- 🛡️ **Express Rate Limit** - API Protection

### Development Tools
- 📦 **npm** - Package Manager
- 🔧 **Nodemon** - Auto-Restart Development Server
- 🎯 **ESLint** - Code Quality Tool

---

## ⚙️ Environment Variables Setup

### Backend Configuration (`/backend/.env`)

```env
# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# Upstash Redis Configuration
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Application Environment
NODE_ENV=development

# Server Port (Optional)
PORT=5000
```

### Frontend Configuration (`/frontend/.env`)

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api

# Or for production
# VITE_API_URL=https://your-backend-url.com/api
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** account (Atlas recommended)
- **Upstash Redis** account

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/thoughtpad.git
cd thoughtpad
```

#### 2️⃣ Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your environment variables
# (See Environment Variables Setup section above)

# Start the development server
npm run dev
```

The backend server will start on `http://localhost:5000`

#### 3️⃣ Setup Frontend

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file and add your environment variables
# (See Environment Variables Setup section above)

# Start the development server
npm run dev
```

The frontend application will start on `http://localhost:5173`

---

## 📦 Available Scripts

### Backend Scripts

```bash
npm run dev        # Start development server with nodemon
npm start          # Start production server
npm run build      # Build for production (if applicable)
```

### Frontend Scripts

```bash
npm run dev        # Start Vite development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 🌐 API Endpoints

### Notes Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/:id` | Get a single note by ID |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/:id` | Update an existing note |
| `DELETE` | `/api/notes/:id` | Delete a note |

### Rate Limiting

- **Limit:** 100 requests per 15 minutes per IP
- **Response:** 429 Too Many Requests when limit exceeded

---

## 📚 Key Features Explained

### ✅ CRUD Operations
- **Create:** Add new notes with title and description
- **Read:** View all notes or individual note details
- **Update:** Edit existing notes with ease
- **Delete:** Remove notes you no longer need

### 🔐 Rate Limiting
ThoughtPad implements rate limiting using **Upstash Redis** to prevent abuse and ensure fair usage. This protects the API from excessive requests and maintains optimal performance.

### 📱 Responsive Design
Built with a mobile-first approach, ThoughtPad works seamlessly across all devices. The UI adapts beautifully from smartphones to large desktop screens.

### 🎨 Clean Architecture
- Separation of concerns with MVC pattern
- Modular and maintainable code structure
- Centralized error handling
- Environment-based configuration

---

## 📖 Learning Resources

This project covers:

- ✅ **MERN Stack Development** - Complete full-stack workflow
- ✅ **RESTful API Design** - HTTP methods and status codes
- ✅ **MongoDB & Mongoose** - NoSQL database operations
- ✅ **React Hooks** - useState, useEffect, and custom hooks
- ✅ **Async JavaScript** - Promises and async/await
- ✅ **Rate Limiting** - Production-ready API protection
- ✅ **Environment Variables** - Secure configuration management
- ✅ **Deployment** - Taking your app live

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@satyamgagre](https://github.com/satyamgagre)
- LinkedIn: [Satyam Gagre](https://linkedin.com/in/satyamgagre)
- Instagram: [@satya__gagre](https://instagram.com/satya__gagre)

---

<div align="center">

**Made with 🤍 by [SA8YA](https://github.com/satyamgagre)**

</div>
