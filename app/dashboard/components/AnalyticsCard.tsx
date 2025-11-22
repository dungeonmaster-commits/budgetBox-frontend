"use client";

import { useBudgetStore } from "@/store/budgetStore";

export default function AnalyticsCard() {
  const store = useBudgetStore();

  const totalSpend =
    store.monthlyBills +
    store.food +
    store.transport +
    store.subscriptions +
    store.misc;

  const burnRate = store.income
    ? ((totalSpend / store.income) * 100).toFixed(2)
    : "0";

  const savings = store.income - totalSpend;

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl mt-6 shadow-xl">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Your Stats</h2>

      <div className="space-y-3 text-gray-300">

        <p className="text-lg">
          <span className="font-semibold text-gray-100">Total Spend:</span>{" "}
          ₹{totalSpend}
        </p>

        <p className="text-lg">
          <span className="font-semibold text-gray-100">Burn Rate:</span>{" "}
          {burnRate}%
        </p>

        <p className="text-lg">
          <span className="font-semibold text-gray-100">Savings:</span>{" "}
          {savings < 0 ? (
            <span className="text-red-400">₹{savings}</span>
          ) : (
            <span className="text-green-400">₹{savings}</span>
          )}
        </p>

      </div>
    </div>
  );
}
