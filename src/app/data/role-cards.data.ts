import { RoleCard } from '../models/role-card.model';

export const ROLE_CARDS: RoleCard[] = [
  {
    roleKey: 'manager',
    title: 'Product Engineering Manager',
    desc: "The 'CEO' of the technical product. Accountable for delivery, quality, and operational health. Owns the MSP relationship.",
    color: 'bg-blue-100 border-blue-500 text-blue-800',
    order: 1,
    parentTabId: 'structure'
  },
  {
    roleKey: 'pm',
    title: 'Product Manager (Business)',
    desc: "Reports to Business. Defines the 'What' and 'Why'. Aligned 1:1 with the IT Product Team. Strategic Partner.",
    color: 'bg-green-100 border-green-500 text-green-800',
    order: 2,
    parentTabId: 'structure'
  },
  {
    roleKey: 'ba_qa',
    title: 'Dedicated BAs & QAs',
    desc: 'Report to Engineering Manager. 100% dedicated to the product. No context switching. Deep domain expertise.',
    color: 'bg-purple-100 border-purple-500 text-purple-800',
    order: 3,
    parentTabId: 'structure'
  },
  {
    roleKey: 'msp',
    title: 'Managed Service (Run)',
    desc: 'External partner executing Run & Sustain. Accountable to the Eng Manager. Can be replaced if performance lags.',
    color: 'bg-orange-100 border-orange-500 text-orange-800',
    order: 4,
    parentTabId: 'structure'
  }
];
