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
    // height: "100vh",
  };
  return (
    <div>
      <section className="relative bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0">
          <Image src={bgbanner} alt="background image" style={banner} />
        </div>
        {/* <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25  sm:bg-gradient-to-l" /> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:flex h-auto lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-QuickSand font-extrabold sm:text-5xl">
              Let us find your
              <strong class="mt-3 block font-QuickSand font-extrabold text-pink-darkPink">
                Forever Tutor.
              </strong>
            </h1>

            <p class="mt-5 font-OpenSans max-w-lg sm:text-l/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded-full bg-pink-darkPink px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="max-w-xl text-center sm:text-right">
            <div className="max-w-xl text-center sm:text-right">
              <Image
                alt="Party"
                src={bannerrightimage}
                // className="object-contain h-64 lg:h-96 md:h-80 md:w-full lg:w-full xl:h-full xl:mt-0 lg:mt-20 md:mt-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
