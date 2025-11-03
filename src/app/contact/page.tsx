"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronUp,
  Award,
  Building,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const offices = [
    {
      type: "SAS",
      name: "SAS Partnership — Authorized Training Desk",
      city: "Bengaluru, Karnataka",
      address:
        "305, Tropical Terrace, Basavanagar, Doddanekkundi, Bangalore North, Bangalore - 560037, Karnataka",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
    {
      type: "HQ",
      name: "NextStep Abroad Bengaluru (HQ)",
      city: "Bengaluru, Karnataka",
      address:
        "305, Tropical Terrace, Basavanagar, Doddanekkundi, Bangalore North, Bangalore - 560037, Karnataka",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
    {
      type: "Office",
      name: "NextStep Abroad Nepal",
      city: "Makawanpur, Nepal",
      address: "Bhutan Devi Raod, Hetauda - 10, Makawanpur Nepal",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
    {
      type: "Office",
      name: "NextStep Abroad Jharkhand",
      city: "Bokaro, Jharkhand",
      address: "Vidya classes #42, FVI, Jharnadih, Chandrapura Bokaro",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
    {
      type: "Office",
      name: "NextStep Abroad Bihar",
      city: "Purnea, Bihar",
      address:
        "Redchief Building, NH31,Opp-electricity board chowk Po&dist purnia-854301 Bihar.",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
    {
      type: "Office",
      name: "NextStep Abroad NCR",
      city: "Delhi, NCR",
      address:
        "Delhi NCR Jai Devi Vidya Mandir Public School, 427, 428, Wazirabad Rd, Bhopura, Sahibabad, Ghaziabad, Uttar Pradesh 201006",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
    {
      type: "Office",
      name: "NextStep Abroad Dubai",
      city: "Dubai, UAE",
      address:
        "DSO – IFZA Dubai Digital Park Dubai Silicone Oasis P.O.Box 98601 Dubai, UAE",
      phone: "+91 99635 21332 / +91 96635 70334",
      email: "info@nextstepabroad.com",
    },
  ];

  const faqs = [
    {
      question: "How soon will I hear back after submitting the form?",
      answer: "We typically respond within 24 hours during business days.",
    },
    {
      question: "Do you offer SAS exam preparation?",
      answer:
        "Yes, as an SAS Authorized Partner, we provide comprehensive exam preparation and training.",
    },
    {
      question: "Can I book in-person counselling?",
      answer:
        "Yes, you can book in-person counselling at any of our office locations.",
    },
    {
      question: "Where can I see all services?",
      answer:
        "Visit our services page or contact us for a detailed consultation.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact NextStep Abroad
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Have a question or need guidance? Reach us via phone, email, or
              the form below. As an SAS Authorized Partner, we also run a
              dedicated SAS training desk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  +91 99635 21332 / +91 96635 70334
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground">info@nextstepabroad.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">
                  Address (HQ)
                </h3>
                <p className="text-muted-foreground text-sm">
                  305, Tropical Terrace, Basavanagar, Bengaluru Urban, 560037,
                  Karnataka
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                REQUEST FREE CONSULTATION
              </h2>
              <p className="text-muted-foreground">
                Book a session now! Don't worry, we won't charge you for
                anything...
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">
                        Name*
                      </label>
                      <Input placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">
                        Email*
                      </label>
                      <Input placeholder="Enter your email" type="email" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">
                        Phone*
                      </label>
                      <Input placeholder="Enter your number" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">
                        Country*
                      </label>
                      <Input placeholder="Enter your country" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Service Type*
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Select Service Type</option>
                      <option>Career Mentoring</option>
                      <option>SAT Certification</option>
                      <option>Study Abroad</option>
                      <option>Study in India</option>
                      <option>SAS Training / Certification</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground"
                      >
                        NextStep Abroad will not share your details with others
                        without your permission: I agree to NextStep Abroad
                        Terms and privacy policy
                      </label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="contact" className="mt-1" />
                      <label
                        htmlFor="contact"
                        className="text-sm text-muted-foreground"
                      >
                        Please contact me by phone, email or SMS to assist with
                        my enquiry
                      </label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="updates" className="mt-1" />
                      <label
                        htmlFor="updates"
                        className="text-sm text-muted-foreground"
                      >
                        I would like to receive updates and offers from NextStep
                        Abroad
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-3">
                    Book Now!
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SAS Partnership */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            SAS Authorized Partnership
          </h2>
          <p className="text-lg text-secondary-foreground/90 max-w-3xl mx-auto">
            Official training & certifications desk. For SAS-specific queries,
            use the form and select "SAS Training / Certification."
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Offices
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're available across key cities. Tap a card to view it on the
              map or call directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                      {office.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    {office.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {office.city}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {office.address}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center gap-2">
                      <Phone className="h-4 w-4 text-secondary" />
                      {office.phone}
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <Mail className="h-4 w-4 text-secondary" />
                      {office.email}
                    </p>
                  </div>
                  <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                    Call
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {faqs.map((faq, i) => (
                <Card
                  key={i}
                  className="border border-gray-200 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full p-3 text-left flex items-center justify-between hover:bg-muted/30 transition-colors rounded-md"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-${i}`}
                    >
                      <h3 className="font-medium text-primary text-sm pr-3">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-4 w-4 text-secondary transition-transform duration-200 shrink-0 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div id={`faq-${i}`}>
                      {openFaq === i && (
                        <div className="px-3 pb-3">
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

      {/* WhatsApp Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Need Immediate Help?</h2>
              <p className="text-primary-foreground/80">
                Chat with our experts on WhatsApp for instant support
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <button
        className="fixed bottom-8 right-8 bg-secondary hover:bg-secondary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="h-6 w-6" />
      </button>

      <Footer />
    </main>
  );
}
