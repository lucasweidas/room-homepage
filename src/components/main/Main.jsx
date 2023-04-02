import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sections } from './sectionsData';
import aboutDarkImg from '/assets/images/image-about-dark.jpg';
import aboutLightImg from '/assets/images/image-about-light.jpg';

const variantsTransition = {
  duration: 0.3,
  ease: 'linear',
};
const slideVariants = {
  hidden: direction => {
    return {
      x: direction > 0 ? '100%' : '-100%',
    };
  },
  visible: {
    x: '0%',
    zIndex: 1,
    transition: variantsTransition,
  },
  exit: {
    scale: 0.8,
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    transition: variantsTransition,
  },
};
const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    zIndex: 1,
    transition: variantsTransition,
  },
  exit: {
    opacity: 0,
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};

export default function Main({ isLarge }) {
  const [[index, direction], setPage] = useState([0, 0]);
  const current = sections[index];

  function handleChangeSection({ target }) {
    switch (target.id) {
      case 'previous-button':
        setPage([index === 0 ? sections.length - 1 : index - 1, -1]);
        break;
      case 'next-button':
        setPage([index === sections.length - 1 ? 0 : index + 1, 1]);
        break;
    }
  }

  return (
    <main>
      <section className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="relative w-full overflow-hidden pb-[96%] lg:self-start lg:pb-[63.57142857142857%]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              className="absolute inset-0 w-full"
              key={index}
              src={current.image[isLarge ? 'large' : 'small']}
              alt={current.image.alt}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
        </div>
        <div className="relative lg:flex lg:flex-col lg:justify-center">
          <AnimatePresence initial={false}>
            <motion.div
              className="px-8 py-14 md:p-20 lg:p-8 xl:p-14 1.5xl:px-[5.5rem] 1.5xl:py-28"
              key={index}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-4xl font-semibold text-black lg:leading-none xl:text-5xl">{current.title}</h1>
              <p className="mt-3 text-neutral-400 xl:mt-5">{current.description}</p>
              <a
                className="mt-8 flex w-fit items-center gap-6 font-semibold text-black transition-colors hover:text-neutral-400 focus-visible:text-neutral-400 lg:mt-5 xl:mt-6"
                href="#"
              >
                <span className="text-lg uppercase tracking-[0.5em] lg:text-base lg:tracking-[0.7em]">Shop now</span>
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
          <div
            className="lg absolute -top-14 right-0 z-10 flex lg:-left-28 lg:bottom-0 lg:right-auto lg:top-auto xl:-left-40 1.5xl:left-0"
            onClick={handleChangeSection}
          >
            <button
              className="flex h-14 w-14 items-center justify-center bg-black transition-colors hover:bg-neutral-700 focus-visible:bg-neutral-700 xl:h-20 xl:w-20"
              id="previous-button"
              aria-label="Previous section"
            >
              <svg className="pointer-events-none h-5 w-2.5 xl:h-6 xl:w-3.5" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
              </svg>
            </button>
            <button
              className="flex h-14 w-14 items-center justify-center bg-black transition-colors hover:bg-neutral-700 focus-visible:bg-neutral-700 xl:h-20 xl:w-20"
              id="next-button"
              aria-label="Next section"
            >
              <svg className="pointer-events-none h-5 w-2.5 xl:h-6 xl:w-3.5" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-[1fr_1.35fr_1fr]">
        <div>
          <img className="w-full lg:h-full lg:object-cover" src={aboutDarkImg} alt="A bedroom with a double bed and two chairs around a table." />
        </div>
        <div className="px-8 py-12 md:max-lg:p-20 lg:flex lg:flex-col lg:justify-center xl:px-12 xl:py-16">
          <h2 className="font-bold uppercase tracking-[0.2em] lg:tracking-[0.5em]">About our furniture</h2>
          <p className="mt-3 text-neutral-400">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best
            express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
            Product specialists are available to help you create your dream space.
          </p>
        </div>
        <div>
          <img className="w-full lg:h-full lg:object-cover" src={aboutLightImg} alt="A white chair on a white background." />
        </div>
      </section>
    </main>
  );
}
