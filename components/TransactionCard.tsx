"use client";
import React from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export type Transaction = {
  id: string;
  type: "income" | "expense";
  category: string;
  description: string;
  amount: number;
  currency: string;
  date: string;
  reference?: string;
};

function getTypeIcon(type: string) {
  if (type === "income") {
    return <ArrowDownLeft size={18} className="text-green-400" />;
  }
  return <ArrowUpRight size={18} className="text-red-400" />;
}

function getTypeColor(type: string) {
  if (type === "income") {
    return "bg-green-900/20 text-green-200";
  }
  return "bg-red-900/20 text-red-200";
}

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    booking: "bg-blue-900/30 text-blue-300",
    maintenance: "bg-orange-900/30 text-orange-300",
    fuel: "bg-yellow-900/30 text-yellow-300",
    insurance: "bg-purple-900/30 text-purple-300",
    staff: "bg-pink-900/30 text-pink-300",
    refund: "bg-red-900/30 text-red-300",
    other: "bg-gray-900/30 text-gray-300",
  };
  return colors[category] || colors.other;
}

export default function TransactionCard({ transaction }: { transaction: Transaction }) {
  return (
    <div className="bg-linear-to-r from-purple-900/60 to-transparent border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-white/8 transition">
      <div className="flex items-center gap-4 flex-1">
        <div className="shrink-0">{getTypeIcon(transaction.type)}</div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <h4 className="text-sm font-semibold text-white">{transaction.description}</h4>
            {transaction.reference && (
              <span className="text-xs text-gray-400">Ref: {transaction.reference}</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`inline-block text-xs px-2 py-0.5 rounded ${getCategoryColor(transaction.category)}`}>
              {transaction.category.charAt(0).toUpperCase() + transaction.category.slice(1)}
            </span>
            <span className="text-xs text-gray-500">{transaction.date}</span>
          </div>
        </div>
      </div>

      <div className="text-right">
        <p className={`text-sm font-semibold ${transaction.type === "income" ? "text-green-400" : "text-red-400"}`}>
          {transaction.type === "income" ? "+" : "-"}
          {transaction.currency} {transaction.amount.toFixed(2)}
        </p>
        <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${getTypeColor(transaction.type)}`}>
          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
        </span>
      </div>
    </div>
  );
}
