import React from "react";
import { Button } from "@/components/ui";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4">
      <div className="wrapper bg-primary py-[72px] mb-[84px] rounded-xl">
        <div className="w-full max-w-[716px] mx-auto flex flex-col items-center">
          <h2 className="font-manrope text-white text-4xl sm:text-5xl text-center sm:leading-[72px] mb-[48px]">
            An enterprise template to ramp up your company website
          </h2>

          <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center px-6 sm:px-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
