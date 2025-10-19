"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Users, Filter, ArrowRight } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  salary?: string;
  remote: boolean;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Insurance Advisor",
    department: "Sales",
    location: "Toronto, ON",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our team as a Senior Insurance Advisor and help customers find the perfect insurance solutions. You'll work with clients to assess their needs and provide comprehensive coverage options.",
    requirements: [
      "Licensed insurance advisor in Ontario",
      "5+ years of insurance sales experience",
      "Strong communication and relationship-building skills",
      "Knowledge of auto, home, and life insurance products",
      "Bilingual (English/French) preferred"
    ],
    benefits: [
      "Competitive salary + commission",
      "Health and dental benefits",
      "RRSP matching program",
      "Professional development opportunities",
      "Flexible work arrangements"
    ],
    postedDate: "2024-01-15",
    salary: "$60,000 - $80,000",
    remote: false
  },
  {
    id: "2",
    title: "Claims Adjuster",
    department: "Claims",
    location: "Vancouver, BC",
    type: "Full-time",
    experience: "3+ years",
    description: "We're looking for an experienced Claims Adjuster to handle property and casualty claims. You'll investigate claims, assess damages, and work with customers to resolve their claims efficiently.",
    requirements: [
      "3+ years of claims adjusting experience",
      "CIP designation or working towards it",
      "Strong analytical and problem-solving skills",
      "Excellent customer service skills",
      "Knowledge of insurance regulations"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Career advancement opportunities",
      "Training and development programs",
      "Work-life balance initiatives"
    ],
    postedDate: "2024-01-12",
    salary: "$55,000 - $70,000",
    remote: false
  },
  {
    id: "3",
    title: "Frontend Developer",
    department: "Technology",
    location: "Montreal, QC",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our technology team as a Frontend Developer and help build our digital insurance platform. You'll work with React, TypeScript, and modern web technologies to create exceptional user experiences.",
    requirements: [
      "3+ years of frontend development experience",
      "Proficiency in React, TypeScript, and Next.js",
      "Experience with CSS frameworks (Tailwind CSS)",
      "Knowledge of responsive design principles",
      "Experience with version control (Git)"
    ],
    benefits: [
      "Competitive salary",
      "Stock options program",
      "Flexible work arrangements",
      "Professional development budget",
      "Modern tech stack and tools"
    ],
    postedDate: "2024-01-10",
    salary: "$70,000 - $90,000",
    remote: true
  },
  {
    id: "4",
    title: "Customer Service Representative",
    department: "Customer Service",
    location: "Calgary, AB",
    type: "Full-time",
    experience: "1+ years",
    description: "Provide exceptional customer service to our insurance clients. You'll handle inquiries, process policy changes, and ensure customer satisfaction through phone, email, and chat support.",
    requirements: [
      "1+ years of customer service experience",
      "Excellent communication skills",
      "Basic knowledge of insurance products",
      "Ability to work in a fast-paced environment",
      "Bilingual (English/French) preferred"
    ],
    benefits: [
      "Competitive hourly wage",
      "Health benefits",
      "Paid time off",
      "Career development opportunities",
      "Employee assistance program"
    ],
    postedDate: "2024-01-08",
    salary: "$18 - $22/hour",
    remote: false
  },
  {
    id: "5",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Ottawa, ON",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive our marketing initiatives and help grow our brand presence. You'll develop marketing campaigns, manage social media, and work on digital marketing strategies to attract new customers.",
    requirements: [
      "2+ years of marketing experience",
      "Experience with digital marketing tools",
      "Social media management skills",
      "Content creation abilities",
      "Analytics and reporting experience"
    ],
    benefits: [
      "Competitive salary",
      "Marketing budget for campaigns",
      "Professional development opportunities",
      "Creative freedom and autonomy",
      "Health and wellness benefits"
    ],
    postedDate: "2024-01-05",
    salary: "$50,000 - $65,000",
    remote: true
  },
  {
    id: "6",
    title: "Insurance Underwriter",
    department: "Underwriting",
    location: "Edmonton, AB",
    type: "Full-time",
    experience: "4+ years",
    description: "Evaluate insurance applications and assess risk to determine coverage eligibility and pricing. You'll work with complex underwriting guidelines and make informed decisions on policy approvals.",
    requirements: [
      "4+ years of underwriting experience",
      "CIP or FCIP designation preferred",
      "Strong analytical and decision-making skills",
      "Knowledge of insurance regulations",
      "Attention to detail and accuracy"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Professional development support",
      "Comprehensive benefits",
      "Career advancement opportunities"
    ],
    postedDate: "2024-01-03",
    salary: "$65,000 - $85,000",
    remote: false
  }
];

