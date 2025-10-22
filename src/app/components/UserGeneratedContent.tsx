import React from "react";

export default function UserGeneratedContent() {
  return (
    <div className="mb-16 bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-500/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          User-Generated Content & Moderation
        </h2>
      </div>
      <p className="text-slate-300 leading-relaxed text-lg mb-8">
        Afcomz allows users to generate and post content, including reviews and
        other interactions. To ensure a safe and respectful environment for all
        users, we have implemented the following precautions:
      </p>

      <div className="space-y-6">
        {/* Flagging Mechanism */}
        <div className="bg-slate-800/30 rounded-lg p-6 border border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4a6 6 0 016-6h4a6 6 0 016 6v4M9 7a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Flagging Mechanism
              </h3>
              <p className="text-slate-300">
                Users can flag content they find offensive or inappropriate.
                Flagged content will be reviewed by our moderation team.
              </p>
            </div>
          </div>
        </div>

        {/* User Blocking */}
        <div className="bg-slate-800/30 rounded-lg p-6 border border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                User Blocking
              </h3>
              <p className="text-slate-300">
                Users have the ability to block other users who engage in
                abusive or harmful behavior. Blocked users will not be able to
                interact with the user who blocked them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
