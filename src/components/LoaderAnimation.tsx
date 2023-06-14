import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const LoaderAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const anim = anime.timeline({
      loop: true,
      direction: "alternate",
    });

    anim
    .add({
      targets: '#hexagon path',
      delay: 300,
      duration: 1500,
      easing: 'easeInOutQuart',
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: '#hexagon #K',
      duration: 700,
      easing: 'easeInOutQuart',
      opacity: 1,
    })
    .add({
      targets: '#hexagon',
      delay: 500,
      duration: 300,
      easing: 'easeInOutQuart',
      opacity: 0,
      scale: 0.1,
    })
    .add({
      targets: '.animation-container',
      duration: 200,
      easing: 'easeInOutQuart',
      opacity: 0,
      zIndex: -1,
    });
  }, []);

  return (
    <div className="w-screen h-screen grid place-items-center bg-slate-900 z-50 sticky top-0 left-0">
      <div
        style={{ opacity: isMounted ? 1 : 0 }}
        className="animation-container"
      >
        <svg
          id="hexagon"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g
              id="K"
              transform="translate(36, 33)"
              fill="#5EEAD4"
              style={{ opacity: 0 }}
              fontFamily="Inter, sans-serif"
              fontSize="50"
              fontWeight="700"
              letterSpacing="4.16666603"
            >
              <text>
                <tspan x="0.141666985" y="33">
                  k
                </tspan>
              </text>
            </g>
            <path
              stroke="#5EEAD4"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LoaderAnimation;
