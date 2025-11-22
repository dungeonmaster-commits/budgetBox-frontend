import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BudgetState {
  income: number;
  monthlyBills: number;
  food: number;
  transport: number;
  subscriptions: number;
  misc: number;
  setField: (key: keyof BudgetState, value: number) => void;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set) => ({
      income: 0,
      monthlyBills: 0,
      food: 0,
      transport: 0,
      subscriptions: 0,
      misc: 0,

      setField: (key, value) => set({ [key]: value }),
    }),
    { name: "budget-box-data" }
  )
);
