import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement - Our Commitment to Accessibility",
  description: "Learn about MapleGuard Insurance's commitment to accessibility and how we ensure our services are accessible to all users.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-semibold text-neutral-900 mb-8">
            Accessibility Statement
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                MapleGuard Insurance is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Conformance Status
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve 
                accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                MapleGuard Insurance is partially conformant with WCAG 2.2 Level AA. Partially conformant means that some parts 
                of the content do not fully conform to the accessibility standard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We have implemented the following accessibility features:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Keyboard navigation support throughout the website</li>
                <li>Screen reader compatibility</li>
                <li>High contrast color schemes</li>
                <li>Text scaling up to 200% without loss of functionality</li>
                <li>Alternative text for images and icons</li>
                <li>Clear heading structure and page organization</li>
                <li>Focus indicators for interactive elements</li>
                <li>Form labels and error messages</li>
                <li>Skip navigation links</li>
                <li>Consistent navigation and layout</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Known Issues
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We are aware of the following accessibility issues and are working to address them:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Some PDF documents may not be fully accessible to screen readers</li>
                <li>Some third-party content may not meet accessibility standards</li>
                <li>Some interactive elements may not have sufficient color contrast in certain states</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Alternative Access Methods
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you encounter accessibility barriers, we offer alternative ways to access our services:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Phone support: 1-800-MAPLE-01</li>
                <li>Email support: accessibility@mapleguard.ca</li>
                <li>In-person assistance at our branch locations</li>
                <li>Large print materials upon request</li>
                <li>Audio versions of important documents</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Assistive Technology
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our website is designed to work with common assistive technologies including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Voice recognition software</li>
                <li>Switch navigation devices</li>
                <li>Magnification software</li>
                <li>Text-to-speech software</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Feedback and Contact
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, 
                please let us know:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-700 mb-2">
                  <strong>Email:</strong> accessibility@mapleguard.ca
                </p>
                <p className="text-neutral-700 mb-2">
                  <strong>Phone:</strong> 1-800-MAPLE-01 (TTY: 1-800-555-0123)
                </p>
                <p className="text-neutral-700 mb-2">
                  <strong>Mail:</strong> MapleGuard Insurance<br />
                  Accessibility Department<br />
                  123 Insurance Street<br />
                  Toronto, ON M5H 2N2
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Response Time
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We aim to respond to accessibility feedback within 2 business days. For urgent accessibility issues 
                that prevent you from accessing our services, please call us directly at 1-800-MAPLE-01.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Ongoing Improvements
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We are committed to continuously improving the accessibility of our website and services. This includes:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Regular accessibility audits and testing</li>
                <li>Training our development team on accessibility best practices</li>
                <li>Implementing user feedback and suggestions</li>
                <li>Staying current with accessibility standards and guidelines</li>
                <li>Testing with real users who rely on assistive technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Legal Compliance
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                This accessibility statement is in compliance with:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                <li>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</li>
                <li>Accessible Canada Act (ACA)</li>
                <li>Ontario's Accessibility for Ontarians with Disabilities Act (AODA)</li>
                <li>Canadian Human Rights Act</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Updates to This Statement
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We will update this accessibility statement as we make improvements to our website and services. 
                The last updated date at the top of this page indicates when the statement was last revised.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
