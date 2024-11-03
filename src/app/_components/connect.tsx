import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import {
  CircledCheckIcon,
  EyesIcon,
  FeatherIcon,
  SunIcon,
} from "@/components/icons";
import ConnectImg1 from "~/public/img/Group_216.png";
import ConnectImg2 from "~/public/img/Group_281.png";

const ConnectSection = () => {
  return (
    <section id="connect" className="bg-white pt-[120px] pb-[179px]">
      <div className="wrapper">
        <div className="flex flex-col sm:flex-row gap-10 justify-between items-center">
          <div className="max-w-[494px]">
            <Image src={ConnectImg1} alt="More income in June" />
          </div>
          <div className="max-w-[493px]">
            <h2 className="mb-10 text-4xl font-manrope leading-[56px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div className="flex flex-col gap-6 mb-14">
              <div className="flex items-center gap-[27px]">
                <CircledCheckIcon />
                <p className="text-xl">
                  We connect our customers with the best?
                </p>
              </div>
              <div className="flex items-center gap-[27px]">
                <CircledCheckIcon />
                <p className="text-xl">
                  Advisor success customer launch party.
                </p>
              </div>
              <div className="flex items-center gap-[27px]">
                <CircledCheckIcon />
                <p className="text-xl">Business-to-consumer long tail.</p>
              </div>
            </div>
            <Button variant="primary" size="lg" className="w-[210px] text-xl">
              Start now
            </Button>
          </div>
        </div>

        <div className="mt-[120px] flex flex-col sm:flex-row gap-10 justify-between items-center">
          <div className="max-w-[493px]">
            <h2 className="mb-10 text-4xl font-manrope leading-[56px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div className="flex flex-col gap-6 mb-14">
              <div className="bg-white rounded-[4px] text-black px-5 py-4 shadow-[0px_4px_32px_0px_#00000014] hover:bg-primary hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-[27px]">
                  <FeatherIcon />
                  <p className="text-xl">
                    We connect our customers with the best?
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[4px] text-black px-5 py-4 shadow-[0px_4px_32px_0px_#00000014] hover:bg-primary hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-[27px]">
                  <EyesIcon />
                  <p className="text-xl">
                    Advisor success customer launch party.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[4px] text-black px-5 py-4 shadow-[0px_4px_32px_0px_#00000014] hover:bg-primary hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-[27px]">
                  <SunIcon />
                  <p className="text-xl">Business-to-consumer long tail.</p>
                </div>
              </div>
            </div>
            <Button variant="primary" size="lg" className="w-[210px] text-xl">
              Start now
            </Button>
          </div>

          <div className="max-w-[494px]">
            <Image src={ConnectImg2} alt="Agile Development" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
