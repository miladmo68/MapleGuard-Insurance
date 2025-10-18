"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { ProductSelection } from "./steps/product-selection";
import { PersonalInfo } from "./steps/personal-info";
import { RiskDetails } from "./steps/risk-details";
import { CoverageLevel } from "./steps/coverage-level";
import { AddOns } from "./steps/add-ons";
import { Review } from "./steps/review";
import { QuoteFormData } from "@/types";

const quoteSchema = z.object({
  product: z.string().min(1, "Please select a product"),
  personalInfo: z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    dateOfBirth: z.string().min(1, "Please enter your date of birth"),
    postalCode: z.string().min(6, "Please enter a valid postal code"),
  }),
  riskDetails: z.record(z.any()),
  coverageLevel: z.string().min(1, "Please select a coverage level"),
  addOns: z.array(z.string()),
  additionalInfo: z.string().optional(),
  honeypot: z.string().optional(),
});

const steps = [
  { id: "product", title: "Choose Product", component: ProductSelection },
  { id: "personal", title: "Personal Info", component: PersonalInfo },
  { id: "risk", title: "Risk Details", component: RiskDetails },
  { id: "coverage", title: "Coverage Level", component: CoverageLevel },
  { id: "addons", title: "Add-Ons", component: AddOns },
  { id: "review", title: "Review", component: Review },
];

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      product: "",
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        postalCode: "",
      },
      riskDetails: {},
      coverageLevel: "",
      addOns: [],
      additionalInfo: "",
      honeypot: "",
    },
  });

  const { handleSubmit, trigger, formState: { errors, isValid } } = form;

  const nextStep = async () => {
    const currentStepId = steps[currentStep].id;
    const isStepValid = await trigger(currentStepId as keyof QuoteFormData);
    
    if (isStepValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check honeypot
      if (data.honeypot) {
        throw new Error("Spam detected");
      }
      
      console.log("Quote submitted:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting quote:", error);
      // Handle error (show toast, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Quote Request Submitted!
              </h2>
              <p className="text-neutral-600 mb-6">
                Thank you for your interest in MapleGuard Insurance. We'll review your information 
                and get back to you within 24 hours with a personalized quote.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href="/">Return to Home</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Get Your Insurance Quote
            </h1>
            <p className="text-lg text-neutral-600">
              Answer a few questions to get a personalized quote in minutes
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${index <= currentStep 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-neutral-200 text-neutral-600'
                    }
                  `}>
                    {index < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    index <= currentStep ? 'text-primary-600' : 'text-neutral-500'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${
                      index < currentStep ? 'bg-primary-600' : 'bg-neutral-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <Progress 
              value={(currentStep + 1) / steps.length * 100} 
              className="h-2"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Step {currentStep + 1}: {steps[currentStep].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CurrentStepComponent form={form} />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={!isValid}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}
