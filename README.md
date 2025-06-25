---
```markdown
# 💰 Super Pay

A modern peer-to-peer money transfer web app that allows users to send, receive, and track transactions securely — with support for dual currency balance and a sleek dark mode interface.

---

## ✨ Features

- 🔐 **JWT Authentication** – Secure signup and login system
- 💸 **Send Money** – Transfer money to another user using their email
- 📔 **Transaction History** – View all your past sent and received transactions
- 💵 **Dual Currency Balance** – See your balance in two currencies
- 🌙 **Dark Mode** – Switch between light and dark themes

---

## 🖥️ Tech Stack

### ⚙️ Backend

- Node.js + Express.js
- MongoDB + Mongoose
- JWT for authentication
- JOD (Joi or similar) for request validation

### 🎨 Frontend

- React.js
- Tailwind CSS
- Context API for global state
- React Router DOM for routing

---

## 📂 Project Structure

```

super-pay/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx

````

---

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
npm install
npm run dev
````

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 📌 Pages & User Flow

* `/signup` – Register a new user
* `/login` – Authenticate and receive JWT
* `/dashboard` – View balance and recent activity
* `/send` – Transfer money via email
* `/history` – See full transaction history
* `/settings` – Theme switch, logout, etc.

---

## 📸 Screenshots (optional)

> Add GIFs or screenshots here for visual preview (dashboard, send page, dark mode, etc.)

---

## 🧠 Future Features

* Live currency conversion API integration
* Transaction email notifications
* Admin panel for user management
* Mobile PWA version
* PDF export for transaction history

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request to discuss improvements or report bugs.

---

## 🔗 Connect

Feel free to connect with the maintainer:

* [LinkedIn](#)
* [Twitter](#)
* [Portfolio](#)

---

> **Super Pay** – Secure, seamless, and smart money transfer, made for the modern web.

```

---
