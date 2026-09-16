"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("current");
  const [openFAQ, setOpenFAQ] = useState(0);

  const currentFeatureFAQs = [
    {
      id: 1,
      question: "How does the AI food scanning work?",
      answer:
        "Simply point your camera at your meal and let our AI instantly identify the food, calculate calories, and break down macronutrients. No manual logging needed!",
    },
    {
      id: 2,
      question: "Is my nutrition data secure?",
      answer:
        "Yes! All your data is encrypted end-to-end using Supabase's enterprise-grade security. We never share your personal information with third parties.",
    },
    {
      id: 3,
      question: "Can I track multiple meals per day?",
      answer:
        "Absolutely! Scan unlimited meals and our dashboard will show you your complete daily nutrition breakdown, helping you stay within your goals.",
    },
    {
      id: 4,
      question: "How accurate is the calorie detection?",
      answer:
        "Our Groq AI vision model is 90%+ accurate for most common foods. For best results, ensure good lighting and clear food visibility in the photo.",
    },
    {
      id: 5,
      question: "Do you provide health articles?",
      answer:
        "Yes! We curate personalized fitness and nutrition articles based on your goals and preferences, delivered directly to your dashboard.",
    },
  ];

  const futureFeatureFAQs = [
    {
      id: 1,
      question: "When will meal planning be available?",
      answer:
        "Our AI-powered meal planning feature is coming Q1 2027! It will generate personalized meal plans based on your dietary goals, preferences, and available ingredients.",
    },
    {
      id: 2,
      question: "What are personalized diet charts?",
      answer:
        "We're building dynamic charts that visualize your nutrition trends, macronutrient balance, and progress toward your goals with AI-powered recommendations.",
    },
    {
      id: 3,
      question: "How will weekly/monthly reports work?",
      answer:
        "Get comprehensive reports showing your progress, calories consumed, macros tracked, achievements, and actionable insights to improve your health journey.",
    },
    {
      id: 4,
      question: "Will there be social features?",
      answer:
        "Yes! Join friends, participate in health challenges, share achievements, and get motivated together. Build your wellness community within Alviva!",
    },
    {
      id: 5,
      question: "Can I compete with friends?",
      answer:
        "Definitely! We're launching weekly challenges where you can compete with friends on calorie goals, workout streaks, and nutritional milestones.",
    },
  ];

  const faqs = activeTab === "current" ? currentFeatureFAQs : futureFeatureFAQs;

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 py-16 md:py-24 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition">
            Everything you need to know about Alviva
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setActiveTab("current");
              setOpenFAQ(0);
            }}
            className={`px-6 py-3 rounded-full font-bold transition ${
              activeTab === "current"
                ? "bg-purple-600 dark:bg-purple-700 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Current Features
          </button>
          <button
            onClick={() => {
              setActiveTab("future");
              setOpenFAQ(0);
            }}
            className={`px-6 py-3 rounded-full font-bold transition ${
              activeTab === "future"
                ? "bg-purple-600 dark:bg-purple-700 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Coming Soon 🚀
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition hover:border-purple-300 dark:hover:border-purple-500"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 hover:from-purple-50 dark:hover:from-gray-700 hover:to-purple-50 dark:hover:to-gray-700 px-6 py-4 text-left font-bold text-gray-900 dark:text-white flex justify-between items-center transition"
                >
                  <span className="text-lg">{faq.question}</span>
                  <span
                    className={`text-2xl text-purple-600 dark:text-purple-400 transition transform ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Answer */}
                {openFAQ === faq.id && (
                  <div className="bg-white dark:bg-gray-800 px-6 py-4 border-t-2 border-gray-100 dark:border-gray-700 transition">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base transition">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Illustration/Visual */}
          <div className="flex justify-center items-center">
            <div className="relative w-full h-full min-h-96 bg-gradient-to-br from-purple-100 dark:from-purple-900/30 to-purple-50 dark:to-gray-800 rounded-3xl flex items-center justify-center p-8 shadow-lg dark:shadow-2xl transition">
              {/* Decorative SVG Illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-sm"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="rgba(147, 51, 234, 0.1)"
                  stroke="rgba(147, 51, 234, 0.2)"
                  strokeWidth="2"
                />

                {/* Document/Chart Icon */}
                <g>
                  {/* Main Chart Box */}
                  <rect
                    x="80"
                    y="60"
                    width="240"
                    height="280"
                    rx="20"
                    fill="white"
                    stroke="#9333ea"
                    strokeWidth="3"
                  />

                  {/* Header */}
                  <rect
                    x="80"
                    y="60"
                    width="240"
                    height="50"
                    rx="20"
                    fill="#9333ea"
                  />
                  <text
                    x="200"
                    y="95"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="bold"
                    fill="white"
                  >
                    Your Progress
                  </text>

                  {/* Chart Bars */}
                  <g>
                    {/* Bar 1 */}
                    <rect
                      x="110"
                      y="220"
                      width="30"
                      height="80"
                      fill="#9333ea"
                      opacity="0.8"
                    />
                    {/* Bar 2 */}
                    <rect
                      x="155"
                      y="180"
                      width="30"
                      height="120"
                      fill="#9333ea"
                      opacity="0.6"
                    />
                    {/* Bar 3 */}
                    <rect
                      x="200"
                      y="140"
                      width="30"
                      height="160"
                      fill="#9333ea"
                    />
                    {/* Bar 4 */}
                    <rect
                      x="245"
                      y="160"
                      width="30"
                      height="140"
                      fill="#9333ea"
                      opacity="0.7"
                    />
                  </g>

                  {/* Bottom Labels */}
                  <text
                    x="125"
                    y="320"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#666"
                  >
                    Mon
                  </text>
                  <text
                    x="170"
                    y="320"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#666"
                  >
                    Tue
                  </text>
                  <text
                    x="215"
                    y="320"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#666"
                  >
                    Wed
                  </text>
                  <text
                    x="260"
                    y="320"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#666"
                  >
                    Thu
                  </text>
                </g>

                {/* Checkmark Icons */}
                <g>
                  {/* Checkmark 1 */}
                  <circle
                    cx="50"
                    cy="80"
                    r="20"
                    fill="#10b981"
                    opacity="0.9"
                  />
                  <text
                    x="50"
                    y="90"
                    textAnchor="middle"
                    fontSize="24"
                    fill="white"
                  >
                    ✓
                  </text>

                  {/* Checkmark 2 */}
                  <circle
                    cx="350"
                    cy="150"
                    r="20"
                    fill="#10b981"
                    opacity="0.9"
                  />
                  <text
                    x="350"
                    y="160"
                    textAnchor="middle"
                    fontSize="24"
                    fill="white"
                  >
                    ✓
                  </text>

                  {/* Checkmark 3 */}
                  <circle
                    cx="40"
                    cy="280"
                    r="20"
                    fill="#10b981"
                    opacity="0.9"
                  />
                  <text
                    x="40"
                    y="290"
                    textAnchor="middle"
                    fontSize="24"
                    fill="white"
                  >
                    ✓
                  </text>
                </g>
              </svg>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-green-400 to-green-500 dark:from-green-600 dark:to-green-700 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transition">
                📈 Track Progress
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg transition">
            Still have questions? Reach out to our support team
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 hover:from-purple-700 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}