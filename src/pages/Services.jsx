"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

const Services = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <div>
      <section id="services" className="bg-white text-black">
        <div className="mx-auto max-w-screen-x  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>

            <p className="mt-4 text-black">
              Let us take care of your homework needs in the fastest and most
              efficient way. This way you can spend your study time in actually
              understanding the concepts and building a strong foundation.
              Listed below are some key benefits of getting homework guidance
              from our experts:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl uppercase font-bold text-black">
                Apps for Mobile & Web
              </h2>

              <p className="mt-1 text-sm text-black">
                Our tutors will make very user-friendly and efficient
                apps,exactly matching your needs. Boost your business now!
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <AccessTimeOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl uppercase font-bold text-black">
                24/7 Support
              </h2>

              <p className="mt-1 text-sm text-black">
                Good Grades is focused on ensuring to meet the needs of the
                students around the globe for their assignments.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <ImportantDevicesOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl uppercase font-bold text-black">
                live sessions
              </h2>

              <p className="mt-1 text-sm text-black">
                We provide the best tutors for you to interact with in real time
                to get instant solutions for your problems. Pickup your phone
                now !
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <ScienceOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                Lab work
              </h2>

              <p className="mt-1 text-sm text-black">
                PSpice, Orcad, AutoCAD,Solidworks, and many more simulation
                softwares, our Lab tutors can handle them all.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <DataUsageOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                project help
              </h2>

              <p className="mt-1 text-sm text-black">
                Get the most professional project assistance from our PhD tutors
                who can guide and walk you through your project online.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <VideoCameraFrontOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                video calling support
              </h2>

              <p className="mt-1 text-sm text-black">
                Real-time tools and rich insights mean our support solution
                amplifies your team for an unbeatable experience.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <DriveFileRenameOutlineOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                writing help
              </h2>

              <p className="mt-1 text-sm text-black">
                Our Native essay tutors help you meet university standards in
                terms of writing and structuring of academic essays.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                <ContentPasteSearchOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                homework help
              </h2>

              <p className="mt-1 text-sm text-black">
                Stuck with homework? PhD tutors have a distinctive mode of
                expression assisting students to solve assignments flawlessly.
              </p>
            </a>
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
