# Full Stack App Setup Guide

This project contains a **FastAPI backend** and a **React frontend**.

---

## Backend (FastAPI)

**Location:** `backend/`

### 1. Install Python dependencies
```sh
cd backend
pip install -r requirements.txt
```

### 2. Start the backend server
```sh
uvicorn server:app --reload
```
- The backend will run at [http://127.0.0.1:8000](http://127.0.0.1:8000)
- API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## Frontend (React)

**Location:** `frontend/`

### 1. Install Node dependencies
```sh
cd frontend
npm install
```

### 2. Start the frontend server
```sh
npm start
```
- The frontend will run at [http://localhost:3000](http://localhost:3000)

---

## Usage
- The frontend will communicate with the backend API.
- Make sure both servers are running for full functionality.

---

## Troubleshooting
- If you see deprecation warnings during install, you can usually ignore them for development.
- If you get a 404 at `/`, try `/api/` or `/docs` on the backend.
- If ports are busy, stop other apps or change the port in the start command (see Uvicorn/React docs).

---

## Project Structure
```
app-main/
  backend/    # FastAPI backend
  frontend/   # React frontend
```

---

## License
MIT (or specify your license)
