import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "auto",
    name: "Auto Insurance",
    slug: "auto",
    description: "Comprehensive auto insurance coverage with flexible options and competitive rates.",
    shortDescription: "Protect your vehicle with comprehensive coverage",
    icon: "🚗",
    features: [
      "Liability coverage up to $2M",
      "Collision and comprehensive coverage",
      "24/7 roadside assistance",
      "Accident forgiveness",
      "New vehicle replacement",
      "Rental car coverage"
    ],
    coverage: [
      { name: "Third Party Liability", description: "Coverage for damage to others", included: true, amount: "Up to $2M" },
      { name: "Collision Coverage", description: "Damage from accidents", included: true, deductible: "$500-$1000" },
      { name: "Comprehensive Coverage", description: "Theft, vandalism, weather damage", included: true, deductible: "$500-$1000" },
      { name: "Uninsured Motorist", description: "Protection against uninsured drivers", included: true, amount: "Up to $1M" },
      { name: "Personal Injury Protection", description: "Medical expenses and lost wages", included: true, amount: "Up to $50K" }
    ],
    addOns: [
      { id: "rental", name: "Rental Car Coverage", description: "Coverage for rental car while yours is being repaired", price: "$15/month", popular: true },
      { id: "roadside", name: "24/7 Roadside Assistance", description: "Towing, battery jump, flat tire service", price: "$8/month", popular: true },
      { id: "glass", name: "Glass Coverage", description: "Windshield and window repair/replacement", price: "$5/month" }
    ],
    sampleRates: [
      {
        plan: "Basic",
        monthly: "$89",
        yearly: "$1,068",
        features: ["Liability coverage", "Basic collision"],
        disclaimer: "Rates vary based on driving record, location, and vehicle type"
      },
      {
        plan: "Standard",
        monthly: "$129",
        yearly: "$1,548",
        features: ["Full coverage", "Roadside assistance", "Rental car"],
        disclaimer: "Rates vary based on driving record, location, and vehicle type"
      },
      {
        plan: "Premium",
        monthly: "$179",
        yearly: "$2,148",
        features: ["Maximum coverage", "Accident forgiveness", "New car replacement"],
        disclaimer: "Rates vary based on driving record, location, and vehicle type"
      }
    ],
    faqs: [
      {
        id: "auto-1",
        question: "What factors affect my auto insurance premium?",
        answer: "Your premium is based on factors like your driving record, age, location, vehicle type, annual mileage, and coverage options selected."
      },
      {
        id: "auto-2",
        question: "Can I get a discount for being a safe driver?",
        answer: "Yes! We offer safe driver discounts of up to 25% for drivers with clean records and no at-fault accidents."
      },
      {
        id: "auto-3",
        question: "What is accident forgiveness?",
        answer: "Accident forgiveness protects your premium from increasing after your first at-fault accident, helping you maintain your good driver discount."
      }
    ],
    ctaText: "Get Auto Quote",
    ctaLink: "/quotes?product=auto"
  },
  {
    id: "home",
    name: "Home Insurance",
    slug: "home",
    description: "Protect your home and belongings with comprehensive home insurance coverage.",
    shortDescription: "Safeguard your home and possessions",
    icon: "🏠",
    features: [
      "Dwelling coverage up to $1M",
      "Personal property protection",
      "Liability coverage",
      "Additional living expenses",
      "Water damage protection",
      "Identity theft coverage"
    ],
    coverage: [
      { name: "Dwelling Coverage", description: "Protection for your home structure", included: true, amount: "Up to $1M" },
      { name: "Personal Property", description: "Coverage for belongings", included: true, amount: "Up to $500K" },
      { name: "Liability Protection", description: "Protection against lawsuits", included: true, amount: "Up to $1M" },
      { name: "Additional Living Expenses", description: "Temporary housing costs", included: true, amount: "Up to $50K" },
      { name: "Water Damage", description: "Protection from water damage", included: true, amount: "Up to $25K" }
    ],
    addOns: [
      { id: "jewelry", name: "Jewelry Coverage", description: "Enhanced coverage for valuable jewelry", price: "$12/month", popular: true },
      { id: "identity", name: "Identity Theft Protection", description: "Monitoring and recovery services", price: "$8/month" },
      { id: "sewer", name: "Sewer Backup Coverage", description: "Protection from sewer backup damage", price: "$6/month" }
    ],
    sampleRates: [
      {
        plan: "Basic",
        monthly: "$89",
        yearly: "$1,068",
        features: ["Dwelling coverage", "Basic personal property"],
        disclaimer: "Rates vary based on home value, location, and risk factors"
      },
      {
        plan: "Standard",
        monthly: "$129",
        yearly: "$1,548",
        features: ["Full coverage", "Liability protection", "Water damage"],
        disclaimer: "Rates vary based on home value, location, and risk factors"
      },
      {
        plan: "Premium",
        monthly: "$179",
        yearly: "$2,148",
        features: ["Maximum coverage", "Identity theft", "Jewelry coverage"],
        disclaimer: "Rates vary based on home value, location, and risk factors"
      }
    ],
    faqs: [
      {
        id: "home-1",
        question: "What does home insurance typically cover?",
        answer: "Home insurance covers your dwelling, personal property, liability, and additional living expenses in case of covered perils like fire, theft, or weather damage."
      },
      {
        id: "home-2",
        question: "How is my home's value determined?",
        answer: "We use current market data, replacement cost calculators, and property assessments to determine the appropriate coverage amount for your home."
      },
      {
        id: "home-3",
        question: "Are there discounts for home security systems?",
        answer: "Yes! We offer discounts of up to 15% for homes with monitored security systems, smoke detectors, and deadbolt locks."
      }
    ],
    ctaText: "Get Home Quote",
    ctaLink: "/quotes?product=home"
  },
  {
    id: "life",
    name: "Life Insurance",
    slug: "life",
    description: "Secure your family's future with flexible life insurance options.",
    shortDescription: "Protect your loved ones' future",
    icon: "👨‍👩‍👧‍👦",
    features: [
      "Term life coverage up to $2M",
      "Whole life options",
      "No medical exam required",
      "Flexible payment options",
      "Living benefits",
      "Portable coverage"
    ],
    coverage: [
      { name: "Term Life Insurance", description: "Coverage for a specific period", included: true, amount: "Up to $2M" },
      { name: "Whole Life Insurance", description: "Permanent coverage with cash value", included: false, amount: "Up to $1M" },
      { name: "Accidental Death", description: "Additional coverage for accidents", included: true, amount: "Up to $500K" },
      { name: "Living Benefits", description: "Access to benefits while living", included: true, amount: "Up to 80% of face value" }
    ],
    addOns: [
      { id: "disability", name: "Disability Insurance", description: "Income protection if you can't work", price: "$25/month", popular: true },
      { id: "critical", name: "Critical Illness", description: "Lump sum for serious illnesses", price: "$18/month" },
      { id: "child", name: "Child Life Insurance", description: "Coverage for your children", price: "$8/month" }
    ],
    sampleRates: [
      {
        plan: "Term 20",
        monthly: "$45",
        yearly: "$540",
        features: ["$500K coverage", "20-year term", "No medical exam"],
        disclaimer: "Rates vary based on age, health, and coverage amount"
      },
      {
        plan: "Term 30",
        monthly: "$65",
        yearly: "$780",
        features: ["$1M coverage", "30-year term", "Living benefits"],
        disclaimer: "Rates vary based on age, health, and coverage amount"
      },
      {
        plan: "Whole Life",
        monthly: "$125",
        yearly: "$1,500",
        features: ["$500K coverage", "Permanent coverage", "Cash value"],
        disclaimer: "Rates vary based on age, health, and coverage amount"
      }
    ],
    faqs: [
      {
        id: "life-1",
        question: "How much life insurance do I need?",
        answer: "A general rule is 10-12 times your annual income, but we can help you calculate the right amount based on your specific needs and financial situation."
      },
      {
        id: "life-2",
        question: "What's the difference between term and whole life?",
        answer: "Term life provides coverage for a specific period at lower cost, while whole life provides permanent coverage with cash value accumulation but higher premiums."
      },
      {
        id: "life-3",
        question: "Do I need a medical exam?",
        answer: "For most policies under $1M, no medical exam is required. We use health questionnaires and may request medical records for larger amounts."
      }
    ],
    ctaText: "Get Life Quote",
    ctaLink: "/quotes?product=life"
  },
  {
    id: "travel",
    name: "Travel Insurance",
    slug: "travel",
    description: "Travel with confidence knowing you're protected anywhere in the world.",
    shortDescription: "Travel protection worldwide",
    icon: "✈️",
    features: [
      "Emergency medical coverage",
      "Trip cancellation protection",
      "Baggage coverage",
      "24/7 emergency assistance",
      "Pre-existing condition coverage",
      "Adventure sports coverage"
    ],
    coverage: [
      { name: "Emergency Medical", description: "Medical expenses while traveling", included: true, amount: "Up to $5M" },
      { name: "Trip Cancellation", description: "Reimbursement for cancelled trips", included: true, amount: "Up to $10K" },
      { name: "Baggage Coverage", description: "Lost or stolen luggage", included: true, amount: "Up to $2K" },
      { name: "Emergency Evacuation", description: "Medical evacuation services", included: true, amount: "Up to $1M" },
      { name: "Travel Delay", description: "Expenses for delayed trips", included: true, amount: "Up to $1K" }
    ],
    addOns: [
      { id: "adventure", name: "Adventure Sports", description: "Coverage for extreme sports", price: "$25/trip", popular: true },
      { id: "rental", name: "Rental Car Coverage", description: "Coverage for rental car damage", price: "$15/trip" },
      { id: "cancel", name: "Cancel for Any Reason", description: "Flexible cancellation coverage", price: "$50/trip" }
    ],
    sampleRates: [
      {
        plan: "Basic",
        monthly: "$25",
        yearly: "$300",
        features: ["Emergency medical", "Trip cancellation", "Basic baggage"],
        disclaimer: "Rates vary based on destination, trip duration, and age"
      },
      {
        plan: "Standard",
        monthly: "$45",
        yearly: "$540",
        features: ["Enhanced medical", "Baggage coverage", "Travel delay"],
        disclaimer: "Rates vary based on destination, trip duration, and age"
      },
      {
        plan: "Premium",
        monthly: "$75",
        yearly: "$900",
        features: ["Maximum coverage", "Adventure sports", "Cancel for any reason"],
        disclaimer: "Rates vary based on destination, trip duration, and age"
      }
    ],
    faqs: [
      {
        id: "travel-1",
        question: "When should I buy travel insurance?",
        answer: "It's best to purchase travel insurance when you book your trip to ensure coverage for trip cancellation and pre-existing conditions."
      },
      {
        id: "travel-2",
        question: "Does travel insurance cover COVID-19?",
        answer: "Yes, our travel insurance includes coverage for COVID-19 related cancellations and medical expenses while traveling."
      },
      {
        id: "travel-3",
        question: "What's covered under emergency medical?",
        answer: "Emergency medical covers hospital stays, doctor visits, prescription medications, and emergency dental care while traveling."
      }
    ],
    ctaText: "Get Travel Quote",
    ctaLink: "/quotes?product=travel"
  },
  {
    id: "business",
    name: "Business Insurance",
    slug: "business",
    description: "Comprehensive protection for your business with tailored coverage options.",
    shortDescription: "Protect your business assets",
    icon: "💼",
    features: [
      "General liability coverage",
      "Professional liability",
      "Property insurance",
      "Cyber liability",
      "Business interruption",
      "Employment practices liability"
    ],
    coverage: [
      { name: "General Liability", description: "Protection against lawsuits", included: true, amount: "Up to $2M" },
      { name: "Professional Liability", description: "Errors and omissions coverage", included: true, amount: "Up to $1M" },
      { name: "Property Insurance", description: "Business property protection", included: true, amount: "Up to $500K" },
      { name: "Cyber Liability", description: "Data breach protection", included: true, amount: "Up to $1M" },
      { name: "Business Interruption", description: "Income loss coverage", included: true, amount: "Up to $250K" }
    ],
    addOns: [
      { id: "workers", name: "Workers' Compensation", description: "Employee injury coverage", price: "$50/month", popular: true },
      { id: "directors", name: "Directors & Officers", description: "Executive protection", price: "$75/month" },
      { id: "employment", name: "Employment Practices", description: "HR-related claims", price: "$40/month" }
    ],
    sampleRates: [
      {
        plan: "Startup",
        monthly: "$89",
        yearly: "$1,068",
        features: ["Basic liability", "Property coverage", "Cyber protection"],
        disclaimer: "Rates vary based on business type, size, and risk factors"
      },
      {
        plan: "Growth",
        monthly: "$149",
        yearly: "$1,788",
        features: ["Enhanced liability", "Professional coverage", "Business interruption"],
        disclaimer: "Rates vary based on business type, size, and risk factors"
      },
      {
        plan: "Enterprise",
        monthly: "$249",
        yearly: "$2,988",
        features: ["Maximum coverage", "D&O protection", "Employment practices"],
        disclaimer: "Rates vary based on business type, size, and risk factors"
      }
    ],
    faqs: [
      {
        id: "business-1",
        question: "What types of businesses do you insure?",
        answer: "We insure a wide range of businesses including retail, professional services, restaurants, contractors, and technology companies."
      },
      {
        id: "business-2",
        question: "Do I need cyber liability insurance?",
        answer: "Yes, cyber liability is essential for any business that handles customer data or relies on technology. It protects against data breaches and cyber attacks."
      },
      {
        id: "business-3",
        question: "How is my business premium calculated?",
        answer: "Premiums are based on your business type, annual revenue, number of employees, location, and specific risk factors in your industry."
      }
    ],
    ctaText: "Get Business Quote",
    ctaLink: "/quotes?product=business"
  }
];
