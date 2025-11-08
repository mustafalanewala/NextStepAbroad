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
import { motion } from "framer-motion";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const offices = [
    {
      type: "HQ",
      name: "NextStep Abroad Bengaluru (HQ)",
      city: "Bengaluru, Karnataka",
      address: "Bengaluru, Karnataka - 560001",
      phone: "+91 8971391091",
      email: "nextstepabroad53@gmail.com",
    },
    {
      type: "Office",
      name: "NextStep Abroad Kolkata",
      city: "Kolkata, West Bengal",
      address: "13 Camac Street Ground floor, Kolkata - 700017",
      phone: "+91 8961551100",
      email: "nextstepabroad53@gmail.com",
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
      <motion.section
        className="relative h-[60vh] md:h-[70vh] flex items-center bg-linear-to-br from-primary to-primary/80 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 md:mb-6">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/95 tracking-wide">
                Shaping International Future
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Contact NextStep Abroad
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        className="py-12 md:py-16 bg-muted/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <Phone className="h-10 w-10 md:h-12 md:w-12 text-secondary mx-auto mb-3 md:mb-4" />
                  <h3 className="font-semibold text-primary mb-2 text-sm md:text-base">
                    Call Us
                  </h3>
                  <div className="text-muted-foreground text-sm md:text-base space-y-1">
                    <p>+91 8961551100 - Kolkata</p>
                    <p>+91 8971391091 - Bangalore</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4 md:p-6">
                  <Mail className="h-10 w-10 md:h-12 md:w-12 text-secondary mx-auto mb-3 md:mb-4" />
                  <h3 className="font-semibold text-primary mb-2 text-sm md:text-base">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    nextstepabroad53@gmail.com
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg h-full transition-shadow sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 md:p-6">
                  <MapPin className="h-10 w-10 md:h-12 md:w-12 text-secondary mx-auto mb-3 md:mb-4" />
                  <h3 className="font-semibold text-primary mb-2 text-sm md:text-base">
                    Address (HQ)
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    13 Camac Street Ground floor
                    <br />
                    Kolkata - 700017
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                REQUEST FREE CONSULTATION
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Book a session now! Don't worry, we won't charge you for
                anything...
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-4 md:p-8">
                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                        className="text-xs md:text-sm text-muted-foreground"
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
                        className="text-xs md:text-sm text-muted-foreground"
                      >
                        Please contact me by phone, email or SMS to assist with
                        my enquiry
                      </label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="updates" className="mt-1" />
                      <label
                        htmlFor="updates"
                        className="text-xs md:text-sm text-muted-foreground"
                      >
                        I would like to receive updates and offers from NextStep
                        Abroad
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-base md:text-lg py-3">
                    Book Now!
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* SAS Partnership */}
      <motion.section
        className="py-12 md:py-16 bg-secondary text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <Award className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            SAS Authorized Partnership
          </h2>
          <p className="text-base md:text-lg text-secondary-foreground/90 max-w-3xl mx-auto">
            Official training & certifications desk. For SAS-specific queries,
            use the form and select "SAS Training / Certification."
          </p>
        </div>
      </motion.section>

      {/* Offices */}
      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Our Offices
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              We're available across key cities. Tap a card to view it on the
              map or call directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 max-w-4xl mx-auto">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                      <span className="text-xs md:text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                        {office.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2 text-base md:text-lg">
                      {office.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {office.city}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mb-4">
                      {office.address}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs md:text-sm flex items-center gap-2">
                        <Phone className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
                        {office.phone}
                      </p>
                      <p className="text-xs md:text-sm flex items-center gap-2">
                        <Mail className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
                        {office.email}
                      </p>
                    </div>
                    <Button
                      className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-sm md:text-base"
                      onClick={() =>
                        window.open(`tel:${office.phone}`, "_self")
                      }
                    >
                      Call
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-12 md:py-16 bg-muted/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-gray-200 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
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
                        <ChevronDown
                          className={`h-4 w-4 text-secondary transition-transform duration-200 shrink-0 ${
                            openFaq === i ? "rotate-180" : ""
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* WhatsApp Section */}
      <motion.section
        className="py-12 md:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                Need Immediate Help?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Chat with our experts on WhatsApp for instant support
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold px-6 md:px-8 py-3 text-sm md:text-base"
              onClick={() =>
                window.open("https://wa.me/918961551100", "_blank")
              }
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Start Chat
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
