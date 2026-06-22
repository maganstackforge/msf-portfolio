function Button({ children, href, download = false, type = 'button', onClick, className = '', ariaLabel }) {
  const Component = href ? 'a' : 'button';

  const attributes = href
    ? {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
        download,
        'aria-label': ariaLabel,
      }
    : {
        type,
        onClick,
        'aria-label': ariaLabel,
      };

  return (
    <Component
      {...attributes}
      className={`flex w-fit items-center justify-center gap-2 rounded-xl border border-[#1788fe]/30 bg-[#1788fe]/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-[0_0_10px_rgba(23,136,254,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#1788fe]/30 md:text-base ${className}`}
    >
      {children}
    </Component>
  );
}

export default Button;
