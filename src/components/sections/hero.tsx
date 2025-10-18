"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary-100 opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent-100 opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Licensed in Canada
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Star className="w-4 h-4 mr-2" />
                4.8/5 Rating
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="w-4 h-4 mr-2" />
                50K+ Customers
              </Badge>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight">
                Insurance that actually{" "}
                <span className="text-primary-600">understands</span> your life
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Bundle Auto, Home, and Life to save up to 25%. File claims in minutes with our 
                Canadian-based team and transparent pricing.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/quotes">
                  Get a Quote
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>24/7 Claims Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>Canadian-Based Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-soft-xl p-8 border border-neutral-200">
              {/* Mock dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900">Your Coverage</h3>
                  <Badge variant="success">Active</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="text-2xl mb-2">🚗</div>
                    <div className="text-sm font-medium text-neutral-900">Auto</div>
                    <div className="text-xs text-neutral-600">$89/mo</div>
                  </div>
                  <div className="bg-accent-50 rounded-xl p-4">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="text-sm font-medium text-neutral-900">Home</div>
                    <div className="text-xs text-neutral-600">$129/mo</div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-900">Bundle Savings</span>
                    <span className="text-sm font-semibold text-accent-600">25% OFF</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-accent-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Clock className="w-4 h-4" />
                  <span>Claims processed in 24-48 hours</span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent-500 text-white rounded-full p-3 shadow-lg"
              >
                <Shield className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-primary-500 text-white rounded-full p-3 shadow-lg"
              >
                <Star className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
