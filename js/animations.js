const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const heroStory = document.querySelector("[data-hero-story]");

if (heroStory) {
  const STATIC_HERO_BREAKPOINT = 960;
  let animationTimeout = null;
  let returnTimeout = null;
  let storyState = "initial";

  const shouldUseStaticHero = () =>
    window.innerWidth <= STATIC_HERO_BREAKPOINT ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const resetHeroStory = () => {
    window.clearTimeout(animationTimeout);
    window.clearTimeout(returnTimeout);
    animationTimeout = null;
    returnTimeout = null;
    storyState = "initial";
    heroStory.classList.remove("is-animating", "is-complete", "is-returning", "is-static");
  };

  const setStaticHeroStory = () => {
    if (storyState === "static") {
      return;
    }

    window.clearTimeout(animationTimeout);
    window.clearTimeout(returnTimeout);
    animationTimeout = null;
    returnTimeout = null;
    storyState = "static";
    heroStory.classList.remove("is-animating", "is-complete", "is-returning");
    heroStory.classList.add("is-static");
  };

  const finishReturnHeroStory = () => {
    window.clearTimeout(returnTimeout);
    returnTimeout = null;
    storyState = "initial";
    heroStory.classList.remove("is-returning", "is-complete", "is-animating");
  };

  const completeHeroStory = () => {
    storyState = "complete";
    heroStory.classList.remove("is-animating");
    heroStory.classList.add("is-complete");
  };

  const returnHeroStory = () => {
    if (storyState === "initial" || storyState === "returning") {
      return;
    }

    window.clearTimeout(animationTimeout);
    animationTimeout = null;
    storyState = "returning";
    heroStory.classList.remove("is-animating");
    heroStory.classList.add("is-complete", "is-returning");
    returnTimeout = window.setTimeout(finishReturnHeroStory, 760);
  };

  const startHeroStory = () => {
    if (storyState !== "initial") {
      return;
    }

    storyState = "animating";
    heroStory.classList.add("is-animating");
    animationTimeout = window.setTimeout(completeHeroStory, 2150);
  };

  const syncHeroStory = () => {
    if (shouldUseStaticHero()) {
      setStaticHeroStory();
      return;
    }

    if (storyState === "static") {
      resetHeroStory();
    }

    const storyRect = heroStory.getBoundingClientRect();

    if (window.scrollY <= 90 || storyRect.top >= -12) {
      returnHeroStory();
      return;
    }

    const heroInView =
      storyRect.top < window.innerHeight * 0.35 &&
      storyRect.bottom > window.innerHeight * 0.55;

    if (heroInView) {
      startHeroStory();
    }
  };

  window.addEventListener("scroll", syncHeroStory, { passive: true });
  window.addEventListener("resize", syncHeroStory);
  window.addEventListener("load", syncHeroStory);
}
