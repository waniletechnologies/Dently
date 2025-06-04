import React, { useState } from "react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import Image from "next/image";
import { meta } from "../../../../../../public/images";


export function StepMetaAds({ onNext }: { onNext: () => void }) {
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
        <h2 className="text-3xl font-bold mb-2 text-center">Connect Meta Ads</h2>
        <p className="text-gray-500 mb-8 text-center">
          Boost your reach with smart ad automation
        </p>
        <Image
          src={meta}
          alt="Meta Ads"
          className="mb-8 w-64 h-28"
        />


        {status === "success" && (
          <>
            <div className="bg-green-100 text-green-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium flex items-center gap-2 justify-center">
              <HiCheckCircle size={18} className="text-green-600" />
              Successfully connected to Meta Ads
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
            <div className="bg-yellow-100 text-yellow-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium flex items-center gap-2 justify-center">
              <HiExclamationCircle size={18} className="text-yellow-600" />
              Connect your Meta Ads account to manage campaigns and track performance effortlessly
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded font-semibold text-base mt-2 w-full"
            >
              Connect to Meta
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