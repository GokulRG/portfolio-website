import { motion } from 'framer-motion';
import { DownloadIcon, Github, Linkedin, Mail, GraduationCap, Trophy, Briefcase } from 'lucide-react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { Carousel } from './components/Carousel';
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

    const experience = [
        {
            title: "Senior Staff Software Engineer",
            company: "Palo Alto Networks Ltd",
            period: "2024 - Present",
            achievements: [
                "Led development of Secure Remote Access solution using Apache Guacamole, TypeScript, and React",
                "Implemented CI/CD pipelines using Jenkins and Docker",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            title: "Lead Software Engineer",
            company: "Microsoft",
            period: "2021 - 2024",
            achievements: [
                "Architected and developed cloud-native applications using Azure",
                "Led a team of 5 developers in modernizing legacy systems",
                "Reduced system downtime by 40% through infrastructure improvements"
            ]
        },
        {
            title: "Senior Software Engineer",
            company: "Amazon",
            period: "2018 - 2021",
            achievements: [
                "Developed microservices using AWS Lambda and API Gateway",
                "Optimized database queries resulting in 30% performance improvement",
                "Implemented automated testing strategies increasing code coverage to 90%"
            ]
        }
    ];

    const projects = [
        {
            title: "Project Management Dashboard",
            description: "A comprehensive project management tool built with React and TypeScript",
            image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with real-time inventory management",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
            technologies: ["Next.js", "MongoDB", "Stripe", "AWS"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            title: "AI-Powered Analytics",
            description: "Machine learning platform for business intelligence and data visualization",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
            technologies: ["Python", "TensorFlow", "React", "D3.js"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        }
    ];

    const skills = [
        {
            title: "Programming Languages",
            skills: ["Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL"]
        },
        {
            title: "Frameworks",
            skills: ["React", "Angular", "Node.js", "Spring Boot", "Express"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "Docker", "AWS", "Jenkins", "Kubernetes"]
        },
        {
            title: "Cloud Services",
            skills: ["AWS Lambda", "S3", "EC2", "Azure Functions", "Google Cloud"]
        },
        {
            title: "Database Systems",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB"]
        }
    ];

    const education = [
        {
            degree: "Master of Science in Software Engineering",
            school: "Northeastern University",
            period: "2022-2024",
            courses: "Advanced Software Development, Cloud Computing, Software Design Patterns"
        },
        {
            degree: "Bachelor of Engineering in Computer Science",
            school: "Anna University",
            period: "2014-2018",
            courses: "Data Structures, Algorithms, Database Management Systems"
        }
    ];

    const certifications = [
        {
            title: "AWS Certified Solutions Architect",
            organization: "Amazon Web Services",
            year: "2023"
        },
        {
            title: "Professional Scrum Master I",
            organization: "Scrum.org",
            year: "2022"
        },
        {
            title: "Azure Solutions Architect Expert",
            organization: "Microsoft",
            year: "2023"
        },
        {
            title: "Google Cloud Professional Architect",
            organization: "Google Cloud",
            year: "2022"
        }
    ];

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
                <div className="px-4 md:px-12">
                    <Carousel itemWidth={400} gap={24}>
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-lg shadow-md h-full"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <Briefcase size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                                        <p className="text-gray-600 mb-2">{exp.company}</p>
                                        <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Carousel>
                </div>
            </Section>

            {/* Projects Section */}
            <Section title="Featured Projects" className="bg-gray-100">
                <div className="px-4 md:px-12">
                    <Carousel itemWidth={400} gap={24}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="h-full"
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </Carousel>
                </div>
            </Section>

            {/* Skills Section */}
            <Section title="Technical Skills">
                <div className="px-4 md:px-12">
                    <Carousel itemWidth={320} gap={24}>
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="h-full"
                            >
                                <SkillCard
                                    title={skillGroup.title}
                                    skills={skillGroup.skills}
                                />
                            </motion.div>
                        ))}
                    </Carousel>
                </div>
            </Section>

            {/* Education Section */}
            <Section title="Education" className="bg-gray-100">
                <div className="px-4 md:px-12">
                    <Carousel itemWidth={600} gap={24}>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-lg shadow-md h-full"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <GraduationCap size={24} className="text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-600">{edu.school} | {edu.period}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">Relevant coursework: {edu.courses}</p>
                            </motion.div>
                        ))}
                    </Carousel>
                </div>
            </Section>

            {/* Certifications Section */}
            <Section title="Certifications">
                <div className="px-4 md:px-12">
                    <Carousel itemWidth={400} gap={24}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-lg shadow-md h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <Trophy size={24} className="text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                                        <p className="text-gray-600">{cert.organization} | {cert.year}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Carousel>
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