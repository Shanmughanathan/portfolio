// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — derived entirely from the résumé.
// Edit values here; every section reads from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Shanmughanathan M",
  role: "Backend Software Development Engineer",
  location: "Kochi, India",
  email: "shanmughanathan7708@gmail.com",
  phone: "+91 63839 65073",
  phoneHref: "+916383965073",
  github: "https://github.com/Shanmughanathan",
  linkedin: "https://www.linkedin.com/in/", // TODO: replace with full LinkedIn URL
  resume: "/resume.pdf", // place your PDF in /public
  available: false,
  headline: {
    pre: "I build the",
    accent: "reliable backend",
    post: "that enterprises run on.",
  },
  pitch:
    "5.5 years engineering Java & Spring Boot systems that move real transactions — from airline PNR order engines to healthcare coding pipelines — and shipping them safely to production.",
};

export const stats = [
  { num: "5.5", unit: "yr", label: "Backend engineering" },
  { num: "3", unit: "", label: "Enterprise employers" },
  { num: "2", unit: "", label: "Regulated domains" },
  { num: "AWS", unit: "", label: "Certified practitioner" },
  { num: "SOAP", unit: "→REST", label: "Cloud migration led" },
];

export const about = [
  "I'm a software development engineer who's spent 5.5 years in the layer most users never see — the services, APIs and data flows that keep enterprise products dependable at scale.",
  "My core is Java, Spring and Spring Boot: designing RESTful APIs, wiring up microservices, and modelling data across MySQL, Oracle and SQL Server with Hibernate. I've built ticketing engines for an airline and automated medical-coding pipelines for healthcare — domains where correctness isn't optional.",
  "What I care about most is the part after the code compiles: JUnit coverage, RFC releases, load testing, OpenShift deployments, and reading Sumo Logic to reproduce and kill production issues. I don't consider a change done until it's been watched in production.",
];

export const profileCard = [
  { k: "role", v: "SDE — Backend" },
  { k: "experience", v: "5.5 years" },
  { k: "focus", v: "Java · Spring Boot" },
  { k: "certified", v: "AWS Cloud Practitioner" },
  { k: "location", v: "Kochi, India" },
  { k: "status", v: "Not seeking", highlight: true },
];

export const skills = [
  { title: "Languages & Frameworks", icon: "Code2", tags: ["Core Java", "Spring", "Spring Boot", "REST APIs", "Microservices"] },
  { title: "Data & Persistence", icon: "Database", tags: ["MySQL", "Oracle", "SQL Server", "Hibernate", "JPA"] },
  { title: "Cloud & DevOps", icon: "Cloud", tags: ["AWS", "RedHat OpenShift", "Git", "Maven"] },
  { title: "Testing & Quality", icon: "CheckCheck", tags: ["JUnit", "Load testing", "Refactoring", "Code standards"] },
  { title: "Observability & Ops", icon: "Activity", tags: ["Sumo Logic", "Prod monitoring", "RFC releases", "Incident triage"] },
  { title: "Ways of Working", icon: "Users", tags: ["Agile / Sprints", "Cross-team SPOC", "Process improvement", "Release ownership"] },
];

export const experience = [
  {
    when: "Sep 2025 — Present",
    now: true,
    role: "Associate",
    company: "Cognizant Technology Solutions",
    loc: "Kochi",
    points: [
      "Continuing backend engineering on enterprise Java & Spring Boot services.",
      "Bringing production-release and observability discipline to a new team.",
    ],
  },
  {
    when: "Mar 2023 — Aug 2025",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    loc: "Chennai",
    points: [
      "Delivered features & defect fixes across microservices with full JUnit coverage.",
      "Led migration of legacy SOAP integrations to AWS REST services.",
      "Owned RFC releases, load testing and post-deploy production monitoring.",
      "Served as Process Improvement SPOC, driving cost & efficiency initiatives.",
    ],
  },
  {
    when: "Feb 2021 — Feb 2023",
    role: "Software Development Engineer",
    company: "Claritrics India Pvt. Ltd.",
    loc: "Chennai",
    points: [
      "Built and refined RESTful backend services in Java & Spring Boot.",
      "Debugged, optimised and refactored code for performance and reliability.",
    ],
  },
  {
    when: "Nov 2020 — Feb 2021",
    role: "Software Engineering Intern",
    company: "Claritrics India Pvt. Ltd.",
    loc: "Chennai",
    points: ["Onboarded into backend development; foundation in Java, Spring & databases."],
  },
];

