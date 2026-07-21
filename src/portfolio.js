const header = {

  homepage: 'https://praneethm.dev',
  title: 'PM.',
}

const about = {

  name: 'Praneeth M',
  role: 'Developer focused on building experiences.',
  description:
    'I craft high-performance applications and immersive digital experiences. From efficient backend systems to immersive mobile & web apps, I blend engineering depth with creative design to build software that stands out.',
  resume: 'https://github.com/praneethm05',
  social: {
    linkedin: 'https://www.linkedin.com/in/praneethm05/',
    github: 'https://github.com/praneethm05',
  },
}

const projects = [
  // projects can be added or removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BLIP Engine',
    description:
      'A custom 3D rendering and physics engine with a Flutter-based editor UI. Complete C++/OpenGL rendering pipeline with custom GLSL shaders, a C FFI bridge to Dart, and a DGCNN model that auto-classifies uploaded objects to assign physics properties.',
    stack: ['C++', 'OpenGL', 'GLSL', 'Flutter', 'Dart', 'Python', 'PyTorch'],
    sourceCode: 'https://github.com/praneethm05/blip-engine',
  },
  {
    name: 'The Campus Connect',
    description:
      'A real-time campus event & communication platform. Built with SvelteKit and Supabase, featuring live messaging, committee management, and dynamic theming.',
    stack: ['SvelteKit', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    sourceCode: 'https://github.com/praneethm05/thecampusconnect',
    livePreview: 'https://thecampusconnect-pi.vercel.app',
  },
  {
    name: 'SkillMap',
    description:
      'A full-stack learning tracker with an AI-curated topic generator. Interactive dashboard, progress analytics, and personalized learning paths built on React, Express, and MongoDB.',
    stack: ['React', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS'],
    sourceCode: 'https://github.com/praneethm05/skillmap',
  },
  {
    name: 'Hunger Green',
    description:
      'A health & diet companion app pairing a React Native (Expo) client with a Node/Express API — meal tracking, AI-assisted recommendations, and a REST backend with its own auth and schema layer.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/praneethm05/hungergreenapp',
  },
  {
    name: 'SpyWho',
    description:
      'A social deduction party game built with React Native and Expo — full multiplayer round flow from setup through gameplay to results, with haptics and custom navigation.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    sourceCode: 'https://github.com/praneethm05/SpyWho',
  },
  {
    name: 'Zeta',
    description:
      'A mobile cognitive-research app built for a university attention/reaction-time study. Expo-based mini-game captures timed player interactions for downstream analysis.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    sourceCode: 'https://github.com/praneethm05/zeta',
  },
  {
    name: 'Kalajna',
    description:
      'An event registration and gallery website with a polished, responsive design. Video hero section, AOS animations, and a clean dark-themed aesthetic.',
    stack: ['HTML', 'CSS', 'Tailwind CSS', 'AOS'],
    sourceCode: 'https://github.com/praneethm05/kalajna',
    livePreview: 'https://kalajna.vercel.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Go',
  'React Native',
  'Svelte',
  'Flutter',
  'Dart',
  'Python',
  'Tailwind CSS',
  'Git',
  'Supabase',
  'MongoDB',
  'Node.js',

]

const contact = {

  email: 'praneethmofficial@gmail.com',
}

const experience = [
  {
    category: 'Education',
    items: [
      {
        title: 'Master of Computer Applications',
        subtitle: 'CHRIST (Deemed to be University) · Bengaluru',
        meta: '2025 – Present',
        details: [],
      },
      {
        title: 'Bachelor of Computer Applications',
        subtitle: 'St Aloysius (Deemed to be University) · Mangalore',
        meta: '2022 – 2025',
        details: [],
      },
    ],
  },
  {
    category: 'Work',
    items: [
      {
        title: 'React Native Developer Intern',
        subtitle: 'Dquantix Technologies · Bangalore',
        meta: 'April 2025 – Present',
        details: [
          'Engineered cross-platform React Native applications (Android/iOS) with highly responsive, scalable UIs using TypeScript.',
          'Architected secure authentication flows (JWT) and centralized application state management utilizing Redux.',
          'Integrated complex RESTful APIs and implemented efficient multi-part file upload mechanisms for seamless data sync.',
        ],
      },
    ],
  },
  {
    category: 'Leadership',
    items: [
      {
        title: 'Committee Head – Design',
        subtitle: 'Gateways 2025 · National IT Fest, CHRIST University',
        meta: '2025',
        details: [
          'Collaborated with a design team to create digital assets, posters, and promotional materials for a national-level IT fest.',
          'Provided creative direction and design support across multiple department events.',
        ],
      },
    ],
  },
  {
    category: 'Certifications',
    items: [
      {
        title: 'The Complete React Native + Hooks Course',
        subtitle: 'Stephen Grider · Udemy',
        meta: 'Nov 2024',
        details: [],
        link: 'https://www.udemy.com/certificate/UC-5d6a2481-a6b0-44c5-aaa1-b5e807d51e02/',
      },
    ],
  },
]

const skillIcons = {
  HTML: 'html5',
  CSS: 'css',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Go: 'go',
  Svelte: 'svelte',
  Flutter: 'flutter',
  Dart: 'dart',
  Python: 'python',
  'Tailwind CSS': 'tailwindcss',
  Git: 'git',
  Supabase: 'supabase',
  MongoDB: 'mongodb',
  'Node.js': 'nodedotjs',
  'React Native': 'react',
}

export { header, about, projects, skills, contact, skillIcons, experience }
