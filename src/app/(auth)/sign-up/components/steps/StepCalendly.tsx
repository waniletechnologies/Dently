import React, { useState } from "react";
import { MdCalendarToday, MdCheckCircle } from "react-icons/md";

const slots = [
  {
    label: "Tomorrow",
    times: ["10:00 AM", "11:30 AM", "02:15 PM"],
  },
  {
    label: "Wed, May 1",
    times: ["9:00 AM", "1:45 PM", "4:30 PM"],
  },
  {
    label: "Thu, May 2",
    times: ["11:00 AM", "3:30 PM"],
  },
];

export function StepCalendly({ onNext }: { onNext: () => void }) {
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
        <h2 className="text-3xl font-bold mb-2 text-center">Connect Calendly</h2>
        <p className="text-gray-500 mb-8 text-center">
          {status === "success"
            ? "Let Pam manage appointments and bookings automatically"
            : "Manage your appointments and bookings in one platform"}
        </p>
        <MdCalendarToday size={64} className="mb-8 text-orange-500" />

        {status === "success" && (
          <>
            <div className="bg-green-100 text-green-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium flex items-center gap-2 justify-center">
              <MdCheckCircle size={18} className="text-green-600" />
              Successfully connected to Calendly
            </div>
            <div className="bg-white border rounded-md px-6 py-4 mb-6 w-full">
              <div className="font-semibold text-sm mb-2">Available appointment slots</div>
              {slots.map((slot) => (
                <div key={slot.label} className="mb-2">
                  <div className="text-xs text-gray-500 mb-1">{slot.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {slot.times.map((time) => (
                      <span
                        key={time}
                        className="bg-yellow-100 text-yellow-700 rounded px-3 py-1 text-xs font-semibold"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-xs text-gray-400 mt-2">
                These times will show in patient appointment reminders
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
              Connect your Calendly account to manage appointments<br />and automate reminders
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded font-semibold text-base mt-2 w-full"
            >
              Connect Calendly
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