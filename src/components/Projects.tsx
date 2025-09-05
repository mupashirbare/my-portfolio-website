import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with MERN stack featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'Web Development',
      icon: Globe,
      githubUrl: 'https://github.com/mupashirbare',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      category: 'Web Development',
      icon: Database,
      githubUrl: 'https://github.com/mupashirbare',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Mobile Weather App',
      description: 'A cross-platform weather application built with Flutter, providing real-time weather data and forecasts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'REST API', 'Provider'],
      category: 'Mobile Development',
      icon: Smartphone,
      githubUrl: 'https://github.com/mupashirbare',
      liveUrl: 'https://play.google.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform for educational institutions with course management, student tracking, and analytics.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
      category: 'Web Development',
      icon: Globe,
      githubUrl: 'https://github.com/mupashirbare',
      liveUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my skills and projects, built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      icon: Globe,
      githubUrl: 'https://github.com/mupashirbare',
      liveUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with group messaging, file sharing, and emoji support using WebSocket technology.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'Web Development',
      icon: Globe,
      githubUrl: 'https://github.com/mupashirbare',
      liveUrl: 'https://example.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }: { project: typeof projects[0], featured?: boolean }) => {
    const Icon = project.icon;
    
    return (
      <div className={`bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group ${featured ? 'md:col-span-2' : ''}`}>
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button
              size="sm"
              variant="secondary"
              asChild
              className="bg-background/90 hover:bg-background"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Icon size={20} className="text-accent" />
            <span className="text-sm text-accent font-medium">{project.category}</span>
          </div>
          
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my technical skills and creativity
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Highlighted Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard project={project} featured />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="https://github.com/mupashirbare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
