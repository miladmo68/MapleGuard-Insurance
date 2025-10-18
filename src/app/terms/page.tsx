import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Legal Terms and Conditions",
  description: "Read our terms of service and legal conditions for using MapleGuard Insurance services and website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-semibold text-neutral-900 mb-8">
            Terms of Service
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                By accessing and using MapleGuard Insurance's website and services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                MapleGuard Insurance provides insurance services including but not limited to auto, home, life, travel, 
                and business insurance. We offer online quotes, policy management, and claims processing through our website and mobile applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                3. Eligibility
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You must be at least 18 years old and a resident of Canada to use our services. By using our services, 
                you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                4. Insurance Quotes and Applications
              </h2>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                4.1 Quote Accuracy
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                All quotes provided are estimates based on the information you provide. Final premiums may vary based on 
                underwriting review, additional information required, or changes in your circumstances.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                4.2 Application Process
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You are responsible for providing accurate and complete information in your insurance applications. 
                Providing false or misleading information may result in denial of coverage or cancellation of your policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                5. Payment Terms
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Premiums are due as specified in your policy. We accept various payment methods including credit cards, 
                bank transfers, and pre-authorized payments. Late payments may result in policy cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                6. Policy Terms and Conditions
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Your insurance coverage is subject to the terms and conditions outlined in your specific policy documents. 
                Please review your policy carefully and contact us with any questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                7. Claims Process
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Claims must be reported promptly and accurately. We will investigate all claims in accordance with 
                applicable laws and your policy terms. Coverage is subject to policy limits, deductibles, and exclusions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                8. User Responsibilities
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Notify us of any changes in your circumstances</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Maintain the confidentiality of your account information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, MapleGuard Insurance shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                10. Privacy
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                11. Intellectual Property
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                All content, trademarks, and intellectual property on our website are owned by MapleGuard Insurance or 
                our licensors. You may not use, reproduce, or distribute any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                12. Termination
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                13. Governing Law
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance with the laws of Canada and the province of Ontario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes 
                by posting the new terms on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                15. Contact Information
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-700 mb-2">
                  <strong>Email:</strong> legal@mapleguard.ca
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
