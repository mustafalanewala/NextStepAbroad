"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contentData from "@/data/content.json";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <main className="min-h-screen">
      <Navbar />
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
              Latest Blogs & Insights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our expert articles on education, career
              guidance, and study abroad tips
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentData.blogs.map((blog, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <Link
                    href={`/blogs/${i + 1}`}
                    className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-secondary transition-colors duration-300 block"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <Link
                    href={`/blogs/${i + 1}`}
                    className="text-secondary hover:text-secondary/80 font-medium text-sm transition-colors duration-300"
                  >
                    Read More →
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
