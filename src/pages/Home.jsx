import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex h-screen min-h-screen flex-col items-center justify-center gap-16 bg-home-1 bg-cover  bg-center bg-no-repeat py-12 lg:bg-fixed">
        <div className="pt-8 ">
          <img
            className="max-w-[20rem] drop-shadow-2xl"
            src="/logos/full-logo.png"
            alt="machos nachos logo with 2 peppers"
          />
        </div>

        <button className="rounded-lg bg-yellow px-12 py-6 text-xl font-bold tracking-widest text-white transition-all duration-300 hover:bg-green">
          <NavLink to="menu">ORDER NOW</NavLink>
        </button>
      </div>

      <div
        className="flex min-h-screen flex-col items-center justify-center bg-home-11 bg-cover bg-right bg-no-repeat px-4 py-24 md:bg-home-4 lg:bg-fixed 
      "
      >
        <h2 className=" py-12 text-center text-6xl font-bold text-white drop-shadow-xl">
          Our Culinary Heritage
        </h2>
        <div className="self-start rounded-lg bg-white p-10 text-center text-xl tracking-wide opacity-90 md:w-1/2">
          <p className="max-w-[66ch] py-8 tracking-wide">
            At Machos Nachos, we take pride in our deep-rooted culinary
            heritage. Our chefs draw inspiration from the diverse regions of
            Mexico, crafting each dish with passion and authenticity.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center bg-home-9 bg-cover  bg-right bg-no-repeat px-4 py-24   md:items-center md:justify-between md:px-4 lg:bg-fixed
      "
      >
        {/* <h2 className=" py-12 text-center text-6xl font-bold text-white drop-shadow-xl">
          Our Culinary Heritage
        </h2> */}
        <div className="flex flex-col items-center justify-center gap-[4rem] bg-cover  bg-right bg-no-repeat px-4  md:flex-row md:items-center md:justify-between md:px-4 ">
          <div className="  self-center rounded-lg bg-red p-5 text-center text-4xl font-bold leading-[1.25] tracking-wide text-white opacity-90 md:w-1/2 md:flex-row md:self-center">
            <p className="max-w-[66ch]  tracking-wide ">
              Try Our Best &lsquo;Machos&rsquo; Taco
            </p>
          </div>
          <div className="relative  my-[4rem] max-h-min">
            <img src="/taco.webp" alt="" />
            <span className="price-clip absolute right-[-1rem] top-[-1rem] bg-green p-[2rem] text-right text-xl font-bold text-yellow shadow-md md:right-[-3rem] md:top-[1rem] md:text-4xl ">
              $9.99
            </span>
          </div>
        </div>
        <button className="rounded-lg bg-yellow px-12 py-6 text-xl font-bold tracking-widest text-white transition-all duration-300 hover:bg-green">
          <NavLink to="menu">ORDER NOW</NavLink>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center bg-home-10 bg-cover bg-no-repeat px-4 py-24 md:bg-home-7 lg:bg-fixed">
        <h2 className="py-12 text-center text-6xl font-bold text-white drop-shadow-xl">
          Experience the Fiesta
        </h2>
        <div className="self-end rounded-lg bg-red p-10 text-center text-xl text-white opacity-90 md:w-1/2">
          <p className=" max-w-[66ch] py-8 tracking-wide">
            At Machos Nachos, dining is not just a meal - it`s an experience.
            Join us for an unforgettable fiesta filled with lively mariachi
            music, hand-shaken margaritas, and the joyful chatter of friends and
            family.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
