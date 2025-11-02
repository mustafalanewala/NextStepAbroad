"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contentData from "@/data/content.json";

export default function Countries() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Choose Your Study Destination
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect country for your international education
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentData.countries.map((country, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="bg-white p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                    {country.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {country.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
