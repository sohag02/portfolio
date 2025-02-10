"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const techStack = {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express", "Python", "Django"],
    database: ["PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "AWS", "CI/CD"],
  };

  return (
    <TooltipProvider>
      <main className="min-h-screen max-w-2xl mx-auto text-white p-8 font-mono">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h1 className="text-2xl font-bold mb-2">I&apos;m Sohag Jabed</h1>
              <div className="flex space-x-4">
                <Link
                  href={socials.github}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href={`mailto:${socials.email}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socials.email}
                  {/* <Mail size={24} /> */}
                </Link>
              </div>
            </div>
            <h2 className="text-xl text-gray-400 mb-4 sm:mb-0">
              Full Stack Software Engineer
            </h2>
            <Link
              href={socials.telegram}
              className="inline-block my-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm"
            >
              Contact On Telegram
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-gray-300">
            I&apos;m a passionate Full Stack Software Engineer with expertise in
            building scalable web applications. My approach combines clean code
            practices with innovative problem-solving to deliver exceptional
            digital experiences.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="flex items-center"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <div className="flex items-center">
                    <h4 className="text-lg font-medium border-b border-dashed border-gray-500 inline-block">
                      {project.name}
                    </h4>
                    {project.active && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-2 h-2 bg-green-500/70 rounded-full ml-2 animate-pulse" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Currently working on this</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                  <motion.p
                    className="text-sm text-gray-400 mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      height: hoveredProject === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.a>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category}>
                <h4 className="text-lg font-medium mb-2 capitalize">
                  {category}
                </h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </TooltipProvider>
  );
}
