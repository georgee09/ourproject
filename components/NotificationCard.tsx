"use client";
import React from "react";
import { RiNotification2Line } from "react-icons/ri";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  unread?: boolean;
};

export default function NotificationCard({
  item,
  onToggle,
}: {
  item: NotificationItem;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      onClick={() => onToggle(item.id)}
      className={`w-full cursor-pointer p-4 rounded-lg mb-3 flex items-start gap-4 ${
        item.unread
          ? "bg-linear-to-r from-purple-900/60 to-transparent border-l-4 border-purple-400 transform transition duration-500"
          : "bg-white/5 transform transition duration-500"
      } hover:-translate-y-1 hover:scale-105 transform transition duration-300`}
    >
      <div className="shrink-0 p-2 rounded-full bg-purple-700/20 text-purple-300">
        <RiNotification2Line size={20} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className={`text-sm ${item.unread ? "font-semibold text-white" : "text-gray-200"}`}>
            {item.title}
          </h4>
          <span className="text-xs text-gray-400 ml-2">{item.time}</span>
        </div>
        <p className={`text-sm mt-1 ${item.unread ? "text-gray-200" : "text-gray-400"}`}>{item.message}</p>
      </div>
    </div>
  );
}
