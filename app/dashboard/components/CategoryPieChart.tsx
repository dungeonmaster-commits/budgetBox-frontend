"use client";

import { useBudgetStore } from "@/store/budgetStore";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart() {
  const store = useBudgetStore();

  const data = {
    labels: ["Bills", "Food", "Transport", "Subscriptions", "Misc"],
    datasets: [
      {
        data: [
          store.monthlyBills,
          store.food,
          store.transport,
          store.subscriptions,
          store.misc,
        ],
        backgroundColor: [
          "rgba(99, 102, 241, 0.95)",   
          "rgba(239, 68, 68, 0.95)",    
          "rgba(16, 185, 129, 0.95)",   
          "rgba(245, 158, 11, 0.95)",   
          "rgba(168, 85, 247, 0.95)",   
        ],
        borderColor: "rgba(0,0,0,0.6)",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-black/40 via-gray-900 to-black/60 
        backdrop-blur-xl border border-white/10 shadow-2xl p-8 rounded-2xl mt-10">

      
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-300 to-indigo-400 drop-shadow-lg">
        Category Breakdown
      </h2>

      
      <div className="flex items-center justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96">
          <Pie 
            data={data}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "#d1d5db", 
                    font: {
                      size: 14,
                      family: "Inter, sans-serif",
                    },
                    padding: 20,
                  },
                  position: "bottom",
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

    </div>
  );
}
