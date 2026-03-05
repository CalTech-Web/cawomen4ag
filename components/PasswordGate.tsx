"use client";

import { useState, useEffect, type ReactNode } from "react";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/members-auth")
      .then((r) => r.json())
      .then((data) => {
        setAuthenticated(data.authenticated);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/members-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setAuthenticated(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setSubmitting(false);
  };

  if (checking) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cwa-purple/20 border-t-cwa-purple rounded-full animate-spin" />
      </div>
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-cwa-purple/10 text-cwa-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="font-heading font-semibold text-cwa-dark text-2xl mb-2">Protected Area</h2>
        <p className="text-gray-500 text-sm font-sans mb-6">
          To request a password email{" "}
          <a href="mailto:statecwa@gmail.com" className="text-cwa-purple font-semibold hover:underline">
            statecwa@gmail.com
          </a>{" "}
          or fill out the{" "}
          <a href="/contact" className="text-cwa-purple font-semibold hover:underline">
            contact
          </a>{" "}
          form.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-cwa-purple/30 focus:border-cwa-purple transition-all"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-xs font-sans mt-2">Incorrect password. Please try again.</p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting || !password}
            className="w-full bg-cwa-purple hover:bg-cwa-purple/90 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all disabled:opacity-50"
          >
            {submitting ? "Checking..." : "Unlock"}
          </button>
        </form>
      </div>
    </div>
  );
}
