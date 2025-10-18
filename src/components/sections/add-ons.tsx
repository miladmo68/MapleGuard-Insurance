"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { AddOn } from "@/types";

interface AddOnsProps {
  addOns: AddOn[];
  title?: string;
  description?: string;
}

export function AddOns({ 
  addOns, 
  title = "Optional Add-Ons",
  description = "Enhance your coverage with these optional features"
}: AddOnsProps) {
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
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Add-ons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addOn, index) => (
            <motion.div
              key={addOn.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full relative">
                {addOn.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="warning" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-neutral-900">
                    {addOn.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary-600">
                    {addOn.price}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {addOn.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Add to Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Add-ons can be selected during the quote process. All prices are monthly and 
            can be adjusted based on your specific needs and coverage requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
