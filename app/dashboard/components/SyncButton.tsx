"use client";

import { useState } from "react";
import { useBudgetStore } from "@/store/budgetStore";

export default function SyncButton() {
  const [status, setStatus] = useState<"local" | "pending" | "synced">("local");
  const store = useBudgetStore();

  const handleSync = async () => {
    
    if (!navigator.onLine) {
      setStatus("pending");
      return;
    }

    setStatus("pending");

    try {
      // Later we will replace this with:
      // await fetch("/budget/sync";

      // Simulating API delay
      await new Promise((res) => setTimeout(res, 800));

      setStatus("synced");
    } catch (err) {
      setStatus("pending");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-xl shadow-lg flex items-center gap-3">

      <button
        onClick={handleSync}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
      >
        Sync
      </button>

      {status === "local" && (
        <span className="text-gray-300 text-sm">Local Only</span>
      )}

      {status === "pending" && (
        <span className="text-yellow-400 text-sm">Sync Pending...</span>
      )}

      {status === "synced" && (
        <span className="text-green-400 text-sm">Synced ✓</span>
      )}
    </div>
  );
}
