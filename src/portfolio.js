const header = {
  homepage: 'https://findpraneeth.vercel.app/',
  title: 'PM.',
}

const about = {
  name: 'Praneeth M',
  role: 'Developer focused on building experiences.',
  description:
    'I craft high-performance applications and immersive digital experiences. From efficient backend systems to immersive mobile & web apps, I blend engineering depth with creative design to build software that stands out.',
  resume: 'https://github.com/praneethm05',
  social: {
    linkedin: 'https://www.linkedin.com/in/praneeth-m-7419802a8/',
    github: 'https://github.com/praneethm05',
  },
}

const projects = [
  {
    name: 'BLIP Engine',
    description:
      'A custom 3D rendering and physics engine with a Flutter-based editor UI. Features a complete rendering pipeline in C++/OpenGL with custom GLSL shaders, a C FFI bridge to Dart, and a DGCNN model for 3D object classification.',
    stack: ['C++', 'OpenGL', 'GLSL', 'Flutter', 'Dart', 'Python', 'PyTorch'],
    sourceCode: 'https://github.com/praneethm05',
    livePreview: 'https://github.com/praneethm05',
  },
  {
    name: 'The Campus Connect',
    description:
      'A modern campus event & communication platform. Built with SvelteKit and Supabase, featuring real-time messaging, committee management, and a polished UI with dynamic theming.',
    stack: ['SvelteKit', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    sourceCode: 'https://github.com/praneethm05',
    livePreview: 'https://github.com/praneethm05',
  },
  {
    name: 'Kalajna',
    description:
      'An event registration and gallery website with a polished, responsive design. Features a video hero section, AOS animations, and a clean dark-themed aesthetic.',
    stack: ['HTML', 'CSS', 'Tailwind CSS', 'AOS'],
    sourceCode: 'https://github.com/praneethm05',
    livePreview: 'https://github.com/praneethm05',
  },
  {
    name: 'Hunger Green',
    description:
      'Get ready for a fresh take on healthy living! Hunger Green is on the horizon, promising to redefine your approach to diet and wellness. Stay tuned for an app that will simplify your health journey and inspire better choices.',
    stack: ['React-Native', 'Gemini', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'SubscribeUS',
    description:
      "Simplify your life with SubscribeUS! A seamless way to manage all your subscriptions effortlessly — an intuitive system that keeps track of your services and helps you stay organized.",
    stack: ['Flutter', 'MongoDB'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Crick P',
    description:
      'Crick P is set to revolutionize your sports experience with innovative features and tools. A new way to elevate your game and connect with the community.',
    stack: ['Flutter', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

// name: display label  |  icon: simpleicons.org slug
const skills = [
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Go', icon: 'go' },
  { name: 'React Native', icon: 'react' },
  { name: 'Svelte', icon: 'svelte' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Dart', icon: 'dart' },
  { name: 'Python', icon: 'python' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Git', icon: 'git' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Node.js', icon: 'nodedotjs' },
]

const contact = {
  email: 'praneethmofficial@gmail.com',
}

export { header, about, projects, skills, contact }
