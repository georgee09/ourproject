"use client";
import React from "react";
import SettingsForm from "@/components/SettingsForm";

export default function SettingsPage() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
      </div>

      <SettingsForm />
    </main>
  );
}
