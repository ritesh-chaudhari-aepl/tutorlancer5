import React from "react";
import Image from "next/image";
import about from "../assets/about5.png";

const AboutUs = () => {
  return (
    <div>
      <section id="aboutus">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last lg:h-full">
              <Image
                alt="Party"
                src={about}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-16 text-center md:text-left">
              <h6 className="uppercase font-bold">about us</h6>
              <h2 className="text-3xl capitalize font-bold sm:text-4xl">
                Why should you choose Us
              </h2>

              <p className="mt-4 text-gray-600">
                Assignment help services by Good Grades are designed for the
                students studying across the world. It includes assistance to
                students with all sorts of issues faced by them in doing their
                assignment successfully. As a part of completing a subject or a
                course of study, it is a common practice within universities
                across the world to entrust students with different types of
                assignment to prove their learning. Direct interaction with
                professors is sometimes uncomfortable for students, and this is
                why GOOD GRADES has come up with providing immediate assistance
                to students in completing their assignment.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-pink-darkPink px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
