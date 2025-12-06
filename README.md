# TodoApp Backend

This is the backend service for the **TodoApp**, built with Node.js and Express.  
It provides RESTful APIs for managing tasks, users, and authentication.

---

## 🚀 Features
- Modular project structure (controllers, routes, models, middleware)
- REST API endpoints for CRUD operations on todos
- User authentication with JWT
- Environment variables managed via `.env`
- MongoDB integration for persistent storage

---

## 📂 Project Structure
backend/ ├── config/          # Database and app configuration 
├── controllers/     # Request handlers 
├── middleware/      # Authentication & validation logic 
├── models/          # Mongoose schemas 
├── routes/          # API routes 
├── server.js        # Entry point 
├── .env             # Environment variables (ignored in Git) 
└── package.json     # Dependencies and scripts


---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/adityagupta7711/todoApp-backend.git
   cd todoApp-backend
   
2.npm install
3.PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
4.npm start
- The backend will run on http://localhost:5000.
