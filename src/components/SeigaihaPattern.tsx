import patternImage from "@/assets/pattern.png";

const SeigaihaPattern = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-32 md:w-48 overflow-hidden pointer-events-none">
      <img 
        src={patternImage} 
        alt="Seigaiha pattern" 
        className="h-full w-full object-cover object-right opacity-90"
      />
    </div>
  );
};

export default SeigaihaPattern;
