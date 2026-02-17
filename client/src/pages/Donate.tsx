import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Heart, ShieldCheck, Globe, CheckCircle2, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        {/* Financial Transparency Section */}
        <section className="mb-20 bg-gray-50 rounded-[3rem] p-12 lg:p-20">
          <SectionHeader 
            title="Our Commitment to Trust" 
            subtitle="Financial Transparency" 
            description="We maintain the highest standards of accountability in managing donor funds."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Transparency Promise
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  <span className="font-bold text-gray-900">100% of public donations</span> go directly to funding our youth programs and educational resources.
                </p>
                <div className="space-y-4">
                  {[
                    "Registered NGO Status",
                    "Annual Audit Reports",
                    "Tax-Deductible Contributions",
                    "Impact Measurement & Verification"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="rounded-full gap-2">
                  <Download className="w-4 h-4" /> 2023 Annual Report
                </Button>
                <Button variant="outline" className="rounded-full gap-2">
                  <Download className="w-4 h-4" /> Tax Info (PDF)
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <h3 className="text-xl font-bold mb-6 text-center">Where Your Money Goes</h3>
              <div className="aspect-square max-w-[400px] mx-auto relative flex items-center justify-center">
                {/* Visual Representation of Spending */}
                <div className="w-full h-full rounded-full border-[20px] border-primary" />
                <div className="absolute inset-0 w-full h-full rounded-full border-[20px] border-secondary border-t-transparent border-r-transparent border-b-transparent rotate-[30deg]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl font-bold text-gray-900">90%</p>
                  <p className="text-sm text-gray-500 font-medium">Program Services</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-xs font-bold text-gray-600">Programs (90%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <span className="text-xs font-bold text-gray-600">Admin (10%)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
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