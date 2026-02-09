import { LifecycleStep } from '../models/lifecycle-step.model';

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    stepId: 'intake',
    label: '1. Intake & Prioritization',
    content: 'Work directly with the Aligned Business Product Manager. Assess technical feasibility of roadmap items. Prioritize based on capacity and value.',
    action: "Key Shift: You are involved in the 'Why' earlier.",
    order: 1,
    parentTabId: 'lifecycle'
  },
  {
    stepId: 'build',
    label: '2. Build & Enhance',
    content: 'Standard Agile execution. Your dedicated BAs and QAs ensure specs are perfect and quality is built-in. Greenfields and Enhancements happen here.',
    action: 'Key Shift: BAs/QAs are permanent team members, increasing velocity.',
    order: 2,
    parentTabId: 'lifecycle'
  },
  {
    stepId: 'implement',
    label: '3. Implementation',
    content: "No more hand-offs to a separate 'Implementation Team'. Your team configures and deploys the product for clients.",
    action: 'Key Shift: You own the client onboarding success.',
    order: 3,
    parentTabId: 'lifecycle'
  },
  {
    stepId: 'sustain',
    label: '4. Run & Sustain',
    content: 'The product is live. You oversee the MSP. Includes Tier 1/2 support, annual resiliency planning, and compliance audits.',
    action: "Key Shift: You don't do the tickets, but you ensure they get done.",
    order: 4,
    parentTabId: 'lifecycle'
  }
];
