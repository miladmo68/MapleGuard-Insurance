"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  Car, 
  Home, 
  Heart, 
  Plane, 
  Briefcase,
  Phone,
  MapPin,
  Users,
  FileText,
  HelpCircle,
  Briefcase as BriefcaseIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Products",
    href: "/products",
    icon: Shield,
    children: [
      { name: "Auto Insurance", href: "/products/auto", icon: Car },
      { name: "Home Insurance", href: "/products/home", icon: Home },
      { name: "Life Insurance", href: "/products/life", icon: Heart },
      { name: "Travel Insurance", href: "/products/travel", icon: Plane },
      { name: "Business Insurance", href: "/products/business", icon: Briefcase },
    ]
  },
  { name: "Quotes", href: "/quotes", icon: FileText },
  { name: "Claims", href: "/claims", icon: Shield },
  { name: "Agents", href: "/agents", icon: Users },
  { name: "Locations", href: "/locations", icon: MapPin },
  { name: "Careers", href: "/careers", icon: BriefcaseIcon },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block sticky top-0 z-50">
        <div className={cn(
          "transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-200" 
            : "bg-transparent"
        )}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-neutral-900">
                  MapleGuard
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === item.href
                          ? "text-primary-600 bg-primary-50"
                          : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                      {item.children && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-soft-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                              onClick={closeMenu}
                            >
                              <child.icon className="w-4 h-4" />
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button asChild size="sm">
                <Link href="/quotes">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden sticky top-0 z-50">
        <div className={cn(
          "transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-200" 
            : "bg-white shadow-soft"
        )}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-neutral-900">
                  MapleGuard
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-semibold text-neutral-900">
                      MapleGuard
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3 text-base font-medium rounded-lg transition-colors",
                            pathname === item.href
                              ? "text-primary-600 bg-primary-50"
                              : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                          )}
                          onClick={closeMenu}
                        >
                          <item.icon className="w-5 h-5" />
                          {item.name}
                        </Link>

                        {/* Mobile Submenu */}
                        {item.children && (
                          <div className="ml-8 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
                                onClick={closeMenu}
                              >
                                <child.icon className="w-4 h-4" />
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-neutral-200">
                  <Button asChild className="w-full">
                    <Link href="/quotes" onClick={closeMenu}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
