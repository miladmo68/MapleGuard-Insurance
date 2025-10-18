"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Users, Phone, Award } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Claims Support",
    description: "File claims anytime, anywhere with our round-the-clock support team."
  },
  {
    icon: Users,
    title: "Canadian-Based Agents",
    description: "Work with local experts who understand Canadian insurance needs."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. Clear, upfront pricing for all our products."
  },
  {
    icon: Shield,
    title: "Bundle & Save up to 25%",
    description: "Combine multiple policies and enjoy significant savings on your premiums."
  },
  {
    icon: Phone,
    title: "Easy Claims Process",
    description: "File claims in minutes through our mobile app or online portal."
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in customer service and claims handling."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-neutral-50">
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
            Why Choose MapleGuard?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're committed to providing exceptional insurance coverage with outstanding customer service that puts you first.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                50K+
              </div>
              <div className="text-neutral-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                4.8/5
              </div>
              <div className="text-neutral-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                24hrs
              </div>
              <div className="text-neutral-600">Average Claim Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                25%
              </div>
              <div className="text-neutral-600">Bundle Savings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
