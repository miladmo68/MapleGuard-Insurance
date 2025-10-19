"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Mail, Star, Filter } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  specialties: string[];
  rating: number;
  experience: string;
  languages: string[];
  image: string;
}

const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Insurance Advisor",
    location: "Toronto, ON",
    phone: "(416) 555-0123",
    email: "sarah.johnson@mapleguard.ca",
    specialties: ["Auto Insurance", "Home Insurance", "Life Insurance"],
    rating: 4.9,
    experience: "8 years",
    languages: ["English", "French"],
    image: "/images/agents/sarah-johnson.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Business Insurance Specialist",
    location: "Vancouver, BC",
    phone: "(604) 555-0456",
    email: "michael.chen@mapleguard.ca",
    specialties: ["Business Insurance", "Commercial Auto", "Professional Liability"],
    rating: 4.8,
    experience: "12 years",
    languages: ["English", "Mandarin", "Cantonese"],
    image: "/images/agents/michael-chen.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Travel Insurance Expert",
    location: "Montreal, QC",
    phone: "(514) 555-0789",
    email: "emily.rodriguez@mapleguard.ca",
    specialties: ["Travel Insurance", "Health Insurance", "Student Insurance"],
    rating: 4.9,
    experience: "6 years",
    languages: ["English", "French", "Spanish"],
    image: "/images/agents/emily-rodriguez.jpg"
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Life Insurance Advisor",
    location: "Calgary, AB",
    phone: "(403) 555-0321",
    email: "david.thompson@mapleguard.ca",
    specialties: ["Life Insurance", "Disability Insurance", "Critical Illness"],
    rating: 4.7,
    experience: "15 years",
    languages: ["English"],
    image: "/images/agents/david-thompson.jpg"
  },
  {
    id: "5",
    name: "Lisa Wang",
    title: "Senior Insurance Consultant",
    location: "Toronto, ON",
    phone: "(416) 555-0654",
    email: "lisa.wang@mapleguard.ca",
    specialties: ["Auto Insurance", "Home Insurance", "Travel Insurance"],
    rating: 4.8,
    experience: "10 years",
    languages: ["English", "Mandarin", "Cantonese"],
    image: "/images/agents/lisa-wang.jpg"
  },
  {
    id: "6",
    name: "James Wilson",
    title: "Commercial Insurance Specialist",
    location: "Edmonton, AB",
    phone: "(780) 555-0987",
    email: "james.wilson@mapleguard.ca",
    specialties: ["Commercial Insurance", "General Liability", "Property Insurance"],
    rating: 4.9,
    experience: "18 years",
    languages: ["English"],
    image: "/images/agents/james-wilson.jpg"
  }
];

const specialties = [
  "Auto Insurance",
  "Home Insurance",
  "Life Insurance",
  "Travel Insurance",
  "Business Insurance",
  "Commercial Auto",
  "Professional Liability",
  "Health Insurance",
  "Student Insurance",
  "Disability Insurance",
  "Critical Illness",
  "General Liability",
  "Property Insurance"
];

const locations = [
  "Toronto, ON",
  "Vancouver, BC",
  "Montreal, QC",
  "Calgary, AB",
  "Edmonton, AB"
];

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSpecialty = !selectedSpecialty || agent.specialties.includes(selectedSpecialty);
      const matchesLocation = !selectedLocation || agent.location === selectedLocation;
      
      return matchesSearch && matchesSpecialty && matchesLocation;
    });
  }, [searchTerm, selectedSpecialty, selectedLocation]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSpecialty("");
    setSelectedLocation("");
  };

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Insurance Agent
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Connect with our experienced insurance professionals who are here to help you find the perfect coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, title, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-neutral-900">
                Our Insurance Agents ({filteredAgents.length})
              </h2>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-neutral-50 p-6 rounded-lg mb-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Specialty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Specialty
                    </label>
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">All Specialties</option>
                      {specialties.map(specialty => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">All Locations</option>
                      {locations.map(location => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="text-neutral-600 hover:text-neutral-800"
                  >
                    Clear All Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredAgents.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  No agents found
                </h3>
                <p className="text-neutral-600 mb-6">
                  Try adjusting your search criteria or filters.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAgents.map((agent, index) => (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-600">
                            {agent.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <CardTitle className="text-xl font-semibold text-neutral-900">
                          {agent.name}
                        </CardTitle>
                        <p className="text-primary-600 font-medium">
                          {agent.title}
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-neutral-700">
                            {agent.rating} ({agent.experience})
                          </span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Location */}
                        <div className="flex items-center gap-2 text-neutral-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{agent.location}</span>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-neutral-600">
                            <Phone className="w-4 h-4" />
                            <a 
                              href={`tel:${agent.phone}`}
                              className="text-sm hover:text-primary-600 transition-colors"
                            >
                              {agent.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-600">
                            <Mail className="w-4 h-4" />
                            <a 
                              href={`mailto:${agent.email}`}
                              className="text-sm hover:text-primary-600 transition-colors"
                            >
                              {agent.email}
                            </a>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div>
                          <h4 className="text-sm font-medium text-neutral-700 mb-2">
                            Specialties:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {agent.specialties.map(specialty => (
                              <Badge key={specialty} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Languages */}
                        <div>
                          <h4 className="text-sm font-medium text-neutral-700 mb-2">
                            Languages:
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {agent.languages.join(", ")}
                          </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-4 space-y-2">
                          <Button className="w-full">
                            Get Quote
                          </Button>
                          <Button variant="outline" className="w-full">
                            Contact Agent
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find the Right Agent?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our customer service team can help you find the perfect insurance solution or connect you with the right specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Call 1-800-MAPLE-01
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
              Live Chat
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

