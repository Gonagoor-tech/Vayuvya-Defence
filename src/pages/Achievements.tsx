import React, { useEffect, useRef } from "react";

/**
 * Achievements - marquee/strip style scrolling achievements component
 * Expects images to live in public/lovable-uploads:
 *  - jet.jpg
 *  - certificate1.jpg
 *  - productBts.jpg
 *  - drdo.jpg
 *  - Gt.jpg
 *  - gonagoor.jpg
 *  - elevate.jpg
 *  - inspace.jpg
 *  - south.jpg
 *
 * This version uses a JS animation loop (requestAnimationFrame) to translate the strip
 * by the measured pixel width of the first set of items — avoids width:max-content while
 * ensuring all items (including newly added ones) appear.
 */

const items = [
  { id: 1, title: "DPIIT Recognised Defence Startup", img: `${import.meta.env.BASE_URL}lovable-uploads/certificate1.jpg`, desc: "Recognised by the Department for Promotion of Industry and Internal Trade (DPIIT) as an authorised defence startup, validating our innovation, credibility, and contribution to India’s strategic technology ecosystem." },
  { id: 2, title: "Product launch at Bengaluru Tech Summit 2025", img: `${import.meta.env.BASE_URL}lovable-uploads/productBts.jpg`, desc: "Officially unveiled our flagship product at the prestigious Bengaluru Tech Summit 2025, showcasing breakthrough innovation to global industry leaders, investors, and technology partners." },
  { id: 3, title: "Completed assembly of indigenously developed jet engine", img: `${import.meta.env.BASE_URL}lovable-uploads/jet.jpg`, desc: "Successfully completed the full assembly of our in-house developed jet engine, marking a major milestone toward testing and validation of India’s next-generation propulsion technology." },
  { id: 4, title: "DRDO collaboration in progress for M.A.L.E UAV", img: `${import.meta.env.BASE_URL}lovable-uploads/drdo.jpg`, desc: "Currently collaborating with DRDO on next-generation Medium Altitude Long Endurance UAV development." },
  { id: 5, title: "Tight GTRE collaboration for engine requirements of Indian Defence", img: `${import.meta.env.BASE_URL}lovable-uploads/Gt.jpg`, desc: "Working closely with GTRE to develop and supply advanced propulsion systems for strategic defence applications." },
  { id: 6, title: "R&D and pre-seed funding by Gonagoor Technologies", img: `${import.meta.env.BASE_URL}lovable-uploads/gonagoor.jpg`, desc: "Backed by Gonagoor Technologies with dedicated R&D and pre-seed funding to accelerate product development." },
  { id: 7, title: "Elevate 2025 Finalist", img: `${import.meta.env.BASE_URL}lovable-uploads/elevate.jpg`, desc: "Recognized among the top startups in Elevate 2025 for innovation and technological impact." },
  { id: 8, title: "InSpace validated design of satellites", img: `${import.meta.env.BASE_URL}lovable-uploads/inspace.jpg`, desc: "Our satellite design successfully passed InSpace validation, demonstrating reliability and readiness for space applications." },
  { id: 9, title: "South Park Commons Demo Night Finalists 2025", img: `${import.meta.env.BASE_URL}lovable-uploads/south.jpg`, desc: "Selected as finalists at the South Park Commons Demo Night 2025 for breakthrough technology demonstration." },
  { id: 10, title: "2400°C temperature on off-the-shelf aluminium — a world record", img: `${import.meta.env.BASE_URL}lovable-uploads/2000.jpg`, desc: "Achieved a world-record 2400°C temperature endurance using standard aluminium through proprietary engineering and thermal R&D." },
];

