import { lazy, useEffect, useState, Suspense } from 'react';
import Button from '../animations/Button';

// Core Dynamic Lazy Components
const MatterScene = lazy(() => import('../animations/MatterScene'));
const AboutModal = lazy(() => import('./AboutModel'));

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <section className='main-section relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between overflow-x-hidden bg-[#121212]'>
      {/* Dynamic Background Animation Guarded by Suspense */}
      <Suspense fallback={<div className='absolute inset-0 animate-pulse bg-transparent' />}>
        <MatterScene />
      </Suspense>

      {/* Header Layout */}
      <header className='relative z-10 mx-auto my-10 flex w-11/12 items-center justify-between'>
        <a
          href='/'
          aria-label='Go to home page'
          className='pointer-events-auto transition-transform hover:scale-105'
        >
          <img
            src='/msf-logo-small.webp'
            alt='Logo'
            loading='eager'
            decoding='sync'
            //  2. Always set width + height
            width='64'
            height='64'
            className='h-16 w-16 rounded-2xl bg-white object-contain p-1 [contain:layout_paint]'
          />
        </a>

        {/* Right Action Trigger with Safe Fallback */}
        <div className='relative flex gap-4 text-white'>
          <Button href='/MaganSingh_resume.pdf' download={true} aria-label='Download resume of Magan Singh'>
            Resume
          </Button>
        </div>
      </header>

      {/* Hero Core Content */}
      <div className='mx-auto my-auto flex w-11/12 overflow-hidden'>
        {/*  MASTER RESPONSIVE WRAPPER WITH CONTAINMENT */}
        <picture className='pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 select-none md:top-1/2'>
          {/* Laptop/Badi screen ke liye */}
          <source media='(min-width: 1024px)' srcSet='/msf-logo-96.webp' />
          {/* Tablet ke liye */}
          <source media='(min-width: 640px)' srcSet='/msf-logo-68.webp' />
          {/* Default / Mobile ke liye (148px) */}
          <img
            src='/msf-logo-148.webp'
            alt='Magan Singh Logo'
            loading='eager'
            decoding='async'
            className='h-[148px] w-[148px] object-contain sm:h-68 sm:w-68 md:max-w-full lg:h-96 lg:w-96'
          />
        </picture>
        {/* Content Panel: Optimized margins to fit seamlessly on smaller iPhone/Android viewports */}
        <div className='z-10 mx-auto flex w-full max-w-7xl items-center justify-between'>
          <div className='flex flex-col gap-1 px-2 text-white'>
            <h2 className='pointer-events-none text-4xl leading-tight sm:text-5xl'>
              Magan <br />
              Singh
            </h2>

            <h3 className='pointer-events-none my-4 text-slate-300 italic md:my-8'>
              React Frontend Developer
            </h3>

            <Button
              onClick={() => setIsModalOpen(true)}
              className='group relative my-2 font-extrabold duration-100 ease-in-out hover:scale-110'
            >
              About Me
              <svg
                version='1.1'
                x='0px'
                y='0px'
                width='44'
                height='44'
                viewBox='0 0 90 90'
                className='absolute top-1/2 -right-12 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:-right-14'
                aria-hidden='true'
              >
                <g transform='translate(0,-952.36218)'>
                  <path
                    style={{
                      textIndent: 0,
                      textTransform: 'none',
                      direction: 'ltr',
                      blockProgression: 'tb',
                      baselineShift: 'baseline',
                      color: '#000000',
                      enableBackground: 'accumulate',
                    }}
                    d='m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z'
                    fill='#fff'
                    fillOpacity={1}
                    stroke='white'
                    strokeWidth='2'
                  />
                </g>
              </svg>
            </Button>
          </div>

          {/* Social Icons Stack */}
          <ul className='flex flex-col items-center justify-center gap-8 px-4 text-[#b0b2c3] sm:self-auto lg:gap-16'>
            <li>
              <a
                href='https://www.linkedin.com/in/maganstackforge/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit my LinkedIn profile'
                className='transition-colors hover:text-white'
              >
                <svg className='h-9 w-9' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path
                    fill='currentColor'
                    d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='mailto:magan.stackforge@gmail.com'
                aria-label='Send me an email'
                className='transition-colors hover:text-white'
              >
                <svg className='h-9 w-9' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path
                    fill='currentColor'
                    d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://www.github.com/maganstackforge'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit my GitHub profile'
                className='transition-colors hover:text-white'
              >
                <svg
                  className='h-9 w-9'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 496 512'
                  fill='currentColor'
                >
                  <path d='M248 8C111 8 0 119 0 256c0 109.8 71.2 202.9 170 235.8 12.4 2.3 17-5.4 17-12v-42.2c-69.2 15-83.8-33.4-83.8-33.4-11.3-28.7-27.6-36.4-27.6-36.4-22.5-15.4 1.7-15.1 1.7-15.1 24.9 1.8 38 25.6 38 25.6 22.2 38 58.2 27 72.4 20.7 2.2-16.1 8.7-27 15.8-33.2-55.2-6.3-113.3-27.6-113.3-122.8 0-27.1 9.7-49.2 25.5-66.5-2.6-6.3-11-31.5 2.4-65.7 0 0 20.8-6.7 68.2 25.4 19.8-5.5 41-8.2 62.1-8.3 21 .1 42.3 2.8 62.1 8.3 47.3-32.1 68.1-25.4 68.1-25.4 13.5 34.2 5.1 59.4 2.5 65.7 15.9 17.3 25.5 39.4 25.5 66.5 0 95.4-58.2 116.5-113.6 122.7 8.9 7.7 16.8 22.9 16.8 46.1v68.3c0 6.7 4.5 14.4 17.2 12C424.9 458.8 496 365.7 496 256 496 119 385 8 248 8z' />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dynamic Modal Injection guarded safely by Suspense wrapper */}
      {isModalOpen && (
        <Suspense fallback={<div className='animate-pulse text-white/60'>Loading...</div>}>
          <AboutModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Suspense>
      )}

      {/* Bottom Navigation Control */}
      <div className="relative flex w-11/12 justify-center self-center after:absolute after:top-[100px] after:left-1/2 after:h-5 after:w-[2px] after:-translate-x-1/2 after:bg-[#444] after:content-['']">
        <Button
          onClick={() => {
            const projectSection = document.getElementById('myProject');
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className='group relative mb-22 font-extrabold duration-100 ease-in-out hover:scale-110'
        >
          Latest Works
          <svg
            version='1.1'
            x='0px'
            y='0px'
            width='44'
            height='44'
            viewBox='0 0 100 100'
            className='absolute top-11 left-1/2 -translate-x-1/2 rotate-90 transition-all duration-300 ease-in-out group-hover:top-13'
            aria-hidden='true'
          >
            <g transform='translate(0,-952.36218)'>
              <path
                style={{
                  textIndent: 0,
                  textTransform: 'none',
                  direction: 'ltr',
                  blockProgression: 'tb',
                  baselineShift: 'baseline',
                  color: '#000000',
                  enableBackground: 'accumulate',
                }}
                d='m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z'
                fill='#fff'
                fillOpacity={1}
                stroke='white'
                strokeWidth='2'
              />
            </g>
          </svg>
        </Button>
      </div>

      {/* Floating Elements (Kept safe outside container layout) */}
      <a
        href='https://wa.me/9838684946?text=Hi,%20How%20are%20you?'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed right-3 bottom-18 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#20ba5a] sm:right-6 sm:bottom-6'
        aria-label='Chat on WhatsApp'
      >
        <svg
          aria-hidden='true'
          focusable='false'
          className='h-6 w-6'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
          />
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
