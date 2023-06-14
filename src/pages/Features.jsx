"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Image from "next/image";
import feature from "../assets/feature5.png";

const Features = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-screen-x  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Features</h2>

          <p className="mt-4 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-12 items-center grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="flex flex-col gap-4">
            <a className="block flex flex-col items-end rounded-xl border text-right border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="block flex flex-col items-end rounded-xl border text-right border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="block flex flex-col items-end rounded-xl border text-right border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
          <div>
            <Image src={feature}></Image>
          </div>
          <div className="flex flex-col gap-4">
            <a className="block rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="block rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="block rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
