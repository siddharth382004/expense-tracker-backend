const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");
const cors = require("cors");



dotenv.config();

const app = express();

// DB
connectDB();

// middleware
app.use(express.json());
app.use(cors());


// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});


const { protect } = require("./middleware/authMiddleware");

app.get("/api/test/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
