import furniloEcom from '../assets/images/furnilo.webp';
import namrataUniversal from '../assets/images/namrata-univers.webp';
import globeScope from '../assets/images/globescope.webp';
import msTrackify from '../assets/images/mstrackify.webp';
import quizForge from '../assets/images/quizforge.webp';
import Button from '../animations/Button';

const projects = [
  {
    title: 'Furnilo',
    subtitle: 'Furniture E-Commerce',
    description:
      'Modern furniture e-commerce application built with React, Vite, and Tailwind CSS featuring responsive design, category-based product browsing, and interactive user experiences.',

    image: furniloEcom,

    liveLink: 'https://furnilo.vercel.app/',

    repoLink: 'https://github.com/maganstackforge/furnilo-ecommerce',
    pageSpeedLink:
      'https://pagespeed.web.dev/analysis/https-furnilo-vercel-app/20gete6mh1?form_factor=desktop',

    color: '#38bdf8',

    position: 'left',

    keyHighlights: [
      'Developed a modern and fully responsive furniture e-commerce interface.',
      'Implemented category-based product browsing and scalable filtering structure.',
      'Built dynamic client-side navigation using React Router.',
      'Enhanced user experience with Framer Motion animations and Swiper.js sliders.',
      'Added SEO support using React Helmet Async for better discoverability.',
    ],

    technologies: [
      'react.js',
      'vite',
      'tailwind css',
      'javascript',
      'react-router-dom',
      'framer-motion',
      'swiper.js',
    ],
  },
  {
    title: 'Namrata Universal',
    subtitle: 'Corporate Website Clone',

    description:
      'A modern, high-performance, and fully responsive business website built with React, Vite, and Tailwind CSS featuring smooth animations, SEO optimization, and scalable component architecture.',

    image: namrataUniversal,

    liveLink: 'https://namrataunivers.netlify.app/',

    repoLink: 'https://github.com/maganstackforge/namrata-univers',

    pageSpeedLink:
      'https://pagespeed.web.dev/analysis/https-globescope-netlify-app/bqy8fuevvt?form_factor=desktop',

    color: '#34d399',

    position: 'right',

    keyHighlights: [
      'Achieved Lighthouse scores of 98 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO.',
      'Built a fully responsive mobile-first interface optimized for mobile, tablet, and desktop devices.',
      'Implemented smooth scroll animations using AOS and interactive Swiper.js carousels.',
      'Added SEO optimization with React Helmet Async and semantic HTML structure.',
      'Developed a scalable and reusable React component architecture for maintainable frontend development.',
    ],

    technologies: [
      'react.js',
      'vite',
      'tailwind css',
      'javascript',
      'react-router-dom',
      'swiper.js',
      'aos',
      'react-helmet-async',
    ],
  },
  {
    title: 'GlobeScope',
    subtitle: 'REST Countries Explorer',

    description:
      'A modern REST Countries Explorer built with React, Vite, and Tailwind CSS featuring real-time search, region filtering, dynamic routing, performance optimization, automated testing, and SEO best practices.',

    image: globeScope,

    liveLink: 'https://globescope.netlify.app/',

    repoLink: 'https://github.com/maganstackforge/GlobeScope',

    pageSpeedLink:
      'https://pagespeed.web.dev/analysis/https-globescope-netlify-app/bqy8fuevvt?form_factor=desktop',

    color: '#22d3ee',

    position: 'left',

    keyHighlights: [
      'Achieved Lighthouse scores of 99 Performance, 100 Accessibility, and 100 SEO.',
      'Implemented real-time country search with region-based filtering and dynamic routing.',
      'Optimized performance using lazy loading, route-based code splitting, and skeleton loaders.',
      'Built scalable state management with Context API and reusable custom hooks.',
      'Added automated unit testing using Vitest and Testing Library.',
    ],

    technologies: [
      'react.js',
      'vite',
      'tailwind css',
      'javascript',
      'context api',
      'react-router-dom',
      'react-helmet-async',
      'vitest',
    ],
  },
  {
    title: 'MS Trackify',
    subtitle: 'Expense Tracker App',

    description:
      'A responsive expense tracking application built with React and Vite that enables users to add, manage, filter, sort, and persist expenses using LocalStorage, custom hooks, and an intuitive user interface.',

    image: msTrackify,

    liveLink: 'https://mstrackify.netlify.app/',

    repoLink: 'https://github.com/maganstackforge/TrackifyApp',

    pageSpeedLink:
      'https://pagespeed.web.dev/analysis/https-mstrackify-netlify-app-home/k0skw154uk?form_factor=desktop',

    color: '#4ade80',

    position: 'right',

    keyHighlights: [
      'Achieved Lighthouse scores of 98 Performance, 95 Accessibility, 100 Best Practices, and 91 SEO.',
      'Implemented expense management with add, edit, delete, filtering, and advanced sorting capabilities.',
      'Persisted user data using LocalStorage to retain expenses across browser sessions.',
      'Built reusable custom hooks for filtering and LocalStorage state management.',
      'Designed a fully responsive interface with context-menu based expense actions.',
    ],

    technologies: ['react.js', 'vite', 'javascript', 'tailwind css', 'localstorage', 'custom hooks'],
  },
  {
    title: 'QuizForge',
    subtitle: 'Interactive Quiz Application',

    description:
      'A fully responsive quiz application built with HTML, CSS, and JavaScript featuring multiple-choice questions, countdown timer, sound effects, animated score visualization, and social score sharing functionality.',

    image: quizForge,

    liveLink: 'https://msquizforge.vercel.app/',

    repoLink: 'https://github.com/maganstackforge/msquizforge',

    pageSpeedLink:
      'https://pagespeed.web.dev/analysis/https-msquizforge-vercel-app/ninyh05fwa?form_factor=mobile',

    color: '#60a5fa',

    position: 'left',

    keyHighlights: [
      'Achieved Lighthouse scores of 85 Performance, 96 Accessibility, 100 Best Practices, and 91 SEO.',
      'Built an interactive quiz system with 25+ multiple-choice questions and real-time score tracking.',
      'Implemented countdown timer with audio feedback for correct, incorrect, and timeout events.',
      'Created an animated circular score visualization with quiz retry and restart functionality.',
      'Added social sharing support for LinkedIn, Telegram, and Twitter with a fully responsive design.',
    ],

    technologies: ['html5', 'css3', 'javascript', 'responsive design', 'git', 'github', 'vercel'],
  },
];

const ExternalIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-external-link'
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
    <polyline points='15 3 21 3 21 9'></polyline>
    <line x1='10' y1='14' x2='21' y2='3'></line>
  </svg>
);

const MyProjects = () => {
  return (
    <>
      <div id='myProject' className='mx-auto w-full max-w-7xl bg-gradient-to-b from-[#121212] to-[#0b1120]'>
        <h3 className='relative z-10 mx-auto w-max rounded-b-2xl border-[#1788ae] px-4 py-2 text-center text-3xl font-bold text-white/90 sm:border-x-2 sm:border-b-2 sm:text-5xl'>
          Latest Works
        </h3>
      </div>

      <section className='relative mx-auto w-full max-w-7xl overflow-hidden bg-[#0b1120] px-4 pb-12 sm:px-6 sm:pb-20'>
        {projects.map((project) => {
          const isRight = project.position === 'right';

          return (
            <div
              key={project.title}
              className={`relative mx-auto mt-12 flex w-full max-w-6xl flex-col items-center gap-20 px-2 sm:mt-20 sm:flex-row ${
                isRight ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Left right representation arrow */}
              <div
                className={`absolute top-1/2 hidden h-[1px] bg-[#1788ae] sm:block ${
                  isRight ? 'right-1/4 left-1/2' : 'right-1/2 left-1/4'
                }`}
              ></div>

              {/* circle dot */}
              <div
                className='absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-[3px] bg-[#111] sm:block'
                style={{ borderColor: project.color }}
              ></div>

              {/*With Image live link, repo link, and page speed insight link container   */}

              <div className='relative flex w-full flex-col items-center justify-center self-center sm:w-1/2'>
                <div
                  className={`relative mt-20 flex w-full flex-col items-center md:mt-0 ${
                    isRight ? 'sm:ml-auto' : 'sm:mr-auto'
                  }`}
                >
                  {/* With image live demo link */}
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group w-full transition-all duration-300 hover:scale-102'
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width={1375}
                      height={768}
                      loading='lazy'
                      decoding='async'
                      className='relative z-10 aspect-[16/9] w-full max-w-2xl rounded-xl'
                    />

                    {/* Live Website Dynamic Tooltip / Badge */}
                    <span
                      className='ease-jump absolute -top-12 left-1/2 z-20 mt-2 flex w-max -translate-x-1/2 items-center gap-1 rounded px-2 py-1 text-sm font-semibold duration-200 after:absolute after:-bottom-2 after:left-1/2 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:bg-inherit md:top-5 md:text-base md:group-hover:-top-12'
                      style={{
                        backgroundColor: project.color,
                        color: '#000',
                      }}
                    >
                      {project.title}
                      <ExternalIcon />
                    </span>
                  </a>
                  {/* buttons below the image repo link and page speed insight */}
                  <div className='mt-2 flex w-full flex-wrap items-center justify-center gap-3 md:absolute md:-bottom-12 md:left-1/2 md:-translate-x-1/2'>
                    {project.repoLink && (
                      <Button href={project.repoLink} ariaLabel='Visit my project performance'>
                        Source Code
                      </Button>
                    )}

                    {project.pageSpeedLink && (
                      <Button href={project.pageSpeedLink} ariaLabel='Visit my project performance'>
                        PageSpeed Report
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className='flex w-full flex-col gap-2 sm:w-1/2'>
                <h4 className='text-2xl font-bold tracking-wide md:text-4xl' style={{ color: project.color }}>
                  {project.title}
                </h4>

                <span
                  className='mt-1 block text-sm font-medium opacity-85 md:text-base'
                  style={{ color: project.color }}
                >
                  ({project.subtitle})
                </span>

                <p className='mt-3 text-left text-sm leading-relaxed text-[#ddd] opacity-90 md:text-base'>
                  {project.description}
                </p>
                {/* Key Highlights */}
                <h3 className='py-2 text-xl font-bold text-cyan-400'>Key Highlights</h3>

                {/* Grid layout use karne se content auto 2-columns me badal jayega (desktop par) */}
                <div className='grid-cols grid gap-x-6 gap-y-2.5 pr-2 text-sm text-[#ddd] md:grid-cols-2'>
                  {project.keyHighlights.map((highlight, index) => (
                    <div key={index} className='flex items-start gap-2'>
                      {/* Custom Clean Bullet Point */}
                      <span className='text-base leading-none font-bold text-cyan-400'>•</span>
                      <span className='leading-relaxed'>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* TECH STACK */}
                <h3 className='py-2 text-xl font-bold text-white/90'>Tech Stack</h3>
                <ul className='flex flex-wrap gap-2 text-[#ddd]'>
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className='cursor-default rounded-md border border-[#1788fe]/30 bg-[#1788fe]/20 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_0_10px_rgba(23,136,254,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#1788fe]/40'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        <div className='absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-[#1788ae] sm:block'></div>
      </section>
    </>
  );
};

export default MyProjects;
