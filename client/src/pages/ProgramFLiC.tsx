import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { Check, ArrowRight, BookOpen, Calculator, CreditCard, ShieldCheck, Heart, TrendingUp, Landmark, UserCheck } from "lucide-react";

export default function ProgramFLiC() {
  const curriculum = [
    {
      title: "Value of Education",
      points: ["Career planning", "Graduating importance", "Earnings potential"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Personal Budgeting",
      points: ["Income tracking", "Expense tracking", "Budgeting rules"],
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Loans & Credit",
      points: ["Basic terms", "Responsible borrowing", "Loan amortization"],
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Insurance",
      points: ["Auto & Health", "Life & Renters", "Home insurance"],
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Future Planning",
      points: ["Emergency funds", "Major expenditures", "Investment basics"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Banking Basics",
      points: ["Savings accounts", "Debit cards", "Interest terms"],
      icon: <Landmark className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-gradient-to-b from-green-50 to-white py-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 inline-block"
            >
              SIGNATURE PROGRAM
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight"
            >
              Financial Literacy <span className="text-primary">Clubs</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Our Financial Literacy Clubs teach youths to make smarter financial decisions early, using various fun activities, games and online tools.
            </motion.p>
            <Link href="/get-involved" className="btn-primary text-lg px-10">
              Start a Club Today
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop" 
                alt="Students Learning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-[240px] border border-gray-100">
              <UserCheck className="w-10 h-10 text-secondary mb-4" />
              <p className="text-lg font-bold">Personal Responsibility</p>
              <p className="text-sm text-gray-500">Developing a sense of personal agency for one's financial situation.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">What We Learn</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We provide unique opportunities for children and young adults' learning and community building, bringing together youths from diverse backgrounds.
            </p>
            <div className="space-y-4">
              {[
                "Understand banking and savings",
                "Navigate loans and credit responsibly",
                "Plan for charitable giving",
                "Make first steps into employment"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <section className="mb-32">
          <SectionHeader 
            title="Curriculum Overview" 
            subtitle="The FLiC Model" 
            description="Our comprehensive 10-point curriculum designed for secondary school students."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 hover:border-primary/20 transition-all hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="text-gray-500 flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-primary rounded-3xl p-16 text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Empower Your Students Today</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ready to bring the Financial Literacy Club to your school? Partner with us to build a brighter future for your students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-12">
              Apply Now
            </Link>
            <Link href="/donate" className="inline-flex items-center font-bold text-white hover:underline">
              Sponsor a Club <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}