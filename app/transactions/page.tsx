"use client";
import React, { useMemo, useState } from "react";
import TransactionCard, { Transaction } from "@/components/TransactionCard";

const sampleTransactions: Transaction[] = [
  {
    id: "t1",
    type: "income",
    category: "booking",
    description: "Booking payment from John Smith",
    amount: 450,
    currency: "USD",
    date: "2026-01-13",
    reference: "B001",
  },
  {
    id: "t2",
    type: "expense",
    category: "maintenance",
    description: "Oil change and filter replacement",
    amount: 120,
    currency: "USD",
    date: "2026-01-13",
  },
  {
    id: "t3",
    type: "income",
    category: "booking",
    description: "Booking payment from Sarah Johnson",
    amount: 680,
    currency: "USD",
    date: "2026-01-12",
    reference: "B002",
  },
  {
    id: "t4",
    type: "expense",
    category: "fuel",
    description: "Fuel purchase for fleet",
    amount: 250,
    currency: "USD",
    date: "2026-01-12",
  },
  {
    id: "t5",
    type: "income",
    category: "booking",
    description: "Booking payment from Mike Brown",
    amount: 520,
    currency: "USD",
    date: "2026-01-11",
    reference: "B003",
  },
  {
    id: "t6",
    type: "expense",
    category: "insurance",
    description: "Monthly vehicle insurance",
    amount: 800,
    currency: "USD",
    date: "2026-01-11",
  },
  {
    id: "t7",
    type: "expense",
    category: "staff",
    description: "Staff salary payment",
    amount: 3000,
    currency: "USD",
    date: "2026-01-10",
  },
  {
    id: "t8",
    type: "income",
    category: "booking",
    description: "Booking payment from Emma Davis",
    amount: 320,
    currency: "USD",
    date: "2026-01-10",
    reference: "B004",
  },
  {
    id: "t9",
    type: "expense",
    category: "refund",
    description: "Customer refund - canceled booking",
    amount: 150,
    currency: "USD",
    date: "2026-01-09",
  },
  {
    id: "t10",
    type: "income",
    category: "booking",
    description: "Booking payment from Robert Wilson",
    amount: 420,
    currency: "USD",
    date: "2026-01-09",
    reference: "B005",
  },
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");

  const categories = ["all", "booking", "maintenance", "fuel", "insurance", "staff", "refund", "other"];

  const filtered = useMemo(() => {
    let result = transactions;

    // Filter by type
    if (filter !== "all") {
      result = result.filter((t) => t.type === filter);
    }

    // Filter by category
    if (category !== "all") {
      result = result.filter((t) => t.category === category);
    }

    // Sort
    if (sortBy === "date") {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "amount") {
      result = [...result].sort((a, b) => b.amount - a.amount);
    }

    return result;
  }, [transactions, filter, category, sortBy]);

  const stats = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    const net = income - expense;

    return { income, expense, net };
  }, [transactions]);

  return (
    <main className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Transactions</h1>
        <span className="text-sm text-gray-400">Total: {transactions.length} transactions</span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 uppercase">Total Income</p>
          <p className="text-2xl font-semibold text-green-400 mt-2">
            +USD {stats.income.toFixed(2)}
          </p>
        </div>
        <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 uppercase">Total Expense</p>
          <p className="text-2xl font-semibold text-red-400 mt-2">
            -USD {stats.expense.toFixed(2)}
          </p>
        </div>
        <div className={`bg-white/5 border rounded-lg p-4 ${stats.net >= 0 ? "border-green-700" : "border-red-700"}`}>
          <p className="text-xs text-gray-400 uppercase">Net Balance</p>
          <p className={`text-2xl font-semibold mt-2 ${stats.net >= 0 ? "text-green-400" : "text-red-400"}`}>
            {stats.net >= 0 ? "+" : "-"}USD {Math.abs(stats.net).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Type Filter */}
          <div className="bg-white/5 border border-gray-700 rounded-lg p-1 flex items-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded text-sm ${filter === "all" ? "bg-purple-600 text-white" : "text-gray-300"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("income")}
              className={`px-3 py-1 rounded text-sm ${filter === "income" ? "bg-green-600 text-white" : "text-gray-300"}`}
            >
              Income
            </button>
            <button
              onClick={() => setFilter("expense")}
              className={`px-3 py-1 rounded text-sm ${filter === "expense" ? "bg-red-600 text-white" : "text-gray-300"}`}
            >
              Expense
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-1 rounded bg-white/5 border border-gray-700 text-white text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-sm text-gray-300 ml-auto">
            Sort by:
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "amount")}
              className="px-3 py-1 rounded bg-white/5 border border-gray-700 text-white text-sm"
            >
              <option value="date">Date (Newest)</option>
              <option value="amount">Amount (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <section className="space-y-3">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-400">No transactions found</div>
        ) : (
          filtered.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        )}
      </section>
    </main>
  );
}
