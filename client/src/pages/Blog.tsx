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
      excerpt: "Understanding the value of a college education, career planning, and earnings potential is crucial for every student.",
      images: [
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Building a Personal Budget: Rules of Thumb",
      date: "Jan 25, 2024",
      author: "GWDYF Team",
      excerpt: "Learn how to track personal income and expenses effectively with our simple budgeting strategies.",
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "GWDYF Partners with ACT Foundation",
      date: "Jan 12, 2024",
      author: "Admin",
      excerpt: "A new initiative to train 50 youths on technology and entrepreneurial skills across Nigeria.",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
      ]
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

        <div className="max-w-4xl mx-auto space-y-12">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[16/10] md:aspect-auto relative overflow-hidden">
                  <img 
                    src={post.images[0]} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.images.slice(1, 3).map((img, idx) => (
                      <div key={idx} className="w-12 h-12 rounded-lg border-2 border-white shadow-lg overflow-hidden hidden sm:block">
                        <img src={img} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-primary" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group-hover:translate-x-1">
                    Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}