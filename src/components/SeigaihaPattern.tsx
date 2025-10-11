const SeigaihaPattern = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-32 md:w-48 overflow-hidden pointer-events-none">
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <pattern
            id="seigaiha"
            x="0"
            y="0"
            width="100"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <g stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" opacity="0.15">
              <path d="M 0,50 Q 12.5,37.5 25,50" />
              <path d="M 0,50 Q 25,25 50,50" />
              <path d="M 0,50 Q 37.5,12.5 75,50" />
              <path d="M 25,50 Q 37.5,37.5 50,50" />
              <path d="M 25,50 Q 50,25 75,50" />
              <path d="M 50,50 Q 62.5,37.5 75,50" />
              <path d="M 50,50 Q 75,25 100,50" />
              <path d="M 75,50 Q 87.5,37.5 100,50" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>
    </div>
  );
};

export default SeigaihaPattern;
