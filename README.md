# Expense Tracker

A full-stack MERN (MongoDB, Express, React, Node.js) application for tracking personal expenses. This application allows users to register, log in, and manage their expenses with ease.

## Features

- **User Authentication**: Secure user registration and login with JWT authentication
- **Expense Management**: Add, view, and manage personal expenses
- **Responsive Design**: Built with React and Tailwind CSS for a modern, responsive UI
- **Secure API**: Protected routes with middleware authentication
- **Database Integration**: MongoDB for persistent data storage

## Tech Stack

### Backend
- **Node.js** & **Express.js**: Server framework
- **MongoDB** & **Mongoose**: Database and ODM
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing and security
- **CORS**: Cross-Origin Resource Sharing
- **dotenv**: Environment variable management

### Frontend
- **React 19**: UI framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing (optional)

## Project Structure

```
EXPENSE-TRACKER/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── expenseController.js  # Expense management logic
├── middleware/
│   └── authMiddleware.js     # JWT verification middleware
├── models/
│   ├── User.js               # User data model
│   └── Expense.js            # Expense data model
├── routes/
│   ├── authRoutes.js         # Authentication endpoints
│   └── expenseRoutes.js      # Expense endpoints
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service layer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
├── server.js                 # Express server entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EXPENSE-TRACKER
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Configuration

1. **Create a `.env` file in the root directory**
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=5000
   JWT_SECRET=<your-secret-key>
   ```

2. **Frontend API Configuration**
   - Update `frontend/services/api.js` with your backend API URL

### Running the Application

#### Development Mode

**Terminal 1 - Start the backend server:**
```bash
npm run dev
```

**Terminal 2 - Start the frontend development server:**
```bash
cd frontend
npm run dev
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:5173`.

#### Production Mode

**Build the frontend:**
```bash
cd frontend
npm run build
```

**Start the server:**
```bash
npm start
```

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user

### Expense Routes (`/api/expenses`)
- `GET /` - Retrieve all expenses for the authenticated user
- `POST /` - Create a new expense
- `PUT /:id` - Update an expense
- `DELETE /:id` - Delete an expense

## Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Usage

1. **Register**: Create a new account with your email and password
2. **Login**: Log in with your credentials
3. **Add Expenses**: Create new expense entries with details
4. **View Expenses**: See all your tracked expenses
5. **Manage Expenses**: Edit or delete existing expense records

## Environment Variables

Create a `.env` file with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

## Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Protected API routes with authentication middleware
- CORS configuration for secure cross-origin requests

## License

ISC

## Author

Siddharth

---

For more information or issues, please refer to the individual package documentation or create an issue in the repository.
