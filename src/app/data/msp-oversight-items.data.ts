import { MSPOversightItem } from '../models/msp-oversight-item.model';

export const MSP_OVERSIGHT_ITEMS: MSPOversightItem[] = [
  {
    scenario: 'Incident Response',
    responsibility: 'MSP Executes',
    order: 1,
    parentTabId: 'msp'
  },
  {
    scenario: 'Resource Performance',
    responsibility: 'Mgr Decides',
    order: 2,
    parentTabId: 'msp'
  },
  {
    scenario: 'Compliance Remediation',
    responsibility: 'MSP Executes',
    order: 3,
    parentTabId: 'msp'
  },
  {
    scenario: 'Annual Resiliency Plan',
    responsibility: 'MSP Executes',
    order: 4,
    parentTabId: 'msp'
  },
  {
    scenario: 'Resiliency Plan Approval',
    responsibility: 'Mgr Decides',
    order: 5,
    parentTabId: 'msp'
  }
];
