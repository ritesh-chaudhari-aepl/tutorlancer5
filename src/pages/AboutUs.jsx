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
                Get all your Assignments / Projects covered by our highly
                experienced teams of Writers
              </h2>

              <p className="mt-4 text-gray-600">
                We know that students coming to our essay writing service expect
                us to provide them with original content. That's exactly what we
                do. We write a paper from scratch while following your
                instructions.We assign expert tutors to ensure students get
                detailed, step-by-step solutions for their assignments.Students
                across the UK and other countries know who and how professional
                we are.
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
