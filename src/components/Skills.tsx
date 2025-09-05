import { Code2, Database, Server, Globe, Smartphone, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'Bootstrap', level: 78, color: 'bg-pink-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-teal-500' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Java', level: 75, color: 'bg-red-600' },
        { name: 'C#', level: 70, color: 'bg-purple-600' },
      ],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 85, color: 'bg-green-500' },
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'SQl alchemy', level: 60, color: 'bg-purple-700' },
      ],
    },
    {
      title: 'Mobile & Other',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 65, color: 'bg-blue-400' },
        { name: 'MERN Stack', level: 85, color: 'bg-green-400' },
        { name: 'RESTful APIs', level: 88, color: 'bg-indigo-500' },
        { name: 'UI/UX Design', level: 75, color: 'bg-pink-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-card-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <GitBranch size={20} className="text-accent" />
              <h3 className="text-lg font-semibold text-foreground">
                Currently Learning
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                MERN Stack
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Advanced React Patterns
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Cloud Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;