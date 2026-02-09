const Expense = require("../models/Expense");

// ADD EXPENSE
const addExpense = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    if (!amount || !category) {
      return res.status(400).json({ message: "Amount and category are required" });
    }

    const expense = await Expense.create({
      amount,
      category,
      description,
      date,
      user: req.user._id, // from auth middleware
    });

    res.status(201).json({
      message: "Expense added successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addExpense };


// GET USER EXPENSES
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { addExpense, getExpenses };

// DELETE EXPENSE
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // check ownership
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await expense.deleteOne();

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { addExpense, getExpenses, deleteExpense };
