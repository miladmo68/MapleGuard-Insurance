"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Mail, Navigation, Filter } from "lucide-react";

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  services: string[];
  manager: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const locations: Location[] = [
  {
    id: "1",
    name: "Toronto Downtown",
    address: "123 Bay Street",
    city: "Toronto",
    province: "ON",
    postalCode: "M5H 2Y2",
    phone: "(416) 555-0100",
    email: "toronto@mapleguard.ca",
    hours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "10:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    services: ["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance", "Claims"],
    manager: "Sarah Johnson",
    coordinates: { lat: 43.6532, lng: -79.3832 }
  },
  {
    id: "2",
    name: "Vancouver Main",
    address: "456 Granville Street",
    city: "Vancouver",
    province: "BC",
    postalCode: "V6C 1T2",
    phone: "(604) 555-0200",
    email: "vancouver@mapleguard.ca",
    hours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "10:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    services: ["Auto Insurance", "Home Insurance", "Travel Insurance", "Business Insurance", "Claims"],
    manager: "Michael Chen",
    coordinates: { lat: 49.2827, lng: -123.1207 }
  },
  {
    id: "3",
    name: "Montreal Centre",
    address: "789 Saint-Catherine Street",
    city: "Montreal",
    province: "QC",
    postalCode: "H3B 1C5",
    phone: "(514) 555-0300",
    email: "montreal@mapleguard.ca",
    hours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "10:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    services: ["Auto Insurance", "Home Insurance", "Life Insurance", "Travel Insurance", "Claims"],
    manager: "Emily Rodriguez",
    coordinates: { lat: 45.5017, lng: -73.5673 }
  },
  {
    id: "4",
    name: "Calgary West",
    address: "321 8th Avenue SW",
    city: "Calgary",
    province: "AB",
    postalCode: "T2P 1C5",
    phone: "(403) 555-0400",
    email: "calgary@mapleguard.ca",
    hours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "10:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    services: ["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance", "Claims"],
    manager: "David Thompson",
    coordinates: { lat: 51.0447, lng: -114.0719 }
  },
  {
    id: "5",
    name: "Edmonton North",
    address: "654 Jasper Avenue",
    city: "Edmonton",
    province: "AB",
    postalCode: "T5J 3E8",
    phone: "(780) 555-0500",
    email: "edmonton@mapleguard.ca",
    hours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "10:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    services: ["Auto Insurance", "Home Insurance", "Business Insurance", "Commercial Insurance", "Claims"],
    manager: "James Wilson",
    coordinates: { lat: 53.5461, lng: -113.4938 }
  },
  {
    id: "6",
    name: "Ottawa Central",
    address: "987 Bank Street",
    city: "Ottawa",
    province: "ON",
    postalCode: "K1S 3K7",
    phone: "(613) 555-0600",
    email: "ottawa@mapleguard.ca",
    hours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "10:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    services: ["Auto Insurance", "Home Insurance", "Life Insurance", "Travel Insurance", "Claims"],
    manager: "Lisa Wang",
    coordinates: { lat: 45.4215, lng: -75.6972 }
  }
];

const provinces = ["All Provinces", "ON", "BC", "QC", "AB"];
const services = [
  "Auto Insurance",
  "Home Insurance",
  "Life Insurance",
  "Travel Insurance",
  "Business Insurance",
  "Commercial Insurance",
  "Claims"
];

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredLocations = useMemo(() => {
    return locations.filter(location => {
      const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           location.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesProvince = !selectedProvince || selectedProvince === "All Provinces" || location.province === selectedProvince;
      const matchesService = !selectedService || location.services.includes(selectedService);
      
      return matchesSearch && matchesProvince && matchesService;
    });
  }, [searchTerm, selectedProvince, selectedService]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedProvince("");
    setSelectedService("");
  };

  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date().getDay()];
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
              Find a Location Near You
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Visit one of our convenient locations across Canada for personalized insurance service.
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
                placeholder="Search by city, address, or location name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-neutral-900">
                Our Locations ({filteredLocations.length})
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
                  {/* Province Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Province
                    </label>
                    <select
                      value={selectedProvince}
                      onChange={(e) => setSelectedProvince(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {provinces.map(province => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Services
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">All Services</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
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

      {/* Locations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredLocations.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  No locations found
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
                {filteredLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl font-semibold text-neutral-900 mb-2">
                              {location.name}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-neutral-600 mb-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">
                                {location.city}, {location.province}
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {location.province}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Address */}
                        <div>
                          <h4 className="text-sm font-medium text-neutral-700 mb-1">
                            Address:
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {location.address}<br />
                            {location.city}, {location.province} {location.postalCode}
                          </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-neutral-600">
                            <Phone className="w-4 h-4" />
                            <a 
                              href={`tel:${location.phone}`}
                              className="text-sm hover:text-primary-600 transition-colors"
                            >
                              {location.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-600">
                            <Mail className="w-4 h-4" />
                            <a 
                              href={`mailto:${location.email}`}
                              className="text-sm hover:text-primary-600 transition-colors"
                            >
                              {location.email}
                            </a>
                          </div>
                        </div>

                        {/* Hours */}
                        <div>
                          <h4 className="text-sm font-medium text-neutral-700 mb-2">
                            Hours:
                          </h4>
                          <div className="space-y-1">
                            {Object.entries(location.hours).map(([day, hours]) => (
                              <div key={day} className={`flex justify-between text-xs ${
                                day === getCurrentDay() ? 'font-medium text-primary-600' : 'text-neutral-600'
                              }`}>
                                <span>{day}:</span>
                                <span>{hours}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <h4 className="text-sm font-medium text-neutral-700 mb-2">
                            Services:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {location.services.map(service => (
                              <Badge key={service} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Manager */}
                        <div>
                          <h4 className="text-sm font-medium text-neutral-700 mb-1">
                            Manager:
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {location.manager}
                          </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-4 space-y-2">
                          <Button className="w-full">
                            Get Directions
                          </Button>
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" size="sm">
                              Call Now
                            </Button>
                            <Button variant="outline" size="sm">
                              Email
                            </Button>
                          </div>
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

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Find Us on the Map
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Click on any location to get directions or contact information.
              </p>
            </motion.div>

            {/* Map Placeholder */}
            <div className="bg-neutral-100 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-neutral-300">
              <div className="text-center">
                <Navigation className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                  Interactive Map
                </h3>
                <p className="text-neutral-500 mb-4">
                  Map integration would be implemented here using Google Maps or similar service
                </p>
                <Button variant="outline">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Finding a Location?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our customer service team can help you find the nearest location or assist you with your insurance needs.
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
