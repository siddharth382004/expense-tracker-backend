const BASE_URL = "https://expense-tracker-backend-jhrl.onrender.com";

// LOGIN
export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
};

// REGISTER
export const registerUser = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Registration failed");
  return data;
};

// GET EXPENSES
export const getExpenses = async (token) => {
  const res = await fetch(`${BASE_URL}/api/expenses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error("Failed to fetch expenses");
  return data;
};

// ADD EXPENSE
export const addExpense = async (token, amount, category) => {
  const res = await fetch(`${BASE_URL}/api/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount, category }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error("Failed to add expense");
  return data;
};

// DELETE EXPENSE
export const deleteExpense = async (token, id) => {
  const res = await fetch(`${BASE_URL}/api/expenses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to delete expense");
};
