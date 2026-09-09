"use client";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8">
              <span className="text-sm font-medium">🤖 AI-Powered • 📊 Smart • ✨ Personalized</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Calorie Tracker for a <span className="text-purple-600">Healthier You</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Track your calories, analyze nutrition, and build better eating habits with the power of AI.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 text-lg">
                Get Started ~ It's Free
                <span>→</span>
              </button>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://apps.apple.com" className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-80 transition font-semibold">
                <span className="text-2xl">🍎</span>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com" className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-80 transition font-semibold">
                <span className="text-2xl">▶️</span>
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
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-white flex items-center justify-center text-white font-bold">
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
                <p className="text-sm text-gray-600 font-medium">Trusted by 10,000+ happy users</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center md:justify-end">
<div className="flex justify-center items-center">
  <img 
  src="/images/carousel.png"     // ← images folder se
  alt="Alviva App Mockup" 
  className="w-full max-w-3xl h-auto object-contain drop-shadow-2xl"
  style={{ maxHeight: "750px" }}
/>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}