import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { ArrowRight, User, Calendar } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Financial Literacy for Secondary School Students",
      date: "Feb 10, 2024",
      author: "Nnenna Mosugu",
      excerpt: "Understanding the value of a college education, career planning, and earnings potential is crucial for every student."
    },
    {
      id: 2,
      title: "Building a Personal Budget: Rules of Thumb",
      date: "Jan 25, 2024",
      author: "GWDYF Team",
      excerpt: "Learn how to track personal income and expenses effectively with our simple budgeting strategies."
    },
    {
      id: 3,
      title: "GWDYF Partners with ACT Foundation",
      date: "Jan 12, 2024",
      author: "Admin",
      excerpt: "A new initiative to train 50 youths on technology and entrepreneurial skills across Nigeria."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeader 
          title="News & Blog" 
          subtitle="Updates" 
          description="Stay informed about our latest activities, partnerships, and educational resources."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-primary/20 transition-all hover:shadow-xl group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}