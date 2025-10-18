"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { SampleRate } from "@/types";

interface SampleRatesProps {
  sampleRates: SampleRate[];
  title?: string;
  description?: string;
}

export function SampleRates({ 
  sampleRates, 
  title = "Sample Rates",
  description = "Get an idea of what your coverage might cost"
}: SampleRatesProps) {
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
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Rates grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sampleRates.map((rate, index) => (
            <motion.div
              key={rate.plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card hover className={`h-full ${index === 1 ? 'ring-2 ring-primary-500' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="default" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-neutral-900">
                    {rate.plan}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-primary-600">
                      {rate.monthly}
                    </div>
                    <div className="text-sm text-neutral-500">
                      per month
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">
                      or {rate.yearly}/year
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {rate.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Get {rate.plan} Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-neutral-50 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>Disclaimer:</strong> {sampleRates[0].disclaimer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
