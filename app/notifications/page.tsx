"use client";
import React, { useMemo, useState } from "react";
import NotificationCard, { NotificationItem } from "@/components/NotificationCard";

const initialNotifications: NotificationItem[] = [
	{
		id: "1",
		title: "Booking confirmed",
		message: "Your booking for Toyota Corolla on 18 Jan has been confirmed.",
		time: "2h ago",
		unread: true,
	},
	{
		id: "2",
		title: "Payment received",
		message: "We received your payment for booking #4521.",
		time: "1d ago",
		unread: true,
	},
	{
		id: "3",
		title: "New unit added",
		message: "A new Mercedes GLC has been added to your fleet.",
		time: "3d ago",
		unread: false,
	},
	{
		id: "4",
		title: "Reminder: inspection",
		message: "Vehicle inspection for unit #23 is due tomorrow.",
		time: "4d ago",
		unread: false,
	},
];

export default function NotificationsPage() {
	const [items, setItems] = useState<NotificationItem[]>(initialNotifications);
	const [filter, setFilter] = useState<"all" | "unread">("all");

	const filtered = useMemo(() => {
		return filter === "all" ? items : items.filter((i) => i.unread);
	}, [items, filter]);

	function toggleRead(id: string) {
		setItems((prev) => prev.map((p) => (p.id === id ? { ...p, unread: !p.unread } : p)));
	}

	function markAllRead() {
		setItems((prev) => prev.map((p) => ({ ...p, unread: false })));
	}

	return (
		<main className="max-w-4xl mx-auto">
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-semibold text-white">Notifications</h1>
				<div className="flex items-center gap-3">
					<div className="bg-white/5 rounded-md p-1 flex items-center">
						<button
							onClick={() => setFilter("all")}
							className={`px-3 py-1 rounded ${filter === "all" ? "bg-purple-600 text-white" : "text-gray-300"}`}
						>
							All
						</button>
						<button
							onClick={() => setFilter("unread")}
							className={`px-3 py-1 rounded ${filter === "unread" ? "bg-purple-600 text-white" : "text-gray-300"}`}
						>
							Unread
						</button>
					</div>
					<button onClick={markAllRead} className="px-3 py-1 rounded bg-purple-600 text-white">
						Mark all read
					</button>
				</div>
			</div>

			<section>
				{filtered.length === 0 ? (
					<div className="p-8 text-center text-gray-300">No notifications</div>
				) : (
					filtered.map((n) => (
						<NotificationCard key={n.id} item={n} onToggle={toggleRead} />
					))
				)}
			</section>
		</main>
	);
}
