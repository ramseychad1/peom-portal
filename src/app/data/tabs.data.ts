import { TabSection } from '../models/tab-section.model';

export const TABS: TabSection[] = [
  {
    tabId: 'vision',
    tabLabel: 'Vision & Shift',
    title: 'The Shift: Project to Product',
    intro: "We are moving away from a siloed 'build and hand-off' approach. In the new model, Product Engineering Managers own the entire lifespan of the product family.",
    order: 1,
    contentType: 'comparison'
  },
  {
    tabId: 'structure',
    tabLabel: 'Team Structure',
    title: 'The Product Pod Structure',
    intro: 'We are consolidating 15 products into 7 Product Families. Each family is led by a Product Engineering Manager with a dedicated cross-functional team.',
    order: 2,
    contentType: 'orgChart'
  },
  {
    tabId: 'lifecycle',
    tabLabel: 'E2E Lifecycle',
    title: 'End-to-End Responsibility',
    intro: "Your team is no longer just a 'feature factory'. You oversee the flow from the moment a request arrives until it is live and supported.",
    order: 3,
    contentType: 'stepper'
  },
  {
    tabId: 'msp',
    tabLabel: 'Managed Services Model',
    title: 'Managing the Service Partner',
    intro: 'The Run & Sustain function is executed by a partner, but YOU hold the keys. This is a governance and oversight role.',
    order: 4,
    contentType: 'mspModel'
  }
];
