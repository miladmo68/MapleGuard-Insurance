"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProductsGrid() {
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
            Choose Your Coverage
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions designed to protect what matters most to you and your family.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.shortDescription}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Features list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Sample rate */}
                  <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-neutral-900">
                        {product.sampleRates[1].monthly}
                        <span className="text-sm font-normal text-neutral-600">/month</span>
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">
                        {product.sampleRates[1].plan} Plan
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <Button asChild className="w-full">
                    <Link href={product.ctaLink}>
                      {product.ctaText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Need help choosing the right coverage? Our experts are here to help.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Speak with an Expert
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
