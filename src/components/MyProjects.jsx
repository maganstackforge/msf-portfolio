import furniloEcom from '../assets/images/furnilo-ecom.webp';
import namrataUniversal from '../assets/images/namrata-universal.webp';
import globeScope from '../assets/images/globe-scope.webp';
import msTrackify from '../assets/images/ms-trackify.webp';
import quizForge from '../assets/images/quiz-forge.webp';

const projects = [
  {
    title: 'Furnilo',
    subtitle: 'Furniture App',
    description:
      'A modern furniture e-commerce web application with responsive UI, category-based product browsing, smooth navigation, and optimized user experience.',
    image: furniloEcom,
    link: 'https://furnilo.vercel.app/',
    color: '#38bdf8',
    position: 'left',
    technologies: [
      'react.js',
      'context api',
      'tailwind css',
      'javascript',
      'react-router-dom',
      'swiper.js',
      'figma',
    ],
  },
  {
    title: 'Namrata Universal',
    subtitle: 'Corporate Website Clone',
    description:
      'A modern and fully responsive web development company website showcasing services, portfolio, client engagement, and business solutions with smooth animations, optimized performance, and scalable component-based architecture.',
    image: namrataUniversal,
    link: 'https://namrataunivers.netlify.app/',
    color: '#34d399',
    position: 'right',
    technologies: [
      'react.js',
      'tailwind css',
      'javascript',
      'react-router-dom',
      'swiper.js',
      'aos',
      'react-helmet-async',
      'figma',
    ],
  },
  {
    title: 'Globe Scope',
    subtitle: 'REST Countries Explorer',
    description:
      'Built a responsive country explorer using React, Vite, and Tailwind CSS with country search, region filtering, dark/light theme support, lazy loading, skeleton loaders, custom hooks, and unit testing with Vitest.',
    image: globeScope,
    link: 'https://globescope.netlify.app/',
    color: '#22d3ee',
    position: 'left',
    technologies: ['react.js', 'tailwind css', 'vite', 'javascript', 'context api', 'rest api', 'Vitest'],
  },
  {
    title: 'MS Trackify',
    subtitle: 'Expense Tracker App',
    description:
      'Built a responsive Expense Tracker application using React.js and Vite that allows users to add, edit, delete, filter, and sort expenses efficiently. Implemented LocalStorage for persistent data storage, context menu interactions, reusable custom hooks, and a clean responsive UI with optimized component structure and testing support.',
    image: msTrackify,
    link: 'https://mstrackify.netlify.app/',
    color: '#4ade80',
    position: 'right',
    technologies: ['react.js', 'vite', 'javascript', 'tailwind css', 'localstorage', 'vitest'],
  },
  {
    title: 'Quiz App',
    subtitle: 'Interactive Quiz Application',
    description:
      'Developed a fully responsive and interactive Quiz Application using HTML, CSS, and JavaScript featuring multiple-choice questions, countdown timer with sound effects, animated result visualization, score sharing functionality, and responsive UI optimized for all screen sizes.',
    image: quizForge,
    link: 'https://quizappcircleresult.netlify.app/',
    color: '#60a5fa',
    position: 'left',
    technologies: ['html5', 'css3', 'javascript', 'responsive design', 'netlify', 'git'],
  },
];

const techClass =
  'border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base whitespace-nowrap';

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
        <h3 className='relative z-10 mx-auto w-max rounded-b-2xl border-[#1788ae] px-4 py-2 text-center text-3xl font-bold text-[#1788ae] sm:border-x-2 sm:border-b-2 sm:text-5xl'>
          Latest Works
        </h3>
      </div>

      <section className='relative mx-auto w-full max-w-7xl overflow-hidden bg-[#0b1120] px-4 pb-8 sm:pb-16'>
        {projects.map((project) => {
          const isRight = project.position === 'right';

          return (
            <div
              key={project.title}
              className={`relative mx-auto mt-12 flex w-11/12 flex-col items-center gap-8 sm:mt-20 sm:flex-row sm:gap-20 ${
                isRight ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* LINE */}
              <div
                className={`absolute top-1/2 hidden h-[1px] bg-[#1788ae] sm:block ${
                  isRight ? 'right-1/4 left-1/2' : 'right-1/2 left-1/4'
                }`}
              ></div>

              {/* DOT */}
              <div
                className='absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-[3px] bg-[#111] duration-100 ease-in-out hover:scale-110 sm:block'
                style={{ borderColor: project.color }}
              ></div>

              {/* IMAGE WRAPPER */}
              {/* FIXED: sm:w-1/2 diya taaki text aur image 50-50% space lein aur overflow na ho */}
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit ${project.title} website`}
                className='relative flex w-full justify-center sm:w-1/2'
              >
                <div
                  className={`group relative flex w-full flex-col items-center duration-200 ease-in-out hover:scale-105 ${
                    isRight ? 'sm:ml-auto' : 'sm:mr-auto'
                  }`}
                >
                  <img
                    className='relative z-10 h-auto w-full max-w-full object-contain drop-shadow-[0_0px_20px_rgba(59,130,246,0.6)] md:max-w-md'
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={600}
                    height={400}
                    loading='lazy'
                    decoding='async'
                  />

                  <span
                    className='ease-jump top-5 left-1/2 z-20 mt-2 flex w-max items-center gap-1 rounded px-2 py-1 text-sm duration-200 group-hover:-top-12 after:absolute after:-bottom-2 after:left-1/2 after:hidden after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:bg-inherit sm:absolute sm:-translate-x-1/2 sm:text-base sm:after:block'
                    style={{
                      backgroundColor: project.color,
                      color: '#000',
                    }}
                  >
                    {project.title}
                    <ExternalIcon />
                  </span>
                </div>
              </a>

              {/* CONTENT WRAPPER */}
              {/* FIXED: sm:w-1/2 kiya layout balance karne ke liye */}
              <div className='w-full sm:w-1/2'>
                <h4 className='md:text-4x text-2xl font-bold' style={{ color: project.color }}>
                  {project.title}
                </h4>

                <span className='mt-1 block text-base md:text-lg' style={{ color: project.color }}>
                  ({project.subtitle})
                </span>

                <p className='mt-2 text-justify text-sm text-[#ddd] opacity-90 md:text-base'>
                  {project.description}
                </p>

                {/* TECH STACK */}
                <ul className='mt-4 flex flex-wrap gap-2 text-[#ddd]'>
                  {project.technologies.map((tech) => (
                    <li key={tech} className={techClass}>
                      #{tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* CENTER LINE */}
        <div className='absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-[#1788ae] sm:block'></div>
      </section>
    </>
  );
};

export default MyProjects;
