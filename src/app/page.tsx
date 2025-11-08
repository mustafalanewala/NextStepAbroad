"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contentData from "@/data/content.json";
import {
  Globe,
  Award,
  MapPin,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const container = document.getElementById("carousel-container");
    if (container) {
      container.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update active dot
    const dots = document.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }, [currentSlide]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const awards = contentData.awards;

  return (
    <main className="min-h-screen">
      {/* Partnership Ticker */}
      <div className="bg-secondary text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-block px-2 md:px-4 text-xs md:text-base">
            OFFICIAL CHANNEL PARTNER WITH{" "}
            <strong>
              MEDICOHUT AND UNILINK EDUCATION INTERNATIONAL PRIVATE LIMITED
              BANGALORE
            </strong>
          </span>
          <span className="inline-block px-2 md:px-4 text-xs md:text-base">
            OFFICIAL CHANNEL PARTNER WITH{" "}
            <strong>
              MEDICOHUT AND UNILINK EDUCATION INTERNATIONAL PRIVATE LIMITED
              BANGALORE
            </strong>
          </span>
          <span className="inline-block px-2 md:px-4 text-xs md:text-base">
            OFFICIAL CHANNEL PARTNER WITH{" "}
            <strong>
              MEDICOHUT AND UNILINK EDUCATION INTERNATIONAL PRIVATE LIMITED
              BANGALORE
            </strong>
          </span>
          <span className="inline-block px-2 md:px-4 text-xs md:text-base">
            OFFICIAL CHANNEL PARTNER WITH{" "}
            <strong>
              MEDICOHUT AND UNILINK EDUCATION INTERNATIONAL PRIVATE LIMITED
              BANGALORE
            </strong>
          </span>
          <span className="inline-block px-2 md:px-4 text-xs md:text-base">
            OFFICIAL CHANNEL PARTNER WITH{" "}
            <strong>
              MEDICOHUT AND UNILINK EDUCATION INTERNATIONAL PRIVATE LIMITED
              BANGALORE
            </strong>
          </span>
          <span className="inline-block px-2 md:px-4 text-xs md:text-base">
            OFFICIAL CHANNEL PARTNER WITH{" "}
            <strong>
              MEDICOHUT AND UNILINK EDUCATION INTERNATIONAL PRIVATE LIMITED
              BANGALORE
            </strong>
          </span>
        </div>
      </div>
      <Navbar />
      <section
        id="home"
        className="relative min-h-[95vh] flex items-center bg-linear-to-br from-primary to-primary/80 text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <motion.div
            className="space-y-2 md:space-y-4 lg:space-y-6 p-4 md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Passport to
              <span className="text-secondary block">
                Global Education & Career Success
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/90">
              Expert guidance for studying abroad, career mentoring, and
              international opportunities
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-white p-4 md:p-6">
              <CardContent className="space-y-2 md:space-y-3 p-0">
                <h3 className="text-lg md:text-xl font-semibold text-primary">
                  Book Free Counselling & Guidance
                </h3>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Name*
                  </label>
                  <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Email*
                  </label>
                  <Input placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Phone*
                  </label>
                  <Input placeholder="Enter your number" type="tel" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Country*
                  </label>
                  <Input placeholder="Enter your country" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Service Type*
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Select Service Type</option>
                    <option>Career Mentoring</option>
                    <option>SAT Certification</option>
                    <option>Study Abroad</option>
                    <option>Study in India</option>
                  </select>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <label
                      htmlFor="terms"
                      className="text-xs md:text-sm text-muted-foreground"
                    >
                      NextStep Abroad will not share your details with others
                      without your permission: I agree to NextStep Abroad Terms
                      and privacy policy
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="contact" className="mt-1" />
                    <label
                      htmlFor="contact"
                      className="text-xs md:text-sm text-muted-foreground"
                    >
                      Please contact me by phone, email or SMS to assist with my
                      enquiry
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
                <Link href="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Book Now!
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">5500+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">2500+</div>
              <div className="text-muted-foreground">Partner Universities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="about"
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-muted"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary">
                Confused About the Right Career Path?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At NextStep Abroad, we understand that choosing the right
                educational path can be overwhelming. Our expert counselors
                provide personalized guidance to help you make informed
                decisions about your future.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                  <span>One-on-one career counseling sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                  <span>Comprehensive university selection assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                  <span>Application and documentation support</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="services"
        className="py-20 bg-muted/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to support your international education
              journey
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentData.services.map((service, i) => {
              const IconComponent =
                service.icon === "GraduationCap"
                  ? GraduationCap
                  : service.icon === "Award"
                  ? Award
                  : service.icon === "Globe"
                  ? Globe
                  : MapPin;
              return (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-12 w-12 rounded-full bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="h-0.5 bg-linear-to-r from-transparent via-secondary/30 to-transparent group-hover:via-secondary transition-all duration-300"></div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Ready to start your journey?
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/image.png"
              alt="Educational consultation and support"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <motion.section
        id="countries"
        className="py-20 bg-muted/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Pick a country you like the most
            </h2>
            <p className="text-muted-foreground">
              We have partnerships with universities across the globe
            </p>
          </motion.div>
          <div className="relative overflow-hidden">
            <div className="flex animate-[marquee_40s_linear_infinite] md:animate-[marquee_20s_linear_infinite] space-x-4 md:space-x-6">
              {contentData.countries.slice(0, 6).map((country, i) => (
                <motion.div
                  key={i}
                  className="shrink-0 w-48 h-48 md:w-64 md:h-64 relative overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center px-4">
                      {country.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {contentData.countries.slice(0, 6).map((country, i) => (
                <motion.div
                  key={`duplicate-${i}`}
                  className="shrink-0 w-48 h-48 md:w-64 md:h-64 relative overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center px-4">
                      {country.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/countries">
              <Button variant="outline">
                Discover More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="courses"
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pick a course you like the most
            </h2>
            <p className="text-muted-foreground">
              Explore popular programs across various disciplines
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {contentData.courses.slice(0, 6).map((course, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-40 md:h-52 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4 md:p-6 text-center bg-white">
                  <h3 className="font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300 text-base md:text-lg">
                    {course.name}
                  </h3>
                  <div className="mt-2 h-0.5 bg-linear-to-r from-transparent via-secondary/30 to-transparent group-hover:via-secondary transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/courses">
              <Button variant="outline">
                View All Courses <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="py-20 bg-muted/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              NextStep Abroad Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from students who achieved their dreams with us
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {contentData.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.university}, {testimonial.country}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Awards and Accolades
            </h2>
            <p className="text-muted-foreground">
              Recognized for excellence in international education consulting
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-2 border-orange-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="px-4 text-center space-y-3">
                    <div className="h-24 w-24 mx-auto rounded-lg overflow-hidden">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-sm">{award.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {award.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>{" "}
      <motion.section
        id="contact"
        className="py-20 bg-muted/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get News With NextStep Abroad
            </h2>
            <p className="text-muted-foreground">
              Connect with us and stay updated on the latest opportunities
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {contentData.news.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Link href="/blogs">
                    <Button
                      variant="link"
                      className="h-auto text-secondary hover:text-secondary/80 bg-secondary/10 hover:bg-secondary/20 px-3 py-2 rounded-md transition-colors"
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
