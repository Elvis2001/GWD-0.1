import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { 
  Check, 
  ArrowRight, 
  BookOpen, 
  Calculator, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  Landmark, 
  School,
  MapPin,
  ExternalLink,
  Target,
  Users,
  MessageSquare
} from "lucide-react";

export default function ProgramFLiC() {
  const curriculum = [
    {
      title: "Value of Education",
      points: ["Career planning and earnings potential", "Importance of graduating", "Educational ROI"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Personal Budgeting",
      points: ["Track income and expenses", "Budgeting rules of thumb", "Financial discipline"],
      icon: <Calculator className="w-6 h-6" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Loans and Credit",
      points: ["Basic terms and disclosures", "Responsible vs Excessive borrowing", "Loan amortization"],
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Insurance Mastery",
      points: ["Auto, Renters, Health", "Home and Life insurance", "Risk management"],
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Future Planning",
      points: ["Emergency fund creation", "Major expenditure planning", "Investment instruments"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Banking Basics",
      points: ["Checking and saving accounts", "Debit cards and interest", "Banking terms"],
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Goal Setting",
      points: ["Role of finance in life goals", "Short and long term targets", "Acheivability analysis"],
      icon: <Target className="w-6 h-6" />,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Employment Prep",
      points: ["Self-employment & Entrepreneurship", "Evaluating job offers", "Student loan repayment"],
      icon: <Users className="w-6 h-6" />,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  const activeSchools = [
    {
      name: "Suleiman Ribadu College, Yola",
      location: "Bole Yolde Pate, Bako, Yola By-Pass Road, Adamawa State",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      description: "Active FLiC participation with focus on entrepreneurship."
    },
    {
      name: "KAHA International Academy, Yola",
      location: "Jambutu, Yola, Adamawa State",
      image: "https://images.unsplash.com/photo-1541339907198-e08756eaa402?q=80&w=2070&auto=format&fit=crop",
      description: "Established FLiC program with regular workshops."
    },
    {
      name: "Arewa Achievers Academy, Yola",
      location: "Mbamba, Rumde Jabbi, Yola South, Adamawa State",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
      description: "Student-led finance clubs and peer mentoring."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Club Establishment",
      desc: "We partner with schools to set up student-led clubs that meet regularly."
    },
    {
      step: "02",
      title: "Mentorship",
      desc: "Volunteer professionals guide students through the curriculum."
    },
    {
      step: "03",
      title: "Interactive Learning",
      desc: "Fun activities, games, and online tools make learning finance exciting."
    },
    {
      step: "04",
      title: "Impact Measurement",
      desc: "We track progress and celebrate success stories and student growth."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gradient-to-b from-green-50 to-white py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
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
            Financial Literacy <span className="text-primary">Clubs</span> (FLiC)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            FLiC is our signature model for secondary school students. We teach youths to make smarter financial decisions early using interactive methods.
          </motion.p>
          <Link href="/get-involved" className="btn-primary text-lg px-10">
            Apply for Your School
          </Link>
        </div>
      </div>

      <div className="container-custom">
        <section className="mb-32">
          <SectionHeader 
            title="How It Works" 
            subtitle="The FLiC Model" 
            description="Our structured approach to bringing financial education to secondary schools."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-50 text-center"
              >
                <span className="text-6xl font-black text-primary/5 absolute top-4 left-1/2 -translate-x-1/2">{item.step}</span>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader 
            title="Deep Dive Curriculum" 
            subtitle="What Students Learn" 
            description="Our 10-point curriculum is designed to cover every aspect of personal finance and responsibility."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                      <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader 
            title="Success Stories" 
            subtitle="Active Schools" 
            description="We are currently operating active FLiC programs in leading schools in Yola, Adamawa State."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {activeSchools.map((school, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={school.image} 
                    alt={school.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                      <MapPin className="w-3 h-3" />
                      {school.location.split(',')[0]}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                    <School className="w-4 h-4" />
                    Active Club
                  </div>
                  <h3 className="text-xl font-bold mb-4">{school.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {school.description}
                  </p>
                  <Link 
                    href="/gallery" 
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-[3rem] p-12 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How to Start a FLiC</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Bringing financial literacy to your school is a straightforward process. We provide all the resources, training, and curriculum needed to ensure success.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Requirements", desc: "A dedicated teacher coordinator and a minimum of 20 interested students." },
                  { title: "Resources", desc: "We provide student workbooks, teacher guides, and interactive game kits." },
                  { title: "Support", desc: "Continuous mentorship from our team and volunteer professionals." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">{i+1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Inquiry Form</h3>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and our program coordinator will reach out to you.</p>
              <Link href="/contact?intent=Student" className="btn-primary w-full text-center">
                Express Interest
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}