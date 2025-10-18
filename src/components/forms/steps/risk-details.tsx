"use client";

import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { QuoteFormData } from "@/types";

interface RiskDetailsProps {
  form: UseFormReturn<QuoteFormData>;
}

export function RiskDetails({ form }: RiskDetailsProps) {
  const { register, watch, formState: { errors } } = form;
  const product = watch("product");

  const getRiskQuestions = (productType: string) => {
    switch (productType) {
      case "auto":
        return {
          title: "Auto Insurance Details",
          description: "Help us understand your driving situation",
          questions: [
            {
              name: "vehicleYear",
              label: "Vehicle Year",
              type: "select",
              options: Array.from({ length: 25 }, (_, i) => ({
                value: (2024 - i).toString(),
                label: (2024 - i).toString()
              }))
            },
            {
              name: "vehicleMake",
              label: "Vehicle Make",
              type: "select",
              options: [
                { value: "toyota", label: "Toyota" },
                { value: "honda", label: "Honda" },
                { value: "ford", label: "Ford" },
                { value: "chevrolet", label: "Chevrolet" },
                { value: "nissan", label: "Nissan" },
                { value: "bmw", label: "BMW" },
                { value: "mercedes", label: "Mercedes-Benz" },
                { value: "audi", label: "Audi" },
                { value: "other", label: "Other" }
              ]
            },
            {
              name: "drivingExperience",
              label: "Years of Driving Experience",
              type: "select",
              options: [
                { value: "0-1", label: "0-1 years" },
                { value: "2-3", label: "2-3 years" },
                { value: "4-5", label: "4-5 years" },
                { value: "6-10", label: "6-10 years" },
                { value: "10+", label: "10+ years" }
              ]
            },
            {
              name: "annualMileage",
              label: "Annual Mileage",
              type: "select",
              options: [
                { value: "0-5000", label: "0-5,000 km" },
                { value: "5000-10000", label: "5,000-10,000 km" },
                { value: "10000-15000", label: "10,000-15,000 km" },
                { value: "15000-20000", label: "15,000-20,000 km" },
                { value: "20000+", label: "20,000+ km" }
              ]
            },
            {
              name: "accidents",
              label: "At-fault Accidents (Last 3 years)",
              type: "select",
              options: [
                { value: "0", label: "None" },
                { value: "1", label: "1 accident" },
                { value: "2", label: "2 accidents" },
                { value: "3+", label: "3+ accidents" }
              ]
            }
          ]
        };
      
      case "home":
        return {
          title: "Home Insurance Details",
          description: "Tell us about your property",
          questions: [
            {
              name: "homeValue",
              label: "Estimated Home Value",
              type: "select",
              options: [
                { value: "0-200000", label: "$0 - $200,000" },
                { value: "200000-400000", label: "$200,000 - $400,000" },
                { value: "400000-600000", label: "$400,000 - $600,000" },
                { value: "600000-800000", label: "$600,000 - $800,000" },
                { value: "800000+", label: "$800,000+" }
              ]
            },
            {
              name: "homeAge",
              label: "Home Age",
              type: "select",
              options: [
                { value: "0-5", label: "0-5 years" },
                { value: "6-10", label: "6-10 years" },
                { value: "11-20", label: "11-20 years" },
                { value: "21-30", label: "21-30 years" },
                { value: "30+", label: "30+ years" }
              ]
            },
            {
              name: "homeType",
              label: "Home Type",
              type: "select",
              options: [
                { value: "single", label: "Single Family" },
                { value: "townhouse", label: "Townhouse" },
                { value: "condo", label: "Condominium" },
                { value: "duplex", label: "Duplex" },
                { value: "other", label: "Other" }
              ]
            },
            {
              name: "securitySystem",
              label: "Security System",
              type: "select",
              options: [
                { value: "none", label: "None" },
                { value: "basic", label: "Basic (smoke detectors)" },
                { value: "monitored", label: "Monitored system" },
                { value: "smart", label: "Smart home system" }
              ]
            }
          ]
        };

      case "life":
        return {
          title: "Life Insurance Details",
          description: "Help us understand your life insurance needs",
          questions: [
            {
              name: "coverageAmount",
              label: "Desired Coverage Amount",
              type: "select",
              options: [
                { value: "100000", label: "$100,000" },
                { value: "250000", label: "$250,000" },
                { value: "500000", label: "$500,000" },
                { value: "750000", label: "$750,000" },
                { value: "1000000", label: "$1,000,000" },
                { value: "1500000", label: "$1,500,000+" }
              ]
            },
            {
              name: "termLength",
              label: "Preferred Term Length",
              type: "select",
              options: [
                { value: "10", label: "10 years" },
                { value: "15", label: "15 years" },
                { value: "20", label: "20 years" },
                { value: "30", label: "30 years" },
                { value: "whole", label: "Whole Life" }
              ]
            },
            {
              name: "healthStatus",
              label: "Health Status",
              type: "select",
              options: [
                { value: "excellent", label: "Excellent" },
                { value: "good", label: "Good" },
                { value: "fair", label: "Fair" },
                { value: "poor", label: "Poor" }
              ]
            },
            {
              name: "smokingStatus",
              label: "Smoking Status",
              type: "select",
              options: [
                { value: "never", label: "Never smoked" },
                { value: "former", label: "Former smoker" },
                { value: "current", label: "Current smoker" }
              ]
            }
          ]
        };

      default:
        return {
          title: "Additional Information",
          description: "Tell us more about your needs",
          questions: []
        };
    }
  };

  const riskInfo = getRiskQuestions(product);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {riskInfo.title}
        </h3>
        <p className="text-neutral-600">
          {riskInfo.description}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {riskInfo.questions.map((question, index) => (
              <div key={index}>
                {question.type === "select" ? (
                  <Select
                    {...register(`riskDetails.${question.name}`)}
                    label={question.label}
                    options={question.options}
                    placeholder={`Select ${question.label.toLowerCase()}`}
                    error={errors.riskDetails?.[question.name]?.message}
                    required
                  />
                ) : (
                  <Input
                    {...register(`riskDetails.${question.name}`)}
                    type={question.type}
                    label={question.label}
                    placeholder={`Enter ${question.label.toLowerCase()}`}
                    error={errors.riskDetails?.[question.name]?.message}
                    required
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
