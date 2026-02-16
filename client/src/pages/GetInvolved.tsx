import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { Users, Lightbulb, Heart, ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const options = [
    {
      title: "Become a Volunteer",
      description: "Join our team of dedicated professionals and help us mentor the next generation of leaders.",
      icon: <Users className="w-10 h-10" />,
      link: "/contact?intent=Volunteer",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Partner with Us",
      description: "Corporate organizations and NGOs can partner with us to scale our impact across Nigeria.",
      icon: <Lightbulb className="w-10 h-10" />,
      link: "/contact?intent=Partner",
      color: "bg-secondary/10 text-secondary"
    },
    {
      title: "Sponsor a Student",
      description: "Your financial support can provide a student with access to our life-changing curriculum.",
      icon: <Heart className="w-10 h-10" />,
      link: "/donate",
      color: "bg-red-50 text-red-500"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeader 
          title="Join Our Mission" 
          subtitle="Get Involved" 
          description="There are many ways to support GWDYF. Choose the path that fits you best."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {options.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center"
            >
              <div className={`w-20 h-20 rounded-2xl ${option.color} flex items-center justify-center mb-8`}>
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                {option.description}
              </p>
              <Link href={option.link} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Why Your Involvement Matters</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Every volunteer hour, partnership, and donation contributes to building a more financially literate and empowered Nigeria. Join thousands of others who are already making a difference.
            </p>
            <Link href="/contact" className="btn-primary">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}