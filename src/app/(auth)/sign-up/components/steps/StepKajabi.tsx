import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import Image from "next/image";
import { kejabi } from "../../../../../../public/images";

export function StepKajabi({ onNext }: { onNext: () => void }) {
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

  return (
    <form
      className="flex flex-col justify-center min-h-screen"
      onSubmit={handleConnect}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-center">Connect Kajabi</h2>
        <p className="text-gray-500 mb-8 text-center">
          Improve your team's skills with training courses<br />recommended by Pam
        </p>
        <Image
          src={kejabi}
          alt="Kajabi Logo"
          className="mb-8 w-40 h-12 object-contain"
        />
        {status === "success" && (
          <>
            <div className="bg-green-100 text-green-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium flex items-center gap-2 justify-center">
              <HiCheckCircle size={18} className="text-green-600" />
              Successfully connected to Kajabi
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded font-semibold text-base mt-2 w-full"
            >
              Finished Setup
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
              Kajabi will never share or sell your content without your permission.
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded font-semibold text-base mt-2 w-full"
            >
              Connect Kajabi
            </button>
          </>
        )}
      </div>
    </form>
  );
} 