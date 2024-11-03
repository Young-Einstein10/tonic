"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "@/components/ui";
import * as motion from "framer-motion/client";
import Ellipse1 from "~/public/img/Ellipse_4.png";
import Ellipse2 from "~/public/img/Ellipse_4_1.png";
import Ellipse3 from "~/public/img/Ellipse_4_2.png";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

// Import Swiper styles
import "swiper/css";
import MotionBox from "@/components/motionBox";
import { FADE_UP_ANIMATION_VARIANTS } from "@/utils/animation";

interface TestimonialProps {
  review: string;
  name: string;
  designation: string;
  img: StaticImageData;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="rounded-xl bg-white p-10 tetx-black flex flex-col flex-1 gap-10">
    <p className="text-black text-2xl leading-9">{testimonial.review}</p>
    <div className="flex items-center gap-4">
      <div>
        <Image src={testimonial.img} alt={testimonial.name} />
      </div>
      <div className="text-primary">
        <p className="font-bold mb-1.5">{testimonial.name}</p>
        <span className="text-sm">{testimonial.designation}</span>
      </div>
    </div>
  </div>
);

interface NavigationProps {
  handlePrevious: () => void;
  handleNext: () => void;
}

const Navigation = ({ handlePrevious, handleNext }: NavigationProps) => {
  return (
    <div className="flex gap-7 absolute right-0 -top-12 sm:-top-32">
      <Button
        onClick={handlePrevious}
        className="w-[72px] h-[72px] text-primary rounded-full bg-white flex justify-center items-center"
      >
        <ArrowLeftIcon className="w-[36px] h-[39px]" />
      </Button>
      <Button
        onClick={handleNext}
        className="w-[72px] h-[72px] text-primary rounded-full bg-white flex justify-center items-center"
      >
        <ArrowRightIcon className="w-[36px] h-[39px]" />
      </Button>
    </div>
  );
};

const TestimonialSection = () => {
  const swiperRef = React.useRef<SwiperRef>(null);

  const testimonials = [
    {
      review:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      name: "Albus Dumbledore",
      designation: "Manager @ Howarts",
      img: Ellipse1,
    },
    {
      review:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      name: "Severus Snape",
      designation: "Manager @ Slytherin",
      img: Ellipse2,
    },
    {
      review:
        "Release facebook responsive web design business model canvas seed money monetization.",
      name: "Harry Potter",
      designation: "Team Leader @ Gryffindor",
      img: Ellipse3,
    },
    {
      review:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      name: "Albus Dumbledore 1",
      designation: "Manager @ Howarts",
      img: Ellipse1,
    },
    {
      review:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      name: "Severus Snape 1",
      designation: "Manager @ Slytherin",
      img: Ellipse2,
    },
    {
      review:
        "Release facebook responsive web design business model canvas seed money monetization.",
      name: "Harry Potter 1",
      designation: "Team Leader @ Gryffindor",
      img: Ellipse3,
    },
  ];

  const handlePrevious = () => swiperRef?.current?.swiper.slidePrev();
  const handleNext = () => swiperRef?.current?.swiper.slideNext();

  return (
    <section
      id="testimonials"
      className="bg-primary text-white pt-[100px] pb-[95px]"
    >
      <MotionBox className="wrapper">
        <div className="max-w-[716px]">
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-4xl sm:text-5xl sm:leading-[72px] font-manrope mb-[72px]"
          >
            An enterprise template to ramp up your company website
          </motion.h2>
        </div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative pt-20 sm:pt-0"
        >
          <Navigation handlePrevious={handlePrevious} handleNext={handleNext} />
          <Swiper
            loop
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </MotionBox>
    </section>
  );
};

export default TestimonialSection;
