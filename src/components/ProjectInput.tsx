interface ProjectInput {
  name: string;
  code?: string;

  logo: string;
  image: string;
  
  color: string;
}

export const ProjectInput = ({ code, name, logo, image, color }: ProjectInput) => {
  return (
    <div className="relative flex p-4 bg-[#1B1E20] rounded-lg overflow-hidden">
      <div className={`flex flex-col gap-4 ${code ? 'gap-8' : ''}`}>
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={48} height={48} />
          <p className="text-white text-2xl font-bold">{name}</p>
        </div>
        <div>
          <label className="block text-white text-xs font-medium">
            { code ? `Code: ${code}` : 'Code' }
          </label>
          {
            code ?
            // TODO: Text shadow
            <p className="text-[#C3FF48] font-bold text-base text-shadow-md text-shadow-[#ABFF00]">CONNECTED</p> :
            <div className="flex">
              <input className="mt-1 p-2 bg-[#282B2C] text-white" placeholder="Enter a code" type="text" />
              <button className="py-3 px-1 bg-[#1B1E20]">
                <img src="/enter-arrow.svg" alt="" width={16} height={12} />
              </button>
            </div>
          }
        </div>
      </div>
      <div className="absolute w-[25rem] h-[25rem] top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
        <div className={`filter blur-2xl absolute z-[-1] rounded-full bg-[${color}] opacity-25 w-full h-full`} />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
        <img src="/planet.png" alt="" width={300} height={300} />
      </div>
    </div>
  );
}