"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          {/* Main content */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Get Protected?
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of Canadians who trust MapleGuard for their insurance needs. 
              Get your personalized quote in minutes and start saving today.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/quotes">
                  Get Your Quote Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>
            </div>

            {/* Contact info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary-200" />
                <div className="text-left">
                  <div className="text-sm text-primary-200">Call Us</div>
                  <div className="font-semibold">1-800-MAPLE-01</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-primary-200" />
                <div className="text-left">
                  <div className="text-sm text-primary-200">Email Us</div>
                  <div className="font-semibold">hello@mapleguard.ca</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-5 h-5 text-primary-200" />
                <div className="text-left">
                  <div className="text-sm text-primary-200">24/7 Support</div>
                  <div className="font-semibold">Always Here</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-primary-500 pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-primary-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">4.8/5</div>
                <div className="text-sm text-primary-200">Customer Rating</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">24hrs</div>
                <div className="text-sm text-primary-200">Average Claim Time</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">25%</div>
                <div className="text-sm text-primary-200">Bundle Savings</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
