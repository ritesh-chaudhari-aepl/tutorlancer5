import React from "react";
import bgbanner from "../assets/bgbanner.png";
import bannerrightimage from "../assets/Online.png";
import Image from "next/image";

const HeroSection = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${hero})`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "10%",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  // };
  const banner = {
    // backgroundImage: "url(" + `${bgbanner}` + ")",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
  };
  return (
    <div className="pt-28 md:pt-24 sm:px-6 lg:py-16 lg:px-8">
      <section className="block relative bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0">
          <Image src={bgbanner} alt="background image" style={banner} />
        </div>
        {/* <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25  sm:bg-gradient-to-l" /> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-2 sm:px-6 md:flex h-auto lg:items-center justify-between lg:px-8">
          <div className="md:w-1/2 text-center sm:text-left">
            <h1 class="text-3xl font-QuickSand font-extrabold lg:text-5xl">
              The Best Way to take Help
              <strong class="mt-3 block font-QuickSand font-extrabold text-pink-darkPink">
                In your Academic
              </strong>
            </h1>

            <p class="mt-5 font-OpenSans max-w-lg sm:text-l/relaxed">
              Hire us for quality solutions to all your coursework at affordable
              prices.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#contact"
                class="block w-full rounded-full bg-pink-darkPink lg:px-12 sm:px-10 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#sessions"
                class="block w-full rounded-full bg-white lg:px-12 sm:px-10 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex md:w-1/2 justify-end sm:text-right">
            <Image
              className="md:w-[80%] xl:w-full w-full"
              alt="Party"
              src={bannerrightimage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
