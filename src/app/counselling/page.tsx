"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Phone,
  Mail,
  MessageCircle,
  Star,
  TrendingUp,
  Lightbulb,
  Shield,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Counselling() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: TestTube,
      title: "Psychometric Assessment",
      description:
        "Scientific, online career test with counselor-led debrief to uncover strengths, interests & aptitudes.",
    },
    {
      icon: Users,
      title: "Career Counselling",
      description:
        "1:1 sessions to align student strengths with the right stream, course & career pathways.",
    },
    {
      icon: GraduationCap,
      title: "Complete Admission Guidance",
      description:
        "End-to-end support for Indian & International UG/PG – shortlisting, timelines, and strategy.",
    },
    {
      icon: Clock,
      title: "Exam & Deadline Updates",
      description:
        "Stay ahead on JEE/NEET/CUET/CAT, SAT/GRE/GMAT/IELTS with reminders & planning.",
    },
    {
      icon: FileText,
      title: "Essays / SOP & Application Review",
      description:
        "Impactful edits + final checks so every submission is polished and error-free.",
    },
    {
      icon: MessageCircle,
      title: "Interactive Sessions",
      description:
        "Live Q&As with updates of colleges for real program insight (India & Abroad).",
    },
    {
      icon: TrendingUp,
      title: "Profile Building",
      description:
        "Action plan for extracurriculars, internships & certifications to strengthen applications.",
    },
    {
      icon: DollarSign,
      title: "Scholarships & Visa Guidance",
      description:
        "Aid/fee planning, scholarship pointers & pre-departure/visa support for study abroad.",
    },
  ];

  const researchHighlights = [
    {
      icon: Target,
      title: "Early Guidance Reduces Course Changes",
      description:
        "Career mismatch and late course changes increase time & cost to degree; early guidance reduces switch rates.",
    },
    {
      icon: Lightbulb,
      title: "Structured Counseling Improves Clarity",
      description:
        "Structured counseling + psychometrics improves decision clarity and confidence for students and families.",
    },
    {
      icon: Globe,
      title: "Exposure Broadens Aspirations",
      description:
        "Exposure to options (campus talks, mentor Q&As) broadens aspirations beyond a narrow set of careers.",
    },
    {
      icon: Shield,
      title: "Assessments Predict Success",
      description:
        "Universities and Fortune-500 employers widely use aptitude & personality assessments to predict fit and success.",
    },
    {
      icon: Users,
      title: "Parent Involvement Correlates with Better Outcomes",
      description:
        "Parent involvement, when informed, correlates with higher student persistence and better outcomes.",
    },
  ];

  const faqs = [
    {
      question: "Is this for Indian AND International admissions?",
      answer:
        "Yes, we provide comprehensive guidance for both Indian and international admissions (UG/PG) with specialized support for each pathway.",
    },
    {
      question: "Is the psychometric test included?",
      answer:
        "Yes, our psychometric assessment is included in all our counseling packages to help build self-awareness and career clarity.",
    },
    {
      question: "How many universities are covered in the package?",
      answer:
        "Our packages include application support for up to 5 universities/colleges, with unlimited counseling sessions throughout the process.",
    },
    {
      question: "Do you guarantee admission?",
      answer:
        "While we cannot guarantee admissions (as this depends on many factors), we provide comprehensive support to maximize your chances of success.",
    },
    {
      question: "Do parents get involved?",
      answer:
        "Yes, we involve parents through joint check-ins and family counseling sessions to ensure confident, financially planned decisions.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-3 md:mb-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/95 tracking-wide">
                Shaping International Future
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4">
              Career & Admissions Counselling
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 md:mb-6 px-2 sm:px-4 max-w-4xl mx-auto">
              Studies show most young adults struggle with career decisions due
              to low self-awareness, unclear goals and limited exposure.
              NextStep Abroad turns that maze into a clear map through
              psychometric assessment, expert career counseling, and end-to-end
              admissions support for India & Abroad (UG/PG).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2 sm:px-4">
              <Link href="#contact-form">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto text-sm sm:text-base"
                >
                  Book Your Counseling Session
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
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

      {/* Key Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary">
                      Personalized roadmap for every student
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transparent, student-first guidance with unlimited mentor
                    support during the entire admissions cycle.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary">
                      Data-led decisions through psychometric insights
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Science-backed assessments to build self-awareness and align
                    strengths with study streams.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <div className="bg-primary text-white p-4 md:p-6 rounded-lg inline-block">
                <p className="text-base md:text-lg font-semibold mb-2">
                  Limited Seats Available
                </p>
                <p className="text-sm md:text-base text-primary-foreground/90">
                  Free Initial Consultation
                </p>
                <p className="text-xs md:text-sm mt-2">
                  Speak to a counselor, map your next steps, and see how we can
                  help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
              Why This Matters — Backed by Global Research
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Across countries, students face similar challenges: low career
              awareness, skills gaps, and rising competition for limited seats.
              Independent studies and education bodies consistently highlight
              three themes — self-awareness, structured guidance, and early
              planning — as the strongest predictors of better college and
              career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {researchHighlights.map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-primary text-sm md:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
              How We Help
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Everything you need — from self-discovery to offer letters — for
              Indian & International admissions (UG/PG).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary">
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

      {/* Contact Form */}
      <section id="contact-form" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
                Book Your Counseling Session
              </h2>
              <p className="text-base md:text-lg text-muted-foreground px-2">
                Tell us a bit about you. Our team will call back to confirm your
                slot.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <form className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Full Name*
                    </label>
                    <Input placeholder="Enter your full name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Email Address*
                    </label>
                    <Input placeholder="Enter your email" type="email" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Phone Number*
                    </label>
                    <Input placeholder="Enter your phone number" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your goals and requirements"
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-base md:text-lg py-3">
                    Submit & Book Session
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Get Started Today
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-3 md:mb-4">
                Ready to shape your international future? Contact us now.
              </p>
              <div className="space-y-2">
                <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  <Phone className="h-4 w-4" />
                  +91 8961551100
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  <Mail className="h-4 w-4" />
                  nextstepabroad53@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-sm md:text-base"
                onClick={() => window.open("tel:+918961551100", "_self")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-sm md:text-base"
                onClick={() =>
                  window.open("mailto:nextstepabroad53@gmail.com", "_blank")
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary text-center mb-6 md:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {faqs.map((faq, i) => (
                <Card
                  key={i}
                  className="border border-gray-200 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full p-3 md:p-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors rounded-md"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-${i}`}
                    >
                      <h3 className="font-medium text-primary text-sm md:text-base pr-3">
                        {faq.question}
                      </h3>
                      <ChevronRight
                        className={`h-4 w-4 text-secondary transition-transform duration-200 shrink-0 ${
                          openFaq === i ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <div id={`faq-${i}`}>
                      {openFaq === i && (
                        <div className="px-3 md:px-4 pb-3">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
