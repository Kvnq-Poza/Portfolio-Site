// Counter

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      const value = el.dataset.value || 0; // Get the value from the data-value attribute or default to 0
      counterUp(el, {
        duration: 1600,
        delay: 10,
        endVal: value, // Set the end value for the counter animation
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const elements = document.querySelectorAll(".counter");
elements.forEach((el) => {
  IO.observe(el);
});

// Progress bar
const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach((progressBar) => {
  const value = progressBar.dataset.value || 0;
  const htmlBar = progressBar.querySelector(".bar");

  const animateProgressBar = () => {
    htmlBar.style.width = value + "%";
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBar();
        observer.unobserve(progressBar);
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 1 });

  IO.observe(progressBar);
});
