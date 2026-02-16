import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { useTeam } from "@/hooks/use-content";
import { CheckCircle2, Target, Lightbulb, Heart } from "lucide-react";

export default function About() {
  const { data: team } = useTeam();

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Purpose",
      description: "We are driven by a clear mission to uplift and empower youth."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Innovation",
      description: "We embrace new technologies and methods to enhance learning."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion",
      description: "Our team is deeply committed to the success of every student."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and accountability."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-gray-50 py-16 mb-16">
        <div className="container-custom">
          <SectionHeader 
            title="Who We Are" 
            subtitle="About GWDYF"
            description="Founded with a vision to bridge the gap between education and opportunity, the GWD Youth Foundation has grown into a beacon of hope for thousands of young people."
            className="mb-0"
          />
        </div>
      </div>

      <div className="container-custom">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower youth with financial literacy, leadership skills, and digital competencies necessary to thrive in the 21st-century economy. We strive to create equal opportunities for growth and success.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8" />
            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where every young person is financially literate, digitally skilled, and empowered to lead positive change in their communities and beyond.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The GWD Youth Foundation began as a small community initiative aimed at teaching basic financial concepts to high school students. Recognizing the immense gap in financial education, our founders set out to create a curriculum that was both engaging and practical.
              </p>
              <p>
                Over the years, we expanded our scope to include digital skills training, realizing that financial literacy and technological proficiency go hand in hand in the modern world.
              </p>
              <p>
                Today, GWDYF operates in over 12 communities, partnering with schools, universities, and corporate organizations to deliver high-impact programs that prepare youth for the future of work.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
            {/* Team meeting photo */}
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
              alt="Our Story" 
              className="relative rounded-3xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <SectionHeader title="Our Core Values" subtitle="What Guides Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-white shadow-md rounded-full flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-muted-foreground text-sm">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <SectionHeader title="Meet Our Team" subtitle="Leadership" description="The dedicated individuals driving our mission forward." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team?.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
            
            {/* Static placeholders if no API data yet */}
            {(!team || team.length === 0) && (
              <>
                <div className="group text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sarah Johnson" />
                  </div>
                  <h4 className="text-xl font-bold">Sarah Johnson</h4>
                  <p className="text-primary font-medium mb-2">Executive Director</p>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">Leading with passion and over 15 years of experience in youth development.</p>
                </div>
                <div className="group text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="David Chen" />
                  </div>
                  <h4 className="text-xl font-bold">David Chen</h4>
                  <p className="text-primary font-medium mb-2">Program Director</p>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">Architecting our curriculum to ensure relevance and engagement.</p>
                </div>
                <div className="group text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Amara Okeke" />
                  </div>
                  <h4 className="text-xl font-bold">Amara Okeke</h4>
                  <p className="text-primary font-medium mb-2">Community Outreach</p>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">Building bridges between GWDYF and the communities we serve.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
