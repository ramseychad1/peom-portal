import { RoleCard } from '../models/role-card.model';

export const ROLE_CARDS: RoleCard[] = [
  {
    roleKey: 'manager',
    title: 'Engineering Manager',
    desc: 'Product Engineering Manager who oversees the entire product team structure including technical leads, embedded resources, and all three operational teams (Build, Run/Sustain, and Implementation).',
    color: 'bg-red-100 border-red-500 text-red-800',
    order: 1,
    parentTabId: 'structure'
  },
  {
    roleKey: 'product_manager',
    title: 'Product Manager (Business)',
    desc: 'Business Product Manager who partners with the Product Engineering Manager. Together they are responsible for the overall success of the product family. Defines the "What" and "Why" while collaborating on the "How".',
    color: 'bg-green-100 border-green-500 text-green-800',
    order: 2,
    parentTabId: 'structure'
  },
  {
    roleKey: 'tech_lead',
    title: 'Technical Lead(s)',
    desc: 'Technical leaders who guide architecture, technical decisions, and development standards across the product teams.',
    color: 'bg-gray-100 border-gray-500 text-gray-800',
    order: 2,
    parentTabId: 'structure'
  },
  {
    roleKey: 'embedded_pm',
    title: 'Embedded PM(s)',
    desc: 'Product Managers embedded within the product team to define requirements, prioritize features, and align with business stakeholders.',
    color: 'bg-gray-100 border-gray-500 text-gray-800',
    order: 3,
    parentTabId: 'structure'
  },
  {
    roleKey: 'embedded_ba',
    title: 'Embedded BA(s)',
    desc: 'Business Analysts embedded in the team to gather requirements, document processes, and bridge technical and business needs.',
    color: 'bg-gray-100 border-gray-500 text-gray-800',
    order: 4,
    parentTabId: 'structure'
  },
  {
    roleKey: 'embedded_qa',
    title: 'Embedded QA(s)',
    desc: 'Quality Assurance professionals embedded in the team to ensure quality standards, test coverage, and product reliability.',
    color: 'bg-gray-100 border-gray-500 text-gray-800',
    order: 5,
    parentTabId: 'structure'
  },
  {
    roleKey: 'build_team',
    title: 'Build Function',
    desc: 'Team members responsible for building new features, enhancements, and greenfield product development.',
    color: 'bg-red-100 border-red-400 text-red-800',
    order: 6,
    parentTabId: 'structure'
  },
  {
    roleKey: 'run_sustain_team',
    title: 'Run/Sustain Function',
    desc: 'Team members responsible for production support, system maintenance, incident response, and ongoing sustainability of live products.  This function may be embedded or performed by a Managed Service Partner.',
    color: 'bg-blue-100 border-blue-400 text-blue-800',
    order: 7,
    parentTabId: 'structure'
  },
  {
    roleKey: 'implementation_team',
    title: 'Implementation Function',
    desc: 'Team members responsible for client onboarding, product configuration, deployment, and successful implementation of solutions',
    color: 'bg-green-100 border-green-400 text-green-800',
    order: 8,
    parentTabId: 'structure'
  }
];
