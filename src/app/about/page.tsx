"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Award,
  Globe,
  CheckCircle,
  Target,
  Eye,
  BookOpen,
  GraduationCap,
  FileText,
  DollarSign,
  ClipboardCheck,
  TestTube,
  Plane,
  Network,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "25+", label: "Years Mentoring", icon: Users },
    { number: "1500+", label: "Partner Universities", icon: Globe },
    { number: "2500+", label: "Students Mentored", icon: GraduationCap },
    { number: "98%", label: "Visa Acceptance", icon: CheckCircle },
  ];

  const services = [
    {
      icon: HelpCircle,
      title: "Career Guidance",
      description:
        "Personalized counselling to explore strengths and career paths.",
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Helping students shortlist the best-fit universities.",
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "Guiding students through smooth visa processes.",
    },
    {
      icon: DollarSign,
      title: "Scholarship Support",
      description: "Finding financial aid opportunities tailored for you.",
    },
    {
      icon: FileText,
      title: "Application Review",
      description: "Ensuring polished SOPs, essays, and applications.",
    },
    {
      icon: TestTube,
      title: "Test Preparation",
      description:
        "Helping students prepare for SAT, GRE, IELTS, TOEFL, and more.",
    },
    {
      icon: Award,
      title: "SAS Certification",
      description:
        "Authorized training & exam prep with official SAS curriculum.",
    },
    {
      icon: ClipboardCheck,
      title: "Immigration Assistance",
      description:
        "Comprehensive guidance for immigration and legal procedures.",
    },
    {
      icon: Network,
      title: "Alumni Network",
      description: "Connecting students with successful alumni worldwide.",
    },
    {
      icon: BookOpen,
      title: "Post-Admission Support",
      description: "Helping students adjust and succeed abroad.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Sheelan Misra",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Kavita Mallick",
      role: "Director Growth & Strategy",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Ranjith TP",
      role: "Psychometric assessment specialist | Certified Career Mentor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Ravikumar V R",
      role: "Founder President of Karnataka Management Association",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Palash Gupta",
      role: "Product R&D, Engineering, Strategy | GCC Leader",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const sasSteps = [
    {
      step: "1. Assess",
      title: "Profile review + skill gap mapping",
      description: "to choose the right SAS track.",
    },
    {
      step: "2. Train",
      title: "Instructor-led modules, labs, and projects",
      description: "aligned to SAS credentials.",
    },
    {
      step: "3. Certify",
      title: "Official exam readiness, mock tests, and certification",
      description: "guidance.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 md:mb-6">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/95 tracking-wide">
                Shaping International Future
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              About NextStepAbroad
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto"
                >
                  Book a Free Counselling Session
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SAS Partner Badge */}
      <section className="py-8 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">SAS Authorized Partner</h2>
          <p className="text-secondary-foreground/90">
            Official training partner for SAS certification programs
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2 md:space-y-3">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 text-center">
              NextStepAbroad Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  Who We Are
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  NextStepAbroad Education International Pvt. Ltd. is your
                  global mentor for education and career guidance. With 25+
                  years of experience, we specialize in university selection,
                  admissions, visa support, scholarships, and immigration
                  guidance. We proudly partner with 1500+ universities
                  worldwide, serving students across the US, Canada, UK,
                  Australia, and 30+ more countries.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-secondary shrink-0" />
                    <span className="text-sm md:text-base">
                      Transparent Counselling
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-secondary shrink-0" />
                    <span className="text-sm md:text-base">
                      Scholarships & Visas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-secondary shrink-0" />
                    <span className="text-sm md:text-base">
                      Career Mentoring
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-muted order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="NextStepAbroad Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To serve as a lifelong education and career mentor, empowering
                  students to achieve global excellence and guiding them through
                  every stage of their academic and professional journey.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To empower students worldwide with the tools, resources, and
                  guidance they need for admissions, scholarships, visa support,
                  and career growth—helping them confidently navigate the
                  complexities of the education landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Leadership & Advisory Board
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Meet the experts driving our mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {leadership.map((member, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-shadow text-center"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="h-20 w-20 md:h-24 md:w-24 mx-auto rounded-full bg-muted flex items-center justify-center overflow-hidden mb-3 md:mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">
                    {member.name}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your educational journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={i}
                  className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAS Certification */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                Certifications & Authorizations
              </h2>
              <div className="bg-secondary text-white p-4 md:p-6 rounded-lg mb-6 md:mb-8">
                <p className="text-base md:text-lg">
                  As an SAS Authorized Partner, we deliver industry-aligned
                  training with verified curricula, hands-on labs, and exam
                  preparation designed to improve career outcomes.
                </p>
                <p className="mt-3 md:mt-4">
                  Our certified mentors and structured pathways ensure learners
                  gain practical, job-ready analytics skills recognized by
                  global employers.
                </p>
              </div>
            </div>

            <div
              id="sas-courses"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {sasSteps.map((step, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book a Free Counselling Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
