"use client";

import BudgetForm from "./components/BudgetForm";
import AnalyticsCard from "./components/AnalyticsCard";
import CategoryPieChart from "./components/CategoryPieChart";
import SyncButton from "./components/SyncButton";
import OfflineIndicator from "./components/OfflineIndicator";
import MonthlyReport from "./components/MonthlyReport";


import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  // protecting routes 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6">
  
      
      <OfflineIndicator />
  
      
      <div className="flex justify-between items-center bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg">
        <h1 className="text-xl font-semibold">BudgetBox Dashboard</h1>
  
        <div className="flex items-center gap-4">
          <SyncButton />
          <button
            onClick={() => {
              localStorage.removeItem("auth");
              router.push("/login");
            }}
            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
  
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
  
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-2">Welcome! 🎉</h2>
            <p className="text-gray-300">This is your BudgetBox dashboard.</p>
          </div>
  
          <BudgetForm />
        </div>
  
        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          <AnalyticsCard />
          <CategoryPieChart />
          
        </div>
    
  
      </div>
      <div className="mt-6">
  <MonthlyReport />
</div>
    </div>
  );
  
}
