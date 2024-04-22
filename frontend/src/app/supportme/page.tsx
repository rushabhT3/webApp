// Bheek.js
"use client";
import { useState } from "react";

export default function Bheek() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const paymentOptions = [
    { value: "upi", text: "UPI (India/Bharat)", disabled: false },
    { value: "paypal", text: "PayPal", disabled: true },
    { value: "debit_card", text: "Debit Card", disabled: true },
    { value: "credit_card", text: "Credit Card", disabled: true },
    { value: "apple_pay", text: "Apple Pay", disabled: true },
  ];

  return (
    <div className="flex flex-col items-center max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md px-5 py-8">
      <p className="text-xl font-medium mb-4">
        How would you like to support me?
      </p>

      {/* options to select from */}
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Select a payment method</option>
        {paymentOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.text} {option.disabled ? "(Coming Soon)" : ""}
          </option>
        ))}
      </select>

      {paymentMethod === "upi" && (
        <>
          <p className="mt-5 text-gray-700">Scan & Pay to support me!</p>
          <img src={"/phonepe.png"} alt="PhonePe" className="rounded-lg" />
        </>
      )}
    </div>
  );
}
