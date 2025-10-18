"use client";

import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { QuoteFormData } from "@/types";

interface AddOnsProps {
  form: UseFormReturn<QuoteFormData>;
}

export function AddOns({ form }: AddOnsProps) {
  const { watch, setValue } = form;
  const product = watch("product");
  const selectedAddOns = watch("addOns") || [];

  const getAddOns = (productType: string) => {
    switch (productType) {
      case "auto":
        return [
          {
            id: "rental",
            name: "Rental Car Coverage",
            description: "Coverage for rental car while yours is being repaired",
            price: "$15/month",
            popular: true
          },
          {
            id: "roadside",
            name: "24/7 Roadside Assistance",
            description: "Towing, battery jump, flat tire service",
            price: "$8/month",
            popular: true
          },
          {
            id: "glass",
            name: "Glass Coverage",
            description: "Windshield and window repair/replacement",
            price: "$5/month"
          },
          {
            id: "accident",
            name: "Accident Forgiveness",
            description: "Protect your premium after first at-fault accident",
            price: "$12/month"
          }
        ];

      case "home":
        return [
          {
            id: "jewelry",
            name: "Jewelry Coverage",
            description: "Enhanced coverage for valuable jewelry",
            price: "$12/month",
            popular: true
          },
          {
            id: "identity",
            name: "Identity Theft Protection",
            description: "Monitoring and recovery services",
            price: "$8/month"
          },
          {
            id: "sewer",
            name: "Sewer Backup Coverage",
            description: "Protection from sewer backup damage",
            price: "$6/month"
          },
          {
            id: "water",
            name: "Water Damage Coverage",
            description: "Enhanced water damage protection",
            price: "$10/month"
          }
        ];

      case "life":
        return [
          {
            id: "disability",
            name: "Disability Insurance",
            description: "Income protection if you can't work",
            price: "$25/month",
            popular: true
          },
          {
            id: "critical",
            name: "Critical Illness",
            description: "Lump sum for serious illnesses",
            price: "$18/month"
          },
          {
            id: "child",
            name: "Child Life Insurance",
            description: "Coverage for your children",
            price: "$8/month"
          },
          {
            id: "waiver",
            name: "Waiver of Premium",
            description: "Waive premiums if disabled",
            price: "$15/month"
          }
        ];

      default:
        return [
          {
            id: "enhanced",
            name: "Enhanced Coverage",
            description: "Additional protection for your needs",
            price: "$20/month",
            popular: true
          },
          {
            id: "premium",
            name: "Premium Support",
            description: "Priority customer service",
            price: "$10/month"
          }
        ];
    }
  };

  const addOns = getAddOns(product);

  const toggleAddOn = (addOnId: string) => {
    const newAddOns = selectedAddOns.includes(addOnId)
      ? selectedAddOns.filter(id => id !== addOnId)
      : [...selectedAddOns, addOnId];
    
    setValue("addOns", newAddOns);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Optional Add-Ons
        </h3>
        <p className="text-neutral-600">
          Enhance your coverage with these optional features (you can add or remove these later)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {addOns.map((addOn) => (
          <Card
            key={addOn.id}
            hover
            className={`cursor-pointer transition-all relative ${
              selectedAddOns.includes(addOn.id)
                ? "ring-2 ring-primary-500 bg-primary-50"
                : "hover:shadow-soft-lg"
            }`}
            onClick={() => toggleAddOn(addOn.id)}
          >
            {addOn.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <Badge variant="warning" className="text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              </div>
            )}

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{addOn.name}</CardTitle>
                  <p className="text-sm text-neutral-600 mt-1">
                    {addOn.description}
                  </p>
                </div>
                <div className="text-lg font-semibold text-primary-600 ml-4">
                  {addOn.price}
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {selectedAddOns.includes(addOn.id) && (
                <div className="flex items-center gap-2 text-sm text-accent-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Selected</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedAddOns.length > 0 && (
        <div className="bg-accent-50 rounded-lg p-4">
          <h4 className="font-semibold text-neutral-900 mb-2">Selected Add-Ons:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedAddOns.map((addOnId) => {
              const addOn = addOns.find(a => a.id === addOnId);
              return addOn ? (
                <Badge key={addOnId} variant="secondary" className="text-xs">
                  {addOn.name} - {addOn.price}
                </Badge>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
