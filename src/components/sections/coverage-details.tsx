"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
import { CoverageDetail } from "@/types";

interface CoverageDetailsProps {
  coverage: CoverageDetail[];
  title?: string;
  description?: string;
}

export function CoverageDetails({ 
  coverage, 
  title = "Coverage Details",
  description = "Comprehensive protection tailored to your needs"
}: CoverageDetailsProps) {
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

        {/* Coverage grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverage.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-neutral-900">
                      {item.name}
                    </CardTitle>
                    <div className="flex-shrink-0 ml-4">
                      {item.included ? (
                        <Badge variant="success" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Included
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          <XCircle className="w-3 h-3 mr-1" />
                          Optional
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {(item.amount || item.deductible) && (
                    <div className="space-y-2">
                      {item.amount && (
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Coverage Amount:</span>
                          <span className="font-medium text-neutral-900">{item.amount}</span>
                        </div>
                      )}
                      {item.deductible && (
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Deductible:</span>
                          <span className="font-medium text-neutral-900">{item.deductible}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
