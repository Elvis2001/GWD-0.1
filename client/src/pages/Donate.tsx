import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Heart, ShieldCheck, Globe } from "lucide-react";

export default function Donate() {
  const tiers = [
    {
      amount: "₦5,000",
      description: "Supports resources for 1 student",
      impact: "Provides curriculum materials and club tools."
    },
    {
      amount: "₦20,000",
      description: "Supports a group of 5 students",
      impact: "Covers mentorship sessions and workshop costs."
    },
    {
      amount: "₦100,000",
      description: "Sponsor a whole school club",
      impact: "Establishes a sustainable FLiC in a new school."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeader 
          title="Support Our Youth" 
          subtitle="Donate" 
          description="Your financial contribution directly empowers young Nigerians with life-changing skills."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Secure Your Impact</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Secure Payments</h3>
                  <p className="text-gray-600">All donations are processed securely via our payment partners.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Direct Impact</h3>
                  <p className="text-gray-600">90% of your donation goes directly toward student programs.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-600 mb-6">Or donate via Flutterwave</p>
              <a 
                href="https://dashboard.flutterwave.com/donate/3foid5tzjh7r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Donate via Flutterwave <Heart className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Suggested Amounts</h3>
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-primary transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-extrabold text-primary">{tier.amount}</span>
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="font-bold mb-1">{tier.description}</p>
                <p className="text-sm text-gray-500">{tier.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}