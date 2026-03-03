"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      <p className="mt-4 text-purple-600">Loading...</p>
    </div>
  );
}