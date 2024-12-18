'use client';

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export function CarouselIndicators({ total, current, onChange }: CarouselIndicatorsProps) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            current === index 
              ? 'w-8 bg-primary' 
              : 'bg-primary/30 hover:bg-primary/50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}