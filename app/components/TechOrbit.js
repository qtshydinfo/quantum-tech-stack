"use client";

import { useMemo } from "react";

export default function TechScroller() {
  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
  ];

  // Stable duplication (prevents hydration mismatch)
  const duplicatedTech = useMemo(() => {
    return [...technologies, ...technologies];
  }, []);

  return (
    <section className="relative -mt-10 pt-14 pb-20 md:-mt-16 md:pt-20 md:pb-24 overflow-hidden text-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-6 md:mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Technologies We Use
        </h2>
        <p className="text-gray-300 text-sm md:text-lg mt-2">
          Modern tools powering scalable applications.
        </p>
      </div>

      {/* Scrolling Area */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-6 md:gap-12 w-max">
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-4 md:px-8 md:py-5 rounded-2xl md:rounded-3xl border border-white/20 min-w-[160px] md:min-w-[220px] justify-center hover:bg-white/20 transition duration-300"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
              <span className="text-sm md:text-lg font-semibold">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
