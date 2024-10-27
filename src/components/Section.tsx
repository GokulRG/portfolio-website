import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`py-16 md:py-24 ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between mb-12 group"
                >
                    <h2 className="text-3xl font-bold text-center">{title}</h2>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-500 group-hover:text-gray-700"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </button>

                <motion.div
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
}