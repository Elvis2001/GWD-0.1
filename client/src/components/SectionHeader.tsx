import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className,
  light = false
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 max-w-3xl",
      centered && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block mb-3 text-sm font-bold uppercase tracking-wider",
            light ? "text-secondary" : "text-primary"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "w-24 h-1.5 rounded-full mb-6",
            centered && "mx-auto",
            light ? "bg-white/20" : "bg-primary/20"
          )}
        />
      )}
      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-gray-200" : "text-muted-foreground"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
