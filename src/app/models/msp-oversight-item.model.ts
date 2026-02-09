export interface MSPOversightItem {
  scenario: string;
  responsibility: 'MSP Executes' | 'Mgr Decides';
  order: number;
  parentTabId: string;
}
