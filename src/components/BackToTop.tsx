import { useEffect, useState } from "react";
import Style from "./BackToTop.module.css";

export default function BackToTop() {
  const [reached, setReached] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setReached(window.scrollY >= window.innerHeight);
    };

    // run once on mount (so refresh mid-scroll works)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!reached) return null;

  return (
    <section className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={Style.button}
        aria-label="Back to top"
      >
        <svg
          className={Style.svgIcon}
          viewBox="0 0 384 512"
          aria-hidden="true"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </section>
  );
}
