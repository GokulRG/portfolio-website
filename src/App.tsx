import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-6 py-24">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Gokul Ramakrishnan</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl">Senior Software Developer with expertise in Full Stack Development, Cloud Architecture, and DevOps</p>
                        <div className="flex gap-4">
                            <a href="https://github.com/GokulRG" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/gokulramakrishnan/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:ramakrishnan.go@northeastern.edu" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Experience Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-semibold">Senior Software Developer</h3>
                                <p className="text-gray-600">2021 - Present</p>
                            </div>
                            <p className="text-gray-600 mb-4">Palo Alto Networks Ltd</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Led development of microservices-based applications using Spring Boot and React</li>
                                <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                                <li>Mentored junior developers and conducted code reviews</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-semibold">Software Developer</h3>
                                <p className="text-gray-600">2018 - 2021</p>
                            </div>
                            <p className="text-gray-600 mb-4">Infosys Limited</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Developed full-stack applications using Java and JavaScript</li>
                                <li>Optimized application performance and implemented security best practices</li>
                                <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                            <div className="space-y-2">
                                <p className="text-gray-700">Java</p>
                                <p className="text-gray-700">JavaScript</p>
                                <p className="text-gray-700">Typescript</p>
                                <p className="text-gray-700">HTML/CSS</p>
                                <p className="text-gray-700">SQL</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Databases</h3>
                            <div className="space-y-2">
                                <p className="text-gray-700">mySQL</p>
                                <p className="text-gray-700">MongoDB</p>
                                <p className="text-gray-700">SQLServerExpress</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
                            <div className="space-y-2">
                                <p className="text-gray-700">React</p>
                                <p className="text-gray-700">Angular</p>
                                <p className="text-gray-700">GraphQL</p>
                                <p className="text-gray-700">Vite</p>
                                <p className="text-gray-700">Apache Guacamole</p>
                                <p className="text-gray-700">JUnit</p>

                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">DevOps</h3>
                            <div className="space-y-2">
                                <p className="text-gray-700">Docker</p>
                                <p className="text-gray-700">Jenkins</p>
                                <p className="text-gray-700">AWS</p>
                                <p className="text-gray-700">Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-gray-700 mb-8">I'm always interested in hearing about new opportunities and collaborations.</p>
                        <a
                            href="mailto:gokulramakrishnan@outlook.com"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Email Me
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>© {new Date().getFullYear()} Gokul Ramakrishnan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;