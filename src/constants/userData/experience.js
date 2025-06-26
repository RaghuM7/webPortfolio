// WORK EXPERIENCE
// Students can add their college volunteering experiences
export const experiences = [
  {
    id: 1,
    companyLogo: "/logos/companies/cira.jpeg",
    companyName: "Cira Tek Inc",
    designation: "Software Engineer",
    dateFrom: "Sep 2024",
    dateTo: "Present",
    city: "Dallas",
    country: "USA",
    description: [
"Engineered RESTful microservices (Spring Boot + Kafka) to process credit data, leveraging multi-threaded message consumers to reduce trade monitoring latency from 500ms to 300ms.",
"Developed and consumed REST APIs for inter-service communication; currently exploring gRPC-based services to improve latency and cross-language communication between microservices.",
"Refactored real-time data pipelines (MyBatis + Oracle PL/PgSQL), cutting query runtime by 35% and enabling ~20% more transactions/hour in risk analysis.",
"Reduced API response time by 75% by integrating Redis caching and refactoring complex PostgreSQL joins, improving portfolio risk dashboard performance.",
"Led testing initiatives using JUnit and Mockito, resulting in a 30% reduction in post-release by collaborating with product owners and QA teams in agile sprints.",
"Engineered compliance and risk monitoring services that processed real-time credit and trade data, simulating financial exposure evaluation understanding for market-risk engines." 

    ],
  },
  {
    id: 2,
    companyLogo: "/logos/colleges/OSU.png",
    companyName: "Oklahoma State University",
    designation: "Full Stack Developer",
    dateFrom: "Aug 2023",
    dateTo: "May 2024",
    city: "Stillwater",
    country: "USA",
    description: [
      "Engineered an website using Spring Boot and Angular, updating course and class schedule updates and minimizing data processing time by 20%.",
      "Optimized SQL and PL/SQL queries to cut data reload time by 30% and built components for student grade evaluation and report submissions.",
      "Utilized OpenMP and Java Concurrency API for scalable parallel processing, increasing data analysis speed by 70% in high-performance computing environments."
    ],
  },

  {
    id: 3,
    companyLogo: "/logos/companies/tata.png",
    companyName: "Tata Communications",
    designation: "Software Development Engineer",
    dateFrom: "July 2021",
    dateTo: "Aug 2022",
    city: "Chennai",
    country: "India",
    description: [
      "Engineered an automation full-stack application with cross-functional team for Kubernetes cluster using Operator-SDK provisioning 2000+ additional clusters per quarter for 500 enterprises.",
      "Tailored Ansible playbooks and Helm charts, automating the configuration of Virtualization using kubevirt which reduced deployment time by 35%.",
      "Deployed applications on AWS (S3, RDS, Elastic Beanstalk, DynamoDB), ensuring a 99.9% up-time, and automated CI/CD pipelines to expedite development cycles.",
      "Reduced deployment time from 3 hours to 15 minutes by developing and implementing Terraform scripts for Infrastructure as Code, ensuring in a time savings of 85%.",
      "Deployed OpenStack on bare metal servers and troubleshooting containerization microservices within Kubernetes clusters controlling runtime by 30%."
    ],
  },

  {
    id: 4,
    companyLogo: "/logos/companies/cognizant.svg",
    companyName: "Cognizant",
    designation: "Programmer Analyst",
    dateFrom: "Jan 2021",
    dateTo: "June 2021",
    city: "Chennai",
    country: "India",
    description: [
      "Built a Spring Boot web service with real-time map navigation applying Web Socket and REST APIs, driving a 15% rise in user engagement through live tracking.",
      "Designed personalized push notifications via Spring backend services, boosting app usability by 20% through user interactions.",
      "Slashed database call frequency by 40% by optimizing Hibernate queries and integrating Redis caching, improving performance for high-traffic scalability."
    ],
  },

  


];
