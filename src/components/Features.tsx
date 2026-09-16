export default function Features() {
  const features = [
    {
      id: 1,
      title: "Scan Food",
      description: "Use camera to scan your meals instantly",
      icon: "📸"
    },
    {
      id: 2,
      title: "Track Nutrition",
      description: "Get detailed calorie & macronutrient insights",
      icon: "📊"
    },
    {
      id: 3,
      title: "Personalized Goals",
      description: "AI creates goals tailored to your lifestyle",
      icon: "🎯"
    },
    {
      id: 4,
      title: "Smart Reminders",
      description: "Stay on track with water, meals & activity alerts",
      icon: "🔔"
    },
    {
      id: 5,
      title: "Progress Insights",
      description: "Visualize your progress and improve daily",
      icon: "📈"
    },
    {
      id: 6,
      title: "Health Articles",
      description: "Get personalized fitness & nutrition tips",
      icon: "💡"
    },
  ];

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition">
            Powerful Features for Better Health
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition">
            Everything you need to track, analyze, and achieve your goals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm dark:shadow-lg hover:shadow-lg dark:hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 dark:from-purple-900 to-purple-50 dark:to-purple-800 flex items-center justify-center border-b border-purple-100 dark:border-purple-800 transition">
                <div className="text-6xl">{feature.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed transition">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}