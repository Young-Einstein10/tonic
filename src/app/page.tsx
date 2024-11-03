import { Fragment } from "react";
import HeroSection from "./_components/hero";
import TestimonialSection from "./_components/testimonials";
import ValueProposition from "./_components/valueProposition";
import ConnectSection from "./_components/connect";
import ServicesSection from "./_components/services";
import ContactSection from "./_components/contact";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <ServicesSection />
      <ConnectSection />
      <TestimonialSection />
      <ValueProposition />
      <ContactSection />
    </Fragment>
  );
}
