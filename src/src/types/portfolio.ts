export type ProjectMockupType = 'payroll' | 'pos' | 'counseling' | 'map'

export interface Project {
  number: string
  title: string
  description: string
  tags: string[]
  mockup: ProjectMockupType
  mockupTitle: string
}

export interface LabModule {
  number: string
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}
