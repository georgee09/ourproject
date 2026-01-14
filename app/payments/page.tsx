"use client";
import React, { useMemo, useState } from "react";
import PaymentCard, { Payment } from "@/components/PaymentCard";

const samplePayments: Payment[] = [
  {
    id: "p1",
    bookingId: "B001",
    amount: 450,
    currency: "USD",
    date: "2026-01-13",
    method: "Credit Card",
    status: "completed",
    customerName: "John Smith",
    carModel: "Toyota Corolla",
  },
  {
    id: "p2",
    bookingId: "B002",
    amount: 680,
    currency: "USD",
    date: "2026-01-12",
    method: "Debit Card",
    status: "completed",
    customerName: "Sarah Johnson",
    carModel: "Honda Civic",
  },
  {
    id: "p3",
    bookingId: "B003",
    amount: 520,
    currency: "USD",
    date: "2026-01-11",
    method: "PayPal",
    status: "pending",
    customerName: "Mike Brown",
    carModel: "BMW X5",
  },
  {
    id: "p4",
    bookingId: "B004",
    amount: 320,
    currency: "USD",
    date: "2026-01-10",
    method: "Credit Card",
    status: "completed",
    customerName: "Emma Davis",
    carModel: "Mercedes GLC",
  },
  {
    id: "p5",
    bookingId: "B005",
    amount: 420,
    currency: "USD",
    date: "2026-01-09",
    method: "Bank Transfer",
    status: "failed",
    customerName: "Robert Wilson",
    carModel: "Audi Q7",
  },
  {
    id: "p6",
    bookingId: "B006",
    amount: 550,
    currency: "USD",
    date: "2026-01-08",
    method: "Credit Card",
    status: "completed",
    customerName: "Lisa Anderson",
    carModel: "Tesla Model 3",
  },
];

export default function PaymentsPage() {
  const [payments, setPayments] = useState(samplePayments);
  const [filter, setFilter] = useState<"all" | "completed" | "pending" | "failed">("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");

  const filtered = useMemo(() => {
    let result = payments;

    // Filter by status
    if (filter !== "all") {
      result = result.filter((p) => p.status === filter);
    }

    // Search by customer name or booking ID
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.customerName.toLowerCase().includes(q) || p.bookingId.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "date") {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "amount") {
      result = [...result].sort((a, b) => b.amount - a.amount);
    }

    return result;
  }, [payments, filter, search, sortBy]);

  const stats = useMemo(() => {
    const completed = payments.filter((p) => p.status === "completed");
    const pending = payments.filter((p) => p.status === "pending");
    const failed = payments.filter((p) => p.status === "failed");

    return {
      totalRevenue: completed.reduce((sum, p) => sum + p.amount, 0),
      completedCount: completed.length,
      pendingCount: pending.length,
      failedCount: failed.length,
    };
  }, [payments]);

  return (
    <main className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Payments</h1>
        <span className="text-sm text-gray-400">Total: {payments.length} transactions</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 uppercase">Total Revenue</p>
          <p className="text-2xl font-semibold text-white mt-2">
            ${stats.totalRevenue.toFixed(2)}
          </p>
        </div>
        <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 uppercase">Completed</p>
          <p className="text-2xl font-semibold text-green-400 mt-2">{stats.completedCount}</p>
        </div>
        <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 uppercase">Pending</p>
          <p className="text-2xl font-semibold text-yellow-400 mt-2">{stats.pendingCount}</p>
        </div>
        <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 uppercase">Failed</p>
          <p className="text-2xl font-semibold text-red-400 mt-2">{stats.failedCount}</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            Search:
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Customer name or booking #..."
              className="px-3 py-1.5 rounded bg-white/5 border border-gray-700 text-white text-sm"
            />
          </label>

          <div className="bg-white/5 border border-gray-700 rounded-lg p-1 flex items-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded text-sm ${filter === "all" ? "bg-purple-600 text-white" : "text-gray-300"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1 rounded text-sm ${filter === "completed" ? "bg-green-600 text-white" : "text-gray-300"}`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-3 py-1 rounded text-sm ${filter === "pending" ? "bg-yellow-600 text-white" : "text-gray-300"}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("failed")}
              className={`px-3 py-1 rounded text-sm ${filter === "failed" ? "bg-red-600 text-white" : "text-gray-300"}`}
            >
              Failed
            </button>
          </div>

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

      {/* Payments List */}
      <section className="space-y-3">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-400">No payments found</div>
        ) : (
          filtered.map((payment) => <PaymentCard key={payment.id} payment={payment} />)
        )}
      </section>
    </main>
  );
}
