import { ComparisonItem } from '../models/comparison-item.model';

export const COMPARISON_ITEMS: ComparisonItem[] = [
  {
    dimension: 'Scope',
    old: 'Dev & Implementation Only',
    new: 'End-to-End (Build, Imp, Run)',
    order: 1,
    parentTabId: 'vision'
  },
  {
    dimension: 'Success Metric',
    old: ' On-time Delivery',
    new: 'Product Health & Client Value',
    order: 2,
    parentTabId: 'vision'
  },
  {
    dimension: 'Team',
    old: 'Shared/Matrixed',
    new: 'Dedicated Pods',
    order: 3,
    parentTabId: 'vision'
  },
  {
    dimension: 'Support',
    old: 'Hand-off to Support Team',
    new: 'Owner Oversight of MSP',
    order: 4,
    parentTabId: 'vision'
  }
];
