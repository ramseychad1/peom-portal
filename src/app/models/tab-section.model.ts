export interface TabSection {
  tabId: string;
  tabLabel: string;
  title: string;
  intro: string;
  order: number;
  contentType: 'comparison' | 'orgChart' | 'stepper' | 'mspModel';
}
