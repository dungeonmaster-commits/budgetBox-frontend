"use client";

import { useBudgetStore } from "@/store/budgetStore";

export default function MonthlyReport() {
  const store = useBudgetStore();

  
  const totalSpend =
    store.monthlyBills +
    store.food +
    store.transport +
    store.subscriptions +
    store.misc;

  const savings = store.income - totalSpend;

  const burnRate = store.income
    ? ((totalSpend / store.income) * 100).toFixed(1)
    : "0";

  // Month end prediction code
  const today = new Date().getDate();
  const daysInMonth = new Date().getFullYear() % 4 === 0 ? 29 : 30; 
  const dailySpend = totalSpend / today;
  const projectedTotal = Math.round(dailySpend * daysInMonth);
  const projectedSavings = store.income - projectedTotal;

  // Anamolu detection code 
  const warnings: string[] = [];

  if (store.monthlyBills > store.income * 0.40) {
    warnings.push("Bills are unusually high compared to income.");
  }

  if (store.food > store.income * 0.20) {
    warnings.push("Food spending seems higher than recommended.");
  }

  if (store.transport > store.income * 0.15) {
    warnings.push("Transport budget is larger than normal.");
  }

  if (Number(burnRate) > 100) {
    warnings.push("🔥 You are spending more than you earn!");
  } else if (Number(burnRate) > 70) {
    warnings.push("⚠️ Burn rate is above 70% — be careful.");
  }

  if (warnings.length === 0) {
    warnings.push("🟢 All spending looks normal.");
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-xl mt-6">

      <h2 className="text-2xl font-semibold mb-4 text-gray-100">
        Monthly Expense Summary 📅
      </h2>

      //Make summary table
      <table className="w-full text-left text-gray-200">
        <tbody>
          <tr>
            <td className="py-2 font-semibold">Income:</td>
            <td>₹{store.income}</td>
          </tr>
          <tr>
            <td className="py-2 font-semibold">Total Spend:</td>
            <td>₹{totalSpend}</td>
          </tr>
          <tr>
            <td className="py-2 font-semibold">Savings:</td>
            <td className={savings < 0 ? "text-red-400" : "text-green-400"}>
              ₹{savings}
            </td>
          </tr>
          <tr>
            <td className="py-2 font-semibold">Burn Rate:</td>
            <td>{burnRate}%</td>
          </tr>
        </tbody>
      </table>

      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-100">Month-End Prediction 🔮</h3>

        <p>Total Spend (Projected): <span className="font-bold">₹{projectedTotal}</span></p>

        <p>
          Expected Savings:{" "}
          <span className={projectedSavings < 0 ? "text-red-400" : "text-green-400"}>
            ₹{projectedSavings}
          </span>
        </p>
      </div>

      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-100">Warnings ⚠️</h3>

        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          {warnings.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
