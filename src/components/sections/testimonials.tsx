"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "Toronto, ON",
    rating: 5,
    text: "MapleGuard made switching insurance so easy. The bundle discount saved me over $300 a year, and their claims process was incredibly smooth when I needed it.",
    product: "Auto & Home Bundle",
    avatar: "SJ"
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Vancouver, BC",
    rating: 5,
    text: "Outstanding customer service! When I had a claim, they processed it within 24 hours and kept me updated every step of the way. Highly recommend.",
    product: "Auto Insurance",
    avatar: "MC"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    location: "Calgary, AB",
    rating: 5,
    text: "The transparency in pricing is refreshing. No hidden fees or surprises. Plus, their mobile app makes managing my policies so convenient.",
    product: "Life Insurance",
    avatar: "ER"
  },
  {
    id: "4",
    name: "David Thompson",
    location: "Montreal, QC",
    rating: 5,
    text: "As a small business owner, I needed comprehensive coverage. MapleGuard understood my needs and provided excellent business insurance at a great price.",
    product: "Business Insurance",
    avatar: "DT"
  },
  {
    id: "5",
    name: "Lisa Wang",
    location: "Ottawa, ON",
    rating: 5,
    text: "The travel insurance gave me peace of mind during my trip to Europe. When I had a minor medical issue, they handled everything quickly and professionally.",
    product: "Travel Insurance",
    avatar: "LW"
  },
  {
    id: "6",
    name: "James Wilson",
    location: "Halifax, NS",
    rating: 5,
    text: "Finally, an insurance company that actually cares about their customers. The local agents are knowledgeable and always available when I need help.",
    product: "Auto & Home Bundle",
    avatar: "JW"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience with MapleGuard.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-primary-600" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-sm font-semibold text-primary-700">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {testimonial.location}
                      </div>
                      <div className="text-xs text-primary-600 font-medium">
                        {testimonial.product}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-neutral-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-neutral-600 mb-6">
              Experience the MapleGuard difference for yourself. Get your personalized quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quotes"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Get Your Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
