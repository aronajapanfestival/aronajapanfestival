import patternImage from "@/assets/pattern.png";

const SeigaihaPattern = () => {
  return (
    <div 
      className="absolute top-0 right-0 h-full pointer-events-none opacity-90 w-8 md:w-[54px]"
      style={{
        backgroundImage: `url(${patternImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
        backgroundPosition: 'right top'
      }}
    />
  );
};

export default SeigaihaPattern;
