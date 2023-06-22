"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import demo from "../assets/testimonial5.png";
export default function Testimonial() {
  return (
    <div id="testimonial" className="bg-[#fff8f3] my-5 pb-12 font-sans">
      <div className="align-middle items-center m-auto">
        <div className=" text-center p-9 font-sans ">
          <div>Testimonial</div>
          <div className="font-serif text-3xl sm:text-4xl py-5  font-bold">
            Our Success Stories
          </div>
        </div>
        <div className="flex max-w-3xl text-center items-center m-auto">
          <button>
            <ArrowBackIosIcon />
          </button>
          <div className="bg-white py-14 rounded-xl shadow-md shadow-btnColor p-6">
            <div className="font-sans ">
              {" "}
              Good Grades has helped me not only understand the subject but
              master the answering techniques required to obtain a istinction.
              the material is not only well compiled and organies but helps
              immensely with revision.{" "}
            </div>
            <div className="font-serif pt-3 text-xl font-bold">Jhon Dev</div>
            <div className="font-sans text-sm">UI/UX Designer</div>
          </div>
          <button>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <Image
          className="m-auto rounded-xl shadow-xl shadow-btnColor bottom-10 relative"
          src={demo}
          width={100}
          height={100}
          alt="Not Found"
        />
      </div>
    </div>
  );
}
