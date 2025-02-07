import { ProjectListType } from "@/app/component/ProjectList"

const baseUrl = "/images/portofolio"
export const projects: ProjectListType[] = [
  {
    id: 1,
    title: "Portofolio Website",
    description: "",
    shortDescription: "",
    url: "ifauzi.space",
    tech: ["Next.js", "TailwindCSS", "Typescript", "Framer Motion", "Zustand"],
    image: [
      { id: 1, image: `${baseUrl}/porto-1.png`, alt: "Portofolio Website" },
      { id: 2, image: `${baseUrl}/porto-2.png`, alt: "Portofolio Website" },
      { id: 3, image: `${baseUrl}/porto-3.png`, alt: "Portofolio Website" },
    ],
  },
  {
    id: 2,
    title: "Customer Dashboard Invie",
    description: "",
    shortDescription: "",
    url: null,
    tech: ["Next.js", "TailwindCSS", "Typescript", "Framer Motion", "Zustand"],
    image: [
      {
        id: 1,
        image: `${baseUrl}/invie-1.png`,
        alt: "Customer Dashboard Invie",
      },
      {
        id: 2,
        image: `${baseUrl}/invie-2.png`,
        alt: "Customer Dashboard Invie",
      },
      {
        id: 3,
        image: `${baseUrl}/invie-3.png`,
        alt: "Customer Dashboard Invie",
      },
      {
        id: 4,
        image: `${baseUrl}/invie-4.png`,
        alt: "Customer Dashboard Invie",
      },
    ],
  },
  {
    id: 3,
    title: "PPOB (Payment Point Online Bank)",
    description:
      "<p>In this project, I developed the <strong>Superadmin dashboard</strong> for a PPOB application using <strong>ReactJS</strong> with Redux Toolkit, integrating <strong>RTK Query</strong> for efficient data fetching. Token storage is managed using <strong>redux-persist</strong>, with additional security through <strong>256-AES encryption</strong>.<p>The application features three main roles:<ul><li><strong>Company</strong><li><strong>Aggregator</strong><li><strong>Merchant</strong></ul><p>Each main role can have <strong>flexible sub-roles</strong> that can be created as needed, complete with an <strong>assign permission</strong> feature to manage access for each sub-role.<p>This dashboard is designed to provide <strong>full control</strong> over user management, ensuring <strong>security</strong> and <strong>flexibility</strong> at every access level.",
    shortDescription: "Superadmin dashboard with role-based access",
    url: null,
    tech: ["React", "Typescript", "TailwindCSS"],
    image: [
      {
        id: 1,
        image: `${baseUrl}/lumoshive/ppob-1.png`,
        alt: "PPOB (Payment Point Online Bank)",
      },
      {
        id: 2,
        image: `${baseUrl}/lumoshive/ppob-2.png`,
        alt: "PPOB (Payment Point Online Bank)",
      },
      {
        id: 3,
        image: `${baseUrl}/lumoshive/ppob-3.png`,
        alt: "PPOB (Payment Point Online Bank)",
      },
    ],
  },
  {
    id: 4,
    title: "Sales Track Pro (Feature kanban)",
    description:
      "<p>In this project, I worked as a <strong>Frontend Developer</strong> responsible for building a new <strong>Kanban feature</strong> using Laravel, Blade, and jQuery. I developed a dynamic and interactive interface using vanilla JavaScript and leveraged the <strong>jKanban</strong> library to enhance user experience.<p>By utilizing <strong>full DOM manipulation</strong> and jQuery integration, I ensured seamless real-time interactions without requiring page reloads. The key features include:<ul><li>Dynamically adding new tasks.<li>Drag-and-drop task movement between columns.<li>Instantly deleting tasks without refreshing the page.</ul><p>Additionally, I optimized the interface for <strong>responsiveness</strong>, ensuring a smooth user experience across different devices and screen resolutions. This combination of technologies resulted in a <strong>modern, flexible, and efficient</strong> task management system.",
    shortDescription: "Interactive Kanban board with Laravel & jQuery",
    url: null,
    tech: ["Laravel", "Bootstrap"],
    image: [
      {
        id: 1,
        image: `${baseUrl}/lumoshive/stp-1.png`,
        alt: "Sales Track Pro (Feature kanban)",
      },
      {
        id: 2,
        image: `${baseUrl}/lumoshive/stp-2.png`,
        alt: "Sales Track Pro (Feature kanban)",
      },
      {
        id: 3,
        image: `${baseUrl}/lumoshive/stp-3.png`,
        alt: "Sales Track Pro (Feature kanban)",
      },
    ],
  },
  {
    id: 5,
    title: "Internal Website",
    description:
      '<p>In this project, I was responsible for building the <strong>main landing page</strong> for the Lumoshive website at <a href="https://lumoshive.com" target="_blank">lumoshive.com</a>, themed around a <strong>hive/beehive</strong> concept. Using <strong>Laravel 8</strong>, I focused solely on developing an engaging and interactive <strong>UI/Frontend</strong> without a backend.<p>The page design was inspired by a <strong>honeycomb structure</strong>, incorporating visual elements that reflect <strong>order and collaboration</strong>. Key aspects of this project include:<ul><li>A visually appealing and structured layout.<li>Interactive elements enhancing user engagement.<li>Fully responsive design for optimal user experience.</ul><p>This project highlights my expertise in <strong>frontend development with Laravel</strong>, showcasing my ability to create a <strong>clean, user-friendly, and modern</strong> web experience.',
    shortDescription: "Hive-themed landing page with Laravel 8",
    url: "www.lumoshive.com",
    tech: ["React", "Typescript", "TailwindCSS"],
    image: [
      {
        id: 1,
        image: `${baseUrl}/lumoshive/internal-1.png`,
        alt: "Internal Website",
      },
      {
        id: 2,
        image: `${baseUrl}/lumoshive/internal-2.png`,
        alt: "Internal Website",
      },
      {
        id: 3,
        image: `${baseUrl}/lumoshive/internal-3.png`,
        alt: "Internal Website",
      },
      {
        id: 4,
        image: `${baseUrl}/lumoshive/internal-4.png`,
        alt: "Internal Website",
      },
    ],
  },
  {
    id: 6,
    title:
      "Orderfaz Merchant Dashboard (Feature Landing Page Builder & Funnel Builder)",
    description:
      "<p>In this project, I collaborated with <strong>Orderfaz</strong> to develop an intuitive <strong>Landing Page Builder</strong>, similar to Berdu or Elementor in WordPress, using <strong>NuxtJS</strong>. This feature allows users to easily create landing pages with <strong>drag-and-drop functionality</strong> powered by <strong>vue-draggable</strong> and styled with <strong>TailwindCSS</strong>.<p>Key technologies and features include:<ul><li><strong>Pinia</strong> for efficient state management.<li><strong>vue3-colorpicker</strong> for flexible color customization.<li>A fully <strong>responsive</strong> and user-friendly interface.<li><strong>Optimized loading speed (&lt;3s)</strong> for better performance.</ul><p>Additionally, this project involved developing a <strong>Funnel Builder</strong> to monitor data from created landing pages. Built with <strong>VueJS</strong> and <strong>Pinia</strong>, it provides clear <strong>visualization and funnel analysis</strong> for users.<p>Key Funnel Builder features:<ul><li><strong>Real-time tracking</strong> of landing page performance.<li><strong>TailwindCSS</strong> for a modern and responsive UI.<li>Intuitive navigation for seamless user experience.</ul><p>These tools empower users to create and analyze their landing pages effectively, ensuring a <strong>smooth, fast, and insightful</strong> experience.",
    shortDescription: "Landing Page & Funnel Builder with NuxtJS & VueJS",
    url: null,
    tech: ["Vue.js", "Nuxt.js", "Pinia"],
    image: [
      {
        id: 1,
        image: `${baseUrl}/orderfaz/of-1.png`,
        alt: "Orderfaz Merchant Dashboard (Feature Landing Page Builder & Funnel Builder)",
      },
      {
        id: 2,
        image: `${baseUrl}/orderfaz/of-2.png`,
        alt: "Orderfaz Merchant Dashboard (Feature Landing Page Builder & Funnel Builder)",
      },
      {
        id: 3,
        image: `${baseUrl}/orderfaz/of-3.png`,
        alt: "Orderfaz Merchant Dashboard (Feature Landing Page Builder & Funnel Builder)",
      },
      {
        id: 4,
        image: `${baseUrl}/orderfaz/of-4.png`,
        alt: "Orderfaz Merchant Dashboard (Feature Landing Page Builder & Funnel Builder)",
      },
    ],
  },
  {
    id: 7,
    title: "OjekBro Admin",
    description:
      "<p>In the <strong>OjekBro Web Admin</strong> project, I was responsible for developing the <strong>admin application</strong> to manage all data, including <strong>drivers, customers, and merchants</strong>. The web admin was built using <strong>ReactJS</strong> with <strong>react-context</strong> for efficient and structured state management.<p>Key technologies and features include:<ul><li><strong>React-context</strong> for scalable state management.<li><strong>ChakraUI</strong> as a design system for a responsive and modern UI.<li><strong>React-query</strong> for optimized data fetching.<li><strong>React-hook-form</strong> for efficient form handling.</ul><p>With these tools, the OjekBro admin dashboard ensures <strong>high performance</strong> and an <strong>intuitive user experience</strong> for seamless data management.",
    shortDescription: "Admin dashboard for OjekBro with ReactJS",
    url: null,
    tech: ["React", "Typescript", "TailwindCSS"],
    image: [
      { id: 1, image: `${baseUrl}/ob-1.png`, alt: "OjekBro Admin" },
      { id: 2, image: `${baseUrl}/ob-2.png`, alt: "OjekBro Admin" },
      { id: 3, image: `${baseUrl}/ob-3.png`, alt: "OjekBro Admin" },
      { id: 4, image: `${baseUrl}/ob-4.png`, alt: "OjekBro Admin" },
    ],
  },
]
