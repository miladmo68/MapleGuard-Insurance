"use client";

import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Edit } from "lucide-react";
import { QuoteFormData } from "@/types";
import { products } from "@/data/products";

interface ReviewProps {
  form: UseFormReturn<QuoteFormData>;
}

export function Review({ form }: ReviewProps) {
  const { watch, register } = form;
  const formData = watch();
  const selectedProduct = products.find(p => p.id === formData.product);

  const getCoverageLevelName = (level: string) => {
    const levels: Record<string, string> = {
      basic: "Basic",
      standard: "Standard", 
      premium: "Premium"
    };
    return levels[level] || level;
  };

  const getAddOnNames = (addOnIds: string[]) => {
    if (!selectedProduct) return [];
    return addOnIds.map(id => {
      const addOn = selectedProduct.addOns.find(a => a.id === id);
      return addOn ? `${addOn.name} - ${addOn.price}` : id;
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Review Your Quote Request
        </h3>
        <p className="text-neutral-600">
          Please review your information and make any final adjustments
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Product & Coverage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-500" />
              Product & Coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-neutral-900">Selected Product</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl">{selectedProduct?.icon}</span>
                <span>{selectedProduct?.name}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900">Coverage Level</h4>
              <p className="text-neutral-600">{getCoverageLevelName(formData.coverageLevel)}</p>
            </div>

            {formData.addOns && formData.addOns.length > 0 && (
              <div>
                <h4 className="font-semibold text-neutral-900">Selected Add-Ons</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {getAddOnNames(formData.addOns).map((addOn, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {addOn}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-500" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-neutral-900">Name</h4>
                <p className="text-neutral-600">
                  {formData.personalInfo?.firstName} {formData.personalInfo?.lastName}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">Email</h4>
                <p className="text-neutral-600">{formData.personalInfo?.email}</p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">Phone</h4>
                <p className="text-neutral-600">{formData.personalInfo?.phone}</p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">Postal Code</h4>
                <p className="text-neutral-600">{formData.personalInfo?.postalCode}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Details Summary */}
      {formData.riskDetails && Object.keys(formData.riskDetails).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-500" />
              Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(formData.riskDetails).map(([key, value]) => (
                <div key={key}>
                  <h4 className="font-medium text-neutral-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-neutral-600">{value as string}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            {...register("additionalInfo")}
            label="Additional Comments or Questions"
            placeholder="Any additional information you'd like to share with us..."
            rows={4}
          />
        </CardContent>
      </Card>

      {/* Honeypot (hidden) */}
      <input
        {...register("honeypot")}
        type="text"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Privacy Notice */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h4 className="font-semibold text-neutral-900 mb-2">Privacy & Terms</h4>
        <p className="text-sm text-neutral-600 mb-3">
          By submitting this quote request, you agree to our Terms of Service and Privacy Policy. 
          Your information will be used solely to provide you with insurance quotes and related services.
        </p>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <CheckCircle className="w-4 h-4 text-accent-500" />
          <span>I agree to the terms and conditions</span>
        </div>
      </div>
    </div>
  );
}
