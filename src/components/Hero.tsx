"use client";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full mb-8 transition">
              <span className="text-sm font-medium">🤖 AI-Powered • 📊 Smart • ✨ Personalized</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition">
              AI Calorie Tracker for a <span className="text-purple-600 dark:text-purple-400">Healthier You</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition">
              Track your calories, analyze nutrition, and build better eating habits with the power of AI.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 hover:from-purple-700 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 text-lg">
                Get Started ~ It's Free
                <span>→</span>
              </button>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Apple App Store */}
              <a href="https://apps.apple.com" className="bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-80 dark:hover:opacity-70 transition font-semibold">
                {/* Apple Logo SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.38-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.61-2.53 3.44l-.05-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>

              {/* Google Play Store */}
              <a href="https://play.google.com" className="bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-80 dark:hover:opacity-70 transition font-semibold">
                {/* Google Play Logo SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6v12c0 1.1.9 2 2 2h4L19 3H5c-1.1 0-2 .9-2 2zm9-1L5 8v8l7 7v-7l7-3.5L12 5z"/>
                </svg>
                <div>
                  <div className="text-xs">Get It On</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Testimonials */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-700 dark:to-purple-900 border-3 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold transition">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium transition">Trusted by 10,000+ happy users</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center md:justify-end">
<div className="flex justify-center items-center">
  <img 
  src="/images/carousel.png"     // ← images folder se
  alt="Alviva App Mockup" 
  className="w-full max-w-3xl h-auto object-contain drop-shadow-2xl dark:drop-shadow-2xl transition"
  style={{ maxHeight: "750px" }}
/>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}