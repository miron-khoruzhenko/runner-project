interface ShadowProps {
  color: string;
  opacity: number;
  zIndex?: number;
}

export const Shadow = ({ color, opacity, zIndex = 0 }: ShadowProps) => {
  return <div
    className={`filter blur-2xl absolute z-[${zIndex}] rounded-full opacity-${opacity} w-full h-full`}
    style={{ backgroundColor: color }}
  />;
}