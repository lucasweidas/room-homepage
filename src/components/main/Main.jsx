import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sections } from './sectionsData';
import aboutDarkImg from '/assets/images/image-about-dark.jpg';
import aboutLightImg from '/assets/images/image-about-light.jpg';

const variants = {
  hidden: direction => {
    return {
      x: direction > 0 ? '100%' : '-100%',
    };
  },
  visible: {
    x: '0%',
    zIndex: 1,
  },
  exit: direction => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      position: 'absolute',
      inset: 0,
      zIndex: 0,
    };
  },
};

export default function Main() {
  const [[index, direction], setPage] = useState([0, 0]);

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
      <section className="relative flex flex-col overflow-hidden">
        <div className="relative w-full pb-[96%]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={index}
              className="absolute inset-0 w-full"
              src={sections[index].images.small}
              alt=""
              custom={direction}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: 'linear',
              }}
            />
          </AnimatePresence>
        </div>
        <div className="relative px-8 py-14">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: 'linear',
              }}
            >
              <h2 className="text-4xl font-semibold text-black">{sections[index].title}</h2>
              <p className="mt-3 text-neutral-400">{sections[index].description}</p>
            </motion.div>
          </AnimatePresence>
          <a
            className="mt-8 flex w-fit items-center gap-6 font-semibold text-black transition-colors hover:text-neutral-400 focus-visible:text-neutral-400"
            href="#"
          >
            <span className="text-lg uppercase tracking-[0.5em]">Shop now</span>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </a>
          <div className="absolute -top-14 right-0 z-10 flex" onClick={handleChangeSection}>
            <button
              className="flex h-14 w-14 items-center justify-center bg-black transition-colors hover:bg-neutral-700 focus-visible:bg-neutral-700"
              id="previous-button"
              aria-label="Previous section"
            >
              <svg className="pointer-events-none h-5 w-2.5" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
              </svg>
            </button>
            <button
              className="flex h-14 w-14 items-center justify-center bg-black transition-colors hover:bg-neutral-700 focus-visible:bg-neutral-700"
              id="next-button"
              aria-label="Next section"
            >
              <svg className="pointer-events-none h-5 w-2.5" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <img className="w-full" src={aboutDarkImg} alt="" />
        </div>
        <div className="px-8 py-12">
          <h2 className="font-bold uppercase tracking-[0.2em]">About our furniture</h2>
          <p className="mt-3 text-neutral-400">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best
            express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
            Product specialists are available to help you create your dream space.
          </p>
        </div>
        <div>
          <img className="w-full" src={aboutLightImg} alt="" />
        </div>
      </section>
    </main>
  );
}
