import React from 'react'
import ProjectCard from "./ProjectCard.jsx"

function Projects() {
  const projects = [
    {
      title: "Project Camp",
      description: "A full-stack project management application with user authentication and role-based access. It allows teams to create and manage projects, tasks, subtasks, and notes while supporting different roles and permissions for team collaboration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      images: ["/images/projectcamp1.png", "/images/projectcamp2.png", "/images/projectcamp3.png"],
      github: "https://github.com/Misbah29-Sheikh/project_management",
      liveDemo: "https://project-management-frontend-black-five.vercel.app/",
    },
    {
      title: "Hotel Management System",
      description: "A full-stack hotel management website with room management, online bookings, user accounts, and admin controls. It also includes online payment integration and database-driven management of hotel and booking information.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      images: ["/images/hotelapp1.png","/images/hotelapp2.png", "/images/hotelapp3.png"],
      github: "https://github.com/Misbah29-Sheikh/Hotel_management"
    },
    {
      title: "Marvel Character Quiz",
      description: "A full-stack Marvel character guessing quiz where players identify characters from blurred images across 20 timed questions. The app randomly selects characters and answer options, tracks scores, and stores the leaderboard using a Node.js/Express backend and MongoDB.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Superhero API"],
      images: ["/images/quiz1.png","/images/quiz2.png","/images/quiz3.png"],
      github: "https://github.com/Misbah29-Sheikh/marvel_quiz",
      liveDemo: "https://marvel-quiz-git-main-misbah22.vercel.app/"
    },
    {
      title: "Weather App",
      description: "A React-based weather application that fetches real-time weather data from an external API. Users can search for locations and view current weather information through a responsive and interactive interface.",
      technologies: ["React.js", "JavaScript", "Weather API"],
      images: ["/images/weather1.png","/images/weather2.png"],
      github: "https://github.com/Misbah29-Sheikh/react-mini-projects/tree/main/06weatherApi",
      liveDemo: "https://weather-jzwdgf0dr-misbah22.vercel.app/"
    },
      {
      title: "E-commerce",
      description: "A React-based e-commerce interface with product browsing, product details, and cart functionality. The application focuses on creating a responsive and interactive shopping experience using reusable React components.", 
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      images: ["/images/ecommerce1.png","/images/ecommerce2.png"],
      github: "https://github.com/Misbah29-Sheikh/react-mini-projects/tree/main/09ecommerce"
    }
  ]

  return (
     <section id="projects" className="px-6 pt-6 pb-6 md:pt-8 md:pb-8">
      
      <h2 className="text-2xl font-bold md:text-3xl">
        Projects
      </h2>

      <div className="mt-8 space-y-6">
        {
          projects.map((project) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              images={project.images}
              github={project.github}
              liveDemo={project.liveDemo}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects