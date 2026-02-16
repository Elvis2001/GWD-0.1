import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Clock, Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const collections = [
    {
      id: 1,
      title: "FLiC Launch 2024",
      date: "Feb 15, 2024",
      time: "10:00 AM",
      imageCount: 12,
      coverImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Youth Tech Bootcamp",
      date: "Jan 20, 2024",
      time: "09:30 AM",
      imageCount: 25,
      coverImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Financial Literacy Games",
      date: "Dec 12, 2023",
      time: "11:00 AM",
      imageCount: 18,
      coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeader 
          title="Captured Moments" 
          subtitle="Gallery" 
          description="A visual journey through our programs, workshops, and the impact we make."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.coverImage} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Collection <ImageIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4" />
                    {item.imageCount} Images
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}