import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contentData from "@/data/content.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blogId = parseInt(id) - 1; // Since IDs start from 1
  const blog = contentData.blogs[blogId];

  if (!blog || blogId < 0 || blogId >= contentData.blogs.length) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  {blog.title}
                </h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {blog.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This is a comprehensive guide covering all aspects of the
                    topic. Our experts at NextStep Abroad provide detailed
                    insights and practical advice to help you make informed
                    decisions about your educational journey.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    For personalized guidance and counseling, contact our team
                    of education consultants who have helped thousands of
                    students achieve their academic goals.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
