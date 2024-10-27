import { motion } from 'framer-motion';

interface SkillCardProps {
    title: string;
    skills: string[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
        >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="space-y-2">
                {skills.map((skill) => (
                    <p key={skill} className="text-gray-700">{skill}</p>
                ))}
            </div>
        </motion.div>
    );
}