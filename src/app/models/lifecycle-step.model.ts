export interface LifecycleStep {
  stepId: string;
  label: string;
  content: string;
  action: string;
  order: number;
  parentTabId: string;
}
