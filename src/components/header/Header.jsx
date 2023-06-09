import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variantsTransition = {
  duration: 0.2,
  ease: 'linear',
};
const mobileGuideVariants = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: variantsTransition,
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: variantsTransition,
  },
};
const largeVariants = {
  hidden: false,
  visible: false,
  exit: false,
};
const mobileOverlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: variantsTransition,
  },
  exit: {
    opacity: 0,
    transition: variantsTransition,
  },
};

export default function Header({ isLarge }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleGuide({ target }) {
    switch (target.id) {
      case 'open-button':
      case 'close-button':
      case 'header-guide':
        setIsOpen(!isOpen);
        if (!isOpen) {
          document.body.classList.add('overflow-y-hidden');
        } else {
          document.body.classList.remove('overflow-y-hidden');
        }
        break;
    }
  }

  return (
    <header className="relative">
      <nav className="absolute inset-x-0 top-0 z-30 flex items-center px-6 pt-11 lg:gap-14 lg:px-16 lg:pt-16" onClick={handleToggleGuide}>
        {!isLarge && (
          <button id="open-button" aria-label="Toggle guide" aria-haspopup="true" aria-pressed={isOpen}>
            <svg className="pointer-events-none" width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fillRule="evenodd" />
            </svg>
          </button>
        )}
        <a className="mx-auto lg:mx-0" href="./" aria-label="Homepage">
          <svg width="62" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </a>
        <AnimatePresence initial={false}>
          {(isOpen || isLarge) && (
            <motion.div
              className="fixed inset-0 bg-[hsla(0,0%,0%,0.4)] lg:static lg:bg-transparent"
              id="header-guide"
              variants={isLarge ? largeVariants : mobileOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-6 bg-white px-6 py-11 max-xsm:flex-col max-xsm:items-start lg:bg-transparent lg:p-0"
                variants={isLarge ? largeVariants : mobileGuideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {!isLarge && (
                  <button id="close-button" aria-label="Close guide" aria-expanded={isOpen} aria-controls="header-guide">
                    <svg className="pointer-events-none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                        fill="#000"
                        fillRule="evenodd"
                        opacity=".201"
                      />
                    </svg>
                  </button>
                )}
                <ul className="flex items-center gap-x-7 gap-y-4 max-xsm:mx-auto max-xsm:flex-col lg:gap-8 lg:text-white">
                  <li>
                    <a
                      className="relative font-bold lowercase lg:font-medium lg:after:pointer-events-none lg:after:absolute lg:after:-bottom-2 lg:after:left-[50%] lg:after:h-0.5 lg:after:w-4 lg:after:translate-x-[-50%] lg:after:scale-x-0 lg:after:bg-current lg:after:transition-transform lg:hover:after:scale-x-100"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative font-bold lowercase lg:font-medium lg:after:pointer-events-none lg:after:absolute lg:after:-bottom-2 lg:after:left-[50%] lg:after:h-0.5 lg:after:w-4 lg:after:translate-x-[-50%] lg:after:scale-x-0 lg:after:bg-current lg:after:transition-transform lg:hover:after:scale-x-100"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative font-bold lowercase lg:font-medium lg:after:pointer-events-none lg:after:absolute lg:after:-bottom-2 lg:after:left-[50%] lg:after:h-0.5 lg:after:w-4 lg:after:translate-x-[-50%] lg:after:scale-x-0 lg:after:bg-current lg:after:transition-transform lg:hover:after:scale-x-100"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative font-bold lowercase lg:font-medium lg:after:pointer-events-none lg:after:absolute lg:after:-bottom-2 lg:after:left-[50%] lg:after:h-0.5 lg:after:w-4 lg:after:translate-x-[-50%] lg:after:scale-x-0 lg:after:bg-current lg:after:transition-transform lg:hover:after:scale-x-100"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
