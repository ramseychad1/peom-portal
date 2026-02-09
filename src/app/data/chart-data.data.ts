import { ChartData } from '../models/chart-data.model';

export const CHART_DATA: ChartData[] = [
  {
    labels: ['New Build', 'Enhancements', 'Client Implementation', 'Run & Sustain', 'Strategy Input', 'Compliance'],
    datasets: [
      {
        label: 'Current State Scope',
        data: [90, 80, 10, 5, 20, 10],
        backgroundColor: 'rgba(156, 163, 175, 0.2)',
        borderColor: 'rgba(156, 163, 175, 1)',
        pointBackgroundColor: 'rgba(156, 163, 175, 1)'
      },
      {
        label: 'Future State Scope',
        data: [100, 100, 100, 100, 80, 100],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 1)',
        pointBackgroundColor: 'rgba(37, 99, 235, 1)'
      }
    ],
    parentTabId: 'vision'
  }
];
