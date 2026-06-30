import { Swiper, SwiperSlide } from 'swiper/react';

import freeCodeCamp from '../assets/images/free-code-camp.svg';
import qrImageJS from '../assets/images/qr-image-js.webp';
import qrImageCSS from '../assets/images/qr-image-css.webp';

import Button from '../animations/Button';

const certificates = [
  {
    id: 'js-algo',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'Issued by freeCodeCamp • June 19, 2025',
    image: freeCodeCamp,
    qrImage: qrImageJS,
    description:
      'Approx. 300 hours of coursework covering fundamental computer science concepts, OOP, and data structures.',
    verifyLink:
      'https://freecodecamp.org/certification/magan248/javascript-algorithms-and-data-structures-v8',
  },
  {
    id: 'responsive-css',
    title: 'Responsive Web Design',
    issuer: 'Issued by freeCodeCamp • February 17, 2025',
    image: freeCodeCamp,
    qrImage: qrImageCSS,
    description:
      'Approx. 300 hours of coursework covering semantic HTML, advanced CSS layout techniques (Flexbox and Grid), responsive typography, and web accessibility principles.',
    verifyLink: 'https://www.freecodecamp.org/certification/magan248/responsive-web-design',
  },
];

const Certification = () => {
  return (
    <section className='mx-auto min-h-[420px] w-full max-w-7xl overflow-hidden bg-[#0b1120] pb-12'>
      <h2 className='relative z-10 mx-auto rounded-3xl border-[#1788ae] bg-[#0b1120] px-4 py-2 text-center text-3xl font-bold text-[#1788fe] sm:w-max sm:border-2 sm:text-[40px]'>
        Certifications & Badges
      </h2>

      <Swiper
        loop={false}
        speed={1000}
        grabCursor={true}
        centeredSlides={false}
        spaceBetween={30}
        aria-label='Certificates slider'
        className='flex items-center justify-center py-14!'
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id} className='px-4'>
            <div className='flex justify-center'>
              <div className='flex w-full flex-col rounded-4xl bg-[#0b1120] p-6 shadow-[0_0px_20px_rgba(59,130,246,0.6)] will-change-transform md:max-w-5xl md:flex-row md:p-9'>
                <img
                  className='h-32 w-32 shrink-0 rounded-full object-cover drop-shadow-[0_0px_10px_rgba(59,130,246,1)] md:h-40 md:w-40'
                  src={certificate.image}
                  alt={`${certificate.title} badge`}
                  width={140}
                  height={140}
                  decoding='async'
                  loading='lazy'
                  fetchPriority='low'
                />

                <div className='relative flex w-full flex-col justify-between pt-6 text-left md:ml-6 md:pt-6'>
                  <div>
                    <p className='mb-4 text-sm leading-relaxed text-slate-300 md:text-base'>
                      “{certificate.description}”
                    </p>

                    <h3 className='text-right text-xl font-bold text-[#1788fe] md:text-4xl'>
                      {certificate.title}
                    </h3>

                    <p className='mt-1 text-right text-sm text-slate-400 md:text-base'>
                      {certificate.issuer}
                    </p>
                  </div>

                  <div className='mt-6 flex items-center justify-end gap-4 border-t border-slate-800 pt-4'>
                    <Button href={certificate.verifyLink}>Verify Certificate ↗</Button>

                    {certificate.qrImage && (
                      <div className='group relative cursor-pointer'>
                        <img
                          src={certificate.qrImage}
                          alt='Scan to verify QR'
                          width={96}
                          height={96}
                          loading='lazy'
                          fetchPriority='low'
                          className='h-20 w-20 shrink-0 rounded border border-slate-700 bg-white p-1 transition-transform duration-300 group-hover:scale-105'
                          decoding='async'
                        />
                        <span className='pointer-events-none absolute right-0 bottom-full mb-2 w-max rounded border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100'>
                          Scan to Verify
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certification;
