import Image from "next/image";

export const Card = ({ partner, isSelected, onClick }) => {
  return (
    <div className={`w-[300px] transition-transform transform bg-black mx-5 ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className={`w-80 h-fit py-4 flex-col justify-items-center gap-3 pr-20 flex justify-center items-center ${isSelected ? 'selected-container' : ''}`}>
        <div className="w-full h-[200px] relative flex justify-center items-center">
          <Image
            src={partner.logo}
            alt={`Logo do ${partner.name}`}
            width={isSelected ? 250 : 200}
            height={isSelected ? 250 : 200}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
