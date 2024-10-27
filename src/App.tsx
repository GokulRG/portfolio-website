import { motion } from 'framer-motion';
import { DownloadIcon, Github, Linkedin, Mail, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import headshot from './assets/Headshot.png';
import { PROFILE_SUMMARY_SUBTITLE, PROFILE_SUMMARY_TITLE } from "./utils/constants";

function App() {
    const downloadResume = async () => {
        const link = document.createElement('a');
        link.href = `${window.location.origin}/assets/Resume.pdf`;
        link.download = 'Gokul-Ramakrishnan-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center text-center max-w-2xl"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gokul Ramakrishnan</h1>
                            <p className="text-xl md:text-2xl mb-4">{PROFILE_SUMMARY_TITLE}</p>
                            <p className="text-lg md:text-xl mb-8">{PROFILE_SUMMARY_SUBTITLE}</p>
                            <motion.div
                                className="flex gap-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a href="https://github.com/GokulRG" target="_blank" rel="noopener noreferrer"
                                   className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/gokulramakrishnan/" target="_blank" rel="noopener noreferrer"
                                   className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:ramakrishnan.go@northeastern.edu"
                                   className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <Mail size={24} />
                                </a>
                                <button onClick={downloadResume}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <DownloadIcon size={24} />
                                </button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-[300px] md:max-w-[400px]"
                        >
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src={headshot}
                                alt="Gokul Ramakrishnan"
                                loading="eager"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            {/* Experience Section */}
            <Section title="Professional Experience">
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <h3 className="text-xl font-semibold">Senior Staff Software Engineer</h3>
                            <p className="text-gray-600">2024 - Present</p>
                        </div>
                        <p className="text-gray-600 mb-4">Palo Alto Networks Ltd</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Led development of Secure Remote Access solution using Apache Guacamole, TypeScript, and React</li>
                            <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                            <li>Mentored junior developers and conducted code reviews</li>
                        </ul>
                    </motion.div>

                    {/* Add other experience items with the same motion.div wrapper */}
                </div>
            </Section>

            {/* Projects Section */}
            <Section title="Featured Projects" className="bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="Project Management Dashboard"
                        description="A comprehensive project management tool built with React and TypeScript"
                        image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
                        technologies={["React", "TypeScript", "Tailwind CSS", "Node.js"]}
                        githubUrl="https://github.com"
                        liveUrl="https://example.com"
                    />
                    <ProjectCard
                        title="E-commerce Platform"
                        description="Full-stack e-commerce solution with real-time inventory management"
                        image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80"
                        technologies={["Next.js", "MongoDB", "Stripe", "AWS"]}
                        githubUrl="https://github.com"
                        liveUrl="https://example.com"
                    />
                </div>
            </Section>

            {/* Skills Section */}
            <Section title="Technical Skills">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCard
                        title="Programming Languages"
                        skills={["Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL"]}
                    />
                    <SkillCard
                        title="Frameworks"
                        skills={["React", "Angular", "Node.js", "Spring Boot", "Express"]}
                    />
                    <SkillCard
                        title="Tools & Technologies"
                        skills={["Git", "Docker", "AWS", "Jenkins", "Kubernetes"]}
                    />
                </div>
            </Section>

            {/* Education Section */}
            <Section title="Education" className="bg-gray-100">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <GraduationCap size={24} className="text-blue-600" />
                        <div>
                            <h3 className="text-xl font-semibold">Master of Science in Software Engineering</h3>
                            <p className="text-gray-600">Northeastern University | 2022-2024</p>
                        </div>
                    </div>
                    <p className="text-gray-700">Relevant coursework: Advanced Software Development, Cloud Computing, Software Design Patterns</p>
                </motion.div>
            </Section>

            {/* Certifications Section */}
            <Section title="Certifications">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Trophy size={24} className="text-blue-600" />
                            <div>
                                <h3 className="text-xl font-semibold">AWS Certified Solutions Architect</h3>
                                <p className="text-gray-600">Amazon Web Services | 2023</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Trophy size={24} className="text-blue-600" />
                            <div>
                                <h3 className="text-xl font-semibold">Professional Scrum Master I</h3>
                                <p className="text-gray-600">Scrum.org | 2022</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Contact Section */}
            <Section title="Get in Touch" className="bg-gray-100">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-gray-700 mb-8">I'm always interested in hearing about new opportunities and collaborations.</p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:gokulramakrishnan@outlook.com"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Email Me
                    </motion.a>
                </div>
            </Section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>© {new Date().getFullYear()} Gokul Ramakrishnan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;