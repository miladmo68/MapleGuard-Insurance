"use client";

import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { QuoteFormData } from "@/types";

interface ProductSelectionProps {
  form: UseFormReturn<QuoteFormData>;
}

export function ProductSelection({ form }: ProductSelectionProps) {
  const { watch, setValue } = form;
  const selectedProduct = watch("product");

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Choose Your Insurance Product
        </h3>
        <p className="text-neutral-600">
          Select the type of insurance you're looking for to get started
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            hover
            className={`cursor-pointer transition-all ${
              selectedProduct === product.id
                ? "ring-2 ring-primary-500 bg-primary-50"
                : "hover:shadow-soft-lg"
            }`}
            onClick={() => setValue("product", product.id)}
          >
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">{product.icon}</div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <p className="text-sm text-neutral-600">
                {product.shortDescription}
              </p>
            </CardHeader>
            
            <CardContent className="pt-0">
              {/* Key features */}
              <ul className="space-y-2 mb-4">
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Sample rate */}
              <div className="bg-neutral-50 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-primary-600">
                  {product.sampleRates[1].monthly}
                  <span className="text-sm font-normal text-neutral-600">/month</span>
                </div>
                <div className="text-xs text-neutral-500">
                  {product.sampleRates[1].plan} Plan
                </div>
              </div>

              {selectedProduct === product.id && (
                <div className="mt-4 flex justify-center">
                  <Badge variant="success" className="text-xs">
                    Selected
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
