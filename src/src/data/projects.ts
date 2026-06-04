import type { LabModule, Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    number: '00',
    title: 'Payroll Management System',
    description:
      'Employee management, attendance review, payroll processing, approvals, payslip generation, reports, and role-based authorization.',
    tags: ['Laravel', 'Vue 3', 'MySQL', 'Payroll', 'PDF / Excel'],
    mockup: 'payroll',
    mockupTitle: 'Payroll Dashboard',
  },
  {
    number: '01',
    title: 'Offline POS and Inventory',
    description:
      'Offline selling, inventory monitoring, item lookup, barcode-assisted workflows, and small business transaction control.',
    tags: ['Mobile', 'SQLite', 'Inventory', 'POS'],
    mockup: 'pos',
    mockupTitle: 'POS Menu',
  },
  {
    number: '02',
    title: 'Telecounseling Web App',
    description:
      'Student records, counseling sessions, dashboards, reports, authentication, role-based access, and counselor workflows.',
    tags: ['Laravel API', 'Vue SPA', 'Sanctum', 'Dashboard'],
    mockup: 'counseling',
    mockupTitle: 'Counseling Dashboard',
  },
  {
    number: '03',
    title: 'Geospatial Job Listings Research',
    description:
      'Employment trends, regional skill demand, job location mapping, data analysis, visualization, and workforce planning.',
    tags: ['Analytics', 'Tableau', 'Research', 'Geospatial'],
    mockup: 'map',
    mockupTitle: 'Job Demand Map',
  },
]

export const labs: LabModule[] = [
  {
    number: '00',
    title: 'Payroll Engine',
    description:
      'Business rules for salary, attendance, deductions, benefits, tax treatment, and payroll cutoffs.',
  },
  {
    number: '01',
    title: 'Report Generator',
    description:
      'PDF and Excel exports for payroll reports, attendance reports, employee lists, and BIR-related forms.',
  },
  {
    number: '02',
    title: 'Approval Flow',
    description:
      'Role-based approvals for admin, payroll staff, approvers, locked periods, and workflow corrections.',
  },
  {
    number: '03',
    title: 'Dashboard UI',
    description:
      'Management summaries, trend charts, data cards, payroll analytics, and decision-support screens.',
  },
]
