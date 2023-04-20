import React from "react";
import Title from "../ui/Title";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary text-white py-12">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-24 ">
          <div className="md:flex-1 text-center">
            <Title addClass="text-[30px] mb-8">Contact Us</Title>
            <div className="flex flex-col items-center gap-y-4 mt-3">
              <div className="flex justify-start items-center gap-2">
                <MdLocationOn />
                <span className="inline-block ml-2">Location</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <BsTelephoneFill />
                <span className="inline-block ml-2">Call +01 1234567890</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <MdEmail />
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1 text-center">
            <Title addClass="text-[38px] mb-8">Feane</Title>
            <p>
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex items-center justify-center mt-8 gap-x-8">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:scale-110 transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:scale-110 transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:scale-110 transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:scale-110 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:scale-110 transition-all"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="md:flex-1 flex flex-col gap-4">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-4 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-16">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