const departments = ["All Departments", "Sales", "Claims", "Technology", "Customer Service", "Marketing", "Underwriting"];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];
const locations = ["All Locations", "Toronto, ON", "Vancouver, BC", "Montreal, QC", "Calgary, AB", "Ottawa, ON", "Edmonton, AB"];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = !selectedDepartment || selectedDepartment === "All Departments" || job.department === selectedDepartment;
      const matchesType = !selectedType || selectedType === "All Types" || job.type === selectedType;
      const matchesLocation = !selectedLocation || selectedLocation === "All Locations" || job.location === selectedLocation;
      
      return matchesSearch && matchesDepartment && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedDepartment, selectedType, selectedLocation]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("");
    setSelectedType("");
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Build your career with MapleGuard Insurance and help us provide exceptional insurance solutions to Canadians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Why Work With MapleGuard?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                We're committed to creating a positive work environment where our employees can thrive and grow their careers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Inclusive Culture",
                  description: "We foster a diverse and inclusive workplace where everyone's voice is heard and valued."
                },
                {
                  icon: <ArrowRight className="w-8 h-8" />,
                  title: "Career Growth",
                  description: "Opportunities for professional development, training, and advancement within the company."
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements and policies that support your personal and professional life."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-neutral-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by job title, department, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-neutral-900">
                Open Positions ({filteredJobs.length})
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
                className="bg-white p-6 rounded-lg mb-8 shadow-sm"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Department Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Department
                    </label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {departments.map(department => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Job Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {jobTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
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

      {/* Jobs List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  No positions found
                </h3>
                <p className="text-neutral-600 mb-6">
                  Try adjusting your search criteria or filters.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl font-semibold text-neutral-900 mb-2">
                              {job.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <Badge variant="secondary">
                                {job.department}
                              </Badge>
                              {job.remote && (
                                <Badge variant="outline">
                                  Remote
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            {job.salary && (
                              <p className="text-lg font-semibold text-primary-600 mb-2">
                                {job.salary}
                              </p>
                            )}
                            <p className="text-sm text-neutral-500">
                              Posted {new Date(job.postedDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-neutral-600 mb-4">
                          {job.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-medium text-neutral-900 mb-2">
                              Requirements:
                            </h4>
                            <ul className="text-sm text-neutral-600 space-y-1">
                              {job.requirements.slice(0, 3).map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary-600 mt-1">•</span>
                                  {req}
                                </li>
                              ))}
                              {job.requirements.length > 3 && (
                                <li className="text-primary-600">
                                  +{job.requirements.length - 3} more requirements
                                </li>
                              )}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-neutral-900 mb-2">
                              Benefits:
                            </h4>
                            <ul className="text-sm text-neutral-600 space-y-1">
                              {job.benefits.slice(0, 3).map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary-600 mt-1">•</span>
                                  {benefit}
                                </li>
                              ))}
                              {job.benefits.length > 3 && (
                                <li className="text-primary-600">
                                  +{job.benefits.length - 3} more benefits
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="flex-1">
                            Apply Now
                          </Button>
                          <Button variant="outline" className="flex-1">
                            View Details
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
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Submit Resume
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
              Contact HR
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

