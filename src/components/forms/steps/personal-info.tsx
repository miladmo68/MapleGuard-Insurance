"use client";

import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { QuoteFormData } from "@/types";

interface PersonalInfoProps {
  form: UseFormReturn<QuoteFormData>;
}

export function PersonalInfo({ form }: PersonalInfoProps) {
  const { register, formState: { errors } } = form;

  const provinces = [
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "MB", label: "Manitoba" },
    { value: "NB", label: "New Brunswick" },
    { value: "NL", label: "Newfoundland and Labrador" },
    { value: "NS", label: "Nova Scotia" },
    { value: "ON", label: "Ontario" },
    { value: "PE", label: "Prince Edward Island" },
    { value: "QC", label: "Quebec" },
    { value: "SK", label: "Saskatchewan" },
    { value: "NT", label: "Northwest Territories" },
    { value: "NU", label: "Nunavut" },
    { value: "YT", label: "Yukon" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Personal Information
        </h3>
        <p className="text-neutral-600">
          Tell us about yourself to get a personalized quote
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <Input
          {...register("personalInfo.firstName")}
          label="First Name"
          placeholder="Enter your first name"
          error={errors.personalInfo?.firstName?.message}
          required
        />

        {/* Last Name */}
        <Input
          {...register("personalInfo.lastName")}
          label="Last Name"
          placeholder="Enter your last name"
          error={errors.personalInfo?.lastName?.message}
          required
        />

        {/* Email */}
        <Input
          {...register("personalInfo.email")}
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          error={errors.personalInfo?.email?.message}
          required
        />

        {/* Phone */}
        <Input
          {...register("personalInfo.phone")}
          type="tel"
          label="Phone Number"
          placeholder="(555) 123-4567"
          error={errors.personalInfo?.phone?.message}
          required
        />

        {/* Date of Birth */}
        <Input
          {...register("personalInfo.dateOfBirth")}
          type="date"
          label="Date of Birth"
          error={errors.personalInfo?.dateOfBirth?.message}
          required
        />

        {/* Postal Code */}
        <Input
          {...register("personalInfo.postalCode")}
          label="Postal Code"
          placeholder="A1A 1A1"
          error={errors.personalInfo?.postalCode?.message}
          required
        />
      </div>

      {/* Privacy Notice */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <p className="text-sm text-neutral-600">
          <strong>Privacy Notice:</strong> Your personal information is protected and will only be used 
          to provide you with insurance quotes and related services. We do not sell or share your 
          information with third parties for marketing purposes.
        </p>
      </div>
    </div>
  );
}
