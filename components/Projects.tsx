"use client";
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link, Github } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'ClickUpload',
    year: '2021',
    description: 'ClickUpload enables Shopify store owners to let customers upload files to their orders. The Shopify App supports all file types and sizes. All files are linked to the order and ca...',
    image: '/cardimg3.jpg',
    gradient: 'from-[#6B0F1A] to-[#B91372]',
    shadow: 'shadow-[#B91372]/50',
    technologies: ['TypeScript', 'Vercel', 'Next.js', 'React.js'],
    category: 'Shopify Apps',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: 'https://clickupload.example.com',
  },
  {
    id: 2,
    title: 'Kids Living',
    year: '2017',
    description: 'Large scale Ecommerce website for a South African based client with 3 brick & mortar locations and over 3000 products.',
    image: '/cardimg7.jpg',
    gradient: 'from-[#0E7490] to-[#065F46]',
    shadow: 'shadow-[#0E7490]/50',
    technologies: ['Shopify', 'TypeScript', 'Sass', 'Vend POS'],
    category: 'Ecommerce Sites',
    githubUrl: '',
    websiteUrl: 'https://kidsliving.example.com',
  },
  {
    id: 3,
    title: 'Lunalemon',
    year: '2022',
    description: 'Headless Web agency website and Shopify theme editor as a custom app. This project showcases my client work and promotes web development services.',
    image: '/cardimg4.jpg',
    gradient: 'from-[#065F46] to-[#1F2937]', // Deep green to dark charcoal
    shadow: 'shadow-[#065F46]/50',
    technologies: ['Shopify', 'TypeScript'],
    category: 'Marketing Sites',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: 'https://clickupload.example.com',
  },
  {
    id: 4,
    title: 'Listing Webapp',
    year: '2024',
    description: 'Headless Web agency website and Shopify theme editor as a custom app. This project showcases my client work and promotes web development services.',
    image: '/cardimg6.jpg',
    gradient: 'from-[#4C1D95] to-[#9F1239]', // Deep purple to dark red
    shadow: 'shadow-[#4C1D95]/50',
    technologies: ['Shopify', 'TypeScript'],
    category: 'Marketing Sites',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: '',
  },
  {
    id: 5,
    title: 'Custom Plugin',
    year: '2024',
    description: 'Headless Web agency website and Shopify theme editor as a custom app. This project showcases my client work and promotes web development services.',
    image: '/cardimg2.jpg',
    gradient: 'from-[#7C3AED] to-[#4C1D95]', // Deep violet to dark purple
    shadow: 'shadow-[#7C3AED]/50',
    technologies: ['Shopify', 'TypeScript'],
    category: 'Marketing Sites',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: 'https://clickupload.example.com',
  },
  {
    id: 6,
    title: 'Apex Ecoms',
    year: '2023',
    description: 'Headless Web agency website and Shopify theme editor as a custom app. This project showcases my client work and promotes web development services.',
    image: '/cardimg1.jpg',
    gradient: 'from-[#2563EB] to-[#1E40AF]', // Deep blue to dark navy
    shadow: 'shadow-[#2563EB]/50',
    technologies: ['Shopify', 'TypeScript'],
    category: 'Marketing Sites',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: 'https://clickupload.example.com',
  },
  {
    id: 7,
    title: 'Wovex AI',
    year: '2025',
    description: 'Headless Web agency website and Shopify theme editor as a custom app. This project showcases my client work and promotes web development services.',
    image: '/cardimg5.jpg',
    gradient: 'from-[#8B5CF6] to-[#4338CA]', // Deep violet to dark indigo
    shadow: 'shadow-[#8B5CF6]/50',
    technologies: ['Shopify', 'TypeScript'],
    category: 'Devtools',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: '',
  },
  {
    id: 8,
    title: 'Wovex AI',
    year: '2025',
    description: 'Headless Web agency website and Shopify theme editor as a custom app. This project showcases my client work and promotes web development services.',
    image: '/cardimg8.jpg',
    gradient: 'from-[#065F46] to-[#064E3B]', // Deep green to darker green
    shadow: 'shadow-[#065F46]/50',
    technologies: ['Shopify', 'TypeScript'],
    category: 'Integrations',
    githubUrl: 'https://github.com/example/clickupload',
    websiteUrl: 'https://clickupload.example.com',
  },
];

// Projects data


const categories = ["All Projects", "Shopify Apps", "Marketing Sites", "Ecommerce Sites", "Integrations", "Devtools"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = useMemo(() => {
    const startIndex = currentPage * projectsPerPage;
    return filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  }, [currentPage, filteredProjects]);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Animation for the floating effect
  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20, duration: 1.8 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.9 } },
    hover: { y: -10, transition: { duration: 0.5, yoyo: Infinity } }, // Floating effect
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-[#0A0F23] text-white p-6">
      <h2 className="text-blue-400 mb-2">Portfolio</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Checkout my work.</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category ? "bg-[#053B48] text-white" : "bg-gray-800 text-gray-400 hover:bg-[#053B48] hover:text-white"
            }`}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            className={`relative overflow-hidden rounded-lg p-5 bg-gradient-to-br ${project.gradient} border border-gray-700 shadow-lg ${project.shadow} hover:shadow-2xl`}
            style={{ width: "100%", minHeight: "350px" }} // Making the cards more square-like
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover" // Adding floating effect on hover
          >
            <div className="relative z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" // Add zoom-in effect
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-black bg-opacity-30 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-75">{project.year}</span>
                <div className="flex gap-2">
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <Link className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-between items-center mt-8">
  <div className="group">
    <button
      className={`relative flex items-center px-4 py-2 rounded-md text-gray-400 transition-colors duration-300 ${
        currentPage > 0
          ? 'hover:text-cyan-500'
          : 'cursor-not-allowed opacity-50'
      }`}
      onClick={handlePrev}
      disabled={currentPage <= 0}
    >
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
      <ChevronLeft className="w-5 h-5 mr-1" /> Previous
    </button>
  </div>

  <div className="group">
    <button
      className={`relative flex items-center px-4 py-2 rounded-md text-gray-400 transition-colors duration-300 ${
        currentPage < totalPages - 1
          ? 'hover:text-cyan-500'
          : 'cursor-not-allowed opacity-50'
      }`}
      onClick={handleNext}
      disabled={currentPage >= totalPages - 1}
    >
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
      Next <ChevronRight className="w-3 h-3 ml-1" />
    </button>
  </div>
</div>

    </div>
  );
}