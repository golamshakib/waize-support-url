import React from "react";

export default function ContactUs() {
  return (
    <div className="mb-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
      <p className="text-slate-300 mb-6 text-lg">
        If you need any assistance, please contact our support team:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email Contact */}
        <a
          href="mailto:mainadmin@nouvi.org"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          mainadmin@nouvi.org
        </a>

        {/* Phone Number */}
        <a
          href="tel:+15619083713"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
          </svg>
          +15619083713
        </a>

        {/* Website */}
        <a
          href="http://www.nouvi.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.79l-5.2-3.13M3 12.79L8.2 9.66M3 12l5.2 3.13M21 12l-5.2 3.13M12 3l3 5.2M12 21l3-5.2"
            />
          </svg>
          www.nouvi.org
        </a>
      </div>
    </div>
  );
}
