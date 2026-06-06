import type { LabModule, Project, ProjectCategory } from "../types/portfolio";
import payrollDashboardImage from "../images/projects/payroll-management-system.png";
import attendanceReviewImage from "../images/projects/attendance-review.png";
import payrollReportImage from "../images/projects/payroll-report.png";

export const projects: Project[] = [
  {
    id: 1,
    slug: "payroll-management-system",
    number: "00",
    title: "Payroll Management System",
    description:
      "A complete payroll platform for employee records, attendance review, payroll processing, approvals, payslip generation, reports, and role-based access.",
    category: "Business Systems",
    projectType: "Business System",
    role: "Full-stack Developer",
    output: "Web App Prototype",
    techStack: ["Laravel", "Vue 3", "MySQL", "Payroll", "PDF / Excel"],
    features: [
      "Employee and non-employee payroll workflow",
      "Attendance cutoff review and approval process",
      "Payslip, PDF, Excel, and payroll reports",
    ],
    screenshots: [
      {
        id: 1,
        title: "Payroll Dashboard",
        image: payrollDashboardImage,
        alt: "Placeholder preview of the payroll management dashboard",
        isFeatured: true,
      },
      {
        id: 2,
        title: "Attendance Review",
        image: attendanceReviewImage,
        alt: "Placeholder preview of the attendance cutoff review screen",
      },
      {
        id: 3,
        title: "Payroll Reports",
        image: payrollReportImage,
        alt: "Placeholder preview of payroll reports and exports",
      },
    ],
    problem:
      "Manual payroll work can be time-consuming, error-prone, and difficult to audit when attendance, employee records, approvals, and payroll reports are handled in separate files.",
    solution:
      "The system centralizes employee data, attendance review, payroll computation, approvals, payslips, and report generation into one structured workflow.",
    coreModules: [
      "Employee and non-employee record management",
      "Attendance cutoff review and correction workflow",
      "Payroll processing with approval stages",
      "Payslip preview, PDF generation, and email support",
      "Reports for payroll, BIR forms, and employee summaries",
    ],
    businessValue: [
      "Reduces manual computation and duplicate encoding",
      "Improves payroll accuracy and accountability",
      "Provides clear reports for management and payroll staff",
      "Supports role-based access for admin, approver, and payroll staff",
    ],
    isFeatured: true,
    mockup: "payroll",
    mockupTitle: "Payroll Dashboard",
  },
  {
    id: 2,
    slug: "offline-pos-inventory",
    number: "01",
    title: "Offline POS and Inventory",
    description:
      "An offline-ready selling and inventory system for small business transactions, item lookup, barcode-assisted workflows, and stock monitoring.",
    category: "Business Systems",
    projectType: "Business System",
    role: "Full-stack Developer",
    output: "Mobile App Prototype",
    techStack: ["Mobile", "SQLite", "Inventory", "POS"],
    features: [
      "Offline sales transaction processing",
      "Inventory monitoring and item lookup",
      "Barcode-assisted workflow for faster selling",
    ],
    screenshots: [
      {
        id: 1,
        title: "POS Selling Screen",
        image: "/images/projects/offline-pos-inventory.svg",
        alt: "Placeholder preview of the offline POS selling screen",
        isFeatured: true,
      },
      {
        id: 2,
        title: "Inventory Monitor",
        image: "/images/projects/offline-pos-inventory.svg",
        alt: "Placeholder preview of inventory monitoring",
      },
      {
        id: 3,
        title: "Transaction History",
        image: "/images/projects/offline-pos-inventory.svg",
        alt: "Placeholder preview of POS transaction history",
      },
    ],
    problem:
      "Small businesses can lose sales visibility when internet access is unreliable and inventory records are separated from daily transactions.",
    solution:
      "The application keeps selling and stock workflows available offline, stores transactions locally, and makes item lookup and stock monitoring part of the same interface.",
    coreModules: [
      "Offline sales and transaction recording",
      "Product, price, and stock management",
      "Barcode-assisted item lookup",
      "Transaction history and sales summaries",
    ],
    businessValue: [
      "Keeps sales operations available without constant internet access",
      "Reduces manual stock updates",
      "Speeds up item lookup and checkout",
      "Gives owners a clearer view of transactions and inventory",
    ],
    isFeatured: true,
    mockup: "pos",
    mockupTitle: "POS Menu",
  },
  {
    id: 3,
    slug: "job-map-view",
    number: "02",
    title: "Job Map View",
    description:
      "A geospatial job listing and analytics concept designed to visualize employment demand, regional job distribution, and skill trends in the Philippines.",
    category: "Analytics",
    projectType: "Analytics Concept",
    role: "Data and UI Developer",
    output: "Interactive Dashboard",
    techStack: ["GIS", "Analytics", "R", "Python", "Tableau"],
    features: [
      "Regional job listing distribution map",
      "Skill demand and industry analytics",
      "Dashboard-ready workforce insights",
    ],
    screenshots: [
      {
        id: 1,
        title: "Regional Job Map",
        image: "/images/projects/job-map-view.svg",
        alt: "Placeholder preview of regional job listings on a map",
        isFeatured: true,
      },
      {
        id: 2,
        title: "Skill Demand Analytics",
        image: "/images/projects/job-map-view.svg",
        alt: "Placeholder preview of skill demand analytics",
      },
      {
        id: 3,
        title: "Industry Distribution",
        image: "/images/projects/job-map-view.svg",
        alt: "Placeholder preview of industry distribution charts",
      },
    ],
    problem:
      "Job listing data is difficult to interpret when regional demand, industries, and required skills are presented only as disconnected tables or lists.",
    solution:
      "The concept combines geospatial views and workforce analytics to reveal where jobs are concentrated and which skills and industries are most active.",
    coreModules: [
      "Regional job distribution map",
      "Skill and keyword demand analysis",
      "Industry and location filters",
      "Workforce insight dashboard",
    ],
    businessValue: [
      "Makes regional employment patterns easier to understand",
      "Supports workforce planning and training decisions",
      "Highlights in-demand skills and industries",
      "Turns job listing data into presentation-ready insights",
    ],
    isFeatured: true,
    mockup: "map",
    mockupTitle: "Job Demand Map",
  },
];

export const projectCategories: Array<"All Projects" | ProjectCategory> = [
  "All Projects",
  "Business Systems",
  "Automation",
  "Analytics",
  "Web Apps",
];

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.isFeatured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export const labs: LabModule[] = [
  {
    number: "00",
    title: "Payroll Engine",
    description:
      "Business rules for salary, attendance, deductions, benefits, tax treatment, and payroll cutoffs.",
  },
  {
    number: "01",
    title: "Report Generator",
    description:
      "PDF and Excel exports for payroll reports, attendance reports, employee lists, and BIR-related forms.",
  },
  {
    number: "02",
    title: "Approval Flow",
    description:
      "Role-based approvals for admin, payroll staff, approvers, locked periods, and workflow corrections.",
  },
  {
    number: "03",
    title: "Dashboard UI",
    description:
      "Management summaries, trend charts, data cards, payroll analytics, and decision-support screens.",
  },
];
