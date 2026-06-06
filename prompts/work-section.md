Task:
Build the final Work / Selected Projects section and separate project case study pages for my software engineer portfolio website.

Context:
This website is my personal software engineer portfolio. The goal of the Work section is to showcase selected systems I built and attract potential clients. The design should match the existing dark developer-style theme of my website, similar to the screenshots provided:

- Dark background
- Purple/cyan accent colors
- Large bold headings
- Developer/code-inspired navigation style
- Rounded cards
- Project mockup previews
- Professional UI/UX portfolio feel

Important:
The Work section should show project previews only.
Each project must have a separate case study page when clicking "View case study".

Current desired flow:
Homepage Work section
→ User clicks "View case study"
→ Opens separate project page
→ Project page shows screenshots, problem, solution, modules, business value, and CTA.

Requirements:

1. Build reusable frontend components

Create reusable components where applicable. Suggested components:

- WorkSection
- ProjectCard
- ProjectTechBadges
- ProjectMockupPreview
- CaseStudyPage
- ProjectHero
- ProjectMetaCards
- ProjectGallery
- ImageViewer / Lightbox
- ProjectInfoSection
- ProjectListSection
- ProjectCTA

Do not put everything in one large file.
Keep components clean, readable, and reusable.

2. Work Section Design

The Work section should include:

- Section label: "* Work />"
- Main heading:
  "Selected systems built for business workflows."
- Short intro text explaining that these are selected project previews.
- Category filter buttons:
  - All Projects
  - Business Systems
  - Automation
  - Analytics
  - Web Apps

The filter buttons can be UI-only for now, but structure them so filtering can be implemented easily later.

Each project card should include:

- Project number, example: 00, 01, 02
- Project title
- Short project description
- Feature highlights
- Tech stack badges
- Mockup preview on the right side
- "View case study →" link/button

Initial projects to include:

Project 1:
Title: Payroll Management System
Slug: payroll-management-system
Description:
A complete payroll platform for employee records, attendance review, payroll processing, approvals, payslip generation, reports, and role-based access.
Tech stack:
Laravel, Vue 3, MySQL, Payroll, PDF / Excel
Features:
- Employee and non-employee payroll workflow
- Attendance cutoff review and approval process
- Payslip, PDF, Excel, and payroll reports
Category: Business Systems

Project 2:
Title: Offline POS and Inventory
Slug: offline-pos-inventory
Description:
An offline-ready selling and inventory system for small business transactions, item lookup, barcode-assisted workflows, and stock monitoring.
Tech stack:
Mobile, SQLite, Inventory, POS
Features:
- Offline sales transaction processing
- Inventory monitoring and item lookup
- Barcode-assisted workflow for faster selling
Category: Business Systems

Project 3:
Title: Job Map View
Slug: job-map-view
Description:
A geospatial job listing and analytics concept designed to visualize employment demand, regional job distribution, and skill trends in the Philippines.
Tech stack:
GIS, Analytics, R, Python, Tableau
Features:
- Regional job listing distribution map
- Skill demand and industry analytics
- Dashboard-ready workforce insights
Category: Analytics

3. Separate Project Case Study Pages

Create a dynamic route for project details.

Preferred route:
- /work/:slug

Example:
- /work/payroll-management-system
- /work/offline-pos-inventory
- /work/job-map-view

Each project page should include:

Top area:
- Back to Work link
- Case Study number
- Project title
- Description
- Tech stack badges
- Project mockup preview

Meta cards:
- Project Type
- Role
- Output

For Payroll Management System:
Project Type: Business System
Role: Full-stack Developer
Output: Web App Prototype

Project Screenshots section:
- Title: Project Screenshots
- Short description:
  "Click any image to open the project image viewer. This is where you can show multiple real screenshots of the system, such as dashboard, reports, forms, and mobile views."
- Multiple screenshot cards
- Each image card should have:
  - image
  - screenshot title
  - Open indicator

Image viewer requirements:
- Open image when screenshot is clicked
- Show full-screen overlay/lightbox
- Show selected image
- Show image title
- Show current image count, example: 1 / 4
- Next button
- Previous button
- Close button
- Close on Esc key
- Navigate with left/right keyboard arrows
- Close when clicking outside the image
- Must be responsive

Case study content sections:
- Problem
- Solution
- Core Modules
- Business Value

