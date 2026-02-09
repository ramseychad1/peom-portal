import { MSPPoint } from '../models/msp-point.model';

export const MSP_POINTS: MSPPoint[] = [
  {
    title: 'Staffing Authority',
    desc: 'You have full control to request addition, removal, or replacement of MSP resources that do not meet the bar.',
    order: 1,
    parentTabId: 'msp'
  },
  {
    title: 'Operational Scope',
    desc: 'Includes Tier 1/2 support, system patching, compliance remediations, and resiliency testing.',
    order: 2,
    parentTabId: 'msp'
  },
  {
    title: 'Accountability',
    desc: 'If the system goes down, the MSP fixes it, but you communicate the status and ensure the RCA is valid.',
    order: 3,
    parentTabId: 'msp'
  }
];
