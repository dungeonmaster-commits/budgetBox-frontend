THIS README FILE IS WRITTEN WITH THE HELP OF AI 
------BACKEND FOR THIS PROJECT WAS RECOMMEND USING NODE.js  OR Using FASTapi but I do backend devlopment In java(springboot).----
 
 BudgetBox — Offline-First Personal Budgeting App
Assignment Name: BudgetBox
Role: Frontend / Fullstack Developer
Goal: Build a real, working Offline-First Personal Budgeting App.

🚀 Overview

BudgetBox is an offline-first budgeting tool designed to work even with 0 internet.
All your monthly budget fields auto-save instantly using Zustand local storage, and the dashboard updates in real time with analytics, predictions, and warnings.

The app behaves like Google Docs offline mode — never losing user data and syncing safely when network is available.

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

🌟 Features
🔐 Hardcoded Login

Email: hire-me@anshumat.org

Password: HireMe@2025!

No registration required.

First, run the development server:

🧩 Architecture Summary
Frontend (Offline-First Layer)

Zustand Persist → Browser localStorage

Components read/write budget instantly

Offline indicator monitors network status

Sync button simulates server sync logic

🏗️ Tech Stack
Frontend (Mandatory)

Next.js 15 (App Router)

React 18 + TypeScript

Zustand (persist)

TailwindCSS

## Folder structure
/frontend
  /app
    /login
    /dashboard
      /components
        BudgetForm.tsx
        AnalyticsCard.tsx
        CategoryPieChart.tsx
        MonthlyReport.tsx
        OfflineIndicator.tsx
        SyncButton.tsx
  /store
    budgetStore.ts
  README.md

🧪 How to Run Locally

git clone <repo>
cd frontend
npm install
npm run dev



## Deployed on Vercel


