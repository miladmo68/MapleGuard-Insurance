import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with MapleGuard Insurance",
  description: "Contact MapleGuard Insurance for quotes, claims, or general inquiries. We're here to help with all your insurance needs.",
  keywords: [
    "contact insurance",
    "insurance support",
    "insurance quotes",
    "insurance claims",
    "customer service",
    "insurance help"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with MapleGuard Insurance",
    description: "Contact MapleGuard Insurance for quotes, claims, or general inquiries. We're here to help with all your insurance needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with MapleGuard Insurance",
    description: "Contact MapleGuard Insurance for quotes, claims, or general inquiries. We're here to help with all your insurance needs.",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're here to help with all your insurance needs. Get in touch with our friendly team for quotes, claims, or any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      required
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email address"
                    required
                  />
                  
                  <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="(555) 123-4567"
                  />
                  
                  <Input
                    label="Subject"
                    placeholder="What can we help you with?"
                    required
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                  
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">Phone</h3>
                      <p className="text-neutral-600 mb-2">Call us for immediate assistance</p>
                      <a href="tel:1-800-MAPLE-01" className="text-primary-600 font-semibold hover:text-primary-700">
                        1-800-MAPLE-01
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">Available 24/7 for claims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email</h3>
                      <p className="text-neutral-600 mb-2">Send us an email anytime</p>
                      <a href="mailto:hello@mapleguard.ca" className="text-primary-600 font-semibold hover:text-primary-700">
                        hello@mapleguard.ca
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">Visit Us</h3>
                      <p className="text-neutral-600 mb-2">Come see us in person</p>
                      <div className="text-neutral-700">
                        <p>123 Insurance Street</p>
                        <p>Toronto, ON M5H 2N2</p>
                      </div>
                      <p className="text-sm text-neutral-500 mt-1">Monday - Friday, 9 AM - 5 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-200">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Claims Hotline</span>
                      <span className="font-medium text-primary-600">24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-error-200 bg-error-50">
              <CardHeader>
                <CardTitle className="text-error-800">Emergency Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-error-700 mb-4">
                  For urgent claims or emergencies outside business hours, call our 24/7 claims hotline.
                </p>
                <a 
                  href="tel:1-800-MAPLE-01" 
                  className="inline-flex items-center gap-2 bg-error-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-error-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: 1-800-MAPLE-01
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
