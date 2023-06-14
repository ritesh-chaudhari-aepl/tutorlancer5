"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const Pricing = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <>
      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-x  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Pricing</h2>

            <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 ">
            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-4 flex flex-col">
                <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                  <PeopleOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-3">
                  <li className="font-bold font-xl font-QuickSand text-pink-darkPink">
                    $10 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>1 User</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-full bg-pink-darkPink sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-4 flex flex-col">
                <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                  <PeopleOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-3">
                  <li className="font-bold font-xl font-QuickSand text-pink-darkPink">
                    $10 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>1 User</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-full bg-pink-darkPink sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-4 flex flex-col">
                <div className="rounded-full border-2 bg-white w-fit text-pink-darkPink border-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                  <PeopleOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-3">
                  <li className="font-bold font-xl font-QuickSand text-pink-darkPink">
                    $10 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>1 User</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-full bg-pink-darkPink sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;