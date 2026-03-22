import { TbChefHatFilled } from "react-icons/tb";
import { GiDoughRoller, GiCookingPot } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";

export default function IconMap() {
  const icons = [TbChefHatFilled, GiDoughRoller, GiCookingPot, FaBowlFood];
  
  const rows = 5;
  const cols = 8;

  return (
    <div className="absolute w-[110%] -left-[5%] h-full overflow-hidden pointer-events-none flex flex-col justify-around">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div 
          key={rowIndex} 
          className="flex justify-around items-center w-full"
          style={{
            transform: rowIndex % 2 === 0 ? 'translateX(25px)' : 'translateX(-25px)',
          }}
        >
          {Array.from({ length: cols }).map((_, colIndex) => {
            const Icon = icons[(rowIndex + colIndex) % icons.length];
            return (
              <div
                key={colIndex}
                className="opacity-40 text-gray-600"
                style={{
                  transform: 'rotate(-15deg)' 
                }}
              >
                <Icon size={64} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};