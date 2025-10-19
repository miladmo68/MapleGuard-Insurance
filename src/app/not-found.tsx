import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found - 404 Error | MapleGuard Insurance",
  description: "The page you're looking for doesn't exist. Return to MapleGuard Insurance homepage or explore our insurance products.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary-600 mb-4">404</div>
            <div className="w-32 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or you may have entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                <Search className="w-5 h-5 mr-2" />
                Browse Products
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">
              Popular Pages
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-3">
                <Link href="/quotes" className="block text-primary-600 hover:text-primary-700 font-medium">
                  Get Insurance Quote
                </Link>
                <Link href="/products" className="block text-primary-600 hover:text-primary-700 font-medium">
                  Insurance Products
                </Link>
                <Link href="/claims" className="block text-primary-600 hover:text-primary-700 font-medium">
                  File a Claim
                </Link>
                <Link href="/contact" className="block text-primary-600 hover:text-primary-700 font-medium">
                  Contact Us
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="/about" className="block text-primary-600 hover:text-primary-700 font-medium">
                  About Us
                </Link>
                <Link href="/faq" className="block text-primary-600 hover:text-primary-700 font-medium">
                  FAQ
                </Link>
                <Link href="/agents" className="block text-primary-600 hover:text-primary-700 font-medium">
                  Find an Agent
                </Link>
                <Link href="/locations" className="block text-primary-600 hover:text-primary-700 font-medium">
                  Branch Locations
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-2">
              Still can't find what you're looking for?
            </p>
            <p className="text-neutral-600">
              Call us at <a href="tel:1-800-MAPLE-01" className="text-primary-600 font-semibold hover:text-primary-700">1-800-MAPLE-01</a> or 
              email us at <a href="mailto:hello@mapleguard.ca" className="text-primary-600 font-semibold hover:text-primary-700">hello@mapleguard.ca</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
