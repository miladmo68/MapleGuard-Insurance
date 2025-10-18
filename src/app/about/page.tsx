import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - MapleGuard Insurance Company",
  description: "Learn about MapleGuard Insurance's mission, values, and commitment to providing exceptional insurance coverage for Canadian families and businesses.",
  keywords: [
    "about MapleGuard",
    "insurance company",
    "Canadian insurance",
    "company mission",
    "insurance values",
    "team values"
  ],
  openGraph: {
    title: "About Us - MapleGuard Insurance Company",
    description: "Learn about MapleGuard Insurance's mission, values, and commitment to providing exceptional insurance coverage for Canadian families and businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - MapleGuard Insurance Company",
    description: "Learn about MapleGuard Insurance's mission, values, and commitment to providing exceptional insurance coverage for Canadian families and businesses.",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            About MapleGuard Insurance
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We're a Canadian insurance company dedicated to providing smarter coverage and faster claims 
            for families and businesses across the country.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Our Mission</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              To make insurance simple, transparent, and accessible for all Canadians. We believe everyone 
              deserves reliable protection without the complexity and confusion that often comes with insurance.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Our mission drives everything we do, from our straightforward pricing to our 24/7 claims support. 
              We're committed to being the insurance company that actually understands your life.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900">Trust</h3>
                  <p className="text-neutral-700">We build trust through transparency, honesty, and reliability in everything we do.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900">Customer First</h3>
                  <p className="text-neutral-700">Our customers are at the heart of every decision we make and every service we provide.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900">Excellence</h3>
                  <p className="text-neutral-700">We strive for excellence in service, innovation, and continuous improvement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900">Community</h3>
                  <p className="text-neutral-700">We're proud to serve Canadian communities and support local causes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-neutral-700">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8/5</div>
              <div className="text-neutral-700">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24hrs</div>
              <div className="text-neutral-700">Average Claim Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-neutral-700">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 leading-relaxed mb-6">
                MapleGuard Insurance was founded in 2009 with a simple vision: to make insurance work better for Canadians. 
                Our founders, having experienced the frustrations of traditional insurance companies, set out to create 
                something different.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We started as a small team of insurance professionals who believed that technology and customer service 
                could work together to create a better experience. Over the years, we've grown to serve thousands of 
                customers across Canada while maintaining our commitment to transparency and innovation.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Today, we're proud to be one of Canada's fastest-growing insurance companies, but we've never lost sight 
                of what makes us different: our unwavering commitment to putting customers first and making insurance 
                as simple as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Sarah Johnson</h3>
                <p className="text-primary-600 font-medium mb-2">Chief Executive Officer</p>
                <p className="text-neutral-600 text-sm">
                  With over 20 years in the insurance industry, Sarah leads our mission to make insurance accessible for all Canadians.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Michael Chen</h3>
                <p className="text-primary-600 font-medium mb-2">Chief Technology Officer</p>
                <p className="text-neutral-600 text-sm">
                  Michael drives our digital innovation, ensuring our technology serves our customers' needs effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Emily Rodriguez</h3>
                <p className="text-primary-600 font-medium mb-2">Chief Customer Officer</p>
                <p className="text-neutral-600 text-sm">
                  Emily ensures every customer interaction exceeds expectations and drives our customer-first culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Best Insurance Company 2023</h3>
                <p className="text-sm text-neutral-600">Canadian Insurance Awards</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Customer Service Excellence</h3>
                <p className="text-sm text-neutral-600">Insurance Business Canada</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Innovation in Insurance</h3>
                <p className="text-sm text-neutral-600">FinTech Awards 2023</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Top Workplace</h3>
                <p className="text-sm text-neutral-600">Great Place to Work Canada</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Canadians who trust MapleGuard for their insurance needs. 
            Get your personalized quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quotes"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Get Your Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
