"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote: "Our revenue has increased 350% under Dr. Spencer's guidance. His input has been absolutely integral to our success.",
    name: "Dr. Emily Ross",
    title: "Dental Hygienist",
    rating: 5,
  },
  {
    quote: "Our revenue has increased 350% under Dr. Spencer's guidance. His input has been absolutely integral to our success.",
    name: "Dr. Emily Ross",
    title: "Dental Hygienist",
    rating: 3,
  },
  // Add more testimonials as needed
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-[#936849/70 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col gap-3">
      <p className="font-semibold text-[#FFFFFF] text-lg leading-[28px] tracking-[-0.03em] mb-2">
        &quot;{testimonial.quote}&quot;
      </p>
      <div>
        <div className="font-bold text-[#FFFFFF] text-[24px] leading-[20px] tracking-[-0.03em] mb-1">{testimonial.name}</div>
        <div className="font-medium text-[#FFFFFF] text-[13px] leading-[20px] tracking-[-0.03em]">{testimonial.title}</div>
        <div className="flex items-center mt-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FiStar key={`${testimonial.name}-star-${i}`} className="text-yellow-400 w-4 h-4" />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-1">
        <button type="button" onClick={prev} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
          <FiChevronLeft className="h-4 w-4" />
        </button>
        <button type="button" onClick={next} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}