import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Information",
  description: "Learn how MapleGuard Insurance collects, uses, and protects your personal information. Our commitment to privacy and data security.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-semibold text-neutral-900 mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                MapleGuard Insurance ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Name, email address, phone number, and postal code</li>
                <li>Date of birth and gender</li>
                <li>Insurance-related information (vehicle details, property information, etc.)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Claims information and documentation</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Providing insurance quotes and services</li>
                <li>Processing applications and claims</li>
                <li>Communicating with you about your policy</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Marketing and promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>With insurance underwriters and reinsurers</li>
                <li>With service providers who assist us in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Under Canadian privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>File a complaint with the Privacy Commissioner of Canada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal 
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-700 mb-2">
                  <strong>Email:</strong> privacy@mapleguard.ca
                </p>
                <p className="text-neutral-700 mb-2">
                  <strong>Phone:</strong> 1-800-MAPLE-01
                </p>
                <p className="text-neutral-700">
                  <strong>Address:</strong> MapleGuard Insurance<br />
                  123 Insurance Street<br />
                  Toronto, ON M5H 2N2
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
