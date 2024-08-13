import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {


  return (
    <aside className="fixed hidden lg:inline-flex flex-col h-full p-4 pt-[120px] border-r border-[#282B2C] z-100 ">
      <div className="flex-none overflow-y-auto">
        <NavbarItems />
      </div>
    </aside>
  );
}


export const NavbarItems = () => {
  const location = useLocation();

  const nav_items = [
    // {
    //   index: 0,
    //   icon: "/nav-icons/search.svg",
    //   title: "Home",
    //   link: "/search",
    //   isActive: false,
    // },
    {
      index: 0,
      icon: "/nav-icons/home.svg",
      title: "Home",
      link: "/",
      isActive: location.pathname === "/",
    },
    // {
    //   index: 0,
    //   icon: "/nav-icons/friends.svg",
    //   title: "Home",
    //   link: "/friends",
    //   isActive: false,
    // },
    {
      index: 0,
      icon: "/nav-icons/crown.svg",
      title: "Home",
      link: "/rank",
      isActive: location.pathname === "/rank",
    },
  ]


  return (
    <ul className="flex flex-row lg:flex-col gap-4 rounded-lg p-0 lg:p-3 bg-[#1B1E20]">
      {
        nav_items.map((item, index) => (
          <li key={index} className="relative">
            <Link to={item.link} className={"z-[10] relative block rounded-lg  p-3 hover:bg-gray-700  " + (item.isActive ? ' bg-[#00FFD3] ' : ' bg-primaryZinc opacity-20 ')}>
              <div className="w-full h-full rounded-lg ">
                <img src={item.icon} alt={item.title} width={16} height={16} />
              </div>
            </Link>
            {item.isActive && <div className="w-full h-full absolute top-1 left-1 rounded-lg bg-[#FFF]" />}
          </li>
        ))
      }
    </ul>
  )
}