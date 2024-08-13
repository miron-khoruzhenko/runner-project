import { Link } from "react-router-dom";
import banner from '@/assets/common/banner.png'

export const Banners = () => {
  const banners = [
    {
      image: "/claim_banner.png",
      redirect: "https://omnisea.org/DZGwkWenNIJQvJ7efSlr",
    }
  ];
  
  const renderImages = () => {
    switch (banners.length) {
      case 1:
        return (
          <Link className="w-full" to={banners[0].redirect || '/'} target="_blank" rel="noopener noreferrer">
            <img alt="" className="w-full h-full object-contain hidden lg:block" src={banners[0].image}  />
            <img alt="" className="w-full h-min object-contain block lg:hidden" src={banner}/>
          </Link>
        );
      case 2:
        return banners.map((i, index) => {
          return (
            <Link className="w-1/2" key={index} to={i.redirect || '/'} target="_blank" rel="noopener noreferrer">
              <img alt="" className="w-full h-full object-cover" src={i.image} width={800} height={600} />
            </Link>
          );
        })

      case 3:
        return (
          <>
            <Link className="w-1/2" to={banners[0].redirect || '/'} target="_blank" rel="noopener noreferrer">
              <img alt="" className="w-full h-full object-cover" src={banners[0].image} width={800} height={600} />
            </Link>
            {
              banners.slice(1).map((i, index) => {
                return (
                  <Link className="w-1/4" key={index} to={i.redirect || '/'} target="_blank" rel="noopener noreferrer">
                    <img alt="" className="w-full h-full object-cover" src={i.image} width={800} height={600} />
                  </Link>
                );
              })  
            }
          </>
        );
      case 4:
        return (
          <>
            <Link className="w-1/2" to={banners[0].redirect || '/'} target="_blank" rel="noopener noreferrer">
              <img alt="" className="w-full h-full object-cover" src={banners[0].image} width={800} height={600} />
            </Link>
            {
              banners.slice(1).map((i, index) => {
                return (
                  <Link className="w-1/6" key={index} to={i.redirect || '/'} target="_blank" rel="noopener noreferrer">
                    <img alt="" className="w-full h-full object-cover" src={i.image} width={800} height={600} />
                  </Link>
                );
              })  
            }
          </>
        );
      case 5:
        return (
          <>
            <Link className="w-1/2" to={banners[0].redirect || '/'} target="_blank" rel="noopener noreferrer">
              <img alt="" className="w-full h-full object-cover" src={banners[0].image} width={800} height={600} />
            </Link>
            {
              banners.slice(1).map((i, index) => {
                return (
                  <Link className="w-[12.5%]" key={index} to={i.redirect || '/'} target="_blank" rel="noopener noreferrer">
                    <img alt="" className="w-full h-full object-cover" src={i.image} width={800} height={600} />
                  </Link>
                );
              })  
            }  
          </>
        );
      default:
        return (<></>);
    }
  };
  
  return (
    <div className={`w-full  flex gap-6`}>
      {renderImages()}
    </div>
  )
}