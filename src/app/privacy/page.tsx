export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: September 2026</p>

        <div className="space-y-8 text-gray-700">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p>
              Welcome to Alviva ("we," "us," "our," or "Company"). We are committed to protecting your privacy and ensuring you have a positive experience on our app and website. This Privacy Policy explains our data practices and your rights.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1 Account Information</h3>
                <p>When you create an account, we collect: email address, password, name, age, gender, and fitness goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2 Food and Nutrition Data</h3>
                <p>Food photos, calorie data, macronutrient information, meal history, and dietary preferences you provide or our AI analyzes.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.3 Activity Data</h3>
                <p>Step count, water intake, exercise logs, and other health metrics you track through the app.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.4 Device Information</h3>
                <p>Device type, OS version, app version, device ID, and crash logs for troubleshooting.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.5 Usage Analytics</h3>
                <p>How you interact with the app, features used, session duration, and performance metrics.</p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide and improve the Alviva service</li>
              <li>Personalize your experience with AI recommendations</li>
              <li>Send notifications and reminders</li>
              <li>Analyze usage patterns to improve features</li>
              <li>Respond to your support requests</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and security issues</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure HTTPS connections</li>
              <li>Regular security audits</li>
              <li>Secure password hashing</li>
              <li>Two-factor authentication option</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p>
              We use third-party services for app functionality:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Supabase:</strong> Backend and authentication</li>
              <li><strong>Groq:</strong> AI-powered food recognition</li>
              <li><strong>Firebase:</strong> Analytics and performance monitoring</li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies. We recommend reviewing them on their websites.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p>
              We retain your data as long as your account is active. If you delete your account, we'll remove your personal data within 30 days, except where required by law.
            </p>
          </section>

          {/* GDPR & CCPA */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. GDPR & CCPA Compliance</h2>
            <p>
              For users in the EU, you have rights under GDPR. For California residents, you have rights under CCPA. Contact us to exercise these rights.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p>
              Alviva is not intended for children under 13. We do not knowingly collect data from children under 13. If we discover such data, we'll delete it immediately.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p>
              For privacy concerns, data requests, or questions about this policy:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong> privacy@alviva.app</p>
              <p><strong>Mailing Address:</strong> Alviva Support Team</p>
              <p><strong>Response Time:</strong> 30 days</p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. We'll notify you of significant changes via email or app notification. Your continued use of Alviva means you accept the updated policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}