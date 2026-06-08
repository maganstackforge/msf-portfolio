import React, { Suspense } from 'react';
import HeroSection from './components/HeroSection';
import { Helmet } from 'react-helmet-async';

// Lazy load non-critical components to reduce the initial bundle size
const Certification = React.lazy(() => import('./components/Certification'));
const MyProjects = React.lazy(() => import('./components/MyProjects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
import { useInView } from 'react-intersection-observer';

// Placeholder component displayed while lazy-loaded sections are loading
const PageLoader = () => (
  <div className='flex animate-pulse items-center justify-center p-10 text-white/60'>Loading...</div>
);

function App() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });

  return (
    <>
      <Helmet>
        <title>Magan Singh | Frontend Developer</title>

        <meta
          name='description'
          content='Magan Singh Frontend Developer Portfolio showcasing React.js, JavaScript, Tailwind CSS projects and web development skills.'
        />
      </Helmet>

      <main className='w-full overflow-x-hidden text-white'>
        {/* 
        HeroSection is loaded immediately because it appears above the fold. 
        This critical rendering helps optimize the Largest Contentful Paint (LCP). 
      */}
        <HeroSection />
        <div ref={ref}>
          {inView && (
            <Suspense fallback={<PageLoader />}>
              <MyProjects />
            </Suspense>
          )}
        </div>
        <div ref={ref}>
          {inView && (
            <Suspense fallback={<PageLoader />}>
              <Certification />
            </Suspense>
          )}
        </div>

        <div ref={ref}>
          {inView && (
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          )}
        </div>
        <div ref={ref}>
          {inView && (
            <Suspense fallback={<PageLoader />}>
              <Footer />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
