'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  GraduationCap,
  Globe,
  Award,
  Users,
  MapPin,
  BookOpen,
  Briefcase,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">
              NextStep Abroad
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#countries"
              className="hover:text-primary transition-colors"
            >
              Countries
            </a>
            <a
              href="#courses"
              className="hover:text-primary transition-colors"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button className="bg-secondary hover:bg-secondary/90">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative bg-linear-to-br from-primary to-primary/80 text-white py-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Passport to
              <span className="text-secondary block">
                Global Education & Career Success
              </span>
            </h1>
            <p className="text-lg text-white/90">
              Expert guidance for studying abroad, career mentoring, and
              international opportunities
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Start Your Journey
            </Button>
          </div>
          <Card className="bg-white p-8">
            <CardContent className="space-y-4 p-0">
              <h3 className="text-2xl font-semibold text-primary">
                Book a Free Consultation
              </h3>
              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Preferred Country" />
              <Textarea placeholder="Your Message" rows={3} />
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Submit Enquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5500+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2500+</div>
              <div className="text-muted-foreground">Partner Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Users className="h-32 w-32 text-white/60" />
              </div>
            </div>
            <div className="space-y-6">
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
              <Button className="bg-secondary hover:bg-secondary/90">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to support your international education
              journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Career Mentoring</h3>
                <p className="text-muted-foreground">
                  Expert guidance to help you choose the right career path and
                  achieve your goals
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">SAT Certification</h3>
                <p className="text-muted-foreground">
                  Comprehensive preparation and training for SAT examinations
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Study Abroad</h3>
                <p className="text-muted-foreground">
                  Complete support for studying in top universities worldwide
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Study in India</h3>
                <p className="text-muted-foreground">
                  Guidance for admission to premier Indian institutions
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90">
              Ready to start your journey?
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Consultation / Educational Support
            </h2>
            <p className="text-muted-foreground">
              We provide comprehensive support throughout your journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-12">
                <div className="relative h-64">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <g transform="translate(200, 100)">
                      {[
                        {
                          angle: 0,
                          label: 'Application\nProcess',
                          color: '#1e3a8a',
                        },
                        {
                          angle: 36,
                          label: 'Visa\nAssistance',
                          color: '#2563eb',
                        },
                        {
                          angle: 72,
                          label: 'Test\nPreparation',
                          color: '#3b82f6',
                        },
                        {
                          angle: 108,
                          label: 'University\nSelection',
                          color: '#60a5fa',
                        },
                        {
                          angle: 144,
                          label: 'Career\nCounseling',
                          color: '#93c5fd',
                        },
                        {
                          angle: 180,
                          label: 'Financial\nAid',
                          color: '#ff7e00',
                        },
                        {
                          angle: 216,
                          label: 'Scholarship\nGuidance',
                          color: '#ff9933',
                        },
                        {
                          angle: 252,
                          label: 'Pre-departure\nBriefing',
                          color: '#ffad5c',
                        },
                        {
                          angle: 288,
                          label: 'Post-arrival\nSupport',
                          color: '#ffc285',
                        },
                        {
                          angle: 324,
                          label: 'Alumni\nNetwork',
                          color: '#1e3a8a',
                        },
                      ].map((item, i) => {
                        const startAngle = (item.angle - 18) * (Math.PI / 180);
                        const endAngle = (item.angle + 18) * (Math.PI / 180);
                        const largeArcFlag = 0;

                        const x1 = 80 * Math.cos(startAngle);
                        const y1 = 80 * Math.sin(startAngle);
                        const x2 = 80 * Math.cos(endAngle);
                        const y2 = 80 * Math.sin(endAngle);

                        return (
                          <path
                            key={i}
                            d={`M 0 0 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                            fill={item.color}
                            opacity="0.8"
                            className="hover:opacity-100 transition-opacity cursor-pointer"
                          />
                        );
                      })}
                      <circle r="30" fill="white" />
                      <text
                        textAnchor="middle"
                        dy="0.3em"
                        className="text-xs font-semibold"
                        fill="#1e3a8a"
                      >
                        Services
                      </text>
                    </g>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="countries" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Pick a country you like the most
            </h2>
            <p className="text-muted-foreground">
              We have partnerships with universities across the globe
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'United States', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop' },
              { name: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop' },
              { name: 'Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop' },
              { name: 'Canada', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop' },
            ].map((country, i) => (
              <Card
                key={i}
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-muted">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold group-hover:text-secondary transition-colors">
                    {country.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">
              Discover More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Pick a course you like the most
            </h2>
            <p className="text-muted-foreground">
              Explore popular programs across various disciplines
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Computer Science', icon: BookOpen, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop' },
              { name: 'Business Management', icon: Briefcase, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
              { name: 'Engineering', icon: Award, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
              { name: 'Medicine', icon: GraduationCap, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
              { name: 'Arts & Design', icon: Users, image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop' },
              { name: 'Data Science', icon: Globe, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
            ].map((course, i) => (
              <Card
                key={i}
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <course.icon className="h-20 w-20 text-white relative z-10" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold group-hover:text-secondary transition-colors">
                    {course.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">
              View All Courses <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="relative h-64 bg-white/10 rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Users className="h-32 w-32 text-white/10" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Experience Global Education Excellence
              </h2>
              <p className="text-lg text-white/90">
                Join thousands of successful students worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              UniThinkers Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from students who achieved their dreams with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Student Name</h4>
                      <p className="text-sm text-muted-foreground">
                        University, Country
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    NextStep Abroad made my dream of studying abroad a reality.
                    Their guidance was invaluable throughout the entire process.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Awards and Accolades
            </h2>
            <p className="text-muted-foreground">
              Recognized for excellence in international education consulting
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-shadow bg-linear-to-br from-amber-50 to-amber-100 border-amber-200"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-amber-600 mx-auto" />
                  <h4 className="font-semibold text-sm">Award Title</h4>
                  <p className="text-xs text-muted-foreground">
                    Organization Name
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get News With NextStep Abroad
            </h2>
            <p className="text-muted-foreground">
              Connect with us and stay updated on the latest opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Latest Updates',
                description:
                  'Stay informed about new programs and opportunities',
              },
              {
                title: 'Success Stories',
                description: 'Read inspiring stories from our students',
              },
              {
                title: 'Expert Tips',
                description:
                  'Get valuable advice for your study abroad journey',
              },
              {
                title: 'Events & Webinars',
                description: 'Join our educational events and sessions',
              },
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary/40" />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-secondary hover:text-secondary/80"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-secondary" />
                <span className="text-2xl font-bold">NextStep Abroad</span>
              </div>
              <p className="text-white/80 mb-4">
                Your trusted partner for global education and career success.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href="#about"
                    className="hover:text-secondary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-secondary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#countries"
                    className="hover:text-secondary transition-colors"
                  >
                    Countries
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-secondary transition-colors"
                  >
                    Courses
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li>Career Counseling</li>
                <li>Test Preparation</li>
                <li>Visa Assistance</li>
                <li>Scholarship Guidance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>info@nextstepabroad.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>123 Education Street, Global City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2025 NextStep Abroad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
