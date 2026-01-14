"use client";
import React, { useState } from "react";

type Settings = {
  companyName: string;
  email: string;
  phone: string;
  currency: string;
  timezone: string;
  notifications: {
    email: boolean;
    sms: boolean;
  };
  pickupLocation: string;
};

export default function SettingsForm() {
  const [values, setValues] = useState<Settings>({
    companyName: "The King Rentals",
    email: "hello@theking.com",
    phone: "+1 555 123 4567",
    currency: "USD",
    timezone: "UTC",
    notifications: { email: true, sms: false },
    pickupLocation: "Main Office",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  function update<K extends keyof Settings>(key: K, value: Settings[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleNotification(key: keyof Settings["notifications"]) {
    setValues((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: !prev.notifications[key] },
    }));
  }

  function handleSave(e?: React.FormEvent) {
    e?.preventDefault();
    setSaving(true);
    setSaved(false);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 1600);
    }, 700);
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <section className="bg-linear-to-r from-purple-900/60 to-transparent p-5 rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-3">Company Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm text-gray-300">
            Company name
            <input
              value={values.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              className="mt-2 p-2 rounded bg-transparent border border-gray-700 text-white"
            />
          </label>

          <label className="flex flex-col text-sm text-gray-300">
            Contact email
            <input
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-2 p-2 rounded bg-transparent border border-gray-700 text-white"
              type="email"
            />
          </label>

          <label className="flex flex-col text-sm text-gray-300">
            Phone
            <input
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="mt-2 p-2 rounded bg-transparent border border-gray-700 text-white"
            />
          </label>

          <label className="flex flex-col text-sm text-gray-300">
            Default pickup location
            <input
              value={values.pickupLocation}
              onChange={(e) => update("pickupLocation", e.target.value)}
              className="mt-2 p-2 rounded bg-transparent border border-gray-700 text-white"
            />
          </label>
        </div>
      </section>

      <section className="bg-linear-to-r from-purple-900/60 to-transparent p-5 rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-3">Financial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm text-gray-300">
            Currency
            <select
              value={values.currency}
              onChange={(e) => update("currency", e.target.value)}
              className="mt-2 p-2 rounded bg-transparent border border-gray-700 text-white"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </label>

          <label className="flex flex-col text-sm text-gray-300">
            Timezone
            <select
              value={values.timezone}
              onChange={(e) => update("timezone", e.target.value)}
              className="mt-2 p-2 rounded bg-transparent border border-gray-700 text-white"
            >
              <option value="UTC">UTC</option>
              <option value="America/New_York">America / New_York</option>
              <option value="Europe/London">Europe / London</option>
            </select>
          </label>
        </div>
      </section>

      <section className="bg-linear-to-r from-purple-900/60 to-transparent p-5 rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-3">Notifications</h2>
        <div className="flex flex-col gap-3 text-gray-300">
          <label className="inline-flex items-center gap-3">
            <input
              type="checkbox"
              checked={values.notifications.email}
              onChange={() => toggleNotification("email")}
              className="w-4 h-4"
            />
            <span>Email notifications</span>
          </label>
          <label className="inline-flex items-center gap-3">
            <input
              type="checkbox"
              checked={values.notifications.sms}
              onChange={() => toggleNotification("sms")}
              className="w-4 h-4"
            />
            <span>SMS notifications</span>
          </label>
        </div>
      </section>

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => setValues({
            companyName: "The King Rentals",
            email: "hello@theking.com",
            phone: "+1 555 123 4567",
            currency: "USD",
            timezone: "UTC",
            notifications: { email: true, sms: false },
            pickupLocation: "Main Office",
          })}
          className="px-4 py-2 rounded bg-transparent border border-gray-700 text-gray-300"
        >
          Reset
        </button>

        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 rounded bg-purple-600 text-white disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save settings"}
        </button>
      </div>

      {saved && <div className="text-sm text-green-400">Settings saved.</div>}
    </form>
  );
}
