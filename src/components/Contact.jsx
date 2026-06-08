import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu';
import Button from '../animations/Button';
export default function Contact() {
  // Handle form submission safely
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., Formspree, Web3Forms, or EmailJS)
  };

  return (
    <section className='form-container mx-auto w-full max-w-7xl bg-[#0b1120] px-4 pb-8 lg:px-20'>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1120] via-[#101a35] to-blue-950 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:grid-cols-2 lg:gap-16 lg:p-12'>
        {/* Left Side - Contact Information */}
        <div className='flex flex-col justify-center'>
          <h2 className='pb-8 text-4xl font-bold'>
            Let's <span className='text-blue-400'>Connect</span>
          </h2>
          <p className='mb-6'>
            Have a project in mind or looking to collaborate? Feel free to send a message or reach out
            directly.
          </p>
          {/* OPTIMIZATION: Structured flex layouts for icons to avoid forced reflows and layout shifting */}
          <div className='space-y-4 text-slate-200'>
            <p className='flex items-center gap-3'>
              <span className='text-blue-400' aria-hidden='true'>
                <LuMail size={20} />
              </span>
              magan.stackforge@gmail.com
            </p>
            <p className='flex items-center gap-3'>
              <span className='text-blue-400' aria-hidden='true'>
                <LuPhone size={20} />
              </span>
              +91-9838684946
            </p>
            <p className='flex items-center gap-3'>
              <span className='text-blue-400' aria-hidden='true'>
                <LuMapPin size={20} />
              </span>
              Mukharji Nagar, New Delhi, India
            </p>
          </div>
          <div className='mt-6 flex gap-4'>
            <Button href='https://github.com/Maganstackforge' ariaLabel='Visit my GitHub profile'>
              <FaGithub size={30} aria-hidden='true' />
            </Button>
            <Button href='https://www.linkedin.com/in/maganstackforge' ariaLabel='Visit my LinkedIn profile'>
              <FaLinkedin size={30} aria-hidden='true' />
            </Button>
          </div>
        </div>

        {/* Right Side - Interactive Form */}
        {/* OPTIMIZATION: Added onSubmit handler and native browser validation attributes */}
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label htmlFor='name' className='mb-2 block font-medium'>
              Name
            </label>
            <input
              id='name'
              type='text'
              required
              autoComplete='name'
              placeholder='Enter your name'
              className='w-full rounded-xl border border-blue-500/10 bg-white/5 px-4 py-3 text-base text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition-all duration-300 ease-out placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none'
            />
          </div>

          <div>
            <label htmlFor='email' className='mb-2 block font-medium'>
              Email
            </label>
            <input
              id='email'
              type='email'
              required
              autoComplete='email'
              placeholder='name@gmail.com'
              className='w-full rounded-xl border border-blue-500/10 bg-white/5 px-4 py-3 text-base text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition-all duration-300 ease-out placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none'
            />
          </div>

          <div>
            <label htmlFor='message' className='mb-2 block font-medium'>
              Message
            </label>
            <textarea
              rows='4'
              id='message'
              required
              placeholder='Write your message...'
              className='w-full rounded-xl border border-blue-500/10 bg-white/5 px-4 py-3 text-base text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition-all duration-300 ease-out placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none'
            ></textarea>
          </div>

          <Button type='submit'>Send Message</Button>
        </form>
      </div>
    </section>
  );
}
