import { TeamFunction } from '../models/team-function.model';

export const TEAM_FUNCTIONS: TeamFunction[] = [
  {
    teamKey: 'build',
    title: 'Build Function',
    color: 'bg-red-100 border-red-400 text-red-900',
    hlActivities: [
      'New products',
      'Existing product enhancements'
    ],
    resourceManagement: [
      'Tech resources will focus planned build work',
      'Matrixed to other build teams if/when needed'
    ],
    primaryBusinessPartners: [
      'Product Team'
    ],
    order: 1,
    parentTabId: 'structure'
  },
  {
    teamKey: 'run_sustain',
    title: 'Run/Sustain Function',
    color: 'bg-blue-100 border-blue-400 text-blue-900',
    hlActivities: [
      'T2/T3 Support',
      'B2R handoff',
      'Break Fix',
      'Archer Items, tech debt, tech refresh'
    ],
    resourceManagement: [
      'Resources will be run focused',
      'Team can be used by implementation for surge support',
      'Matrixed to other run or implementation teams'
    ],
    primaryBusinessPartners: [
      'APS Team',
      'SHPS Team'
    ],
    order: 2,
    parentTabId: 'structure'
  },
  {
    teamKey: 'implementation',
    title: 'Implementation Function',
    color: 'bg-green-100 border-green-400 text-green-900',
    hlActivities: [
      'New Client Implementations',
      'Existing Client Implementations'
    ],
    resourceManagement: [
      'Resources will focus on client implementations',
      'Teams will roll into Run teams if/when idle (to complete backlog or tech debt tasks)',
      'Matrixed to other Implementation teams'
    ],
    primaryBusinessPartners: [
      'APS Team',
      'SHPS'
    ],
    order: 3,
    parentTabId: 'structure'
  }
];
