// import { HexPlanet } from "../HexPlanet";
// import { MediumCourse } from "../MediumCourse";
// import { ProjectInput } from "../ProjectInput"
// import { Runner } from "../Runner";

import icon1 from '../../assets/projects//icon1.svg'
import icon2 from '../../assets/projects//icon2.svg'
import icon3 from '../../assets/projects//icon3.svg'
import icon4 from '../../assets/projects//icon4.svg'

import bg1 from '../../assets/projects/bg1.png'
import bg2 from '../../assets/projects/bg2.png'
import bg3 from '../../assets/projects/bg3.png'
import bg4 from '../../assets/projects/bg4.png'
// import comming_soon from '../../assets/projects/coming_soon.png'
import comming_soon from '../../assets/projects/geek.png'


import ProjectItem from "./ProjectItem";
// import { useState } from "react";

import { twMerge as cn } from "tailwind-merge";
// colors
// FF8600
// FF4DFF
// FFCF1B
// 00FFD3

// titles
// Hex Planet
// Runner2060
// GamePad X
// GameBoy Y

const fakeDB = [
  {
    index: 0,
    title: "Hex Planet",
    bg_img: bg1,
    icon_img: icon1,
    color: "#FF8600",
    statusProp: 'connected'
  },
  {
    index: 1,
    title: "Runner2060",
    bg_img: bg2,
    icon_img: icon2,
    color: "#FF4DFF",
    statusProp: 'connected'
  },
  {
    index: 2,
    title: "GamePad X",
    bg_img: bg3,
    icon_img: icon3,
    color: "#FFCF1B",
    statusProp: 'connected'
  },
  {
    index: 3,
    title: "GameBoy Y",
    bg_img: bg4,
    icon_img: icon4,
    color: "#00FFD3",
    statusProp: 'connected'
  },
  {
    index: 4,
    bg_img: comming_soon,
    statusProp: 'comming soon'
  }

]

const Projects = ({isFullMode, isTgLogged}:{isFullMode:boolean, isTgLogged:boolean
}) => {
  return (
    <ul className={cn("gap-2 2xl:gap-4 h-full overflow-x-scroll lg:overflow-hidden  py-2 ", isFullMode ? "grid grid-cols-6 " : "flex " )}>
      {fakeDB.map((project, index) => (
        <li className={cn("flex-1 ", (index === 0 || index === 1) ?  "col-span-3" : 'col-span-2', isFullMode? "min-h-[150px]" : "lg:w-[calc(20%-1.5*4rem)]")} key={project.index}>
          <ProjectItem {...project} isTgLogged={index < 2 ? isTgLogged : false} isFullMode={isFullMode} />
        </li>
      ))}

    </ul>
  );
}
export default Projects