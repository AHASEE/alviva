export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Health?
        </h2>

        {/* Description */}
        <p className="text-xl text-purple-100 mb-12 leading-relaxed">
          Join thousands of users who are tracking their nutrition and achieving their fitness goals with Alviva.
        </p>

        {/* Buttons - Official Badges */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Apple App Store Official Badge */}
          <a 
            href="https://apps.apple.com/app/alviva/id123456789"
            className="hover:opacity-80 transition transform hover:scale-105"
          >
            <img 
              src="https://tools.appgle.com/static/badges/badge-appstore.svg"
              alt="Download on App Store" 
              className="h-14 w-auto"
            />
          </a>
          
          {/* Google Play Store Official Badge */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.alviva.app"
            className="hover:opacity-80 transition transform hover:scale-105"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play" 
              className="h-14 w-auto"
            />
          </a>
        </div>

        {/* Sub Text */}
        <p className="text-purple-200 text-sm mt-8">
          Available on iOS and Android • Free to download
        </p>
      </div>
    </section>
  );
}