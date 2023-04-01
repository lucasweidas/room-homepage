import mobileHero1Img from '/assets/images/mobile-image-hero-1.jpg';
import mobileHero2Img from '/assets/images/mobile-image-hero-1.jpg';
import mobileHero3Img from '/assets/images/mobile-image-hero-1.jpg';
import aboutDarkImg from '/assets/images/image-about-dark.jpg';
import aboutLightImg from '/assets/images/image-about-light.jpg';

export default function Main() {
  return (
    <main>
      <section className="flex flex-col">
        <div>
          <img className="w-full" src={mobileHero1Img} alt="" />
        </div>
        <div className="relative px-8 py-14">
          <h2 className="text-4xl font-semibold text-black">Discover innovative ways to decorate</h2>
          <p className="mt-3 text-neutral-400">
            We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your
            vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
          </p>
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
          <div className="absolute -top-14 right-0 flex">
            <button
              className="flex h-14 w-14 items-center justify-center bg-black transition-colors hover:bg-neutral-700 focus-visible:bg-neutral-700"
              aria-label="Previous product"
            >
              <svg className="h-5 w-2.5" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
              </svg>
            </button>
            <button
              className="flex h-14 w-14 items-center justify-center bg-black transition-colors hover:bg-neutral-700 focus-visible:bg-neutral-700"
              aria-label="Next product"
            >
              <svg className="h-5 w-2.5" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
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
