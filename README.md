# 🏠 Room Finder Web App

A full-stack Room Finder web application built using *React (Vite)* and *Supabase* that allows users to find, add, and manage rental rooms securely.


## 🚀 Live Demo
[(https://room-finder-mu.vercel.app/)]

## ✨ Features
- Email-based authentication (Supabase Auth)
- Add rental rooms
- View available rooms
- View and manage “My Rooms”
- Delete rooms (only owner access)
- Secure Row Level Security (RLS)
- Responsive and clean UI


## 🛠️ Tech Stack
- Frontend: React + Vite
- Backend: Supabase (PostgreSQL, Auth, RLS)
- Hosting: Vercel


## 🔐 Security
- Environment variables stored securely
- Supabase Row Level Security enabled
- Users can manage only their own rooms


## 📦 Setup Instructions (Local)
```bash
git clone https://github.com/Sahiloddin/room-finder
cd room-finder
npm install
npm run dev
