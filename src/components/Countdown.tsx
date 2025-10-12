import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-11-15T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-xl mx-auto">
      {[
        { value: timeLeft.days, label: "Giorni" },
        { value: timeLeft.hours, label: "Ore" },
        { value: timeLeft.minutes, label: "Minuti" },
        { value: timeLeft.seconds, label: "Secondi" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-card border-2 border-primary rounded p-2 md:p-3 mb-2">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs font-medium tracking-wide uppercase text-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
