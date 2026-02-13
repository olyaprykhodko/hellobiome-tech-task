export type MicrobeType = 'bacteria' | 'fungi';

export type MicrobeRole = 'beneficial' | 'neutral' | 'pathogenic';

export interface Microbe {
  id: string;
  name: string;
  type: MicrobeType;
  abundance: number;
  role: MicrobeRole;
}

export const microbes: Microbe[] = [
  {
    id: 'm1',
    name: 'Cutibacterium acnes',
    type: 'bacteria',
    abundance: 32,
    role: 'beneficial',
  },
  {
    id: 'm2',
    name: 'Staphylococcus epidermidis',
    type: 'bacteria',
    abundance: 24,
    role: 'beneficial',
  },
  {
    id: 'm3',
    name: 'Malassezia globosa',
    type: 'fungi',
    abundance: 18,
    role: 'neutral',
  },
  {
    id: 'm4',
    name: 'Faecalibacterium prausnitzii',
    type: 'bacteria',
    abundance: 15.7,
    role: 'beneficial',
  },
  {
    id: 'm5',
    name: 'Candida albicans',
    type: 'fungi',
    abundance: 3.4,
    role: 'pathogenic',
  },
  {
    id: 'm6',
    name: 'Clostridium difficile',
    type: 'bacteria',
    abundance: 1.2,
    role: 'pathogenic',
  },
  {
    id: 'm7',
    name: 'Staphylococcus aureus',
    type: 'bacteria',
    abundance: 2.1,
    role: 'pathogenic',
  },

  {
    id: 'm8',
    name: 'Saccharomyces boulardii',
    type: 'fungi',
    abundance: 2.9,
    role: 'beneficial',
  },
  {
    id: 'm9',
    name: 'Aspergillus fumigatus',
    type: 'fungi',
    abundance: 0.8,
    role: 'pathogenic',
  },
  {
    id: 'm10',
    name: 'Bacteroides fragilis',
    type: 'bacteria',
    abundance: 11.3,
    role: 'neutral',
  },
  {
    id: 'm11',
    name: 'Enterococcus faecalis',
    type: 'bacteria',
    abundance: 3.1,
    role: 'neutral',
  },
  {
    id: 'm12',
    name: 'Akkermansia muciniphila',
    type: 'bacteria',
    abundance: 6.5,
    role: 'beneficial',
  },
  {
    id: 'm13',
    name: 'Penicillium spp.',
    type: 'fungi',
    abundance: 1.5,
    role: 'neutral',
  },
  {
    id: 'm14',
    name: 'Helicobacter pylori',
    type: 'bacteria',
    abundance: 0.9,
    role: 'pathogenic',
  },
];