const Achievements: React.FC = () => {
  // duplicate items for smooth loop
  const loopItems = [...items, ...items];

  // refs
  const trackRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const animationState = useRef({
    rafId: 0 as number | null,
    lastTime: 0,
    pxPerSec: 120, // base speed in pixels per second (adjust to taste)
    offset: 0,
    firstSetWidth: 0,
    paused: false,
  });

  useEffect(() => {
    const track = trackRef.current;
    const list = listRef.current;
    if (!track || !list) return;

    // measure pixel width of first set of items (sum widths of first `items.length` children)
    const children = Array.from(list.children) as HTMLElement[];
    // children length is items.length * 2
    const firstSetChildren = children.slice(0, items.length);
    let firstSetWidth = 0;
    firstSetChildren.forEach((c) => {
      firstSetWidth += c.getBoundingClientRect().width + parseFloat(getComputedStyle(c).marginRight || "0");
    });

    // fallback: if computed width is 0 for some reason, estimate using scrollWidth / 2
    if (!firstSetWidth) {
      firstSetWidth = list.scrollWidth / 2;
    }
    animationState.current.firstSetWidth = firstSetWidth;
    animationState.current.offset = 0;
    animationState.current.lastTime = performance.now();

    // allow speed tuning: pxPerSec derived from desired loop duration (optional)
    // e.g., if you want one full firstSet to pass in ~14s: pxPerSec = firstSetWidth / 14
    const desiredSeconds = 30;
    animationState.current.pxPerSec = Math.max(60, firstSetWidth / desiredSeconds); // min speed guard

    // animation loop
    const step = (now: number) => {
      if (animationState.current.paused) {
        animationState.current.lastTime = now;
        animationState.current.rafId = requestAnimationFrame(step);
        return;
      }
      const dt = (now - animationState.current.lastTime) / 1000; // seconds
      animationState.current.lastTime = now;
      const move = animationState.current.pxPerSec * dt;
      let newOffset = animationState.current.offset + move;

      // if we've scrolled one first-set width, reset offset (loop)
      if (animationState.current.firstSetWidth > 0 && newOffset >= animationState.current.firstSetWidth) {
        newOffset = newOffset - animationState.current.firstSetWidth;
      }

      animationState.current.offset = newOffset;

      // apply transform (negative to move left)
      list.style.transform = `translateX(${-animationState.current.offset}px)`;

      animationState.current.rafId = requestAnimationFrame(step);
    };

    // start
    animationState.current.rafId = requestAnimationFrame(step);

    // pause on hover / focus
    const setPaused = (p: boolean) => {
      animationState.current.paused = p;
    };
    track.addEventListener("mouseenter", () => setPaused(true));
    track.addEventListener("mouseleave", () => setPaused(false));
    track.addEventListener("focusin", () => setPaused(true));
    track.addEventListener("focusout", () => setPaused(false));

    // cleanup
    return () => {
      if (animationState.current.rafId) cancelAnimationFrame(animationState.current.rafId);
      track.removeEventListener("mouseenter", () => setPaused(true));
      track.removeEventListener("mouseleave", () => setPaused(false));
      track.removeEventListener("focusin", () => setPaused(true));
      track.removeEventListener("focusout", () => setPaused(false));
    };
  }, []);

  return (
    <section className="relative py-10 md:py-14 overflow-hidden" aria-labelledby="achievements-heading">
      {/* faint background */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/lite.png')`, opacity: 0.03 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        <h2 id="achievements-heading" className="text-2xl sm:text-3xl md:text-4xl font-[200] text-white mb-6">
          Milestones & Achievements
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-3xl mb-6">
          A snapshot of our progress — certified recognitions, flagship product launches, and engineering milestones that drive India’s defence innovation forward.
        </p>

        {/* Scroll container */}
        <div className="relative">
          {/* The visible window */}
          <div
            ref={trackRef}
            className="overflow-hidden rounded-2xl border border-gray-800/60 bg-gradient-to-br from-black/60 to-black/70"
            role="region"
            aria-label="Achievements marquee — hover to pause"
            tabIndex={0}
          >
            {/* Track that will animate */}
            <div
              ref={listRef}
              className="flex items-stretch gap-6 py-6 px-6"
              // we intentionally do NOT set width:max-content here (keeping layout identical)
              // JS handles the translate loop using measured pixel width
            >
              {loopItems.map((item, idx) => (
                <article
                  key={`${item.id}-${idx}`}
                  className="group min-w-[320px] sm:min-w-[360px] md:min-w-[420px] bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-gray-700/50 overflow-hidden transform transition-transform duration-150 hover:scale-[1.02]"
                  aria-label={item.title}
                  aria-hidden={idx >= items.length ? true : undefined}
                >
                  <div className="w-full h-40 md:h-52 overflow-hidden">
                    <img
  src={item.img}
  alt={item.title}
  className={
    item.id === 6 || item.id === 7
      ? "w-full h-full object-contain p-2 transition-transform duration-200"
      : "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
  }
  onError={(e) => {
    (e.currentTarget as HTMLImageElement).style.opacity = "0.15";
  }}
/>

                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls row (left empty intentionally) */}
          <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

