export type TimelineEntry = { year: string; title: string; description: string }

// EDIT ME: order matters — oldest first, it renders top to bottom.
export const timeline: TimelineEntry[] = [
  {
    year: '2024',
    title: 'Started learning programming',
    description: 'Picked up the fundamentals and built my first small projects.',
  },
  {
    year: '2025',
    title: 'Started building real projects',
    description: 'Moved from tutorials to shipping websites and software of my own.',
  },
  {
    year: '2026',
    title: 'Building AI tools and products',
    description: 'Focused on AI-powered tools and products meant for real users.',
  },
]

export type Stat = { value: string; label: string }

// EDIT ME: numbers you're proud of. Keep it to 3–4 for visual balance.
// Update these as your real project count and skills grow.
export const stats: Stat[] = [
  { value: '10+', label: 'Sites built' },
  { value: '5+', label: 'Technologies' },
  { value: 'CE', label: 'Engineering student' },
  { value: '∞', label: 'Ideas in the queue' },
]

export type Achievement = { title: string; detail: string }

// EDIT ME: add real certifications, competitions, or milestones here.
// The achievements section on the page hides itself automatically while
// this is empty, so it won't show unfinished placeholders publicly.
export const achievements: Achievement[] = []
