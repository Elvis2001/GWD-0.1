import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

export default function ProgramFLiC() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-green-50 py-16 mb-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Signature Program</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Financial Literacy Clubs (FLiC)</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering high school students with the knowledge to make smart financial decisions, start businesses, and build wealth.
              </p>
              <Link href="/get-involved" className="btn-primary">
                Start a Club at Your School
              </Link>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
               {/* Students learning finance */}
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop" 
                alt="Financial Literacy Class" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                FLiC is designed to demystify finance for young people. Through interactive sessions, games, and real-world simulations, students learn about budgeting, saving, investing, debt management, and the basics of entrepreneurship.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We partner with schools to establish student-led clubs that meet weekly or bi-weekly. These clubs are guided by a GWDYF curriculum and mentored by volunteer professionals from the finance sector.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Curriculum Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Money Mindset & Psychology",
                  "Budgeting & Saving Strategies",
                  "Understanding Banking & Credit",
                  "Investment Basics (Stocks, Bonds)",
                  "Entrepreneurship 101",
                  "Digital Finance & Security"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Impact Stories</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <p className="italic text-gray-600 mb-6 text-lg">
                  "Before joining FLiC, I thought investing was only for rich people. Now, I have my own savings plan and I've even started a small side business selling custom artwork. I feel in control of my future."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div>
                    <p className="font-bold text-gray-900">Michael T.</p>
                    <p className="text-sm text-gray-500">Grade 11 Student</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Other Programs</h3>
              <div className="flex flex-col gap-2">
                <Link href="/programs/hubs" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="font-medium text-gray-600 group-hover:text-primary">HUBs Initiative</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </Link>
                <Link href="/programs/ai" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="font-medium text-gray-600 group-hover:text-primary">AI & Digital Skills</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </Link>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
              <p className="mb-6 opacity-90">
                Are you a school administrator or teacher interested in bringing FLiC to your students?
              </p>
              <Link href="/contact" className="block w-full py-3 bg-white text-primary text-center font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
