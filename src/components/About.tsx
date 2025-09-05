import { MapPin, Calendar, Award, Heart, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Award },
    { label: 'Technologies Mastered', value: '12+', icon: Code },
    { label: 'Happy Clients', value: '8+', icon: Heart },
  ];

  const highlights = [
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I thrive on turning complex challenges into elegant, efficient solutions through creative thinking and technical expertise.',
    },
    {
      icon: Code,
      title: 'Full-Stack Developer',
      description: 'Proficient in both frontend and backend development, creating seamless end-to-end web applications.',
    },
    {
      icon: Heart,
      title: 'Passionate Learner',
      description: 'Always exploring new technologies and frameworks to stay current with industry trends and best practices.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for creating digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent">
                <MapPin size={20} />
                <span className="font-medium">Based in Mogadishu, Somalia</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">
                Hello! I'm Mubashir Bashir Hirse
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Web Developer with a strong foundation in modern web technologies. 
                  My journey in software development began with a curiosity about how things work behind the scenes, 
                  and it has evolved into a deep passion for creating innovative digital solutions.
                </p>
                
                <p>
                  With expertise spanning from frontend frameworks like React and TypeScript to backend technologies 
                  including Node.js, Python, and various databases, I enjoy building comprehensive web applications 
                  that solve real-world problems.
                </p>
                
                <p>
                  As a lifelong learner, I'm always eager to explore new technologies and stay updated with the 
                  latest trends in the tech industry. Currently, I'm diving deeper into the MERN stack and 
                  exploring cloud technologies to enhance my skill set.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">What I Bring to the Table</h4>
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      key={highlight.title}
                      className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Icon size={20} className="text-accent" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-1">
                          {highlight.title}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg text-center group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Icon size={24} className="text-accent" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-card-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fun Facts */}
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                Fun Facts About Me
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>I enjoy exploring new programming languages and frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Always eager to learn and stay up-to-date with tech trends</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Love collaborating with other developers on open-source projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Passionate about creating user-friendly digital experiences</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
              <blockquote className="text-center">
                <p className="text-lg font-medium text-foreground italic mb-3">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <cite className="text-sm text-accent font-medium">
                  - Cory House
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;