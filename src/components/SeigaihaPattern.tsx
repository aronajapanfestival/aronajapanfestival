import patternImage from "@/assets/pattern.png";

const SeigaihaPattern = () => {
  return (
    <div 
      className="absolute top-0 right-0 h-full pointer-events-none opacity-90"
      style={{
        width: '54px',
        backgroundImage: `url(${patternImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '54px auto',
        backgroundPosition: 'right top'
      }}
    />
  );
};

export default SeigaihaPattern;
