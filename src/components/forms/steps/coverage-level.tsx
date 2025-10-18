"use client";

import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { QuoteFormData } from "@/types";

interface CoverageLevelProps {
  form: UseFormReturn<QuoteFormData>;
}

export function CoverageLevel({ form }: CoverageLevelProps) {
  const { watch, setValue } = form;
  const product = watch("product");
  const selectedLevel = watch("coverageLevel");

  const getCoverageLevels = (productType: string) => {
    switch (productType) {
      case "auto":
        return [
          {
            id: "basic",
            name: "Basic",
            price: "$89",
            description: "Essential coverage for budget-conscious drivers",
            features: [
              "Third Party Liability ($1M)",
              "Basic Collision Coverage",
              "Comprehensive Coverage",
              "Uninsured Motorist Protection"
            ],
            popular: false
          },
          {
            id: "standard",
            name: "Standard",
            price: "$129",
            description: "Comprehensive coverage with great value",
            features: [
              "Third Party Liability ($2M)",
              "Full Collision Coverage",
              "Comprehensive Coverage",
              "Uninsured Motorist Protection",
              "24/7 Roadside Assistance",
              "Rental Car Coverage"
            ],
            popular: true
          },
          {
            id: "premium",
            name: "Premium",
            price: "$179",
            description: "Maximum protection with premium features",
            features: [
              "Third Party Liability ($2M)",
              "Full Collision Coverage",
              "Comprehensive Coverage",
              "Uninsured Motorist Protection",
              "24/7 Roadside Assistance",
              "Rental Car Coverage",
              "Accident Forgiveness",
              "New Vehicle Replacement"
            ],
            popular: false
          }
        ];

      case "home":
        return [
          {
            id: "basic",
            name: "Basic",
            price: "$89",
            description: "Essential home protection",
            features: [
              "Dwelling Coverage ($500K)",
              "Personal Property ($250K)",
              "Liability Protection ($500K)",
              "Additional Living Expenses"
            ],
            popular: false
          },
          {
            id: "standard",
            name: "Standard",
            price: "$129",
            description: "Comprehensive home coverage",
            features: [
              "Dwelling Coverage ($750K)",
              "Personal Property ($400K)",
              "Liability Protection ($1M)",
              "Additional Living Expenses",
              "Water Damage Coverage",
              "Identity Theft Protection"
            ],
            popular: true
          },
          {
            id: "premium",
            name: "Premium",
            price: "$179",
            description: "Maximum home protection",
            features: [
              "Dwelling Coverage ($1M)",
              "Personal Property ($500K)",
              "Liability Protection ($1M)",
              "Additional Living Expenses",
              "Water Damage Coverage",
              "Identity Theft Protection",
              "Jewelry Coverage",
              "Sewer Backup Coverage"
            ],
            popular: false
          }
        ];

      case "life":
        return [
          {
            id: "basic",
            name: "Term 20",
            price: "$45",
            description: "Affordable term life coverage",
            features: [
              "$500K Coverage",
              "20-year term",
              "No medical exam required",
              "Living benefits included"
            ],
            popular: false
          },
          {
            id: "standard",
            name: "Term 30",
            price: "$65",
            description: "Long-term protection",
            features: [
              "$1M Coverage",
              "30-year term",
              "No medical exam required",
              "Living benefits included",
              "Accelerated death benefits"
            ],
            popular: true
          },
          {
            id: "premium",
            name: "Whole Life",
            price: "$125",
            description: "Permanent life insurance",
            features: [
              "$500K Coverage",
              "Permanent coverage",
              "Cash value accumulation",
              "Living benefits included",
              "Guaranteed premiums"
            ],
            popular: false
          }
        ];

      default:
        return [
          {
            id: "basic",
            name: "Basic",
            price: "$89",
            description: "Essential coverage",
            features: ["Basic protection", "Standard limits"],
            popular: false
          },
          {
            id: "standard",
            name: "Standard",
            price: "$129",
            description: "Comprehensive coverage",
            features: ["Enhanced protection", "Higher limits", "Additional features"],
            popular: true
          },
          {
            id: "premium",
            name: "Premium",
            price: "$179",
            description: "Maximum coverage",
            features: ["Maximum protection", "Highest limits", "All features included"],
            popular: false
          }
        ];
    }
  };

  const coverageLevels = getCoverageLevels(product);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Choose Your Coverage Level
        </h3>
        <p className="text-neutral-600">
          Select the level of coverage that best fits your needs and budget
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {coverageLevels.map((level) => (
          <Card
            key={level.id}
            hover
            className={`cursor-pointer transition-all relative ${
              selectedLevel === level.id
                ? "ring-2 ring-primary-500 bg-primary-50"
                : "hover:shadow-soft-lg"
            }`}
            onClick={() => setValue("coverageLevel", level.id)}
          >
            {level.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <Badge variant="warning" className="text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg">{level.name}</CardTitle>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {level.price}
                <span className="text-sm font-normal text-neutral-600">/month</span>
              </div>
              <p className="text-sm text-neutral-600">
                {level.description}
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="space-y-3 mb-6">
                {level.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {selectedLevel === level.id && (
                <div className="flex justify-center">
                  <Badge variant="success" className="text-xs">
                    <CheckCircle className="w-3 h-3 mr-1" />
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
