import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import HeroImg from "~/public/img/hero.png";
import Partners from "./partners";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="wrapper">
        <div className="flex flex-col sm:flex-row gap-16 sm:gap-8 items-center justify-between">
          <div className="max-w-[601px]">
            <h1 className="mb-4 text-[48px] leading-[72px] font-manrope">
              Save time by building fast with Boldo Template
            </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>

            <div className="flex gap-6 mt-[49.5px]">
              <Button variant="primary" size="lg" className="w-[247px] text-xl">
                Buy template
              </Button>
              <Button variant="outline" size="lg" className="w-[187px] text-xl">
                Explore
              </Button>
            </div>
          </div>

          <div className="max-w-[494px]">
            <Image src={HeroImg} alt="Hero" priority />
          </div>
        </div>

        <Partners />
      </div>
    </section>
  );
};

export default HeroSection;
