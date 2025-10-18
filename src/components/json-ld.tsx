import Script from "next/script";

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization schema
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "MapleGuard Insurance",
    "description": "Smarter coverage. Faster claims. Comprehensive insurance solutions for auto, home, life, travel, and business.",
    "url": "https://mapleguard.ca",
    "logo": "https://mapleguard.ca/logo.png",
    "telephone": "1-800-MAPLE-01",
    "email": "hello@mapleguard.ca",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": ["ON", "BC", "QC"],
      "addressLocality": ["Toronto", "Vancouver", "Montreal"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "serviceType": [
      "Auto Insurance",
      "Home Insurance", 
      "Life Insurance",
      "Travel Insurance",
      "Business Insurance"
    ],
    "sameAs": [
      "https://facebook.com/mapleguard",
      "https://twitter.com/mapleguard",
      "https://linkedin.com/company/mapleguard",
      "https://instagram.com/mapleguard"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  };

  return <JsonLd data={data} />;
}

// Breadcrumb schema
export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <JsonLd data={data} />;
}

// FAQ schema
export function FAQJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLd data={data} />;
}

// Product schema
export function ProductJsonLd({ 
  name, 
  description, 
  image, 
  offers 
}: { 
  name: string; 
  description: string; 
  image?: string; 
  offers?: { price: string; priceCurrency: string; availability: string } 
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": "MapleGuard Insurance"
    },
    "category": "Insurance",
    "offers": offers ? {
      "@type": "Offer",
      "price": offers.price,
      "priceCurrency": offers.priceCurrency,
      "availability": offers.availability,
      "seller": {
        "@type": "InsuranceAgency",
        "name": "MapleGuard Insurance"
      }
    } : undefined
  };

  return <JsonLd data={data} />;
}

// LocalBusiness schema for locations
export function LocalBusinessJsonLd({ 
  name, 
  address, 
  phone, 
  hours 
}: { 
  name: string; 
  address: string; 
  phone: string; 
  hours?: string 
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressCountry": "CA"
    },
    "telephone": phone,
    "openingHours": hours,
    "parentOrganization": {
      "@type": "InsuranceAgency",
      "name": "MapleGuard Insurance"
    }
  };

  return <JsonLd data={data} />;
}
