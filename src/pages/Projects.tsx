
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with cart, checkout, and payment integration.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500",
      tags: ["React", "Node.js", "Stripe"],
      category: "web",
      demoUrl: "https://demo.johndoe.dev/ecommerce",
      githubUrl: "https://github.com/johndoe/ecommerce"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations and responsive design.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500",
      tags: ["React", "Tailwind CSS", "GSAP"],
      category: "web",
      demoUrl: "https://demo.johndoe.dev/portfolio",
      githubUrl: "https://github.com/johndoe/portfolio"
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather application that fetches real-time data from a weather API.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500",
      tags: ["JavaScript", "Weather API", "CSS"],
      category: "web",
      demoUrl: "https://demo.johndoe.dev/weather",
      githubUrl: "https://github.com/johndoe/weather-app"
    },
    {
      id: 4,
      title: "Task Manager",
      description: "A task management application with drag-and-drop functionality.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500",
      tags: ["React", "Redux", "Firebase"],
      category: "app",
      demoUrl: "https://demo.johndoe.dev/taskmanager",
      githubUrl: "https://github.com/johndoe/task-manager"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "A responsive website for a restaurant with online ordering functionality.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web",
      demoUrl: "https://demo.johndoe.dev/restaurant",
      githubUrl: "https://github.com/johndoe/restaurant-website"
    },
    {
      id: 6,
      title: "Budget Tracker",
      description: "A mobile-first web application for tracking personal finances.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=500",
      tags: ["React", "Chart.js", "LocalStorage"],
      category: "app",
      demoUrl: "https://demo.johndoe.dev/budget",
      githubUrl: "https://github.com/johndoe/budget-tracker"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Projects"
            subtitle="Browse through my recent work and personal projects."
            centered
          />
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted p-1 rounded-md">
              <Button 
                variant={filter === 'all' ? 'default' : 'ghost'} 
                onClick={() => setFilter('all')}
                className="rounded-md"
              >
                All
              </Button>
              <Button 
                variant={filter === 'web' ? 'default' : 'ghost'} 
                onClick={() => setFilter('web')}
                className="rounded-md"
              >
                Web
              </Button>
              <Button 
                variant={filter === 'app' ? 'default' : 'ghost'} 
                onClick={() => setFilter('app')}
                className="rounded-md"
              >
                Apps
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
