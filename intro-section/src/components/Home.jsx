import heroMobile from "../assets/images/image-hero-mobile.png";
import heroDesk from "../assets/images/image-hero-desktop.png";
import databix from "../assets/images/client-databiz.svg";
import audioPhile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
function Home() {
  return (
    <div className="hero h-screen bg-almostWhite">
    <div className="hero-container h-full lg:flex flex-row-reverse md:container mx-auto">
      <img src={heroMobile} alt="hero-image " className="w-full block lg:hidden" />
      <img src={heroDesk} alt="hero-image " className="hero-image-desktop lg:block hidden" />

      <div className="hero-container lg:flex flex-col justify-center">
        <div className="hero-content flex flex-col gap-6 items-center justify-centerpt-14 md:items-start pt-14">
          <h1 className="font-bold lg:text-8xl md:text-5xl text-4xl">Make <br className="hidden lg:block"/> Remote Work</h1>
          <p className="text-center  w-11/12 font-medium text-mediumGray md:text-start lg:text-xl ">Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.Make Remote Work</p>
          <button className="bg-black hover:bg-transparent hover:text-black border border-slate-900 font-bold text-almostWhite px-6 py-4 rounded-xl ">Learn more</button>
        </div>
        <div className="hero-partner flex  items-center  justify-around lg:pt-20 pt-16">
          <img  src={databix} alt="databix" />
          <img  src={audioPhile} alt="audiophile" />
          <img  src={meet} alt="meet" />
          <img  src={maker} alt="maker" />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Home;
