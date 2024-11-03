import React from "react";
import * as motion from "framer-motion/client";
import { Button } from "@/components/ui";
import SectionMask from "./sectionMask";
import MotionBox from "@/components/motionBox";
import {
  FADE_IN_ANIMATION_SETTINGS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/utils/animation";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4">
      <MotionBox className="wrapper bg-primary h-[400px] py-[72px] mb-[84px] rounded-xl relative">
        <div className="w-full max-w-[716px] mx-auto flex flex-col items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[2]">
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-manrope text-white text-4xl sm:text-5xl text-center sm:leading-[72px] mb-[48px]"
          >
            An enterprise template to ramp up your company website
          </motion.h2>

          <motion.div
            variants={FADE_IN_ANIMATION_SETTINGS}
            className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center px-6 sm:px-0"
          >
            <form className="w-full max-w-[370px]">
              <input
                className="w-full h-[60px] bg-white rounded-full px-8 py-3 placeholder:text-black placeholder:text-xl placeholder:font-normal placeholder:leading-8"
                type="text"
                placeholder="Your email address"
              />
            </form>
            <Button
              variant="primary"
              size="lg"
              className="bg-secondary w-[210px] text-xl text-primary"
            >
              Start now
            </Button>
          </motion.div>
        </div>
        <SectionMask className="hidden sm:block absolute top-0 right-0 text-[#1C3D5B] z-[1] rounded-tr-xl" />
      </MotionBox>
    </section>
  );
};

export default ContactSection;
