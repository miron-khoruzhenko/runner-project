export const MediumCourse = () => {
  return (
    <div className="relative flex p-4 bg-[#1B1E20] rounded-lg overflow-hidden w-full h-full">
      <div className="flex flex-col gap-[30px] w-full h-full blur-[2px]">
        <div className="flex items-center gap-3">
          <img src="/medium-course.png" alt="" width={48} height={48} />
          <p className="text-white text-2xl font-bold">My DID</p>
        </div>
        <div className="flex items-center justify-center w-full h-12 relative">
          <img src="/medium-course-button.svg" alt="" />
          <p className="text-[#FF4DFF] font-bold text-base">[ CLAIM ]</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="relative z-[5]">
            <p className="font-bold text-xl text-[#FFF83C]">[ COMING SOON ]</p>
            <div className="absolute inset-0 bg-[#FFF83C] rounded-lg blur opacity-25" />
          </div>
        </div>
        <div className="h-[2px] absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3/5 bg-[#FFF600]" />
        <img className="w-full h-full" src="/fingerprints.png" alt="" />
        <div className="h-[2px] absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-3/5 bg-[#FFF600]" />
      </div>
    </div>
  );
}