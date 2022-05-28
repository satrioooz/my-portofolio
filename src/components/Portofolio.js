import React from "react";
import Hadits from "../images/project1.png";
import ECommerce from "../images/project-ecommerce.jpeg";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
// You can also use <link> for styles
// ..

const Portofolio = () => {
  return (
    <div className="w-full ">
      <h1 className="font-bold text-[2rem] text-center lg:text-[3rem] uppercase dark:text-white">
        Portofolio
      </h1>

      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col justify-center gap-3">
        <div className="lg:w-[40%] sm:w-[40%] overflow-hidden group relative bg-[#F4EDE4] shadow  p-2 rounded dark:bg-blackLight">
          <div className="w-full relative">
            <img src={Hadits} className="object-contain h-[27vh] w-full" />
            <div
              data-aos="fade-right"
              className="z-10  absolute px-8 flex items-center justify-between left-0 right-0 bottom-0 overflow-hidden w-full top-[120px] group-hover:w-full group-hover:bg-black group-hover:opacity-70"
            >
              <a
                href="https://hadits-muslim.vercel.app/"
                target="_blank"
                className="cursor-pointer opacity-0 group-hover:opacity-100 text-white text-[2rem] group-hover:flex group-hover:justify-center group-hover:items-center group-hover:rounded group-hover:bg-yellow-400 group-hover:w-12 group-hover:h-12"
              >
                <HiOutlineExternalLink />
              </a>
              <a
                href="https://github.com/bayustrio/hadits-muslim"
                target="_blank"
                className="opacity-0 group-hover:opacity-100 group-hover:text-opacity-100 text-white text-[2rem] group-hover:flex group-hover:justify-center group-hover:items-center group-hover:rounded group-hover:bg-yellow-400 group-hover:w-12 group-hover:h-12"
              >
                <BiCodeAlt />
              </a>
            </div>
          </div>
          <h1 className="cursor-pointer dark:text-white font-medium font-openSans">
            Hadits Muslim
          </h1>
        </div>

        <div className="lg:w-[40%] sm:w-[40%] overflow-hidden group relative bg-yellowNav  p-2 rounded dark:bg-blackLight">
          <div className="overflow-hidden relative w-full">
            <img src={ECommerce} className="object-cover h-[27vh] w-full" />
            <div
              data-aos="fade-right"
              className="z-10  absolute px-8 flex items-center justify-between left-0 right-0 bottom-0 overflow-hidden w-full top-[120px] group-hover:w-full group-hover:bg-black group-hover:opacity-70"
            >
              <a
                href="https://e-commerce-product-page-wheat.vercel.app/"
                target="_blank"
                className="cursor-pointer opacity-0 group-hover:opacity-100 text-white text-[2rem] group-hover:flex group-hover:justify-center group-hover:items-center group-hover:rounded group-hover:bg-yellow-400 group-hover:w-12 group-hover:h-12"
              >
                <HiOutlineExternalLink />
              </a>
              <a
                href="https://github.com/bayustrio/E-commerce-product-page"
                target="_blank"
                className="opacity-0 group-hover:opacity-100 group-hover:text-opacity-100 text-white text-[2rem] group-hover:flex group-hover:justify-center group-hover:items-center group-hover:rounded group-hover:bg-yellow-400 group-hover:w-12 group-hover:h-12"
              >
                <BiCodeAlt />
              </a>
            </div>
          </div>
          <h1 className="cursor-pointer dark:text-white font-medium font-openSans">
            E-commerce-product-page
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