For Payroll Management System:

Problem:
Manual payroll work can be time-consuming, error-prone, and difficult to audit when attendance, employee records, approvals, and payroll reports are handled in separate files.

Solution:
The system centralizes employee data, attendance review, payroll computation, approvals, payslips, and report generation into one structured workflow.

Core Modules:
- Employee and non-employee record management
- Attendance cutoff review and correction workflow
- Payroll processing with approval stages
- Payslip preview, PDF generation, and email support
- Reports for payroll, BIR forms, and employee summaries

Business Value:
- Reduces manual computation and duplicate encoding
- Improves payroll accuracy and accountability
- Provides clear reports for management and payroll staff
- Supports role-based access for admin, approver, and payroll staff

CTA section:
Title:
Interested in a similar system?

Description:
This page can end with a contact button, project inquiry form, or direct link to email.

Buttons:
- View other projects
- Contact me

4. Backend-ready data structure

Do not hard-code project content directly inside the UI components.

Create a data source file first, for example:

src/data/projects.ts

The project data should be structured like a backend API response so it can easily be replaced by an API later.

Example structure:

type Project = {
  id: number
  slug: string
  number: string
  title: string
  description: string
  category: string
  projectType: string
  role: string
  output: string
  techStack: string[]
  features: string[]
  screenshots: {
    id: number
    title: string
    image: string
    alt: string
    isFeatured?: boolean
  }[]
  problem: string
  solution: string
  coreModules: string[]
  businessValue: string[]
}

Create helper functions if needed:

- getProjects()
- getFeaturedProjects()
- getProjectBySlug(slug)
- getProjectsByCategory(category)

Later this can be replaced with backend API calls.

5. Backend direction

Prepare the frontend in a way that can later connect to a backend.

Suggested future backend API endpoints:

GET /api/projects
GET /api/projects/featured
GET /api/projects/{slug}

Suggested database structure for later:

projects:
- id
- slug
- number
- title
- short_description
- full_description
- category
- project_type
- role
- output
- status
- sort_order
- is_featured
- created_at
- updated_at

project_tech_stacks:
- id
- project_id
- name
- sort_order

project_features:
- id
- project_id
- title
- sort_order

project_images:
- id
- project_id
- title
- image_url
- alt_text
- sort_order
- is_featured

project_sections:
- id
- project_id
- section_type
- title
- content
- sort_order

Do not build the backend yet unless the project already has a backend structure and it is safe to add.
For now, build the frontend with local data but make the structure backend-ready.

6. Design requirements

Follow the visual direction from the attached screenshots:

- Dark portfolio theme
- Purple/cyan accent
- Large bold headings
- Rounded cards
- Project cards with preview mockups
- Case study page with clean section spacing
- Project screenshots gallery
- Full-screen image viewer
- Responsive layout for desktop, tablet, and mobile
- Professional frontend developer and UI/UX designer feel

The design should look more polished than a simple developer portfolio.
It should feel like a product case study page.

7. Responsiveness

Make sure the layout works on:

- Desktop
- Tablet
- Mobile

On mobile:
- Project cards should stack vertically
- Screenshot gallery should become one column
- Hero layout should stack
- Image viewer should fit screen width
- Navigation should not break

8. Accessibility

Add proper:
- alt text for images
- aria-labels for image viewer buttons
- keyboard support for lightbox
- semantic HTML where possible

9. Do not

- Do not rewrite unrelated pages
- Do not change the whole website layout unless necessary
- Do not remove existing navigation
- Do not change unrelated styles
- Do not create a completely different design from the current website
- Do not hard-code all content inside one component
- Do not add unnecessary packages
- Do not build backend unless needed
- Do not break existing routes

10. Before editing

Before making changes:
1. Inspect the existing project structure.
2. Identify the framework and routing setup.
3. Find the current homepage file.
4. Find existing components/layouts/styles.
5. Explain the implementation plan.
6. List the files that will be created or modified.

11. After editing

After implementation:
1. Summarize the files created/modified.
2. Explain how to add a new project later.
3. Explain where to replace placeholder images with real screenshots.
4. Confirm the routes created.
5. Confirm that the image viewer works.
6. Confirm the responsive behavior.

Expected output:
A polished Work section on the homepage and separate reusable project case study pages with screenshot gallery and image viewer.