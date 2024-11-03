import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { ArrowRightIcon } from "@/components/icons";
import Service1 from "~/public/img/Rectangle_1270.png";
import Service2 from "~/public/img/Rectangle_1270_1.png";
import Service3 from "~/public/img/Rectangle_1270_2.png";
import MotionBox from "@/components/motionBox";
import { FADE_UP_ANIMATION_VARIANTS } from "@/utils/animation";

const services = [
  {
    title: "Cool feature title",
    img: Service1,
  },
  {
    title: "Even cooler feature",
    img: Service2,
  },
  {
    title: "Cool feature title 1",
    img: Service3,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-primary pt-[84px] pb-[87px]">
      <MotionBox className="wrapper">
        <div className="text-center max-w-[842px] mx-auto mb-[72px]">
          <p className="text-[#F1F1F1]">Our services</p>
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-4xl sm:text-5xl text-white sm:leading-[72px] font-manrope"
          >
            Handshake infographic mass market crowdfunding iteration.
          </motion.h2>
        </div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex flex-col items-center sm:flex-row gap-16 sm:gap-[100px]"
        >
          {services.map((service) => (
            <div key={service.title} className="flex-1">
              <div className="relative mb-6">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="rounded-3xl"
                />
              </div>
              <h3 className="text-2xl text-white mb-7">{service.title}</h3>

              <div className="max-w-fit flex items-center gap-3 text-white border-b border-1 pb-1">
                <Link href="#" className="text-xl font-bold leading-9">
                  Explore feature
                </Link>
                <ArrowRightIcon />
              </div>
            </div>
          ))}
        </motion.div>
      </MotionBox>
    </section>
  );
};

export default ServicesSection;
