export type Skill = { name: string; level?: 'core' | 'comfortable' | 'exploring' }
export type SkillGroup = { title: string; note: string; skills: Skill[] }

// EDIT ME: add/remove skills freely. `level` only changes the dot indicator.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Development',
    note: 'What I build with day to day',
    skills: [
      { name: 'JavaScript', level: 'core' },
      { name: 'TypeScript', level: 'core' },
      { name: 'React', level: 'core' },
      { name: 'Node.js', level: 'comfortable' },
      { name: 'Python', level: 'comfortable' },
      { name: 'HTML & CSS', level: 'core' },
      { name: 'C', level: 'exploring' },
      { name: 'C++', level: 'exploring' },
    ],
  },
  {
    title: 'Tools',
    note: 'My daily toolkit',
    skills: [
      { name: 'Git', level: 'core' },
      { name: 'GitHub', level: 'core' },
      { name: 'VS Code', level: 'core' },
      { name: 'Figma', level: 'comfortable' },
      { name: 'Firebase', level: 'comfortable' },
    ],
  },
  {
    title: 'Other',
    note: 'How I think about problems',
    skills: [
      { name: 'UI / UX', level: 'comfortable' },
      { name: 'Problem Solving', level: 'core' },
      { name: 'AI & ML', level: 'exploring' },
      { name: 'Creative Thinking', level: 'core' },
      { name: 'Entrepreneurship', level: 'exploring' },
    ],
  },
]
