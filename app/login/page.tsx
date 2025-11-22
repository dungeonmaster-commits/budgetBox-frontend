"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email === "hire-me@anshumat.org" && password === "HireMe@2025!") {
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">

      <div className="bg-white/10 backdrop-blur-xl shadow-2xl 
        p-8 rounded-2xl w-full max-w-sm border border-white/20">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">
           Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 border border-gray-600 
                rounded-xl bg-gray-800 text-gray-100 
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="hire-me@anshumat.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 border border-gray-600 
                rounded-xl bg-gray-800 text-gray-100
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="HireMe@2025!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm mt-1 text-center">{error}</p>
          )}

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-xl 
              font-medium text-lg hover:bg-blue-700 transition 
              transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
