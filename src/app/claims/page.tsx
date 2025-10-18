import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, FileText, Clock, CheckCircle, AlertCircle, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Claims Center - File and Track Your Insurance Claims",
  description: "File insurance claims quickly and easily with MapleGuard. Track your claim status, upload documents, and get 24/7 support for all your insurance needs.",
  keywords: [
    "insurance claims",
    "file claim",
    "claim status",
    "claims process",
    "claims support",
    "emergency claims"
  ],
  openGraph: {
    title: "Claims Center - File and Track Your Insurance Claims | MapleGuard",
    description: "File insurance claims quickly and easily with MapleGuard. Track your claim status, upload documents, and get 24/7 support for all your insurance needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claims Center - File and Track Your Insurance Claims | MapleGuard",
    description: "File insurance claims quickly and easily with MapleGuard. Track your claim status, upload documents, and get 24/7 support for all your insurance needs.",
  },
};

export default function ClaimsPage() {
  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            Claims Center
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help when you need us most. File your claim quickly and easily, 
            and track your progress every step of the way.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="bg-error-50 border border-error-200 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <AlertCircle className="w-8 h-8 text-error-600" />
            <h2 className="text-2xl font-semibold text-error-800">Emergency Claims</h2>
          </div>
          <p className="text-error-700 mb-6">
            For urgent claims or emergencies, call our 24/7 claims hotline immediately. 
            Our team is standing by to help you when you need it most.
          </p>
          <a
            href="tel:1-800-MAPLE-01"
            className="inline-flex items-center gap-2 bg-error-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-error-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call 1-800-MAPLE-01
          </a>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card hover className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">File a New Claim</h3>
              <p className="text-neutral-600 mb-6">
                Start your claim online in just a few minutes. Upload photos and documents directly through our secure portal.
              </p>
              <Button className="w-full">
                Start New Claim
              </Button>
            </CardContent>
          </Card>

          <Card hover className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Track Your Claim</h3>
              <p className="text-neutral-600 mb-6">
                Check the status of your existing claim and get real-time updates on your claim progress.
              </p>
              <Button variant="outline" className="w-full">
                Track Claim
              </Button>
            </CardContent>
          </Card>

          <Card hover className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-warning-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Speak with an Agent</h3>
              <p className="text-neutral-600 mb-6">
                Get personalized help from our claims specialists. Available 24/7 for urgent matters.
              </p>
              <Button variant="outline" className="w-full">
                Call Agent
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Claims Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">How Claims Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Report Your Claim</h3>
              <p className="text-neutral-600">
                File your claim online or call us. Provide details about what happened and any relevant information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Assessment</h3>
              <p className="text-neutral-600">
                Our team reviews your claim and may request additional documentation or arrange for an inspection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Resolution</h3>
              <p className="text-neutral-600">
                We process your claim and provide settlement or arrange for repairs through our network of partners.
              </p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Auto Insurance Claims
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Police report (if applicable)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Photos of damage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Driver's license and registration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Witness information</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Repair estimates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Home Insurance Claims
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Photos of damage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Police report (for theft/vandalism)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Receipts for damaged items</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Emergency repair receipts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Inventory of damaged property</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Claim Status Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">Understanding Claim Status</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Badge variant="secondary" className="mb-4">Submitted</Badge>
                <p className="text-sm text-neutral-600">Your claim has been received and is being reviewed.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Badge variant="warning" className="mb-4">In Progress</Badge>
                <p className="text-sm text-neutral-600">We're actively working on your claim and may need additional information.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Badge variant="outline" className="mb-4">Under Review</Badge>
                <p className="text-sm text-neutral-600">Your claim is being assessed by our team of specialists.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Badge variant="success" className="mb-4">Approved</Badge>
                <p className="text-sm text-neutral-600">Your claim has been approved and payment is being processed.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-neutral-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-neutral-900 text-center mb-8">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Claims Guide</h3>
                <p className="text-sm text-neutral-600 mb-4">Download our comprehensive guide to filing claims.</p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Claim Forms</h3>
                <p className="text-sm text-neutral-600 mb-4">Access all the forms you need for your claim.</p>
                <Button variant="outline" size="sm">View Forms</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2">Contact Support</h3>
                <p className="text-sm text-neutral-600 mb-4">Get help from our claims specialists.</p>
                <Button variant="outline" size="sm">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
