import { useState, useEffect } from 'react';
import './styles.css';

function TypeWriter({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <div
      className="feature-card p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="icon-wrapper w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-4 md:mb-6">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 font-display">{title}</h3>
      <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-amber-500/5 rounded-full blur-[120px] md:blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-600/5 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="noise-overlay" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-display font-bold tracking-tight">CloneBot</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Features</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">About</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Pricing</a>
          </div>

          <button className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6 md:mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm text-zinc-400">Now available for everyone</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6 md:mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-white">Build </span>
            <span className="text-gradient">anything</span>
            <br />
            <span className="text-white">with </span>
            <span className="text-gradient">AI</span>
          </h1>

          <p className={`text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <TypeWriter text="Experience the next generation of AI assistance. Create, code, and collaborate with unprecedented intelligence." delay={30} />
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Start Creating
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-full text-base font-semibold hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-4 md:left-20 w-16 md:w-20 h-16 md:h-20 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm floating hidden md:flex items-center justify-center">
          <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-4 md:right-24 w-12 md:w-16 h-12 md:h-16 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm floating-delay hidden md:flex items-center justify-center">
          <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              <span className="text-white">Powerful </span>
              <span className="text-gradient">features</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">Everything you need to supercharge your workflow and build amazing things.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <FeatureCard
              delay={100}
              icon={
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Lightning Fast"
              description="Get responses in milliseconds. Our optimized infrastructure ensures you never wait."
            />
            <FeatureCard
              delay={200}
              icon={
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Enterprise Security"
              description="Bank-level encryption and compliance. Your data stays private and protected."
            />
            <FeatureCard
              delay={300}
              icon={
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              title="Code Generation"
              description="Generate production-ready code in any language. From ideas to implementation in seconds."
            />
            <FeatureCard
              delay={400}
              icon={
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Image Analysis"
              description="Upload images and get instant insights. Understand visual content like never before."
            />
            <FeatureCard
              delay={500}
              icon={
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
              title="Natural Conversation"
              description="Communicate naturally. Our AI understands context and nuance for seamless interaction."
            />
            <FeatureCard
              delay={600}
              icon={
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
              title="Continuous Learning"
              description="Always improving. Our AI evolves with the latest knowledge and capabilities."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '150+', label: 'Countries' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-zinc-500 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8">
            <span className="text-white">Ready to </span>
            <span className="text-gradient">transform</span>
            <span className="text-white"> your workflow?</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">Join millions of users who are already building the future with AI assistance.</p>
          <button className="px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-display font-bold">CloneBot</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Attribution Footer */}
          <div className="pt-6 md:pt-8 border-t border-zinc-900/50">
            <p className="text-center text-zinc-600 text-xs md:text-sm">
              Requested by <span className="text-zinc-500">@web-user</span> · Built by <span className="text-zinc-500">@clonkbot</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