export const projects = [
  {
  badge: "Healthcare",
  title: "Excellus BCBS / CDPHP — Member Portal",
  sub: "Registration, Login & Account Management",
  problem:
    "Streamlining secure member onboarding and access to insurance services.",
  solution:
    "Built Spring Boot microservices and REST APIs for member registration, authentication, and account management.",
  responsibilities: [
    "Developed registration and login APIs.",
    "Implemented onboarding workflows.",
    "Managed database integration using Hibernate.",
    "Created unit tests and supported Agile delivery."
  ],
  impact: [
    "Enhanced user onboarding experience.",
    "Improved platform reliability and security."
  ],
  stack: ["Java", "Spring Boot", "REST API", "Hibernate", "Microservices"],
  },
  {
    badge: "Airline",
    title: "Delta Airlines — Flight-Order Engine",
    sub: "PNR generation & lifecycle management",
    problem:
      "Passenger booking requests carrying traveller and payment details had to be processed reliably into confirmed tickets — then remain fully manageable afterwards.",
    solution:
      "A Spring Boot order engine that processes each request, generates the Passenger Name Record (PNR) on success, and exposes clean REST operations to update, cancel and retrieve bookings.",
    responsibilities: [
      "Designed REST endpoints for the full PNR lifecycle.",
      "Modelled booking data with Hibernate over the relational store.",
      "Wrote JUnit cases covering edge-case booking scenarios.",
    ],
    impact: [
      "Seamless ticket creation and post-booking management.",
      "A smoother, more dependable experience for travellers.",
    ],
    stack: ["Java", "Spring Boot", "REST API", "Hibernate", "Microservices"],
  },
  {
    badge: "Healthcare",
    title: "Change Healthcare — Medical Coding Automation",
    sub: "CPT / ICD / PQRS code generation pipeline",
    problem:
      "Medical coding for Radiology and Pathology records was manual, slow and error-prone — a bottleneck for accurate medical billing.",
    solution:
      "A service that parses incoming medical charts, tags data by requirement, routes each record to the right modality-specific coding engine, and emits CPT, ICD and PQRS codes automatically.",
    responsibilities: [
      "Built chart-parsing and tagging logic across modalities.",
      "Integrated specialised coding engines via microservices.",
      "Ensured accuracy through test coverage and validation.",
    ],
    impact: [
      "Cut manual intervention in the coding workflow.",
      "Improved billing accuracy and processing efficiency.",
    ],
    stack: ["Java", "Spring Boot", "Microservices", "REST API", "MySQL"],
  },
  {
    badge: "Cloud Migration",
    title: "SOAP → AWS REST Modernisation",
    sub: "Legacy SOA to cloud-native services",
    problem:
      "An estate of legacy SOA / SOAP integrations needed to move onto the cloud without disrupting live traffic or downstream consumers.",
    solution:
      "Took primary ownership of migrating SOAP calls to AWS REST services, keeping integration seamless and performance intact throughout the transition.",
    responsibilities: [
      "Re-designed SOAP contracts as REST endpoints.",
      "Validated parity with load testing and RFC releases.",
      "Monitored production post-cutover via Sumo Logic.",
    ],
    impact: [
      "Modern, cloud-native integration surface.",
      "Maintained performance and reliability on AWS.",
    ],
    stack: ["AWS", "REST API", "Java", "Load testing", "Sumo Logic"],
  },
];

export const credentials = [
  {
    tone: "amber",
    icon: "Award",
    title: "AWS Certified Cloud Practitioner",
    meta: "Amazon Web Services · Foundational",
    body: "Validated foundational knowledge of AWS cloud services — the groundwork behind the SOAP-to-REST cloud migration I helped lead.",
  },
  {
    tone: "teal",
    icon: "GraduationCap",
    title: "B.Tech — Information Technology",
    meta: "Kalasalingam Academy of Research & Education · 2016–2020",
    body: "Undergraduate engineering foundation in software, systems and information technology, Virudhunagar.",
  },
];

export const nav = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "credentials", label: "credentials" },
];
