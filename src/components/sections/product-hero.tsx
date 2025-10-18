"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 lg:py-24">
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
            {/* Product icon and name */}
            <div className="flex items-center gap-4">
              <div className="text-6xl">{product.icon}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900">
                  {product.name}
                </h1>
                <p className="text-xl text-neutral-600 mt-2">
                  {product.shortDescription}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-neutral-700 leading-relaxed">
              {product.description}
            </p>

            {/* Key features */}
            <div className="space-y-3">
              {product.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Licensed in Canada
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Easy Claims
              </Badge>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href={product.ctaLink}>
                  {product.ctaText}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href="/contact">
                  Speak with an Expert
                </Link>
              </Button>
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
              {/* Sample rates preview */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Sample Rates
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Starting from {product.sampleRates[0].monthly}/month
                  </p>
                </div>
                
                <div className="space-y-4">
                  {product.sampleRates.map((rate, index) => (
                    <div key={index} className="bg-neutral-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-neutral-900">{rate.plan}</span>
                        <span className="text-lg font-semibold text-primary-600">
                          {rate.monthly}/mo
                        </span>
                      </div>
                      <div className="text-xs text-neutral-600">
                        {rate.features.slice(0, 2).join(" • ")}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-neutral-500 text-center">
                  {product.sampleRates[0].disclaimer}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
