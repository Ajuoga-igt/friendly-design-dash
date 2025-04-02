
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, Code, Laptop, Lightbulb } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">John Doe</span>
                <br />Frontend Developer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                I craft beautiful, responsive websites with a focus on user experience
                and clean code. Let's build something amazing together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/projects" size="lg">View My Work</Button>
                <Button to="/contact" variant="outline" size="lg">Get In Touch</Button>
              </div>
            </div>
            <div className="flex-1 animate-fade-in">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full flex items-center justify-center p-2">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500"
                    alt="John Doe - Frontend Developer"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg">
                  <p className="font-mono text-sm">{'<code /> with ❤️'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Me"
            subtitle="I'm a passionate frontend developer with a love for creating beautiful and functional web experiences."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 animate-slide-up">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-muted-foreground">
                I write clean, maintainable code that follows best practices and industry standards.
              </p>
            </div>
            
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-muted-foreground">
                All my projects are built with responsive design in mind, ensuring they look great on any device.
              </p>
            </div>
            
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-accent/10 text-accent-foreground rounded-lg flex items-center justify-center mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Problem Solver</h3>
              <p className="text-muted-foreground">
                I love solving complex problems with elegant solutions and creative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Projects"
            subtitle="Here are some of my recent projects that showcase my skills and expertise."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Website"
              description="A fully functional e-commerce platform with cart, checkout, and payment integration."
              imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500"
              tags={["React", "Node.js", "Stripe"]}
              demoUrl="https://demo.johndoe.dev/ecommerce"
              githubUrl="https://github.com/johndoe/ecommerce"
            />
            
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website with smooth animations and responsive design."
              imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500"
              tags={["React", "Tailwind CSS", "GSAP"]}
              demoUrl="https://demo.johndoe.dev/portfolio"
              githubUrl="https://github.com/johndoe/portfolio"
            />
            
            <ProjectCard
              title="Weather App"
              description="A weather application that fetches real-time data from a weather API."
              imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500"
              tags={["JavaScript", "Weather API", "CSS"]}
              demoUrl="https://demo.johndoe.dev/weather"
              githubUrl="https://github.com/johndoe/weather-app"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button to="/projects" className="group">
              <span>View All Projects</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">
            I'm currently available for freelance work and exciting opportunities.
            If you have a project that needs some creative attention, let's connect!
          </p>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Get In Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
