export const caseData = {
  "saas-analytics-platform": {
    title: "SaaS Analytics Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    sections: [
      {
        title: "Executive Summary",
        content: `
The SaaS Analytics Platform was engineered to transform fragmented business intelligence systems into a unified, real-time analytics ecosystem.

The organization previously relied on manual exports, static dashboards, and disconnected data silos. This limited forecasting accuracy and slowed executive decision-making.

Our objective was to design a scalable cloud-native solution capable of supporting 100,000+ concurrent users with sub-second performance, while ensuring security, reliability, and predictive analytics capability.

Within 12 months of deployment, the platform achieved 99.98% uptime, processed 2.5 million API requests daily, and reduced reporting time by 74%.
        `,
      },
      {
        title: "Business Context",
        content: `
The company operates across finance, healthcare, and digital commerce sectors. Annual data growth exceeded 300%, while legacy infrastructure struggled to scale.

Key requirements included:

• Real-time KPI dashboards  
• Multi-tenant support  
• Enterprise-grade security  
• Predictive forecasting  
• Global availability  

Without modernization, operational bottlenecks would have significantly reduced competitive advantage.
        `,
      },
      {
        title: "Technical Architecture",
        content: `
We implemented a cloud-native MERN stack architecture:

Frontend: React with dynamic dashboards  
Backend: Node.js microservices  
Database: MongoDB sharded cluster  
Caching: Redis distributed cache  
Infrastructure: AWS auto-scaling & load balancing  

This architecture enabled horizontal scalability and high fault tolerance.
        `,
      },
      {
        title: "Performance Engineering",
        content: `
Performance optimization strategies included:

• Query indexing & aggregation tuning  
• Redis caching reducing DB load by 65%  
• Lazy-loaded dashboard modules  
• Auto-scaling containers  
• API compression  

Average dashboard load improved from 3.8s to 640ms.
        `,
      },
      {
        title: "Security & Compliance",
        content: `
Security was implemented at every layer:

• JWT authentication  
• Role-based access control  
• AES-256 encryption at rest  
• TLS 1.3 in transit  
• SOC 2 aligned logging  

Zero security breaches since launch.
        `,
      },
      {
        title: "Business Impact",
        content: `
• 74% reduction in reporting time  
• 52% improved forecasting accuracy  
• 180% ARR growth  
• 38% faster executive decisions  

The platform became the company's primary competitive differentiator.
        `,
      },
      {
        title: "ROI Analysis",
        content: `
Total Investment: $420,000  
Annual Infra Cost: $96,000  

Year 1 Revenue: $1.4M  
Year 2 Revenue: $3.8M  

ROI achieved within 14 months.
        `,
      },
    ],

    metrics: [
      { label: "Concurrent Users", value: "100,000+" },
      { label: "API Requests / Day", value: "2.5M+" },
      { label: "Uptime", value: "99.98%" },
      { label: "Reporting Speed Increase", value: "74%" },
      { label: "Forecast Accuracy Boost", value: "52%" },
      { label: "ARR Growth", value: "180%" },
    ],
  },
};
