import type React from "react";
import { useState } from "react";
import { MdPhone, MdCheckCircle, MdCheck } from "react-icons/md";

export function StepAircall({ onNext }: { onNext: () => void }) {
  const [status, setStatus] = useState<"idle" | "connecting" | "success">("idle");

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "success") {
      onNext();
      return;
    }
    setStatus("connecting");
    setTimeout(() => setStatus("success"), 2000);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form
      className="flex flex-col justify-center min-h-screen"
      onSubmit={handleConnect}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-center">Connect Aircall</h2>
        <p className="text-gray-500 mb-8 text-center">
          Link your call system for smarter communication
        </p>
        <MdPhone size={64} className="mb-8 text-orange-500" />

        {status === "success" && (
          <>
            <div className="bg-green-100 text-green-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium flex items-center gap-2 justify-center">
              <MdCheckCircle size={18} className="text-green-600" />
              Successfully connected to Aircall
            </div>
            <div className="bg-white border rounded-md px-6 py-4 mb-6 w-full">
              <div className="mb-3">
                <div className="font-semibold text-sm">Your Aircall Number</div>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500 mb-1">Ready to receive calls</p>
                  <span className="font-bold text-right text-base">+44 20 7123 4567</span>
                </div>
                <hr />
              </div>
              <div>
                <div className="font-semibold text-sm mb-2">Call Tracking and Coaching</div>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-[#848484]">
                    <MdCheck size={16} className="text-[#52884B]" /> Call transcription enabled
                  </li>
                  <li className="flex items-center gap-2 text-[#848484]">
                    <MdCheck size={16} className="text-[#52884B]"/> Staff performance metrics
                  </li>
                  <li className="flex items-center gap-2 text-[#848484]">
                    <MdCheck size={16} className="text-[#52884B]" /> Missed opportunity alerts
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded font-semibold text-base mt-2 w-full"
            >
              Continue to next step
            </button>
          </>
        )}

        {status === "connecting" && (
          <div className="bg-blue-100 text-blue-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium w-full">
            Connecting...
          </div>
        )}

        {status === "idle" && (
          <>
            <div className="bg-yellow-100 text-yellow-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium">
              Pam will never edit patients&apos; data without your permission.
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded font-semibold text-base mt-2 w-full"
            >
              Connect Aircall
            </button>
            <button
              type="button"
              className="mt-4 text-gray-500 text-sm underline"
              onClick={handleSkip}
            >
              Skip for now
            </button>
          </>
        )}
      </div>
    </form>
  );
} 