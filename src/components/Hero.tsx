import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/17.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-accent font-medium text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Mubashir
                <br />
                <span className="text-accent">Bashir Hirse</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Full Stack Web Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate software developer from Somalia with expertise in modern web technologies. 
              I create innovative digital solutions and love exploring new programming languages and frameworks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/mupashirbare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mubashirbarre12@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-glow rounded-full blur-2xl opacity-20 animate-glow" />
              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105">
                <img
                  src={profileImage}
                  alt="Mubashir Bashir Hirse"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
          >
            <ArrowDown size={24} className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;