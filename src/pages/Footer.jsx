import Image from "next/image";
import logo from "../assets/logo3.png";
// import terms from "./addeMeInApp/addeMeInApp/termandcond/page";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-pink-light text-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="flex sm:items-center sm:text-center md:items-start md:text-left flex-col gap lg:flex-row lg:gap-28">
          <div className="flex flex-col basis-1/2 ">
            <div className="flex justify-center text-black sm:justify-start">
              {/* <span className="text-[25px] tracking-[10px] border border-white p-2">
                LOGO
              </span> */}
              <Image src={logo} className="w-24" alt="logo" />
            </div>
            <div className="flex flex-col mt-10 gap-2 leading-[30px] ">
              <p>
                Good Grades is an online platform that connects online tutors
                with students across the globe who seeks academic help.
              </p>
              {/* <span className="font-inter">
                <strong>Email</strong>: support@thegoodgrades.com
              </span> */}
              <span className="font-inter">
                <strong>Phone</strong>:{" "}
                <a href="tel:917761814102">+91 77618-14102</a>
              </span>
              {/* <span className="font-inter capitalize text-base">
                <strong>Address</strong>: c/o -s.k.mishra, c.m.r.i <br />
                gate, bartand, dhanbad, jharkhand,
                <br /> india (826001){" "}
              </span> */}
            </div>
          </div>

          <div className="flex basis-1/4 flex-col mt-10 lg:mt-0 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-black">Services</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-black transition hover:text-black/75"
                      href="/"
                    >
                      Online Tutoring
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-black/75"
                      href="/"
                    >
                      Homework Help
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-black/75"
                      href="/"
                    >
                      Live Session
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-black/75"
                      href="/"
                    >
                      Project Help
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-black/75"
                      href="/"
                    >
                      Lab Work
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-black/75"
                      href="/"
                    >
                      Writing Help
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              {/* mobile image */}
              {/* <Image
                src={phone}
                alt="phone"
                className="absolute lg:left-72 hidden md:block -top-72 h-96 lg:h-[30rem]"
              /> */}
            </div>
          </div>

          <div className="flex basis-1/4 xl:self-end flex-col mt-10 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
            <div className="text-center sm:text-left">
              <span className="font-inter capitalize text-base">
                <strong>Address</strong>: c/o -s.k.mishra, c.m.r.i <br />
                gate, bartand, dhanbad, jharkhand,
                <br /> india (826001){" "}
              </span>
            </div>

            <div>
              {/* mobile image */}
              {/* <Image
                src={phone}
                alt="phone"
                className="absolute lg:left-72 hidden md:block -top-72 h-96 lg:h-[30rem]"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full border-t border-white pt-6 pb-12">
        <div className=" mx-auto max-w-screen-xl px-4 text-center sm:flex sm:justify-between sm:text-left">
          <div>
            <a href="/termandcond">Terms & conditions</a> |{" "}
            <a href="/privacy">Privacy Policy</a> |{" "}
            <a href="/refund">Refunds</a>
          </div>

          {/* <div className="flex flex-row">
            <div className="flex flex-row gap-3 ">
              <a
                className="inline-block text-black transition hover:text-black/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span className="mr-3">|</span>
            </div>

            <div className="flex flex-row gap-3 ">
              <a
                className="inline-block text-black transition hover:text-black/75"
                href="/"
              >
                Privacy Policy
              </a>

              <span className="mr-3">|</span>
            </div>
            <div className="flex sm:flex-row gap-3 ">
              <a
                className="inline-block text-black transition hover:text-black/75"
                href="/"
              >
                Refund
              </a>
            </div>
          </div> */}

          <p className="mt-4 text-[10px] sm:text-sm text-black sm:order-first sm:mt-0">
            © 2022 Good Grades.com. All rights reserved Abhay Education Pvt.
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
