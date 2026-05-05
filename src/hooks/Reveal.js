import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom",
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const el = entry.target; // 👈 QUAN TRỌNG

          if (entry.isIntersecting) {
            el.classList.add("show");

            // 👉 reveal-once
            if (el.classList.contains("reveal-once")) {
              observer.unobserve(el);
            }
          } else {
            // 👉 reveal-repeat
            if (el.classList.contains("reveal-repeat")) {
              el.classList.remove("show");
            }
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useReveal;
