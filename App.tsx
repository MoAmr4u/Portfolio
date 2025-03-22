import React, { useState, useEffect } from 'react';
import { Code2, Terminal, Bot, Globe, ChevronDown, Github, Mail, ExternalLink, MessageSquare } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white relative">
      <div className="stars" aria-hidden="true"></div>
      
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 transform scale-105 hover:scale-100 transition-transform duration-1000"></div>
        <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-500">
            Mohamed Amr
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Freelance Programmer & Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg mb-12">
            {['Web Development', 'Python', 'Bash', 'Discord Bots'].map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full border transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                  index === 0 ? 'bg-blue-500/10 border-blue-500/20 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20' :
                  index === 1 ? 'bg-green-500/10 border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20' :
                  index === 2 ? 'bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20' :
                  'bg-purple-500/10 border-purple-500/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 glow-button"
            >
              Hire Me
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#services"
              className="group px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
            >
              My Services
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce cursor-pointer">
          <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Globe className="w-8 h-8 text-blue-400" />}
              title="Web Development"
              description="Custom responsive websites built with modern technologies for optimal performance and user experience."
            />
            <ServiceCard
              icon={<Code2 className="w-8 h-8 text-green-400" />}
              title="Python Development"
              description="Efficient Python applications and scripts for automation, data processing, and more."
            />
            <ServiceCard
              icon={<Terminal className="w-8 h-8 text-yellow-400" />}
              title="Bash Scripting"
              description="Powerful shell scripts to automate tasks and streamline your workflow."
            />
            <ServiceCard
              icon={<Bot className="w-8 h-8 text-purple-400" />}
              title="Discord Bots"
              description="Custom Discord bots to enhance your server's functionality and user engagement."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <SocialLink
              href="https://github.com/MoAmr4u"
              icon={<Github />}
              label="GitHub"
              username="MoAmr4u"
            />
            <SocialLink
              href="mailto:mohamedamrfreelance@gmail.com"
              icon={<Mail />}
              label="Email"
              username="mohamedamrfreelance@gmail.com"
            />
            <SocialLink
              href="https://www.reddit.com/u/abo_zozo/s/QOS174Y0zb"
              icon={<MessageSquare />}
              label="Reddit"
              username="abo_zozo"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p className="hover:text-white transition-colors">
          © {new Date().getFullYear()} Mohamed Amr. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  );
}

function SocialLink({ href, icon, label, username }: { href: string; icon: React.ReactNode; label: string; username: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="transform group-hover:scale-110 transition-transform">{icon}</span>
      <span>{label}:</span>
      <span className="text-blue-400">{username}</span>
      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default App;