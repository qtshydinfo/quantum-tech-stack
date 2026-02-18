"use client";

import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-32">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <section className="space-y-8 text-gray-300 leading-relaxed">

          <p>
            This project was designed and developed as a high-performance
            digital solution tailored to enterprise standards. The system
            architecture focuses on scalability, security, and seamless
            user experience.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            Project Overview
          </h2>

          <p>
            The platform integrates modern technologies including MERN stack,
            cloud infrastructure, and advanced optimization strategies to
            deliver superior performance under heavy traffic conditions.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            Key Features
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Responsive UI/UX with premium interface</li>
            <li>Scalable backend architecture</li>
            <li>Advanced security protocols</li>
            <li>Optimized performance & caching</li>
            <li>Cloud-ready deployment</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">
            Technologies Used
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>React.js / Next.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB / PostgreSQL</li>
            <li>AWS / Vercel Deployment</li>
            <li>CI/CD Automation</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">
            Business Impact
          </h2>

          <p>
            The solution improved operational efficiency, reduced infrastructure
            costs, and enhanced user engagement metrics significantly within
            the first quarter of deployment.
          </p>

        </section>
      </div>
    </div>
  );
}
