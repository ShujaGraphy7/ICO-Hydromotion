import React from "react";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiLeafFill } from "react-icons/ri";
import ServicesDetails from "./ServicesDetails";
function Services() {
  return (
    <div className="grid my-5">
      <div className="my-auto ">
        <div>
          <p className="py-10 text-center text-3xl md:text-5xl font-bold text-sky-500 uppercase">
            <span className="text-black">HYDROMOTION</span>COIN
          </p>
          <div className="mx-40 my-10">
            <hr className="border-2 border-sky-500 " />
          </div>
        </div>
        <div className="text-sky-500 text-6xl my-10 grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-[10%]">
          <div className="mx-auto">
            <BsFillBuildingFill className="mx-auto my-5" />
            <div className="font-medium text-lg text-center">
              Wo Gruppen aktiv sind, sind auch Sie aktiv.{" "}
            </div>
          </div>
          <div className="mx-auto">
            <FaCoins className="mx-auto  my-5" />

            <div className="font-medium text-lg text-center">
              Ihre Investition wirkt sich direkt auf das Projekt aus.{" "}
            </div>
          </div>
          <div className="mx-auto">
            <HiUserGroup className="mx-auto my-5" />
            <div className="font-medium text-lg text-center">
              Sie sind ein Teil des Projekts.{" "}
            </div>
          </div>
          <div className="mx-auto">
            <RiLeafFill className="mx-auto  my-5" />
            <div className="font-medium text-lg text-center">
              Sie sichern eine grüne Zukunft.{" "}
            </div>
          </div>
        </div>
        <ServicesDetails />
      </div>
    </div>
  );
}

export default Services;
