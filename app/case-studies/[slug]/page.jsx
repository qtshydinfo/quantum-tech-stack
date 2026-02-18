import CaseStudyDetail from "./CaseStudyDetail";

const caseData = {
  "saas-analytics-platform": {
    title: "SaaS Analytics Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    executiveSummary: `
The SaaS Analytics Platform transformation enabled the client to move from
a legacy reporting system to a high-performance, cloud-native analytics ecosystem.

Within six months, the platform scaled from supporting 15,000 concurrent users
to over 100,000 concurrent users while improving response time by 74%.
Infrastructure cost efficiency improved, uptime reached enterprise-grade levels,
and predictive analytics capabilities unlocked new revenue opportunities.

The initiative directly contributed to 180% ARR growth and positioned the
organization for global expansion.
    `,

    description: `
Enterprise-grade analytics ecosystem delivering real-time dashboards,
predictive modeling, and executive intelligence across global business units.
Our SaaS Analytics Platform is a cloud-based, scalable solution designed to empower businesses with real-time data insights, advanced reporting, and intelligent decision-making capabilities. Built with modern cloud architecture, the platform centralizes business data, transforms raw information into actionable intelligence, and enables organizations to optimize performance across departments.

The platform integrates seamlessly with multiple data sources including CRM systems, marketing tools, financial software, and operational databases. Through automated data pipelines and AI-powered analytics, users gain access to customizable dashboards, predictive insights, and performance tracking in a single unified interface.
`,

    challenge: `
The legacy architecture failed under load beyond 15,000 concurrent sessions.
Performance degradation, database bottlenecks, and delayed reporting
restricted business growth and operational efficiency.Our vision is to become a leading analytics solution for modern digital enterprises by combining performance, scalability, and intelligent automation in one powerful platform.
    
    `,

    solution: `
Re-architected the platform using a scalable MERN stack with Redis caching,
microservices isolation, and AWS auto-scaling infrastructure.Our solution addresses key business challenges such as fragmented data systems, delayed reporting, and limited visibility into performance metrics. By delivering real-time analytics and automated reporting, organizations can reduce operational inefficiencies, improve forecasting accuracy, and accelerate strategic decisions.

The platform follows a subscription-based SaaS model with flexible pricing tiers designed for startups, mid-sized enterprises, and large corporations. With enterprise-grade security, role-based access control, and cloud scalability, the system ensures both data protection and high availability.
Key Benefits:

1.Real-time business intelligence dashboards
2.Predictive analytics and trend forecasting
3.Automated reporting and KPI tracking
4.Secure, scalable cloud infrastructure
5.Seamless third-party integrations
6.Subscription-based recurring revenue model
    `,

    strategy: `
We conducted stakeholder interviews, data audits, and KPI benchmarking.
A phased modernization roadmap aligned technical execution with revenue growth
and operational efficiency goals.
    `,

    architecture: `
Distributed cloud-native architecture including:

• React dynamic frontend
• Node.js microservices
• MongoDB sharded clusters
• Redis distributed caching
• AWS ECS container orchestration
• CloudFront CDN
• Application Load Balancer
    `,

    implementation: `
Delivered via agile sprints with CI/CD automation, Docker containerization,
blue-green deployments, and infrastructure as code practices.
    `,

    performance: `
Performance improvements:

• Dashboard load time reduced 3.8s → 640ms
• API latency reduced by 52%
• DB load reduced by 65%
• Bundle size reduced by 38%
    `,

    security: `
Security enhancements:

• JWT authentication + RBAC
• AES-256 encryption
• TLS 1.3
• WAF protection
• SOC 2 aligned logging
• GDPR compliance
    `,

    scaling: `
Scalability architecture includes horizontal auto-scaling,
multi-zone deployment, read replicas, and intelligent load balancing.
    `,

    metrics: [
      { label: "Active Users", value: 100000, suffix: "+" },
      { label: "API Requests / Day", value: 2500000, suffix: "+" },
      { label: "Uptime", value: 99.98, suffix: "%" },
      { label: "Dashboard Load Time", value: 640, suffix: "ms" },
      { label: "ARR Growth", value: 180, suffix: "%" },
      { label: "Performance Improvement", value: 74, suffix: "%" },
    ],

    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Redis",
      "Docker",
      "CloudFront",
      "GitHub Actions"
    ],
  },

  "ecommerce-web-app": {
    title: "E-Commerce Web App",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",

    executiveSummary: `
The E-Commerce modernization initiative enabled the client to scale globally,
handle peak seasonal traffic, and dramatically improve checkout conversion.

Within the first quarter post-launch, conversion rates increased to 4.3%,
cart abandonment decreased by 26%, and revenue grew by 180%.
The new architecture supports sustained high-traffic events without downtime.
    `,

    description: `
Scalable global commerce platform built for performance,
secure transactions, and optimized user conversion.
    `,

    challenge: `
Frequent downtime during promotional events and high cart abandonment
limited growth potential and customer trust.
    `,

    solution: `
Implemented Next.js SSR frontend, Stripe integration,
microservices backend, and AWS-based scalable infrastructure.
    `,

    strategy: `
Conversion funnel analysis identified checkout friction.
Infrastructure audits guided microservices refactoring and global CDN deployment.
    `,

    architecture: `
Microservices-based commerce architecture:

• Next.js SSR frontend
• Node.js backend APIs
• PostgreSQL database
• Stripe payments
• Docker containers
• AWS ECS
• CloudFront CDN
    `,

    implementation: `
Agile sprint model with CI/CD pipelines,
automated testing, and PCI-compliant payment integration.
    `,

    performance: `
Improvements delivered:

• 35% faster page load
• 42% checkout latency reduction
• 26% cart abandonment reduction
• 600% traffic spike handling
    `,

    security: `
Security & compliance:

• PCI-DSS compliant Stripe
• Encrypted tokens
• Fraud detection
• WAF protection
• Secure DB policies
    `,

    scaling: `
Auto-scaling containers, read replicas,
multi-region deployment, and disaster recovery automation.
    `,

    metrics: [
      { label: "Transactions Processed", value: 500000, suffix: "+" },
      { label: "Conversion Rate", value: 4.3, suffix: "%" },
      { label: "Revenue Growth", value: 180, suffix: "%" },
      { label: "Cart Abandonment Reduction", value: 26, suffix: "%" },
      { label: "Uptime", value: 99.97, suffix: "%" },
      { label: "Traffic Spike Handling", value: 600, suffix: "%" },
    ],

    stack: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Docker",
      "AWS ECS",
      "CloudFront",
      "Node.js"
    ],
  },
};

export default async function Page({ params }) {
  const { slug } = await params;

  const data = caseData[slug];

  if (!data) {
    return <div style={{ padding: "100px" }}>Case study not found</div>;
  }

  return <CaseStudyDetail data={data} />;
}
