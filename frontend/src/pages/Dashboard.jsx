import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { getExpenses, addExpense, deleteExpense } from "../services/api";

export default function Dashboard({ token, onLogout }) {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const loadExpenses = async () => {
    try {
      const data = await getExpenses(token);
      setExpenses(data);
    } catch {
      setError("Unable to load expenses");
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addExpense(token, amount, category);
      setAmount("");
      setCategory("");
      loadExpenses();
    } catch {
      setError("Failed to add expense");
    }
  };

  const handleDelete = async (id) => {
    await deleteExpense(token, id);
    loadExpenses();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Expense Dashboard</h2>
          <button
            onClick={onLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleAdd} className="space-y-3 mb-6">
          <Input
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <Input
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Food, Travel, etc."
          />
          <Button type="submit">Add Expense</Button>
        </form>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <ul className="space-y-2">
          {expenses.map((exp) => (
            <li
              key={exp._id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>
                ₹{exp.amount} — {exp.category}
              </span>
              <button
                onClick={() => handleDelete(exp._id)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
