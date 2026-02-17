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

        <div className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden mb-20">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Why Your Involvement Matters</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Every volunteer hour, partnership, and donation contributes to building a more financially literate and empowered Nigeria. Join thousands of others who are already making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary hover:bg-green-600 transition-colors">
                Send an Inquiry
              </Link>
              <a 
                href="https://gwd.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-primary hover:bg-green-50 transition-colors"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>

        {/* Donation Cards */}
        <section className="mb-20">
          <SectionHeader 
            title="Make a Direct Impact" 
            subtitle="Support Our Programs" 
            description="Your financial contribution directly funds our youth empowerment initiatives."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: "₦10,000", label: "Starter", desc: "Covers learning materials for 2 students in the FLiC program." },
              { amount: "₦50,000", label: "Growth", desc: "Funds a full day of workshop training for 20 students." },
              { amount: "₦250,000", label: "Impact", desc: "Sponsors an entire FLiC club for one school term." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">{card.label}</span>
                <h3 className="text-4xl font-black text-gray-900 mb-4">{card.amount}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow">{card.desc}</p>
                <a 
                  href="https://gwd.com.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full hover:bg-green-600 transition-colors"
                >
                  Donate
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}