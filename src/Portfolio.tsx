import React from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Star, ChevronRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl?: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Portfolio: React.FC = () => {
  

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
      tech: ['TypeScript', 'React', 'Firebase', 'Material-UI', 'WebSocket'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop'
    },
    {
      id: '3',
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics dashboard with custom charts, real-time data streaming, and export functionality.',
      tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Exceptional developer who delivered our project ahead of schedule. Clean code and great communication throughout.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Built our entire platform from scratch. Technical expertise combined with business understanding made all the difference.',
      rating: 5
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'GraphQL', 'REST APIs', 'Git'
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">DevPortfolio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Full-Stack
                <span className="text-primary"> Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Crafting exceptional digital experiences with modern technologies. 
                I specialize in building scalable web applications that drive business growth.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                View Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl absolute inset-0"></div>
              <Card className="relative w-64 h-64 flex items-center justify-center border-2">
                <Code className="w-24 h-24 text-primary" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card 
                key={project.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  {project.githubUrl && (
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="space-y-4">
                    <StarRating rating={testimonial.rating} />
                    <CardDescription className="text-base italic leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center">
            <CardHeader className="space-y-6">
              <div>
                <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Ready to Start Your Project?
                </CardTitle>
                <CardDescription className="text-xl max-w-2xl mx-auto">
                  Let's collaborate and bring your vision to life. I'm available for freelance projects and full-time opportunities.
                </CardDescription>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  <Mail className="w-5 h-5 mr-2" />
                  Hire Me Now
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>

              <Separator className="my-6" />
              
              <div className="text-muted-foreground">
                <p>hello@yourname.com • +1 (555) 123-4567</p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;