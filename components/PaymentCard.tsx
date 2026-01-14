"use client";
import React from "react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

export type Payment = {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  date: string;
  method: string;
  status: "completed" | "pending" | "failed";
  customerName: string;
  carModel: string;
};

function getStatusIcon(status: string) {
  switch (status) {
    case "completed":
      return <CheckCircle2 size={18} className="text-green-400" />;
    case "pending":
      return <Clock size={18} className="text-yellow-400" />;
    case "failed":
      return <XCircle size={18} className="text-red-400" />;
    default:
      return null;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-900/20 text-green-200";
    case "pending":
      return "bg-yellow-900/20 text-yellow-200";
    case "failed":
      return "bg-red-900/20 text-red-200";
    default:
      return "bg-gray-900/20 text-gray-200";
  }
}

export default function PaymentCard({ payment }: { payment: Payment }) {
  return (
    <div className="bg-linear-to-r from-purple-900/60 to-transparent border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-white/8 transition">
      <div className="flex items-center gap-4 flex-1">
        <div className="shrink-0">{getStatusIcon(payment.status)}</div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <h4 className="text-sm font-semibold text-white">{payment.customerName}</h4>
            <span className="text-xs text-gray-400">Booking #{payment.bookingId}</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{payment.carModel}</p>
          <p className="text-xs text-gray-500 mt-1">
            {payment.date} • {payment.method}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-white">
            {payment.currency} {payment.amount.toFixed(2)}
          </p>
          <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${getStatusColor(payment.status)}`}>
            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
