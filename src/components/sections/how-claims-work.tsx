"use client";

import { motion } from "framer-motion";
import { FileText, Search, DollarSign, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "File Online",
    description: "Submit your claim in just 2 minutes through our secure online portal or mobile app.",
    time: "2 minutes",
    color: "bg-primary-500"
  },
  {
    icon: Search,
    title: "Assessment",
    description: "Our expert team reviews your claim and may request additional documentation if needed.",
    time: "24-48 hours",
    color: "bg-accent-500"
  },
  {
    icon: DollarSign,
    title: "Payout/Repair",
    description: "Receive your settlement or get connected with our network of trusted repair partners.",
    time: "1-3 days",
    color: "bg-warning-500"
  }
];

export function HowClaimsWork() {
  return (
    <section className="py-20 bg-white">
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
            How Claims Work
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our streamlined claims process gets you back on track quickly and efficiently.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-warning-200 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-600 z-20">
                    {index + 1}
                  </div>

                  {/* Icon container */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${step.color} rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Time badge */}
                  <div className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    {step.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Need to File a Claim?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our claims team is available 24/7 to help you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1-800-MAPLE-01"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Call 1-800-MAPLE-01
              </a>
              <a
                href="/claims"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                File Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
