"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Car, Home, GraduationCap, Lock } from "lucide-react";
import Link from "next/link";

const discounts = [
  {
    icon: Shield,
    title: "Multi-Policy Discount",
    description: "Save up to 25% when you bundle multiple policies",
    savings: "Up to 25%",
    requirements: ["2+ policies", "Same household"],
    color: "bg-primary-500"
  },
  {
    icon: Car,
    title: "Safe Driver Discount",
    description: "Reward for maintaining a clean driving record",
    savings: "Up to 20%",
    requirements: ["No at-fault accidents", "3+ years clean record"],
    color: "bg-accent-500"
  },
  {
    icon: Home,
    title: "Alarmed Home Discount",
    description: "Protect your home and save on insurance",
    savings: "Up to 15%",
    requirements: ["Monitored security system", "Smoke detectors"],
    color: "bg-warning-500"
  },
  {
    icon: GraduationCap,
    title: "Student Saver",
    description: "Special rates for students and recent graduates",
    savings: "Up to 10%",
    requirements: ["Full-time student", "Good grades"],
    color: "bg-purple-500"
  }
];

export function Discounts() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Save More with Our Discounts
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We believe in rewarding responsible behavior and loyalty. See how much you could save.
          </p>
        </motion.div>

        {/* Discounts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {discounts.map((discount, index) => (
            <motion.div
              key={discount.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 group-hover:-translate-y-1 h-full">
                {/* Icon and savings badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${discount.color} rounded-xl`}>
                    <discount.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="success" className="text-xs">
                    {discount.savings}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {discount.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  {discount.description}
                </p>

                {/* Requirements */}
                <div className="space-y-1">
                  <div className="text-xs font-medium text-neutral-500 mb-2">Requirements:</div>
                  {discount.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2 text-xs text-neutral-600">
                      <div className="w-1 h-1 bg-neutral-400 rounded-full" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Calculate Your Savings
            </h3>
            <p className="text-neutral-600 mb-6">
              See how much you could save by combining multiple discounts and policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quotes">
                  Get Your Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Speak with an Expert
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
