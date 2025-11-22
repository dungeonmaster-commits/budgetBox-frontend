"use client";

import { useBudgetStore } from "@/store/budgetStore";

export default function BudgetForm() {
  const store = useBudgetStore();

  const fields = [
    { key: "income", label: "Income" },
    { key: "monthlyBills", label: "Monthly Bills" },
    { key: "food", label: "Food" },
    { key: "transport", label: "Transport" },
    { key: "subscriptions", label: "Subscriptions" },
    { key: "misc", label: "Miscellaneous" },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-100">Monthly Budget</h2>

      {fields.map(({ key, label }) => (
        <div key={key} className="mb-4">
          <label className="block mb-1 text-gray-300">{label}</label>
          <input
  type="number"
  className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100"
  value={(store as any)[key] === 0 ? "" : (store as any)[key]}
  onChange={(e) => store.setField(key as any, Number(e.target.value))}
/>
        </div>
      ))}

     
    </div>
  );
}
