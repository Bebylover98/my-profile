export type Project = {
  id: string
  index: string
  name: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  accent?: string
  image?: string
}

// EDIT ME: replace with your real projects. Leave github/demo blank ('')
// to hide that button automatically. Add or remove entries freely.
// Tech tags below are best-guess placeholders — swap them for whatever
// you actually built each project with.
export const projects: Project[] = [
  {
    id: 'bookverse',
    index: '01',
    name: 'BookVerse',
    description:
      'A platform for book lovers to buy, sell, exchange, and donate books — making it easy to give a book a second life instead of letting it sit on a shelf.',
    tech: ['React', 'Node.js', 'Firebase'],
    github: '',
    demo: '',
    image: '/projects/bookverse.png',
  },
  {
    id: 'clean-earth',
    index: '02',
    name: 'Clean Earth',
    description:
      'A community platform that encourages people to clean up their surroundings — users clean an area, upload a photo as proof, and earn points for it.',
    tech: ['React', 'Node.js', 'Firebase'],
    github: '',
    demo: '',
    image: '/projects/clean-earth.png',
  },
  {
    id: 'personal-assistant',
    index: '03',
    name: 'AI Personal Assistant',
    description:
      'An AI-powered assistant built to interact with users and help automate everyday tasks, from answering questions to handling simple to-dos.',
    tech: ['Python', 'AI/ML'],
    github: '',
    demo: '',
    image: '/projects/personal-assistant.png',
  },
  {
    id: 'kickoff-store',
    index: '04',
    name: 'Kickoff Store',
    description:
      'A sports accessories and jersey e-commerce website, built with a focus on fast browsing and a clean checkout flow.',
    tech: ['React', 'Node.js', 'Firebase'],
    github: '',
    demo: 'https://kickoff-store-teal.vercel.app/',
    image: '/projects/kickoff-store.jpg',
  },
  {
    id: 'portfolio-website',
    index: '05',
    name: 'This Portfolio Website',
    description:
      'My personal introduction site — this one. Built to showcase who I am, what I\'m building, and an easy way for people to reach me.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: '',
    demo: 'https://my-profile-chi-self.vercel.app/',
    image: '/projects/portfolio-website.jpg',
  },
  {
    id: 'Note-sharing',
    index: '06',
    name: 'Note sharing',
    description:
      'My personal introduction site — this one. Built to showcase who I am, what I\'m building, and an easy way for people to reach me.',
    tech: ['HTML', 'CSS', 'javascript'],
    github: '',
    demo: '',
    image: '/projects/note-share.jpg',
  },
  {
    id: 'Quiz-website',
    index: '07',
    name: 'Quiz HUB',
    description:
      'My personal introduction site — this one. Built to showcase who I am, what I\'m building, and an easy way for people to reach me.',
    tech: ['HTML', 'css', 'javascriot'],
    github: '',
    demo: '',
    image: '/projects/quiz.jpg',
  },
]

export const currentlyBuilding = {
  status: 'Currently building',
  title: 'This Portfolio Website',
  description:
    'A personal site to introduce myself, showcase projects as I build them, and give people an easy way to reach me — built with React, TypeScript, and Tailwind CSS.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  progress: 80, // 0–100, drives the progress indicator
}
